# Data-Driven Content DB

> **Status**: In Design
> **Author**: adamlea + game-designer, phaser-specialist
> **Last Updated**: 2026-06-26
> **Implements Pillar**: Infrastructure — enables all five pillars (esp. Pillar 2 *A World With Its Own Will* and Pillar 4 *Earned Discovery*)
> **Creative Director Review (CD-GDD-ALIGN)**: Skipped — lean review mode (not a phase gate). Run `/gate-check systems-design` for formal sign-off.
> **Design Review**: Pending — run `/design-review design/gdd/data-driven-content-db.md` in a fresh session.

## Overview

The Data-Driven Content DB is the single, authoritative store of all **authored, static game content** — the definitions of every building, resource, faction template, lore fragment, recipe, modifier, expedition site, and encounter the game knows about — held as external data (validated against typed schemas) rather than as values hardcoded in game logic. Every other system reads its content from this DB by stable string **ID** (e.g. a building references the resource IDs it costs; a lore fragment references the modifier ID it grants) instead of embedding the values directly. This serves two non-negotiable project mandates: the coding standard that *gameplay values must be data-driven, never hardcoded*, and the architecture goal of a *serializable, data-driven simulation from day one*. Critically, the DB owns only **static authored content that ships with the game and never changes during play** — it is deliberately separated from the mutable runtime world-state that Save/Load serializes. A saved game stores *which* building exists at a tile (by ID) and its current state; the DB stores *what that building type is*. This separation is what keeps saves small, keeps content patchable without breaking saves, and lets a solo developer author the breadth of content that *A World With Its Own Will* and *Earned Discovery* demand without writing new code for each new building or culture.

## Player Fantasy

**This system has no player fantasy of its own — it is pure infrastructure.** The player never opens, sees, or thinks about the Content DB. Its job is to be *invisible and reliable*. What the player feels is everything the DB makes possible:

- **"This world is deep and full of things"** — dozens of distinct buildings, several cultures with their own goods and dispositions, a growing body of lore. The DB is what lets that breadth exist and grow cheaply, serving **Pillar 2 (A World With Its Own Will)** and **Pillar 4 (Earned Discovery)**.
- **"The world keeps getting richer"** — new content can be added between updates without the player losing their save, because content is data keyed by ID, not code. This protects long-campaign **Investment** (a retention hook in the concept).

The design target for this system is therefore not an emotion but a **discipline**: if any gameplay value a designer might want to tune ends up hardcoded in logic instead of living in the DB, this system has failed at its one job. The fantasy it protects belongs to *other* systems — this one just guarantees they can deliver it.

*Note: per lean review mode, `creative-director` was not consulted for this framing. Re-confirm at `/gate-check` if formal sign-off is wanted — though for pure infrastructure the risk is minimal.*

## Detailed Design

### Core Rules

**CR-1 — Static content only.** The Content DB holds *only* authored data that ships with the build and never changes during play. Anything mutable at runtime (a building's current HP, a faction's current disposition toward the player, which tile a building sits on) belongs to **world-state** (owned by the systems that produce it, serialized by Save/Load) — never to the DB. Test: *if a value can differ between two save files of the same game version, it does not belong in the DB.*

**CR-2 — Every record shares a common envelope.** All content records, regardless of category, carry:
- `id: string` — globally unique, namespaced (see CR-4). The permanent handle other systems and saves reference.
- `displayName: string` — the human-readable label for UI/debug (a localization key in a later pass; raw string for MVP).

Each category adds its own typed fields on top of this envelope. The **per-category field schema is owned by that category's system GDD** (e.g. what fields a `Building` has is specified in the Building & Placement GDD); this GDD owns the *framework* — the envelope, the ID rules, validation, loading, and the immutability/access contract — not the interior of each category.

**CR-3 — The DB defines exactly these 11 MVP categories.** Each is owned (authored/edited) by one system and may reference IDs in other categories:

