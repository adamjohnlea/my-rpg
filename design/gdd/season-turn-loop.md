# Season-Turn Loop

> **Status**: In Design
> **Author**: adamlea + game-designer
> **Last Updated**: 2026-06-26
> **Implements Pillar**: Pillar 1 (The Hearth Grows) — the turn is the heartbeat of growth; delivers the "one more season" pull
> **Prototype**: ★ Validated — `prototypes/homestead-loop-concept/REPORT.md` (PROCEED; 15+ voluntary season-advances)
> **Creative Director Review (CD-GDD-ALIGN)**: Skipped — lean review mode (not a phase gate). Run `/gate-check systems-design` for formal sign-off.
> **Design Review**: Pending — run `/design-review design/gdd/season-turn-loop.md` in a fresh session.

## Overview

The Season-Turn Loop is Hearthfall's central clock and turn orchestrator — the heartbeat that converts a settlement-builder into a turn-based game. Within a season the player acts freely (place buildings, assign work, talk to a visitor); then they take one decisive action — **End Season** — which advances the turn. Seasons cycle **Spring → Summer → Autumn → Winter**, four seasons make a **year**, and the year count drives the game's escalating pressure (the MVP's winter-severity ramp). Advancing a turn is not a single event but an **ordered resolution pipeline**: the loop fires a fixed sequence of phases — production, consumption, population change, spoilage, tier checks, disasters, world events — that every other system hooks into. Crucially, the loop owns the *clock and the order of resolution*, not the rules inside each phase: it declares "it is now Winter; resolve these phases in this order," while the economy, population, and faction systems supply the logic each phase runs. This is the system's dual nature — it is **infrastructure** (the orchestration backbone every system depends on for *when* and *in what order* things happen) and the **delivery mechanism for the game's core forward-pull**: the prototype-validated *"one more season"* compulsion, where winter pressure turns each advance into a deliberate decision rather than bookkeeping (`prototypes/homestead-loop-concept/REPORT.md`). Without it there is no turn structure, no seasonal rhythm, and no shared sequence for systems to resolve against — every other MVP system would have to invent its own notion of time.

## Player Fantasy

**The feeling: *"just one more season."*** The Season-Turn Loop is the engine of Hearthfall's core compulsion — the same pull that made the prototype playtester advance 15+ seasons unprompted and stop only by choice. The player should finish a turn already wanting the next one: *the harvest is almost in… the new house will fill next spring… I can survive this winter if I just…* Each **End Season** press is a small act of commitment and anticipation — you've set your plans, now you lean forward to see them pay off.

Two emotional beats, both observed in the prototype, anchor it:
- **The survival decision.** Winter turns a calm season into a real choice — *expand now or stockpile to survive?* This is what keeps a turn from feeling like bookkeeping; pressing End Season carries a little risk and a little hope. (Pillar 3 — *Cleverness Over Reflexes*: the tension is a problem to out-think, never a reflex to execute.)
- **The growth payoff.** When a season resolves and the settlement visibly steps up — especially the **first tier-up** (*"when the settlement grew the first time was exciting"*) — the turn delivers a hit of earned progress. The loop is the literal metronome of **Pillar 1, The Hearth Grows**.

Reference touchstone: the *"one more turn"* of **Civilization**, but warmed by ownership of a single growing home rather than a sprawling empire. The player isn't optimizing a spreadsheet between turns — they're tending a place and pressing forward to watch it thrive.

**Design guardrail (from the prototype):** the loop's pull is real but **not self-sustaining** — once the economy is "solved," advancing turns goes slack. The *forward-pull is the loop's job; sustaining it is a systems job.* The loop must therefore expose the time/year signal that escalation (winter-severity ramp, later raids and rival agendas) rides on, so each year raises the stakes the player presses into. The loop sets the rhythm; the escalating systems give it somewhere to go.

*Note: per lean review mode, `creative-director` was not consulted on this framing. Re-confirm at `/gate-check` if formal sign-off is wanted.*

## Detailed Design

### Core Rules

**CR-1 — Turn = one season; no real-time pressure.** A single turn is one season. Within a season the player takes unlimited actions with **no timer** (place/demolish buildings, assign work, talk to visitors), then commits the turn with one action: **End Season**. Time only advances on that commit. (Pillar 3 — *Cleverness Over Reflexes*: never a clock to beat.)

**CR-2 — The season cycle is a fixed, Loop-owned structure.** Seasons advance **Spring → Summer → Autumn → Winter** in fixed order; `SEASONS_PER_YEAR = 4` seasons make one **year**. This *structure* (the cycle, its order, the count) is a Loop-owned configuration constant — not Content-DB content. The *effects* of each season (farm-yield modifiers, winter's doubled consumption, severity) are **data owned by the consuming systems** (Resource Economy, Disasters), which read the Loop's "current season" and apply their own rules. *(This resolves Content DB OQ-4: season structure = constants; season effects = consuming-system data.)*

**CR-3 — Resolve-current-then-advance.** The currently displayed season is the one the player is acting in; its modifiers are active during planning. Pressing End Season **resolves that season**, and only after resolution completes does the clock flip to the next season. (You see "Winter," plan against dormant farms, then resolution applies winter's rules, then it becomes Spring.)

**CR-4 — The turn-resolution pipeline is a fixed, ordered, atomic sequence.** On End Season the Loop runs these phases in this exact order; it owns the *order and triggering*, while the named system owns each phase's *logic*:

| # | Phase | Logic owner |
|---|---|---|
| 1 | Production | Resource Economy |
| 2 | Upkeep & Consumption | Resource Economy |
| 3 | Population | Population & Workers |
| 4 | Storage & Spoilage | Resource Economy |
| 5 | Tier Check | Tiers & Progression |
| 6 | Events & Disasters | Disasters & Raids |
| 7 | Advance Clock | Season-Turn Loop |
| 8 | Begin Season | Season-Turn Loop |

The pipeline is **atomic**: it runs to completion in one synchronous pass before the player regains control. The economy fully resolves and growth is banked (1–5) *before* the world pushes back (6).

**CR-5 — The Loop owns the time counters and exposes them read-only.** `turnIndex` (monotonic, starts at 0), `season` (enum), `year` (= ⌊turnIndex / SEASONS_PER_YEAR⌋ + 1), and `escalationLevel` (monotonic, increments by 1 each time a new year begins). Other systems read these; none may write them.

**CR-6 — Escalation seam.** The Loop provides only the *time signal* (CR-5). The mapping from year/escalation to actual difficulty (winter-severity value, raid frequency) lives in the consuming systems, not the Loop. The Loop sets the rhythm; downstream gives it stakes.

**CR-7 — Phase handlers, not hardcoded calls.** Systems register a handler for the phase(s) they own; the Loop invokes registered handlers in the fixed phase order (CR-4). Within a single phase, handler execution order follows an explicit registration priority (see Edge Cases). The Loop never hardcodes a call into a specific system — it sequences phases and emits lifecycle events.

**CR-8 — Input is locked during resolution.** From End Season until Begin Season completes, player input is suspended. It re-enables at Begin Season.

**CR-9 — End Season is committal.** There is no turn rollback/undo in MVP. (A confirmation prompt may guard the action — a UI concern, CR-9 not affected.)

### States and Transitions

The Loop is a two-state machine at the turn level, with the resolution pipeline as ordered sub-steps of `Resolving`.

| State | Meaning | Transition |
|---|---|---|
| `Planning` | Steady state. Player acts freely; current season's modifiers active; input enabled. | → `Resolving` (on **End Season**) |
| `Resolving` | Input locked. Runs phases 1–8 atomically (see CR-4). | → `Planning` (after Begin Season, now in the next season) |

**Resolution sub-steps** (within `Resolving`, always in order): Production → Upkeep & Consumption → Population → Storage & Spoilage → Tier Check → Events & Disasters → Advance Clock → Begin Season.

**Lifecycle events emitted** (for UI, logging, and system hooks): `turnWillAdvance` (on End Season, before phase 1) · a phase signal as each phase begins · `seasonChanged(from, to)` (phase 7) · `yearChanged(year, escalationLevel)` (phase 7, only on Winter→Spring) · `turnDidAdvance` (after phase 8, input unlocked).

**No terminal state in MVP.** The Loop runs indefinitely. Victory/failure (e.g. settlement collapse from starvation) is determined by *other* systems, which would halt the Loop by emitting a game-over event the Loop honors — but the Loop itself defines no win/lose condition.

### Interactions with Other Systems

**The Loop is the temporal orchestrator: it sequences other systems but contains almost none of their logic.**

**Downstream (phase handlers):** each of phases 1–6 is fulfilled by the system in the CR-4 table. The Loop guarantees they run in order; systems read and mutate shared world-state in that guaranteed sequence (e.g. Tier Check reads the population that the Population phase just settled). The Loop aggregates nothing and reads nothing back — order *is* the contract.

**Content DB:** with the hybrid decision (CR-2), the Loop reads **nothing** from the Content DB — season structure is its own constant, and season effects are read from the DB by the *consuming* systems, not the Loop. **This downgrades the Loop's dependency on the Content DB from "hard" (as listed in the systems index) to effectively none** — reflected in the Dependencies section.

**UI Framework & HUD / Event Log:** subscribe to the lifecycle events (States & Transitions list) to render the season/year indicator, the "new season" transition, and per-phase log entries. The single **End Season** control is the UI's trigger into the Loop.

**Save/Load:** the Loop's serializable state is exactly `{ turnIndex, season, year, escalationLevel }` (`year` is derivable but stored for clarity). Saving is permitted **only in `Planning`** — never mid-resolution (the pipeline is atomic and non-interruptible), so no partial-phase state is ever persisted.

## Formulas

**No balance/gameplay math.** The Loop computes only deterministic time counters from `turnIndex`. All difficulty math (winter severity, raid odds) is owned and tuned by the consuming systems (CR-6) and is *referenced*, not defined, here. All formulas below are pure and deterministic — no randomness, no time-of-day — which keeps the Loop trivially unit-testable.

**F-1 — Year.**
`year = floor(turnIndex / SEASONS_PER_YEAR) + 1`

| Variable | Type | Range | Description |
|---|---|---|---|
| `turnIndex` | int | 0 … ∞ | Monotonic turn counter, starts at 0 |
| `SEASONS_PER_YEAR` | int const | 4 | Seasons per year (tuning knob) |

**Output:** int ≥ 1. **Example:** `turnIndex=0 → 1`; `turnIndex=4 → 2`; `turnIndex=7 → 2`.

**F-2 — Current season.**
`season = SEASON_CYCLE[turnIndex mod SEASONS_PER_YEAR]`, where `SEASON_CYCLE = [Spring, Summer, Autumn, Winter]`

| Variable | Type | Range | Description |
|---|---|---|---|
| `turnIndex` | int | 0 … ∞ | As above |
| `SEASON_CYCLE` | enum[] const | 4 entries | Ordered season identities |

**Output:** one of the 4 season enums. **Example:** `0 → Spring`, `3 → Winter`, `4 → Spring`, `7 → Winter`.

**F-3 — Escalation level (the time signal downstream rides on).**
`escalationLevel = year - 1` (equivalently `floor(turnIndex / SEASONS_PER_YEAR)`)

| Variable | Type | Range | Description |
|---|---|---|---|
| `year` | int | ≥ 1 | From F-1 |

**Output:** int ≥ 0, increments by 1 at each Winter→Spring. **Example:** Year 1 → 0; Year 2 → 1; Year 5 → 4.

*Downstream reference (not defined here):* consuming systems map this to difficulty, e.g. a Disasters-owned `winterSeverity = base + escalationLevel × step`. The Loop supplies `escalationLevel`; the curve's shape and constants belong to that system's GDD.

## Edge Cases

- **If it's the very first turn** (`turnIndex = 0`): the game begins in `Planning`, `season = Spring`, `year = 1`, `escalationLevel = 0`. No resolution has run yet — the player acts before the first End Season.
- **If End Season is pressed while already `Resolving`** (double-press, queued input): ignored. Input is locked during resolution (CR-8); the extra press is a no-op, never a second pipeline run.
- **If a phase handler throws during resolution**: the turn **aborts with a fatal error surfaced to the player** (project rule: never swallow errors). The Loop does **not** re-enter `Planning` in a half-resolved state and does **not** persist anything — a partially-resolved turn is never a savable or playable state. (This is a programmer bug, caught loudly.)
- **If two systems register handlers for the same phase**: they run in ascending **priority** order (each handler declares an int priority; lower runs first); equal priorities run in registration order (stable, deterministic). No phase ever runs handlers in an undefined order.
- **If a save is requested during `Resolving`**: rejected/deferred until the pipeline completes and the Loop returns to `Planning`. The atomic pipeline is never interrupted to snapshot mid-resolution.
- **If a loaded save's stored `season`/`year`/`escalationLevel` disagree with `turnIndex`**: `turnIndex` is the single source of truth — season/year/escalation are **recomputed from it** on load (F-1/F-2/F-3). The stored copies are a cross-check; a mismatch (tampering or corruption) is logged and the recomputed values win.
- **If a game-over condition is raised mid-resolution** (e.g. population hits 0 during the Population phase): the signal is **deferred until the atomic pipeline finishes** (keeping state consistent), after which the Loop **halts** — it does not re-enter `Planning` — and hands off to **Game State / Session** (system #26). The Loop itself never decides game-over (no terminal state); it only honors the signal.
- **If End Season is pressed with an empty/zero-activity settlement** (no buildings, no population): valid. The pipeline runs with zero production/consumption and the clock advances normally. No special-casing.
- **If `turnIndex` grows very large** (extremely long campaign): `turnIndex` is a safe integer; at 4 seasons/year the practical ceiling (~2⁵³) is unreachable in any real playthrough. No overflow handling is required, but the counter is documented as safe-integer-bounded.

## Dependencies

**Upstream (this system depends on): none.** The Season-Turn Loop is pure Foundation. Notably, **the systems index lists it as depending on the Content DB — that is now incorrect.** Per CR-2's hybrid decision, season *structure* is a Loop constant and season *effects* are read from the DB by the consuming systems, so the Loop itself reads nothing from the Content DB. Its only external need is an event/signal mechanism (engine-level infrastructure, resolved at architecture). *(Flagged for a systems-index correction in Phase 5.)*

**Downstream (systems that depend on this one):** these either register a phase handler, read the clock, or subscribe to lifecycle events.

| Dependent system | Nature | Interface |
|---|---|---|
| Resource Economy | Hard | Owns phases 1 (Production), 2 (Upkeep & Consumption), 4 (Storage & Spoilage); reads `season` to modulate yields/consumption |
| Population & Workers | Hard | Owns phase 3 (Population) |
| Settlement Tiers & Progression | Hard | Owns phase 5 (Tier Check) |
| Disasters & Raids | Hard | Owns phase 6 (Events & Disasters); reads `escalationLevel` for the severity ramp |
| Expedition / Venture | Hard | Expeditions resolve over turns; reads turn-advance to tick progress |
| Faction / Reactive World | Hard | Faction agendas advance per turn; subscribes to `turnDidAdvance` / `seasonChanged` |
| Trade / Market | Soft | Market may refresh on `seasonChanged`; functions within a season without turn hooks |
| UI Framework & HUD / Event Log | Hard (read-only) | Subscribes to lifecycle events; renders season/year indicator and the End Season control |
| Save/Load & Serialization | Hard | Serializes `{ turnIndex, season, year, escalationLevel }`; save permitted only in `Planning` |
| Game State / Session (#26) | Hard | Starts the Loop on new game; receives the Loop's halt and owns the game-over/victory handoff |

**Interface direction & ownership:** the Loop owns the clock, the phase order, the counters, and the lifecycle events. Phase logic flows *out* to the owning systems; the Loop reads nothing back (order is the contract). Counters are read-only to everyone else.

**Bidirectional-consistency note:** no dependent GDD is authored yet. Each, when written, must list `depends on: Season-Turn Loop` and name the phase it owns or the events/counters it reads — completing the back-reference. Pending until then.

## Tuning Knobs

Most of the Loop's *feel* (how punishing winter is, how fast difficulty bites) is tuned in the **consuming systems'** knobs, not here — the Loop just supplies the clock and the escalation signal. The Loop owns one real knob plus one structural constant:

| Knob | Type / Range | Default | Effect / interactions |
|---|---|---|---|
| `SEASONS_PER_YEAR` | int, safe 2–6 | 4 | Sets year length **and** escalation cadence (escalation steps up once per year, so fewer seasons/year = faster difficulty ramp). **Too low (1–2):** seasons lose distinct identity, escalation arrives too fast. **Too high (≥6):** years drag, the winter beat feels rare, escalation too slow. **Interacts with every per-season balance value downstream** — changing it silently rebalances the whole economy/difficulty, so it is a high-blast-radius knob. |
| `SEASON_CYCLE` | ordered enum list | `[Spring, Summer, Autumn, Winter]` | The season identities and their order. Reordering changes the rhythm and which season is the "hard" one; effectively fixed for Hearthfall. Length must equal `SEASONS_PER_YEAR`. |

**Deliberately NOT knobs:** the **8-phase resolution order** (CR-4) and **resolve-current-then-advance** (CR-3) are structural design decisions, not data-tunable values — changing them alters correctness and cross-system semantics, so they live in code/ADR, never in a designer-facing config. Exposing them as knobs would let a tweak silently break every dependent system's assumptions.

**Cross-reference:** the experiential pacing knobs (winter-severity-per-escalationLevel, raid frequency, seasonal yield multipliers) belong to Resource Economy and Disasters & Raids — the Loop references `escalationLevel`/`season` but does not duplicate those knobs.

## Visual/Audio Requirements

The key beat is the **season transition** on each turn advance: the season indicator updates and a season-appropriate ambient shift plays, with a stronger cue on **Winter's arrival** and on **year change** (the escalation beat). Tier-up milestone audio is owned by Tiers & Progression, not here. The Loop's job is to **emit the events** (`seasonChanged`, `yearChanged`) that drive these cues; the actual VFX/SFX are specified later. Carry the colorblind hard constraint: the season is conveyed by icon + label, never color alone. Full direction deferred to `/art-bible` + `audio-director`.

📌 **Asset Spec** — Visual/Audio requirements are defined. After the art bible is approved, run `/asset-spec system:season-turn-loop` to produce the season-transition cue specs.

## UI Requirements

Two HUD elements, both rendered by **UI Framework & HUD** (not the Loop):
1. The **End Season control** — the single most-pressed button; primary affordance. The Loop exposes the trigger and the input-lock state (CR-8) so the button disables during `Resolving`.
2. The **season/year indicator** — shows current season + year, fed by the Loop's read-only counters.

Per-phase resolution may surface as **Event Log** entries (owned by that system). The Loop provides data + events; it owns no widgets itself.

📌 **UX Flag — Season-Turn Loop**: This system feeds the End Season control + season/year indicator. In Pre-Production, run `/ux-design` for the HUD **before** writing epics; UI stories should cite `design/ux/[screen].md`, not this GDD.

## Acceptance Criteria

*Type key:* **Logic** = automated unit, BLOCKING · **Integration** = BLOCKING · **Build** = compile/CI · **Advisory** = perf/config. (`qa-lead` consulted; fixes incorporated.)

**Time & formulas**
- **AC-1 (CR-1, Logic)** — GIVEN `Planning`, WHEN any number of player actions occur with no End Season, THEN `turnIndex` and `season` never change (time advances only on End Season).
- **AC-22 (initial state, Logic)** — GIVEN a freshly initialized Loop with no End Season yet, THEN `turnIndex=0`, `season=Spring`, `year=1`, `escalationLevel=0`.
- **AC-5 (F-1/F-2, Logic)** — GIVEN `turnIndex=0`, WHEN End Season is pressed 4×, THEN `turnIndex=4`, `season=Spring`, `year=2`.
- **AC-7 (F-2, Logic)** — GIVEN `turnIndex` ∈ {0, 3, 4, 7}, THEN `season` = {Spring, Winter, Spring, Winter} respectively.
- **AC-18 (F-3, Logic)** — GIVEN `turnIndex` ∈ {0, 3, 4, 7, 8}, THEN `escalationLevel` = {0, 0, 1, 1, 2} respectively.
- **AC-6 (CR-5 escalation, Logic)** — GIVEN year 1, WHEN the loop crosses Winter→Spring, THEN `escalationLevel` increments by exactly 1; AND on Spring→Summer, Summer→Autumn, and Autumn→Winter it is explicitly unchanged from the prior value.
- **AC-23 (`SEASONS_PER_YEAR` knob, Advisory)** — GIVEN `SEASONS_PER_YEAR=2`, WHEN End Season is pressed 2×, THEN `year=2`, `season=Spring`, `escalationLevel=1` (formulas use the constant, not a hardcoded 4).

**Resolution pipeline**
- **AC-2 (CR-4 order, Logic)** — GIVEN instrumented handlers on all 8 phases, WHEN End Season, THEN they fire in exactly the order phase-1 → phase-8.
- **AC-4 (CR-3, Logic)** — GIVEN `season=Winter`, WHEN End Season runs, THEN `season` reads `Winter` throughout phases 1–6 and only becomes `Spring` at/after phase 7 (Advance Clock).
- **AC-3 (CR-4 atomic, Logic)** — GIVEN `Resolving`, WHEN a `placeBuilding` command (or any player input) is issued mid-pipeline, THEN it is rejected and the pipeline completes uninterrupted.
- **AC-9 (CR-7 priority, Logic)** — GIVEN two handlers on one phase with priorities 10 and 5, WHEN that phase runs, THEN priority-5 runs first; GIVEN equal priorities, THEN registration order is preserved.
- **AC-10 (CR-8, Logic)** — GIVEN End Season pressed, WHEN resolution runs, THEN input is locked until `turnDidAdvance`, then re-enabled.
- **AC-13 (edge double-press, Logic)** — GIVEN `Resolving`, WHEN End Season is pressed again, THEN it is a no-op (pipeline fires exactly once).
- **AC-24 (edge empty settlement, Integration)** — GIVEN zero buildings and zero population in `Planning`, WHEN End Season, THEN all 8 phases fire without error, `turnIndex` increments by 1, and the Loop returns to `Planning`.

**Lifecycle events**
- **AC-11 (Logic)** — GIVEN `turnIndex=3` (Winter, year 1), WHEN phase 7 runs, THEN `seasonChanged(from: Winter, to: Spring)` and `yearChanged(year: 2, escalationLevel: 1)` fire with exactly those args, and `turnDidAdvance` fires after phase 8.
- **AC-19 (`turnWillAdvance`, Logic)** — GIVEN listeners on `turnWillAdvance` and all 8 phases, WHEN End Season, THEN `turnWillAdvance` fires before the phase-1 handler.
- **AC-20 (per-phase signals, Logic)** — GIVEN listeners on each per-phase signal, WHEN End Season, THEN exactly 8 phase signals fire in order, each before its corresponding handler.
- **AC-21 (`yearChanged` negative, Logic)** — GIVEN `season` ∈ {Spring, Summer, Autumn}, WHEN End Season, THEN `yearChanged` does **not** fire.

**Counters, state, persistence**
- **AC-8 (CR-5 read-only, Build + Logic)** — GIVEN the counter interface typed `readonly`, WHEN a system assigns to `turnIndex`/`season`/`year`/`escalationLevel` via the public interface, THEN the TypeScript compiler rejects it at build time; AND if a runtime guard (frozen object) is used, the assignment throws `TypeError`.
- **AC-12 (edge handler-throw, Logic)** — GIVEN a phase handler that throws, WHEN End Season, THEN the turn aborts with a fatal error surfaced, the Loop does **not** enter `Planning`, and nothing is persisted.
- **AC-14 (Save/Load, Integration)** — GIVEN `Planning` at `turnIndex=5`, WHEN saved and reloaded, THEN `{turnIndex, season, year, escalationLevel}` restore identically; AND a save requested during `Resolving` is deferred until `Planning`.
- **AC-15 (edge load-mismatch, Logic)** — GIVEN a save whose stored `season` disagrees with `turnIndex`, WHEN loaded, THEN `season` is recomputed from `turnIndex` (canonical) and the mismatch is logged.
- **AC-16 (edge game-over, Logic)** — GIVEN a game-over signal raised during the Population phase, WHEN the pipeline runs, THEN all 8 phases still complete, then the Loop **halts** without returning to `Planning`.

**Performance**
- **AC-17 (Advisory)** — GIVEN an MVP-size settlement (≈15 buildings, ≈30 population), WHEN End Season resolves, THEN the full pipeline completes within one frame budget (16 ms).

## Open Questions

- **OQ-1 — End Season confirmation?** Since End Season is committal with no undo (CR-9), does it need a confirm prompt to prevent misclicks, or is that friction on the most-pressed button? *Owner: ux-designer. Target: UX design.*
- **OQ-2 — Game-over ownership gap. ✅ RESOLVED (2026-06-26).** Added **Game State / Session** (system #26, Core, MVP) to the systems index — it owns the session lifecycle (menu/new-game/pause/quit) and the game-over/victory **handoff** the Loop hands off to. Win/loss *conditions* stay distributed: detecting systems (Tiers/Central Mystery for victory; later Population for defeat) emit signals Game State handles. MVP failure model is **soft-only** (no hard lose-screen; vertical-slice victory screen only). The Loop's role is unchanged — it halts on the signal and hands to Game State / Session.
- **OQ-3 — Phase-handler priority registry.** Within-phase ordering uses int priorities (CR-7); who assigns them and is there a canonical cross-system priority scheme? *Owner: technical-director. Target: architecture (ADR).*
- **OQ-4 — Turn-pipeline ADR.** The phase pipeline + handler-registration mechanism is a strong Architecture Decision Record candidate (alongside the Content DB format ADR). *Owner: technical-director. Target: `/create-architecture`.*
- **OQ-5 — `SEASONS_PER_YEAR` final value.** Assumed 4; lock after vertical-slice playtest. *Owner: this GDD / balance. Target: vertical slice.*
