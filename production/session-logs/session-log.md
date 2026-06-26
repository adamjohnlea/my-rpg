## Session End: 20260625_205045
### Uncommitted Changes
package-lock.json
---

## Session End: 20260625_205515
### Uncommitted Changes
package-lock.json
---

## Session End: 20260625_205921
### Uncommitted Changes
package-lock.json
---

## Session End: 20260625_210229
### Commits
c2fad42 Wire Phaser 4 specialist into Game Studios orchestration
---

## Session End: 20260625_211140
### Commits
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
---

## Session End: 20260625_211311
### Commits
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Session End: 20260625_212017
### Commits
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Session End: 20260625_212318
### Commits
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Session End: 20260625_212435
### Commits
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Session End: 20260625_213623
### Commits
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Session End: 20260625_215937
### Commits
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_222158
# Active Session State

## Current Task
Concept prototype — **Hearthfall** core loop validation (Engine path, Phaser 4).

## Hypothesis (falsifiable)
If the player builds and tends a homestead — placing structures and working plots
within a season, then advancing the turn — they'll feel the pull of growth and
"one more season." Signal: within ~10 minutes the player voluntarily advances 5+
seasons in a row wanting to see their settlement grow, unprompted.

**Riskiest assumption under test:** that a turn-based (non-real-time) building loop
can feel *tactile and satisfying* moment-to-moment, not like spreadsheet bookkeeping.

## Path
Engine — native Phaser 4 build (throwaway, in `prototypes/homestead-loop-concept/`).
Never imports from / to production `src/`.

## Scope (one mechanic: season-turn build-and-grow)
- 6×6 grid homestead; click to place buildings (Farm / Forester / House / Granary).
- Resources: Wood, Food (with storage cap), Population (with cap).
- "End Season" advances turn: production → storage clamp → consumption → growth/
  starvation → season cycles Spring→Summer→Autumn→Winter.
- Winter pressure: farms dormant, double food consumption → the planning decision.
- Tier-up: Homestead → Hamlet → Village at population thresholds.
- Cut: menus, save, sound, story, expeditions, factions, art, win/lose screens.

## Phase
Phase 5 — Implement (Engine path multi-turn loop: user runs, reports, iterate).

## Run command
`npx vite prototypes/homestead-loop-concept --port 5180` then open the printed URL.

## Files
- `prototypes/homestead-loop-concept/index.html`
- `prototypes/homestead-loop-concept/main.ts`
---

## Session End: 20260625_222158
### Commits
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_223031
# Active Session State

## Current Task
Concept prototype — **Hearthfall** core loop validation (Engine path, Phaser 4).

## Hypothesis (falsifiable)
If the player builds and tends a homestead — placing structures and working plots
within a season, then advancing the turn — they'll feel the pull of growth and
"one more season." Signal: within ~10 minutes the player voluntarily advances 5+
seasons in a row wanting to see their settlement grow, unprompted.

**Riskiest assumption under test:** that a turn-based (non-real-time) building loop
can feel *tactile and satisfying* moment-to-moment, not like spreadsheet bookkeeping.

## Path
Engine — native Phaser 4 build (throwaway, in `prototypes/homestead-loop-concept/`).
Never imports from / to production `src/`.

## Scope (one mechanic: season-turn build-and-grow)
- 6×6 grid homestead; click to place buildings (Farm / Forester / House / Granary).
- Resources: Wood, Food (with storage cap), Population (with cap).
- "End Season" advances turn: production → storage clamp → consumption → growth/
  starvation → season cycles Spring→Summer→Autumn→Winter.
- Winter pressure: farms dormant, double food consumption → the planning decision.
- Tier-up: Homestead → Hamlet → Village at population thresholds.
- Cut: menus, save, sound, story, expeditions, factions, art, win/lose screens.

## Phase
Phase 5 — Implement (Engine path multi-turn loop: user runs, reports, iterate).

## Run command
`npx vite prototypes/homestead-loop-concept --port 5180` then open the printed URL.

## Files
- `prototypes/homestead-loop-concept/index.html`
- `prototypes/homestead-loop-concept/main.ts`
---

## Session End: 20260625_223031
### Commits
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_223059
# Active Session State

## Current Task
Concept prototype — **Hearthfall** core loop validation (Engine path, Phaser 4).

## Hypothesis (falsifiable)
If the player builds and tends a homestead — placing structures and working plots
within a season, then advancing the turn — they'll feel the pull of growth and
"one more season." Signal: within ~10 minutes the player voluntarily advances 5+
seasons in a row wanting to see their settlement grow, unprompted.

**Riskiest assumption under test:** that a turn-based (non-real-time) building loop
can feel *tactile and satisfying* moment-to-moment, not like spreadsheet bookkeeping.

## Path
Engine — native Phaser 4 build (throwaway, in `prototypes/homestead-loop-concept/`).
Never imports from / to production `src/`.

## Scope (one mechanic: season-turn build-and-grow)
- 6×6 grid homestead; click to place buildings (Farm / Forester / House / Granary).
- Resources: Wood, Food (with storage cap), Population (with cap).
- "End Season" advances turn: production → storage clamp → consumption → growth/
  starvation → season cycles Spring→Summer→Autumn→Winter.