| Category | Owning system | References |
|---|---|---|
| `Resource` | Resource Economy | — |
| `Building` | Building & Placement | resource (cost, upkeep), recipe, tier |
| `Recipe` | Resource Economy | resource (inputs, outputs) |
| `SettlementTier` | Tiers & Progression | building, resource |
| `Modifier` | Shared Modifier System | target keys |
| `Faction` | Faction / Reactive World | resource (goods) |
| `LoreFragment` | Lore-as-Power Discovery | modifier, faction/site (source) |
| `ExpeditionSite` | Expedition / Venture | resource, settler, lore, tier |
| `Encounter` | Encounter & Dialogue | faction |
| `Disaster` | Disasters & Raids | modifier |
| `SettlerType` | Population & Workers | faction, modifier |

Adding a 12th category is a DB change (new schema + loader registration), not something an individual system does unilaterally.

**CR-4 — IDs are namespaced and dotted.** Format: `<category>.<slug>`, e.g. `building.sawmill`, `resource.wood`, `faction.greenfolk`, `modifier.fire_defense`. The category prefix makes every reference self-documenting in code, saves, and error messages. Slugs are lowercase `snake_case`; the full `id` must be unique across the entire DB.

**CR-5 — References are type-safe at compile time, existence-checked at boot.** Content is authored as **typed TypeScript data modules** conforming to per-category interfaces, using **branded ID types** (`ResourceId`, `BuildingId`, …) so a field declared `cost: ResourceId[]` *cannot* be handed a `BuildingId` — the compiler rejects category mismatches. Branding does *not* prove the referenced record exists, so on boot the DB runs a **referential-integrity + uniqueness pass**: every ID field is checked to resolve to a real record, and every `id` is checked to be unique.

**CR-6 — Bad data is a hard failure at boot.** If validation finds a dangling reference, a duplicate ID, or a malformed record, the DB **refuses to enter Ready** and surfaces a fatal error naming the offending `id`, field, and category (e.g. *"`building.sawmill`.cost references `resource.iron`, which does not exist"*). The game does not start with invalid content. (Honors the project rule: *surface all errors — never silently swallow.*)

**CR-7 — Content is immutable after load.** Once Ready, every record is deeply frozen. No system may mutate a DB record at runtime; attempting to is a programmer error. Systems that need to vary a value at runtime copy it into their own world-state (see CR-1).

**CR-8 — Access is read-only lookup by ID.** Systems retrieve content through a read-only DB API: `get(id)` returns the frozen record or throws fatally if absent (used everywhere the ID is expected to exist — guaranteed by CR-6); `tryGet(id)` returns `undefined` for the legitimate "may be absent" case (chiefly Save/Load resolving an ID from an older content version). One lookup path; no system reaches around the API to the raw modules.

### States and Transitions

The DB is a boot-time singleton with a simple lifecycle. Because content is bundled into the build, "loading" is assembling the imported modules into the lookup index; **validation is the real gate.**

| State | Meaning | Valid transitions |
|---|---|---|
| `Unloaded` | Initial. No content indexed. | → `Indexing` (on boot) |
| `Indexing` | Assembling all category modules into the ID lookup index. | → `Validating` |
| `Validating` | Running uniqueness + referential-integrity + schema checks (CR-5/6). | → `Ready` (all pass) · → `Failed` (any check fails) |
| `Ready` | All content indexed, validated, and frozen. Lookups served. **Terminal for normal play.** | — (never leaves Ready during a session) |
| `Failed` | A validation error occurred. Fatal error surfaced; game does not start. **Terminal.** | — (requires fixing data + rebuild) |

There is no `Unloading` or runtime reload in MVP — the DB lives for the whole session. (A future modding/hot-reload path, Full Vision, would add a reload transition; the loader seam is kept clean for it but it is out of MVP scope.)

### Interactions with Other Systems

**The DB is a pure upstream provider: every content-bearing system reads from it; the DB reads from no one.** It owns the lookup API and the schema framework; each consuming system owns its category's field schema.

**Read interactions (all systems → DB):** each system calls `get(id)`/`tryGet(id)` to resolve the content it needs — Building & Placement reads `Building` + referenced `Resource`/`Recipe`/`SettlementTier`; Resource Economy reads `Resource` + `Recipe`; Shared Modifier System reads `Modifier`; Lore-as-Power reads `LoreFragment` → its granted `Modifier`; and so on per CR-3. No writes ever flow back.

