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
