# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then `design/gdd/systems-index.md`
> and `design/gdd/game-concept.md`. That restores full context.
> **Recommended next command:** `/design-system Data-Driven Content DB`
> (the #1 system in the design order). Or `/map-systems next` to auto-pick it.
> Last worked: 2026-06-26. Everything is committed and pushed to `origin/main` (HEAD = 7e84ee7).

---

## Where we are: Pre-production, entering Systems Design

Hearthfall (turn/season settlement-building RPG, Phaser 4). Concept is approved, both core
pillars are prototype-validated, and the full system map is written. **Next phase: author the
MVP system GDDs in design order.**

### Completed (all committed + pushed)
- ✅ `/brainstorm` → `design/gdd/game-concept.md`
- ✅ `/design-review` (5-agent panel) → NEEDS REVISION → revised → **APPROVED**.
  Log: `design/gdd/reviews/game-concept-review-log.md`
- ✅ Prototype 1 — season-turn building loop (Phaser) → **PROCEED**.
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ Prototype 2 — Earned Discovery: deduction slice → **PIVOT**
  (`prototypes/unclaimed-valley-concept/`) → re-prototyped as **lore-as-power → PROCEED**
  (`prototypes/lore-as-power-concept/REPORT.md`)
- ✅ Concept updated to record the validated lore-as-power discovery delivery
- ✅ `/map-systems` → **`design/gdd/systems-index.md`** (Draft): 25 systems, 21 in MVP

## Immediate next action
**✅ DONE:** `/design-system Data-Driven Content DB` → `design/gdd/data-driven-content-db.md` (all 8 required + Visual/Audio + UI + Open Questions). Status: **Designed (review pending)**. qa-lead consulted on Acceptance Criteria. Registry: `content_schema_version=1` added.
Key locked decisions: 11 content categories, hard-fail-at-boot integrity, **typed TS data modules** (compile-time + branded ID types; format formally an ADR — OQ-1), **namespaced dotted IDs** (`building.sawmill`), frozen-after-load, read-only `get`/`tryGet`, `schemaVersion` for Save/Load skew.

**✅ DONE:** `/design-system Season-Turn Loop` (#2) → `design/gdd/season-turn-loop.md`. Status: **Designed (review pending)**. qa-lead consulted on AC. Registry: `SEASONS_PER_YEAR=4` added. Systems-index corrected — Loop no longer depends on Content DB (hybrid season-config decision).
Key locked decisions: 8-phase resolution order (Production→Consumption→Population→Storage→TierCheck→Events→AdvanceClock→BeginSeason), resolve-current-then-advance, hybrid season config (structure=const/effects=data → resolves Content DB OQ-4), Loop owns the time signal only (turnIndex/season/year/escalationLevel, read-only), save only in `Planning`, no terminal state.

✅ **GAP RESOLVED (Season-Turn Loop OQ-2):** Added **Game State / Session** (system #26, Core, MVP) to the index — owns session lifecycle (menu/new-game/pause/quit) + game-over/victory handoff. Win/loss conditions stay distributed (detecting systems emit; Game State handles). **MVP = soft-only failure** (no hard lose-screen; vertical-slice victory screen only). Index now 26 systems / 22 MVP / 2 designed. Loop GDD OQ-2 marked resolved + dependency added.

**Both GDDs still pending independent `/design-review` (fresh session).** Next system in order: **#3 World Grid & Tilemap** (Foundation; design for code/data + free Tiled, per the no-editor decision).

Design order (MVP, by dependency layer; see systems-index.md for the full table):
1. Data-Driven Content DB  2. Season-Turn Loop ★  3. World Grid & Tilemap
4. Save/Load & Serialization  5. Resource Economy ★  6. Shared Modifier System
7. Building & Placement ★  8. Population & Workers  9. Settlement Tiers …
(★ = prototype-validated. `/map-systems next` auto-picks the next undesigned system.)

## Decisions to honor while authoring GDDs
- **Perk/Modifier = one shared modifier system** (lore perks, building/adjacency bonuses,
  faction effects all plug into it). Design its interface early — it's a bottleneck.
- **Spatial Adjacency/Zoning is deferred to Target Ship** — MVP buildings work without it.
- **Hands-on → directive is ADDITIVE** — hands-on building is never removed.
- **Sink = scaling upkeep/maintenance** (the anti-plateau drain); raids/disasters are setbacks on top.
- **Discovery = lore-as-power, no deduction**, routed through **faction-gated peoples**
  (wanderers/traders/hermits share; soldiers/barbarians refuse); must feel **organic & non-linear
  across a large map** (not fixed labeled pins). The emotional core is the *social* encounter.
- **Central mystery = a cataclysm / fallen civilization**; design the payoff alongside the question.
- **Colorblind hard constraint**: color is never the only signal — carry into `/art-bible` and all UI.
- **Build-and-venture interlock**: expeditions are the only source of (a) rare materials gating
  tiers, (b) new settlers, (c) knowledge/perks — neither home nor venture is a "bonus mode."

## Dependency cycles (resolved — apply when designing)
- **Faction ↔ Encounter/Dialogue**: Faction owns the disposition data model (design it first);
  Encounter reads disposition, emits relation-change events Faction consumes.
- **Save/Load ↔ all**: Save/Load defines a serializable-state contract; every system implements it.
  No system GDD is complete without specifying its serializable state.

## High-risk systems (design carefully / prototype if needed)
Save/Load (large world state — #1 tech risk) · Resource Economy (sink tuning) · Lore-as-Power
(organic large-map delivery still unproven) · Faction (authored-content scope) · Shared Modifier
(bottleneck interface) · hands-on→directive transition (additive).

## Mode / process notes
- Review mode: **lean** (no `production/review-mode.txt`). Director gates (TD/PR/CD) auto-skip.
  To get formal sign-off, run `/gate-check systems-design` (fires CD-SYSTEMS + TD-SYSTEM-BOUNDARY).
- Optional before deep GDD work: `/art-bible` (lock visual identity + colorblind constraint).
- `/design-system` writes each GDD section incrementally with approval, then runs `/design-review`
  and updates the systems index.

## Throwaway prototype reminder
Prototype code in `prototypes/` is throwaway — never refactor into `src/`. If a system PROCEEDed,
production code is written fresh; the REPORT.md informs the GDD.