- Winter pressure: farms dormant, double food consumption → the planning decision.
- Tier-up: Homestead → Hamlet → Village at population thresholds.
- Cut: menus, save, sound, story, expeditions, factions, art, win/lose screens.

## Phase
Phase 5 — Implement (Engine path multi-turn loop: user runs, reports, iterate).

## Run command
`npx vite prototypes/homestead-loop-concept --port 5180` then open the printed URL.

## Files
- `prototypes/homestead-loop-concept/index.html`
- `prototypes/homestead-loop-concept/main.ts`
---

## Session End: 20260625_223059
### Commits
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_223321
# Active Session State

## Current Task
Concept prototype — **Hearthfall** core loop validation (Engine path, Phaser 4).

## Hypothesis (falsifiable)
If the player builds and tends a homestead — placing structures and working plots
within a season, then advancing the turn — they'll feel the pull of growth and
"one more season." Signal: within ~10 minutes the player voluntarily advances 5+
seasons in a row wanting to see their settlement grow, unprompted.

**Riskiest assumption under test:** that a turn-based (non-real-time) building loop
can feel *tactile and satisfying* moment-to-moment, not like spreadsheet bookkeeping.

## Path
Engine — native Phaser 4 build (throwaway, in `prototypes/homestead-loop-concept/`).
Never imports from / to production `src/`.

## Scope (one mechanic: season-turn build-and-grow)
- 6×6 grid homestead; click to place buildings (Farm / Forester / House / Granary).
- Resources: Wood, Food (with storage cap), Population (with cap).
- "End Season" advances turn: production → storage clamp → consumption → growth/
  starvation → season cycles Spring→Summer→Autumn→Winter.
- Winter pressure: farms dormant, double food consumption → the planning decision.
- Tier-up: Homestead → Hamlet → Village at population thresholds.
- Cut: menus, save, sound, story, expeditions, factions, art, win/lose screens.

## Phase
Phase 5 — Implement (Engine path multi-turn loop: user runs, reports, iterate).

## Run command
`npx vite prototypes/homestead-loop-concept --port 5180` then open the printed URL.

## Files
- `prototypes/homestead-loop-concept/index.html`
- `prototypes/homestead-loop-concept/main.ts`
---

## Session End: 20260625_223321
### Commits
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_223531
# Active Session State

## Current Task
Concept prototype — **Hearthfall** core loop validation (Engine path, Phaser 4).

## Hypothesis (falsifiable)
If the player builds and tends a homestead — placing structures and working plots
within a season, then advancing the turn — they'll feel the pull of growth and
"one more season." Signal: within ~10 minutes the player voluntarily advances 5+
seasons in a row wanting to see their settlement grow, unprompted.

**Riskiest assumption under test:** that a turn-based (non-real-time) building loop
can feel *tactile and satisfying* moment-to-moment, not like spreadsheet bookkeeping.

## Path
Engine — native Phaser 4 build (throwaway, in `prototypes/homestead-loop-concept/`).
Never imports from / to production `src/`.

## Scope (one mechanic: season-turn build-and-grow)
- 6×6 grid homestead; click to place buildings (Farm / Forester / House / Granary).
- Resources: Wood, Food (with storage cap), Population (with cap).
- "End Season" advances turn: production → storage clamp → consumption → growth/
  starvation → season cycles Spring→Summer→Autumn→Winter.
- Winter pressure: farms dormant, double food consumption → the planning decision.
- Tier-up: Homestead → Hamlet → Village at population thresholds.
- Cut: menus, save, sound, story, expeditions, factions, art, win/lose screens.

## Phase
Phase 5 — Implement (Engine path multi-turn loop: user runs, reports, iterate).

## Run command
`npx vite prototypes/homestead-loop-concept --port 5180` then open the printed URL.

## Files
- `prototypes/homestead-loop-concept/index.html`
- `prototypes/homestead-loop-concept/main.ts`
---

## Session End: 20260625_223531
### Commits
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_223833
# Active Session State

## Current Task
Concept prototype — **Hearthfall** core loop validation (Engine path, Phaser 4).

## Hypothesis (falsifiable)
If the player builds and tends a homestead — placing structures and working plots
within a season, then advancing the turn — they'll feel the pull of growth and
"one more season." Signal: within ~10 minutes the player voluntarily advances 5+
seasons in a row wanting to see their settlement grow, unprompted.

**Riskiest assumption under test:** that a turn-based (non-real-time) building loop
can feel *tactile and satisfying* moment-to-moment, not like spreadsheet bookkeeping.

## Path
Engine — native Phaser 4 build (throwaway, in `prototypes/homestead-loop-concept/`).
Never imports from / to production `src/`.

## Scope (one mechanic: season-turn build-and-grow)
- 6×6 grid homestead; click to place buildings (Farm / Forester / House / Granary).
- Resources: Wood, Food (with storage cap), Population (with cap).
- "End Season" advances turn: production → storage clamp → consumption → growth/
  starvation → season cycles Spring→Summer→Autumn→Winter.
- Winter pressure: farms dormant, double food consumption → the planning decision.
- Tier-up: Homestead → Hamlet → Village at population thresholds.
- Cut: menus, save, sound, story, expeditions, factions, art, win/lose screens.

## Phase
Phase 5 — Implement (Engine path multi-turn loop: user runs, reports, iterate).

## Run command
`npx vite prototypes/homestead-loop-concept --port 5180` then open the printed URL.