**Save/Load contract (the critical interaction):** world-state saves store **content IDs, not copies of content** (e.g. a placed building serializes as `{ typeId: "building.sawmill", … runtime state }`). On load, each stored ID is resolved against the DB:
- ID still exists → resolve normally.
- ID absent (content removed/renamed in a patch) → Save/Load's migration layer handles it via `tryGet` (CR-8); the DB's only obligation is to answer "does this ID exist?" deterministically. *How* a missing ID is migrated is the Save/Load GDD's responsibility, not the DB's.

The DB also exposes a single `schemaVersion: number` for the whole content set, bumped on any breaking schema change, so Save/Load can detect version skew and run migrations. (This is the DB's sole concession to Save/Load; full migration logic lives in that GDD.)

**Ownership summary:** DB owns — the envelope, ID rules, validation, freeze/lifecycle, lookup API, `schemaVersion`. Each system owns — the field schema of its category and the authored records within it.

## Formulas

**This system has no gameplay or balance formulas.** It performs no runtime calculation that affects play — it stores and serves authored data. Its quantitative obligations are *validation invariants* (predicates the content set must satisfy) and a *content-volume budget*. `systems-designer` was not consulted because there are no balance values to derive; the invariants below come directly from the Core Rules.

**Validation invariants** (all must hold for the DB to reach `Ready`; any violation → `Failed`, per CR-6):

| Invariant | Predicate | Source rule |
|---|---|---|
| **INV-1 Uniqueness** | For all records r₁, r₂ in the DB: r₁ ≠ r₂ ⟹ r₁.id ≠ r₂.id | CR-4 |
| **INV-2 Referential integrity** | For every reference field holding id *x*: `get(x)` resolves to a record **and** that record's category matches the field's declared category | CR-5 |
| **INV-3 ID format** | Every `id` matches `^(resource\|building\|recipe\|tier\|modifier\|faction\|lore\|site\|encounter\|disaster\|settler)\.[a-z0-9_]+$` | CR-4 |
| **INV-4 Envelope completeness** | Every record has a non-empty `id` and non-empty `displayName` | CR-2 |

The validation pass is the conjunction: **DB is valid ⟺ INV-1 ∧ INV-2 ∧ INV-3 ∧ INV-4** (plus each category's own field-schema checks, owned by that category's GDD). Cost is linear in total record count, run once at boot.

**Lookup cost.** Records are indexed into a single `Map<id, record>` at `Indexing`; `get`/`tryGet` are **O(1)**. No per-frame cost — content is read on demand and cached by callers as needed.

**Content-volume budget** (informational — bounds the static memory footprint against the project's 512 MB ceiling; the DB is authored text data, so its share is negligible):

| Category | MVP est. records | Target Ship est. |
|---|---|---|
| Resource | ~12 | ~30 |
| Building | ~15 | ~60 |
| Recipe | ~12 | ~50 |
| SettlementTier | 3 | 5 |
| Modifier | ~20 | ~120 |
| Faction | 1 | 3–4 |
| LoreFragment | ~6 | ~60 |
| ExpeditionSite | 1 | ~12 |
| Encounter | ~4 | ~40 |
| Disaster | ~2 | ~10 |
| SettlerType | ~3 | ~12 |
| **Total** | **~80 records** | **~400 records** |

At a few hundred small records, the entire DB is a fraction of a megabyte — memory is a non-issue; these counts exist to scope *authoring effort*, not performance.

## Edge Cases

- **If two records share the same `id`**: INV-1 violation → `Failed` at boot. Error names both records' categories and the duplicated `id`. (No "last one wins" — silent shadowing of content is forbidden.)
- **If a reference field holds an `id` with no matching record**: INV-2 violation → `Failed` at boot, naming the holder record, the field, and the missing `id` (per CR-6's example message).
- **If a reference points to a real record of the wrong category** (e.g. a `cost` field holds `building.sawmill` where a `ResourceId` is expected): caught at **compile time** by branded ID types and never ships. If one is somehow constructed dynamically, INV-2's category check catches it at boot → `Failed`.
- **If an `id` is malformed** (uppercase, spaces, unknown namespace prefix, missing dot): INV-3 violation → `Failed`, naming the offending `id`.
- **If a record has an empty/missing `id` or `displayName`**: INV-4 violation → `Failed`.
- **If a category has zero records** (e.g. no factions authored): **valid at the DB level** — the DB framework does not impose per-category minimums. A *consuming system* that requires ≥1 record (MVP needs exactly one faction) enforces that in its own GDD/validation, not here.
- **If a reference field is optional and left empty** (`null`/`undefined`/absent): **valid** — INV-2 only existence-checks references that are *present*. Optional-and-empty is a legitimate authored state.
- **If references form a cycle** (e.g. `tier.village` requires `building.x` which requires `tier.village`): the DB does **not** detect or forbid cycles — INV-2 checks existence, not acyclicity. Any acyclicity requirement is the owning system's responsibility (e.g. SettlementTier must define and validate its own ordering).
- **If a system calls `get(id)` at runtime with an `id` that doesn't exist**: `get` throws a fatal error (this should be impossible for authored references after a successful boot per CR-6, so it signals a programmer bug or a save-migration miss). `tryGet(id)` instead returns `undefined` for the legitimate "may be absent" path.
- **If a system attempts to mutate a frozen record at runtime**: under TypeScript strict mode the write throws a `TypeError` (deep-frozen object). This is a programmer error surfaced immediately, never silently absorbed (CR-7).
- **If a save references an `id` removed or renamed in a patched build**: the DB answers via `tryGet` → `undefined`, deterministically. The DB's sole obligation is the honest "absent"; Save/Load's migration layer decides the remedy (substitute, drop, or remap). Not the DB's call.
- **If a save's `schemaVersion` differs from the current build's**: the DB exposes both numbers but does **not** block loading — version-skew handling is Save/Load's decision. The DB never refuses a save; it only refuses *invalid content* at its own boot.

## Dependencies

**Upstream (this system depends on): none.** The Content DB is a foundation system with no game-system dependencies. Its only dependency is on the **build toolchain** (Vite + TypeScript) to bundle the content modules and type-check them at compile time — a *tooling* dependency resolved at build time, not a runtime system dependency.

**Downstream (systems that depend on this one):** every content-bearing system has a **hard** dependency — without the DB it has no content to operate on.

| Dependent system | Nature | Interface (what it reads) |
|---|---|---|
| Season-Turn Loop | Hard | season/turn config records (if authored as content) by id |
| Resource Economy | Hard | `Resource`, `Recipe` records |
| Shared Modifier System | Hard | `Modifier` records |
| Settlement Building & Placement | Hard | `Building` + referenced `Resource`/`Recipe`/`SettlementTier` |
| Population & Workers | Hard | `SettlerType` + referenced `Faction`/`Modifier` |
| Settlement Tiers & Progression | Hard | `SettlementTier` + referenced `Building`/`Resource` |
| Expedition / Venture | Hard | `ExpeditionSite` + referenced returns/gates |
| Faction / Reactive World | Hard | `Faction` + referenced `Resource` |
| Encounter & Dialogue | Hard | `Encounter` + referenced `Faction` |
| Lore-as-Power Discovery | Hard | `LoreFragment` + granted `Modifier` |
| Disasters & Raids | Hard | `Disaster` + referenced `Modifier` |
| Trade / Market | Hard | `Resource`, `Faction` (goods) |
| Central Mystery / Authored Narrative | Hard | `LoreFragment`, `Faction`, `ExpeditionSite` |
| **Save/Load & Serialization** | Hard | ID resolution (`get`/`tryGet`) + `schemaVersion` (see Interactions / Save-Load contract) |
| UI Framework & Per-System UIs | Hard (read-only) | `displayName` and display fields of any shown record |

**Interface direction & ownership:** all arrows point *into* the DB (reads only); nothing writes back (CR-7/8). The DB owns the lookup API and schema framework; each dependent owns its category's field schema.

**Bidirectional-consistency note:** none of the dependent GDDs are authored yet. When each is written, it **must** list `depends on: Data-Driven Content DB` and name the category/fields it reads, completing the back-reference. Until then these back-references are *pending* — a checklist item for each downstream GDD, surfaced here so it isn't missed.

## Tuning Knobs

The Content DB exposes essentially **no gameplay tuning of its own** — by design. Every balance value (building costs, upkeep rates, modifier magnitudes, etc.) lives in the **content records**, owned by their respective systems. The DB's contribution to tuning is structural: *it makes every such value data-driven and adjustable by editing one content module*, with no code change. That is the system's reason to exist, not a knob.

The DB itself owns two configuration controls:

| Knob | Type / Range | Default | Effect / what breaks at extremes |
|---|---|---|---|
| `schemaVersion` | integer ≥ 1 | 1 | The content-set version, bumped on any **breaking** schema change so Save/Load can detect skew. Too low (not bumped after a breaking change) → old saves load against incompatible content and corrupt silently. Too high (bumped needlessly) → spurious migrations. **Discipline knob, not a tuning dial:** bump only on breaking schema changes. |
| `validationReporting` | `'first'` \| `'all'` | `'all'` | Dev diagnostics only. `'all'` runs the full validation pass and reports **every** error before failing (best for authoring — fix them in one batch). `'first'` fails on the first error (faster boot, noisier iteration). **Both still hard-fail** on any error — this never weakens CR-6; it only changes how much is reported. |

There is intentionally **no** `skipValidation` / `lenientMode` knob — disabling validation would violate CR-6 ("surface all errors, never swallow") and is not offered at any tier.

## Visual/Audio Requirements

**None.** The Content DB is invisible infrastructure with no rendered output, VFX, or audio. Visual/audio for content lives in each owning system's GDD (e.g. a building's sprite is specified in Building & Placement, not here).

## UI Requirements

**None for players.** The DB surfaces no screens or HUD. The only "UI" it touches is indirect: it supplies `displayName` and display fields that other systems' UIs render (per the Dependencies table). A possible **developer** tool — a content browser/validator — is out of MVP scope and would be a `tools-programmer` concern, not a player-facing UI.

## Acceptance Criteria

*Type key:* **Logic** = automated unit test, BLOCKING · **Build** = compile/CI check · **Advisory** = manual code-review/perf gate. (`qa-lead` consulted in lean mode; findings incorporated.)

**Validation & failure (boot):**
- **AC-1 (INV-1, Logic)** — GIVEN two records with the same `id`, WHEN the game boots, THEN the DB enters `Failed`, the fatal error names **both** records' categories and the duplicated `id`, and the game does not start.
- **AC-2 (INV-2, Logic)** — GIVEN a `Building` whose `cost` references a non-existent resource `id`, WHEN it boots, THEN `Failed`, error names the building, the field, and the missing `id`.
- **AC-4 (INV-3, Logic)** — GIVEN records with `id`s `Building.Sawmill` (uppercase), `sawmill` (no namespace), `building.saw mill` (space), and `building..saw` (double dot), WHEN it boots, THEN each triggers `Failed` naming the malformed `id`.
- **AC-5 (INV-4, Logic)** — GIVEN a record whose `displayName` is empty or whitespace-only, WHEN it boots, THEN `Failed` naming the record.
- **AC-19 (INV-2 wrong-category at runtime, Logic)** — GIVEN a `Building.cost` entry that is a valid-format `id` resolving to a `Faction` record, WHEN it boots, THEN `Failed` naming the building, field, and mismatch (expected `Resource`, found `Faction`).
- **AC-13 (Logic)** — GIVEN 3 distinct validation errors with `validationReporting='all'`, WHEN it boots, THEN the fatal report lists all 3 before failing.
- **AC-20 (Logic)** — GIVEN the same 3 errors with `validationReporting='first'`, WHEN it boots, THEN the report lists exactly 1 error before failing.

**Happy path, lookup & immutability:**
- **AC-6 (Logic)** — GIVEN a valid content set containing **one record of each of the 11 categories**, WHEN it boots, THEN the DB reaches `Ready` and every record is retrievable by `id`.
- **AC-7 (CR-8, Logic)** — GIVEN `Ready`, WHEN `get("resource.wood")` resolves an existing record, THEN it returns the record with matching `id`/`displayName` **and** `Object.isFrozen(record)` is true.
- **AC-8 (CR-8, Logic)** — GIVEN `Ready`, WHEN `get("resource.nonexistent")` is called THEN it throws a `ContentNotFoundError` (fatal); AND `tryGet("resource.nonexistent")` returns `undefined`.
- **AC-9 (CR-7, Logic)** — GIVEN a record retrieved from the DB, WHEN code assigns to one of its fields, THEN a `TypeError` is thrown (strict mode) and a fresh `get` of the same `id` shows the field unchanged.
- **AC-11 (Logic)** — GIVEN zero `Disaster` records but an otherwise valid set, WHEN it boots, THEN the DB reaches `Ready` (no per-category minimum).
- **AC-12 (Logic)** — GIVEN a record with an optional reference field left `undefined` (or `null`), WHEN it boots, THEN no INV-2 error for that field and the DB reaches `Ready`.

**State machine:**
- **AC-16 (CR-8 pre-Ready, Logic)** — GIVEN the DB is still `Indexing` or `Validating`, WHEN `get`/`tryGet` is called, THEN it throws a fatal "not Ready" error (no record is served before validation completes).
- **AC-17 (CR-6 Failed-terminal, Logic)** — GIVEN the DB has entered `Failed`, WHEN `get`/`tryGet` is subsequently called, THEN both throw fatally; AND the DB does not transition out of `Failed` on retry.
- **AC-18 (CR-3, Logic)** — GIVEN the DB is instantiated, WHEN its category registry is inspected, THEN exactly these 11 categories are present: Resource, Building, Recipe, SettlementTier, Modifier, Faction, LoreFragment, ExpeditionSite, Encounter, Disaster, SettlerType.

**Versioning & types:**
- **AC-3 (CR-5 compile, Build)** — GIVEN source assigning a `BuildingId` to a field typed `ResourceId`, WHEN `tsc --noEmit` runs in CI, THEN compilation fails. *Companion:* a code-review checklist lists all 11 branded ID types and the fields using each, so a reviewer confirms full coverage (string-cast bypasses are caught at boot by AC-19).
- **AC-15 (Logic)** — GIVEN `Ready`, WHEN `schemaVersion` is queried, THEN it returns an **integer** ≥ 1 (asserted as `Number.isInteger`).
- **AC-21 (Logic)** — GIVEN content authored with `schemaVersion` N while the build expects N+1, WHEN it boots, THEN the DB reaches `Ready` (skew never blocks loading) and exposes both the content version (N) and build version (N+1).

**Advisory (manual / review gates):**
- **AC-10 (CR-1 static boundary, Advisory)** — GIVEN the content type definitions, WHEN reviewed at PR merge, THEN no record type contains `Date`/`Map`/`Set`/non-serializable fields, computed getters reading outside the authored data, or references to runtime game-state. Checklist: `production/qa/evidence/content-db-static-boundary-review.md`.
- **AC-14 (lookup cost, Advisory)** — GIVEN `Ready`, WHEN the storage mechanism is reviewed, THEN records are held in a `Map<string, Readonly<…>>` (O(1) by structure). No runtime timing assertion (browser timing is noisy).

**Performance budget:** boot indexing + validation over the MVP set (~80 records) must be negligible within the overall boot budget — not separately gated, but a regression here would indicate an accidental O(n²) integrity check.

## Open Questions

- **OQ-1 — On-disk format is provisionally decided, formally an ADR.** Direction set: typed TS data modules, Vite-bundled, modding deferred (Section C). This must be ratified as an Architecture Decision Record at `/create-architecture`. *Owner: technical-director / phaser-specialist. Target: architecture phase.*
- **OQ-2 — Localization of `displayName`.** MVP uses raw strings; a later pass replaces them with localization keys. Does that change the CR-2 envelope, or is it a transparent swap? *Owner: localization-lead. Target: pre-Target-Ship.*
- **OQ-3 — `schemaVersion` granularity.** A single global version is chosen for simplicity. If breaking schema changes become frequent and category-local, revisit per-category versioning for finer Save/Load migration. *Owner: Save/Load & Serialization GDD. Target: Save/Load design.*
- **OQ-4 — Is season/turn config authored as DB content?** The Dependencies table lists "season/turn config records (if authored as content)". Whether the Season-Turn Loop's parameters live in the DB as a category or as code constants is deferred to that GDD (next in design order). *Owner: Season-Turn Loop GDD.*
- **OQ-5 — Run referential validation as a standalone CI/build step?** Recommended: catch dangling refs in CI before they ever reach a runtime boot. Formalize when CI is set up. *Owner: devops-engineer. Target: CI setup.*
