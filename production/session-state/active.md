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