## Files
- `prototypes/homestead-loop-concept/index.html`
- `prototypes/homestead-loop-concept/main.ts`
---

## Session End: 20260625_223833
### Commits
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_224111
# Active Session State

## Current Task
Concept prototype — **Hearthfall** core loop validation (Engine path, Phaser 4).

## Hypothesis (falsifiable)
If the player builds and tends a homestead — placing structures and working plots
within a season, then advancing the turn — they'll feel the pull of growth and
"one more season." Signal: within ~10 minutes the player voluntarily advances 5+
seasons in a row wanting to see their settlement grow, unprompted.

**Riskiest assumption under test:** that a turn-based (non-real-time) building loop
can feel *tactile and satisfying* moment-to-moment, not like spreadsheet bookkeeping.

## Path
Engine — native Phaser 4 build (throwaway, in `prototypes/homestead-loop-concept/`).
Never imports from / to production `src/`.

## Scope (one mechanic: season-turn build-and-grow)
- 6×6 grid homestead; click to place buildings (Farm / Forester / House / Granary).
- Resources: Wood, Food (with storage cap), Population (with cap).
- "End Season" advances turn: production → storage clamp → consumption → growth/
  starvation → season cycles Spring→Summer→Autumn→Winter.
- Winter pressure: farms dormant, double food consumption → the planning decision.
- Tier-up: Homestead → Hamlet → Village at population thresholds.
- Cut: menus, save, sound, story, expeditions, factions, art, win/lose screens.

## Phase
Phase 5 — Implement (Engine path multi-turn loop: user runs, reports, iterate).

## Run command
`npx vite prototypes/homestead-loop-concept --port 5180` then open the printed URL.

## Files
- `prototypes/homestead-loop-concept/index.html`
- `prototypes/homestead-loop-concept/main.ts`
---

## Session End: 20260625_224111
### Commits
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_224504
# Active Session State

## Current Task
Hearthfall pre-production. Concept + concept-prototype COMPLETE. Next: fold prototype
learnings into design, then `/map-systems`.

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps (PROCEED path)
1. `/design-review design/gdd/game-concept.md`
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first")
4. `/map-systems` (add Spatial Adjacency / Zoning as a system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260625_224504
### Commits
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_224814
# Active Session State

## Current Task
Hearthfall pre-production. Concept + concept-prototype COMPLETE. Next: fold prototype
learnings into design, then `/map-systems`.

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps (PROCEED path)
1. `/design-review design/gdd/game-concept.md`
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first")
4. `/map-systems` (add Spatial Adjacency / Zoning as a system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260625_224814
### Commits
268d838 chore: add Hearthfall concept prototype + PROCEED report
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260625_225051
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is
> **`/design-review design/gdd/game-concept.md`** (see Next steps below).
> Last worked: 2026-06-25. Everything is committed and pushed to origin/main.

## Current Task
Hearthfall pre-production. Concept + concept-prototype COMPLETE. Next: fold prototype
learnings into design, then `/map-systems`.

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps (PROCEED path)
1. `/design-review design/gdd/game-concept.md`
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first")
4. `/map-systems` (add Spatial Adjacency / Zoning as a system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260625_225051
### Commits
bc51b24 docs: add resume pointer to session checkpoint
268d838 chore: add Hearthfall concept prototype + PROCEED report
0470d37 docs: add Hearthfall game concept
f502c5b Remove stale Godot engine-reference import from CLAUDE.md
5fb1ae8 Wire Phaser 4 specialist into Game Studios orchestration
7c61080 Add Claude Code Game Studios template scaffold
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260626_084532
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
Hearthfall pre-production. Concept + concept-prototype + design-review COMPLETE.
Next: validate the unproven narrative axis (Tier-0.5 prototype), then `/map-systems`.

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_084532
### Commits
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260626_085858
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Tier-0.5 narrative/discovery prototype IN PROGRESS** (Phase 5 — Implement).
- Concept: "The Unclaimed Valley" — clue-assembly discovery slice.
- Hypothesis: uncovering a cataclysm by combining concrete *systemic* clues (not lore text)
  produces an *earned* "aha!"; confirmed if the player voices a theory BEFORE concluding and
  the convergence feels satisfying, not "told."
- Riskiest assumption (tested first): the *earning* creates the feeling, not the prose.
- Path: HTML (interactive deduction; player must personally connect clues).
- Scope: ~6 tiles/4 actions, 8 terse clues, 1 north-ridge cataclysm + 4 decoys (wildfire is
  the trap), a Field Journal, a Conclusion step. CUT: economy, winter, art, branching, save.
- File: `prototypes/unclaimed-valley-concept/prototype.html`
- Review mode: lean (CD-PLAYTEST gate skipped).
(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_085858
### Commits
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_090222
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Tier-0.5 narrative/discovery prototype IN PROGRESS** (Phase 5 — Implement).
- Concept: "The Unclaimed Valley" — clue-assembly discovery slice.
- Hypothesis: uncovering a cataclysm by combining concrete *systemic* clues (not lore text)
  produces an *earned* "aha!"; confirmed if the player voices a theory BEFORE concluding and
  the convergence feels satisfying, not "told."
- Riskiest assumption (tested first): the *earning* creates the feeling, not the prose.
- Path: HTML (interactive deduction; player must personally connect clues).
- Scope: ~6 tiles/4 actions, 8 terse clues, 1 north-ridge cataclysm + 4 decoys (wildfire is
  the trap), a Field Journal, a Conclusion step. CUT: economy, winter, art, branching, save.
- File: `prototypes/unclaimed-valley-concept/prototype.html`
- Review mode: lean (CD-PLAYTEST gate skipped).
(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_090222
### Commits
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_090354
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Tier-0.5 narrative/discovery prototype IN PROGRESS** (Phase 5 — Implement).
- Concept: "The Unclaimed Valley" — clue-assembly discovery slice.
- Hypothesis: uncovering a cataclysm by combining concrete *systemic* clues (not lore text)
  produces an *earned* "aha!"; confirmed if the player voices a theory BEFORE concluding and
  the convergence feels satisfying, not "told."
- Riskiest assumption (tested first): the *earning* creates the feeling, not the prose.
- Path: HTML (interactive deduction; player must personally connect clues).
- Scope: ~6 tiles/4 actions, 8 terse clues, 1 north-ridge cataclysm + 4 decoys (wildfire is
  the trap), a Field Journal, a Conclusion step. CUT: economy, winter, art, branching, save.
- File: `prototypes/unclaimed-valley-concept/prototype.html`
- Review mode: lean (CD-PLAYTEST gate skipped).
(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_090354
### Commits
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_090611
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Tier-0.5 narrative/discovery prototype IN PROGRESS** (Phase 5 — Implement).
- Concept: "The Unclaimed Valley" — clue-assembly discovery slice.
- Hypothesis: uncovering a cataclysm by combining concrete *systemic* clues (not lore text)
  produces an *earned* "aha!"; confirmed if the player voices a theory BEFORE concluding and
  the convergence feels satisfying, not "told."
- Riskiest assumption (tested first): the *earning* creates the feeling, not the prose.
- Path: HTML (interactive deduction; player must personally connect clues).
- Scope: ~6 tiles/4 actions, 8 terse clues, 1 north-ridge cataclysm + 4 decoys (wildfire is
  the trap), a Field Journal, a Conclusion step. CUT: economy, winter, art, branching, save.
- File: `prototypes/unclaimed-valley-concept/prototype.html`
- Review mode: lean (CD-PLAYTEST gate skipped).
(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_090611
### Commits
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_090931
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Tier-0.5 narrative/discovery prototype IN PROGRESS** (Phase 5 — Implement).
- Concept: "The Unclaimed Valley" — clue-assembly discovery slice.
- Hypothesis: uncovering a cataclysm by combining concrete *systemic* clues (not lore text)
  produces an *earned* "aha!"; confirmed if the player voices a theory BEFORE concluding and
  the convergence feels satisfying, not "told."
- Riskiest assumption (tested first): the *earning* creates the feeling, not the prose.
- Path: HTML (interactive deduction; player must personally connect clues).
- Scope: ~6 tiles/4 actions, 8 terse clues, 1 north-ridge cataclysm + 4 decoys (wildfire is
  the trap), a Field Journal, a Conclusion step. CUT: economy, winter, art, branching, save.
- File: `prototypes/unclaimed-valley-concept/prototype.html`
- Review mode: lean (CD-PLAYTEST gate skipped).
(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_090931
### Commits
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_091836
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Tier-0.5 narrative/discovery prototype COMPLETE → PIVOT.** Next: prototype the revised
"lore-as-power" discovery loop (see PIVOT-NOTE), then `/map-systems`.

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_091836
### Commits
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260626_093320
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Lore-as-power prototype BUILT & VERIFIED — awaiting playtest debrief (Phase 6).**
- "Knowledge is Power" — Phaser 4 engine slice. `prototypes/lore-as-power-concept/` (index.html + main.ts).
- Loop: venture to 9 ring nodes → receptive peoples/sites give lore, soldiers/barbarians refuse →
  complete a themed set (Great Fire / Old Roads / River Pact) → gain a thematic perk
  (Fireward / Pathwise +3 prov / Wellspring +1/venture). Wildfire at the 5th venture: Fireward →
  bounces off; else −5 provisions. Tests "knowledge = power" + forward-pull, no deduction.
- Verified via preview (port 5182, launch.json → lore-as-power-proto): both win path (Fireward →
  wildfire bounces) and fail path (no Fireward → −5) confirmed; faction-gating works.
- Run: `npx vite prototypes/lore-as-power-concept --port 5182` (or preview launch config).
- Review mode: lean (CD-PLAYTEST skipped).
- NEXT: user plays → 5-question debrief → REPORT + verdict (PROCEED/PIVOT/KILL).
(Earlier this task line: prototype the lore-as-power loop — now done.)

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_093320
### Commits
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_093808
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Lore-as-power prototype BUILT & VERIFIED — awaiting playtest debrief (Phase 6).**
- "Knowledge is Power" — Phaser 4 engine slice. `prototypes/lore-as-power-concept/` (index.html + main.ts).
- Loop: venture to 9 ring nodes → receptive peoples/sites give lore, soldiers/barbarians refuse →
  complete a themed set (Great Fire / Old Roads / River Pact) → gain a thematic perk
  (Fireward / Pathwise +3 prov / Wellspring +1/venture). Wildfire at the 5th venture: Fireward →
  bounces off; else −5 provisions. Tests "knowledge = power" + forward-pull, no deduction.
- Verified via preview (port 5182, launch.json → lore-as-power-proto): both win path (Fireward →
  wildfire bounces) and fail path (no Fireward → −5) confirmed; faction-gating works.
- Run: `npx vite prototypes/lore-as-power-concept --port 5182` (or preview launch config).
- Review mode: lean (CD-PLAYTEST skipped).
- NEXT: user plays → 5-question debrief → REPORT + verdict (PROCEED/PIVOT/KILL).
(Earlier this task line: prototype the lore-as-power loop — now done.)

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_093808
### Commits
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_094024
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Lore-as-power prototype BUILT & VERIFIED — awaiting playtest debrief (Phase 6).**
- "Knowledge is Power" — Phaser 4 engine slice. `prototypes/lore-as-power-concept/` (index.html + main.ts).
- Loop: venture to 9 ring nodes → receptive peoples/sites give lore, soldiers/barbarians refuse →
  complete a themed set (Great Fire / Old Roads / River Pact) → gain a thematic perk
  (Fireward / Pathwise +3 prov / Wellspring +1/venture). Wildfire at the 5th venture: Fireward →
  bounces off; else −5 provisions. Tests "knowledge = power" + forward-pull, no deduction.
- Verified via preview (port 5182, launch.json → lore-as-power-proto): both win path (Fireward →
  wildfire bounces) and fail path (no Fireward → −5) confirmed; faction-gating works.
- Run: `npx vite prototypes/lore-as-power-concept --port 5182` (or preview launch config).
- Review mode: lean (CD-PLAYTEST skipped).
- NEXT: user plays → 5-question debrief → REPORT + verdict (PROCEED/PIVOT/KILL).
(Earlier this task line: prototype the lore-as-power loop — now done.)

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_094024
### Commits
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_094327
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Lore-as-power prototype BUILT & VERIFIED — awaiting playtest debrief (Phase 6).**
- "Knowledge is Power" — Phaser 4 engine slice. `prototypes/lore-as-power-concept/` (index.html + main.ts).
- Loop: venture to 9 ring nodes → receptive peoples/sites give lore, soldiers/barbarians refuse →
  complete a themed set (Great Fire / Old Roads / River Pact) → gain a thematic perk
  (Fireward / Pathwise +3 prov / Wellspring +1/venture). Wildfire at the 5th venture: Fireward →
  bounces off; else −5 provisions. Tests "knowledge = power" + forward-pull, no deduction.
- Verified via preview (port 5182, launch.json → lore-as-power-proto): both win path (Fireward →
  wildfire bounces) and fail path (no Fireward → −5) confirmed; faction-gating works.
- Run: `npx vite prototypes/lore-as-power-concept --port 5182` (or preview launch config).
- Review mode: lean (CD-PLAYTEST skipped).
- NEXT: user plays → 5-question debrief → REPORT + verdict (PROCEED/PIVOT/KILL).
(Earlier this task line: prototype the lore-as-power loop — now done.)

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_094327
### Commits
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_094624
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Lore-as-power prototype BUILT & VERIFIED — awaiting playtest debrief (Phase 6).**
- "Knowledge is Power" — Phaser 4 engine slice. `prototypes/lore-as-power-concept/` (index.html + main.ts).
- Loop: venture to 9 ring nodes → receptive peoples/sites give lore, soldiers/barbarians refuse →
  complete a themed set (Great Fire / Old Roads / River Pact) → gain a thematic perk
  (Fireward / Pathwise +3 prov / Wellspring +1/venture). Wildfire at the 5th venture: Fireward →
  bounces off; else −5 provisions. Tests "knowledge = power" + forward-pull, no deduction.
- Verified via preview (port 5182, launch.json → lore-as-power-proto): both win path (Fireward →
  wildfire bounces) and fail path (no Fireward → −5) confirmed; faction-gating works.
- Run: `npx vite prototypes/lore-as-power-concept --port 5182` (or preview launch config).
- Review mode: lean (CD-PLAYTEST skipped).
- NEXT: user plays → 5-question debrief → REPORT + verdict (PROCEED/PIVOT/KILL).
(Earlier this task line: prototype the lore-as-power loop — now done.)

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_094624
### Commits
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_094711
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Lore-as-power prototype BUILT & VERIFIED — awaiting playtest debrief (Phase 6).**
- "Knowledge is Power" — Phaser 4 engine slice. `prototypes/lore-as-power-concept/` (index.html + main.ts).
- Loop: venture to 9 ring nodes → receptive peoples/sites give lore, soldiers/barbarians refuse →
  complete a themed set (Great Fire / Old Roads / River Pact) → gain a thematic perk
  (Fireward / Pathwise +3 prov / Wellspring +1/venture). Wildfire at the 5th venture: Fireward →
  bounces off; else −5 provisions. Tests "knowledge = power" + forward-pull, no deduction.
- Verified via preview (port 5182, launch.json → lore-as-power-proto): both win path (Fireward →
  wildfire bounces) and fail path (no Fireward → −5) confirmed; faction-gating works.
- Run: `npx vite prototypes/lore-as-power-concept --port 5182` (or preview launch config).
- Review mode: lean (CD-PLAYTEST skipped).
- NEXT: user plays → 5-question debrief → REPORT + verdict (PROCEED/PIVOT/KILL).
(Earlier this task line: prototype the lore-as-power loop — now done.)

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_094711
### Commits
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
.claude/launch.json
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_095047
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Pre-production prototyping COMPLETE.** Both core hypotheses validated. Next: fold prototype
learnings into the concept (light update) → `/map-systems`. Recommended order in Next steps below.

### Lore-as-power prototype result (2026-06-26) → PROCEED
- "Knowledge is Power" (Phaser 4 engine slice, `prototypes/lore-as-power-concept/`) →
  **PROCEED** (hypothesis CONFIRMED). Report: `prototypes/lore-as-power-concept/REPORT.md`.
- **Validated:** lore → thematic mechanical perk (knowledge = power) pulls the player FORWARD
  into exploration, no deduction. Wildfire bounces off Fireward = the payoff.
- **Emotional core (consistent across BOTH discovery prototypes):** faction-gated SOCIAL
  encounters (wanderer/traveler vs. soldier/barbarian rebuff). Route discovery through
  *peoples with dispositions*, not just sites.
- **PROCEED design note:** discovery must be **organic & non-linear across a large map** —
  NOT fixed labeled destinations (the prototype's flatness was its contrived setup, not the
  mechanic). Perks earned through real venturing will "land much harder."
- Review mode: lean (CD-PLAYTEST skipped).

### Pre-production status
- ✅ Concept (brainstorm) → design-review (NEEDS REVISION → revised → approved)
- ✅ Prototype 1: season-turn building loop → PROCEED
- ✅ Prototype 2: Earned Discovery → PIVOT (deduction) → **lore-as-power → PROCEED**
- Uncommitted: prototypes/lore-as-power-concept/, .claude/launch.json (lore-as-power-proto),
  prototypes/index.md, production/session-state/active.md.

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_095047
### Commits
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260626_095305
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Pre-production prototyping COMPLETE.** Both core hypotheses validated. Next: fold prototype
learnings into the concept (light update) → `/map-systems`. Recommended order in Next steps below.

### Lore-as-power prototype result (2026-06-26) → PROCEED
- "Knowledge is Power" (Phaser 4 engine slice, `prototypes/lore-as-power-concept/`) →
  **PROCEED** (hypothesis CONFIRMED). Report: `prototypes/lore-as-power-concept/REPORT.md`.
- **Validated:** lore → thematic mechanical perk (knowledge = power) pulls the player FORWARD
  into exploration, no deduction. Wildfire bounces off Fireward = the payoff.
- **Emotional core (consistent across BOTH discovery prototypes):** faction-gated SOCIAL
  encounters (wanderer/traveler vs. soldier/barbarian rebuff). Route discovery through
  *peoples with dispositions*, not just sites.
- **PROCEED design note:** discovery must be **organic & non-linear across a large map** —
  NOT fixed labeled destinations (the prototype's flatness was its contrived setup, not the
  mechanic). Perks earned through real venturing will "land much harder."
- Review mode: lean (CD-PLAYTEST skipped).

### Pre-production status
- ✅ Concept (brainstorm) → design-review (NEEDS REVISION → revised → approved)
- ✅ Prototype 1: season-turn building loop → PROCEED
- ✅ Prototype 2: Earned Discovery → PIVOT (deduction) → **lore-as-power → PROCEED**
- Uncommitted: prototypes/lore-as-power-concept/, .claude/launch.json (lore-as-power-proto),
  prototypes/index.md, production/session-state/active.md.

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_095305
### Commits
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
design/gdd/game-concept.md
production/session-logs/session-log.md
---

## Archived Session State: 20260626_100826
# Active Session State

> ▶ **TO RESUME (new session):** Read this whole file, then
> `design/gdd/game-concept.md` and `prototypes/homestead-loop-concept/REPORT.md`.
> That restores full context. The recommended next command is the
> **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
> before `/map-systems` (see Next steps below).
> Last worked: 2026-06-26. **UNCOMMITTED** — concept revisions + review log not yet committed.

## Current Task
**Systems decomposition COMPLETE.** `/map-systems` ran → `design/gdd/systems-index.md` written
(Draft). 25 systems; 21 in MVP/Vertical Slice. Next: author MVP GDDs in design order
(`/design-system` or `/map-systems next`), starting with Data-Driven Content DB.
- Key decisions: Perk/Modifier = shared system; Spatial Adjacency/Zoning deferred to Target Ship;
  MVP = thin end-to-end slice of ~each system. Cycles resolved (Faction↔Dialogue; Save/Load contract).
- High-risk: Save/Load, Resource Economy, Lore-as-Power (organic delivery), Faction (scope),
  Shared Modifier (bottleneck), hands-on→directive (additive).
- Lean mode: TD-SYSTEM-BOUNDARY / PR-SCOPE / CD-SYSTEMS gates skipped.
- Uncommitted: design/gdd/systems-index.md, production/session-state/active.md.

### Lore-as-power prototype result (2026-06-26) → PROCEED
- "Knowledge is Power" (Phaser 4 engine slice, `prototypes/lore-as-power-concept/`) →
  **PROCEED** (hypothesis CONFIRMED). Report: `prototypes/lore-as-power-concept/REPORT.md`.
- **Validated:** lore → thematic mechanical perk (knowledge = power) pulls the player FORWARD
  into exploration, no deduction. Wildfire bounces off Fireward = the payoff.
- **Emotional core (consistent across BOTH discovery prototypes):** faction-gated SOCIAL
  encounters (wanderer/traveler vs. soldier/barbarian rebuff). Route discovery through
  *peoples with dispositions*, not just sites.
- **PROCEED design note:** discovery must be **organic & non-linear across a large map** —
  NOT fixed labeled destinations (the prototype's flatness was its contrived setup, not the
  mechanic). Perks earned through real venturing will "land much harder."
- Review mode: lean (CD-PLAYTEST skipped).

### Pre-production status
- ✅ Concept (brainstorm) → design-review (NEEDS REVISION → revised → approved)
- ✅ Prototype 1: season-turn building loop → PROCEED
- ✅ Prototype 2: Earned Discovery → PIVOT (deduction) → **lore-as-power → PROCEED**
- Uncommitted: prototypes/lore-as-power-concept/, .claude/launch.json (lore-as-power-proto),
  prototypes/index.md, production/session-state/active.md.

### Discovery prototype result (2026-06-26)
- "The Unclaimed Valley" (HTML clue-assembly slice) → **PIVOT** (hypothesis PARTIALLY
  CONFIRMED). Report: `prototypes/unclaimed-valley-concept/REPORT.md`.
- **Finding:** the *deduction* step was flat and risks pulling the player out of the game;
  knowledge from a *living person* (the traveler) was the spark.
- **Pivot direction (next prototype):** **lore-as-power** — gather lore through venture/expand
  play (and receptive peoples; wanderers yes, soldiers/barbarians no), no deduction; each body
  of knowledge grants a *thematic mechanical perk* (e.g. "great fire" lore → fire defense).
  Revised hypothesis + riskiest assumption in
  `prototypes/unclaimed-valley-concept/PIVOT-NOTE.md`. Suggest an **engine** slice next so
  discovery is felt *inside* play.
- This refines the concept's Earned Discovery pillar + loop-coupling (expeditions return
  knowledge/keys). Consider a light concept-doc update if the lore-as-power loop validates.
- Uncommitted: prototypes/unclaimed-valley-concept/, .claude/launch.json (added discovery-proto),
  production/session-state/active.md.

(Prior: concept + concept-prototype + design-review COMPLETE — see below.)

## Status
- ✅ `/brainstorm` → `design/gdd/game-concept.md` (committed, pushed)
- ✅ `/prototype` (Engine/Phaser) → **PROCEED**. Report:
  `prototypes/homestead-loop-concept/REPORT.md`
- ✅ `/design-review design/gdd/game-concept.md` (2026-06-26) → **NEEDS REVISION → revised
  & accepted APPROVED**. 5-agent panel. Log: `design/gdd/reviews/game-concept-review-log.md`

## Design-review decisions folded into the concept (2026-06-26)
- **Loop coupling**: home↔expedition now interlock via 3 demands (rare materials, settlers,
  knowledge) + reciprocal home investment — no more "bonus mode" expeditions.
- **Central mystery direction**: a **cataclysm / fallen civilization** (payoff designed with
  the question, not after).
- **Sink**: **scaling upkeep/maintenance** (strategic anti-plateau drain; raids stay as
  setbacks on top).
- **Transition**: **additive** — hands-on never removed.
- **Spatial Adjacency / Zoning** promoted to candidate Core Mechanic #6.
- **Colorblind hard constraint** added to Visual Identity (carry into `/art-bible`).
- **MVP strengthened** to actually test the sink + a winter-severity escalation ramp + the
  expedition dependency (not just an optional boon).
- **OPEN/UNVALIDATED**: the *dominant* Discovery+Narrative aesthetic has never been played →
  Tier-0.5 narrative prototype recommended next.

## Prototype verdict: PROCEED (hypothesis CONFIRMED)
Turn-based building loop felt satisfying — playtester advanced 15+ seasons unprompted
(bar was 5). Pull = resource-ratio optimization, then scaling.

### Key learnings to carry into design
1. **Winter pressure is the mechanic that makes a turn a decision** (expand vs.
   stockpile). Validated *shape*: seasonal yield swing + winter double-consumption.
2. **Plateau risk**: once the economy is "solved" + surplus reached, tension dies.
   Sustained engagement REQUIRES escalating systems (winter ramp, raids, factions,
   expeditions, new buildings, discovery). This is the next thing to validate.
3. **EMERGENT FINDING — spatial zoning**: player self-organized buildings by type with
   no mechanical reason. Promote **Spatial Adjacency / Zoning** to a candidate core
   system (adjacency bonuses/penalties, districts, desirability).
4. Onboarding: discoverable (good), but first read of yields/needs should be taught
   more gently.

## Next steps
1. **Tier-0.5 narrative/discovery prototype** (`/prototype`) — validate Earned Discovery
   (the unproven *dominant* aesthetic) before writing GDDs. Small scene: uncover a
   cultural/cataclysm secret through systemic play, not a text dump.
2. `/gate-check`
3. `/art-bible` (lock "crisp & clean / readability-first"; carry the colorblind hard constraint)
4. `/map-systems` (add Spatial Adjacency / Zoning as a candidate system)
5. `/design-system [mechanic]`

## Notes
- Prototype is throwaway — never refactor into `src/`.
- Prototype dev server: `npx vite prototypes/homestead-loop-concept --port 5180`
  (or via `.claude/launch.json` → "hearthfall-proto").
- Uncommitted: prototypes/, production/session-state/active.md, .claude/launch.json.
---

## Session End: 20260626_100826
### Commits
7e84ee7 docs: add systems index (map-systems decomposition)
caf9a63 docs: fold lore-as-power discovery finding into concept
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260626_101154
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
Run **`/design-system Data-Driven Content DB`** — first MVP GDD in the design order.
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
---

## Session End: 20260626_101154
### Commits
4ac3044 docs: rewrite session checkpoint as clean handoff to Systems Design
7e84ee7 docs: add systems index (map-systems decomposition)
caf9a63 docs: fold lore-as-power discovery finding into concept
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
production/session-logs/session-log.md
---

## Archived Session State: 20260626_104131
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

**Next:** Run `/design-review design/gdd/data-driven-content-db.md` in a **fresh session** (independent critique). Then `/design-system Season-Turn Loop` (#2 in design order). Optionally `/consistency-check` first. Decisions: 11 categories, hard-fail-at-boot integrity, typed TS modules, namespaced dotted IDs (`building.sawmill`), branded ID types, frozen-after-load, schemaVersion for Save/Load.
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
---

## Session End: 20260626_104131
### Commits
4ac3044 docs: rewrite session checkpoint as clean handoff to Systems Design
7e84ee7 docs: add systems index (map-systems decomposition)
caf9a63 docs: fold lore-as-power discovery finding into concept
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
design/gdd/systems-index.md
design/registry/entities.yaml
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_104725
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

**Next:** Run `/design-review design/gdd/data-driven-content-db.md` in a **fresh session** (independent critique). Then `/design-system Season-Turn Loop` (#2 in design order). Optionally `/consistency-check` first. Decisions: 11 categories, hard-fail-at-boot integrity, typed TS modules, namespaced dotted IDs (`building.sawmill`), branded ID types, frozen-after-load, schemaVersion for Save/Load.
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
---

## Session End: 20260626_104725
### Commits
4ac3044 docs: rewrite session checkpoint as clean handoff to Systems Design
7e84ee7 docs: add systems index (map-systems decomposition)
caf9a63 docs: fold lore-as-power discovery finding into concept
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
design/gdd/systems-index.md
design/registry/entities.yaml
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_105527
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

**Next:** Run `/design-review design/gdd/data-driven-content-db.md` in a **fresh session** (independent critique). Then `/design-system Season-Turn Loop` (#2 in design order). Optionally `/consistency-check` first. Decisions: 11 categories, hard-fail-at-boot integrity, typed TS modules, namespaced dotted IDs (`building.sawmill`), branded ID types, frozen-after-load, schemaVersion for Save/Load.
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
---

## Session End: 20260626_105527
### Commits
4ac3044 docs: rewrite session checkpoint as clean handoff to Systems Design
7e84ee7 docs: add systems index (map-systems decomposition)
caf9a63 docs: fold lore-as-power discovery finding into concept
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
design/gdd/systems-index.md
design/registry/entities.yaml
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_110302
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

**Next:** Run `/design-review design/gdd/data-driven-content-db.md` in a **fresh session** (independent critique). Then `/design-system Season-Turn Loop` (#2 in design order). Optionally `/consistency-check` first. Decisions: 11 categories, hard-fail-at-boot integrity, typed TS modules, namespaced dotted IDs (`building.sawmill`), branded ID types, frozen-after-load, schemaVersion for Save/Load.
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
---

## Session End: 20260626_110302
### Commits
4ac3044 docs: rewrite session checkpoint as clean handoff to Systems Design
7e84ee7 docs: add systems index (map-systems decomposition)
caf9a63 docs: fold lore-as-power discovery finding into concept
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
design/gdd/systems-index.md
design/registry/entities.yaml
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_110939
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

**Next:** Run `/design-review design/gdd/data-driven-content-db.md` in a **fresh session** (independent critique). Then `/design-system Season-Turn Loop` (#2 in design order). Optionally `/consistency-check` first. Decisions: 11 categories, hard-fail-at-boot integrity, typed TS modules, namespaced dotted IDs (`building.sawmill`), branded ID types, frozen-after-load, schemaVersion for Save/Load.
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
---

## Session End: 20260626_110939
### Commits
4ac3044 docs: rewrite session checkpoint as clean handoff to Systems Design
7e84ee7 docs: add systems index (map-systems decomposition)
caf9a63 docs: fold lore-as-power discovery finding into concept
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
design/gdd/systems-index.md
design/registry/entities.yaml
production/session-logs/session-log.md
production/session-state/active.md
---

## Archived Session State: 20260626_114855
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
---

## Session End: 20260626_114855
### Commits
4ac3044 docs: rewrite session checkpoint as clean handoff to Systems Design
7e84ee7 docs: add systems index (map-systems decomposition)
caf9a63 docs: fold lore-as-power discovery finding into concept
8a0b0dd chore: add lore-as-power discovery prototype (PROCEED)
6fee51c chore: add Earned Discovery prototype (PIVOT) + lore-as-power pivot note
49e6514 docs: revise Hearthfall concept per design-review (NEEDS REVISION -> approved)
### Uncommitted Changes
design/gdd/systems-index.md
design/registry/entities.yaml
production/session-logs/session-log.md
production/session-state/active.md
---

