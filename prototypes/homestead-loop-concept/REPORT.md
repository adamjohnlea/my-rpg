# Concept Prototype Report: Hearthfall — Season-Turn Building Loop

> **Date**: 2026-06-25
> **Prototype Path**: Engine (Phaser 4 / TypeScript, throwaway)
> **Concept File**: design/gdd/game-concept.md

---

## Hypothesis

If the player builds and tends a homestead — placing structures and working plots
within a season, then advancing the turn — they will feel the pull of growth and
"one more season." Signal: within ~10 minutes the player voluntarily advances **5+
seasons in a row** wanting to see their settlement grow, unprompted.

---

## Riskiest Assumption Tested

That a **turn-based (non-real-time) building loop can feel tactile and satisfying
moment-to-moment**, rather than like dry spreadsheet bookkeeping. This was the single
reason the concept was flagged "unproven" (game-concept.md, Open Question 1).

**Result: the assumption held.** The turn-based loop produced genuine forward pull.

---

## Approach

Built a single-mechanic Phaser prototype: a 6×6 grid where the player places four
building types (Farm, Forester, House, Granary), each with a wood cost, then presses
**End Season** to advance the turn. Seasons (Spring→Summer→Autumn→Winter) modulate
farm yield; winter makes farms dormant and doubles food consumption, creating a
recurring "expand vs. stockpile" decision. Population grows when fed and capped by
houses; food spoils above storage capacity (granaries raise the cap). Settlement tiers
up Homestead → Hamlet → Village at population thresholds.

**Path chosen:** Engine (native Phaser 4).
**Reason for path:** The concept's risk is about *feel*. Because the loop is
turn-based, browser latency does not distort the result, but the developer chose to
validate in the real engine (Phaser) for confidence. No production code was touched.

**Shortcuts taken (intentional):**
- Hardcoded all tuning values (yields, costs, caps).
- Placeholder art only — colored rectangles + letters, no assets.
- No menus, save/load, sound, story, expeditions, factions, or win/lose states.
- No error handling; single scene; copy-paste over abstraction.

---

## Result

The playtester advanced **well over 15 seasons** in a single sitting — 3× the
hypothesis signal threshold — and stopped by choice, not because anything broke.

In the player's words, the pull came in two phases:
1. **The optimization puzzle first:** *"trying to figure out the best ratio of
   wood/food/houses to allow the settlement to grow."*
2. **Then scaling it:** *"adding more of each type and seeing how far I could get."*

- **Best moment:** the early survival problem-solving, and **the first tier-up**
  (*"when the settlement grew the first time was exciting"*).
- **Worst moments:** (a) **onboarding friction** — *"frustrating to not really know
  what to do… I didn't read the yields and just started placing things, but I
  eventually figured it out"*; (b) **a "solved economy" plateau** — *"once the ratio
  needed to grow was figured out and I had plenty of wood and food, it got boring. But
  it was fun until then."*
- **Surprise (significant):** the player **spatially zoned the settlement with no
  mechanical incentive to do so** — houses and farms clustered together, foresters
  pushed to the grid edges *"away from the houses,"* granaries placed as a buffer
  between. Pure unprompted mental model of how a settlement "should" be organized.

The developer's own framing: *"for such a simple prototype, that was pretty good… it
proved we are on the right track."*

---

## Metrics

| Metric | Value |
|--------|-------|
| Path used | Engine (Phaser 4) |
| Iterations to playable | 1 (one-shot; 2 minor layout-only fixes after first render) |
| Prototype duration | ~1 session (well under the 1-day cap) |
| Playtesters | 1 internal (developer) |
| Feel assessment | Forward pull confirmed: 15+ voluntary season-advances driven by ratio-optimization then scaling. Tension flattens once the economy is "solved" and surplus is reached. |
| Hypothesis verdict | **CONFIRMED** |

---

## Recommendation: PROCEED

The riskiest assumption — that turn-based building can feel satisfying moment-to-moment
— is confirmed with strong evidence (15+ unprompted season-advances vs. a 5-season
bar, plus an exciting first tier-up). The single caveat (a boredom plateau once the
economy is solved) is **expected and informative, not disqualifying**: the prototype
deliberately cut every system that would escalate challenge (winter-severity ramping,
raids, factions with agendas, expeditions, new building types, the contested world,
authored discovery). The plateau precisely marks where those full-game systems must
carry the experience. The developer's verdict — *"as long as we keep expanding the
game and its mechanics and testing every step of the way, I think we are on to
something fun"* — matches the evidence. Proceed to design, building and testing
incrementally.

---

## If Proceeding

- **Core tuning values discovered:** The *shape* that works is a **seasonal yield
  swing + winter pressure** (prototype used farm yields 3/5/6/0 by season, winter
  doubling food consumption, ~10–18 wood building costs). These created a real
  survive-winter decision. Treat as validated *structure*, not final numbers.
- **Assumptions confirmed:**
  - Turn-based building feels tactile and satisfying (concept Open Q1 → resolved YES).
  - Winter pressure turns each season into a *decision*, not bookkeeping — this is the
    mechanic that earns "one more season."
  - The optimization puzzle (resource ratios) is intrinsically engaging to this player.
- **Assumptions refined / to watch:**
  - "The loop sustains engagement" holds **only while challenge escalates.** A static
    economy plateaus quickly. Sustained engagement is a *systems* requirement, not a
    core-loop one — the design must layer escalating pressure and new variables.
- **Emergent mechanics worth formalizing (top carry-forward):**
  - **Spatial adjacency / zoning.** The player self-organized buildings by type with no
    prompt. This is a strong, free signal that adjacency bonuses/penalties, districts,
    and desirability/"keep foresters away from homes" mechanics would feel *natural*
    and rewarding — and directly fight the plateau while deepening *Expression* and
    *The Hearth Grows*. Strongly consider a dedicated system GDD for it.
  - **Graceful first-read onboarding.** Discoverability is good (player figured it out
    unaided), but the *first* read of yields/needs should be taught more gently.

**Next steps:**
1. `/design-review design/gdd/game-concept.md` — fold these learnings into the concept.
2. `/gate-check` — confirm readiness to advance to Systems Design.
3. `/art-bible` — lock the "crisp & clean / readability-first" visual identity.
4. `/map-systems` — decompose into systems; add **Spatial Adjacency / Zoning** as a candidate system.
5. `/design-system [mechanic]` — author per-system GDDs; use the validated tuning *shape* and the escalation note in Tuning Knobs / Formulas.

---

## Lessons Learned

- **What assumptions were broken by actually building this?**
  The fear that a turn-based builder might feel like flat bookkeeping was wrong — a
  *very* simple version already produced 15+ voluntary turns. The forward pull is real
  and cheap to evoke; winter pressure alone was enough to make turns into decisions.

- **What surprised us that didn't show up in the brainstorm?**
  Unprompted **spatial zoning** behavior. The brainstorm never discussed building
  adjacency or districts, yet the player invented their own zoning logic. This promotes
  spatial/adjacency mechanics from "not considered" to a candidate core system.

- **What would we test differently next time?**
  Introduce one **escalation variable** (e.g., winter severity that ramps each year, or
  a periodic raid) to probe whether the loop sustains *past* the "solved economy" point
  — the plateau is now the next risk to validate, and it's the whole reason the full
  game's systems exist.

---

> *Prototype code location: `prototypes/homestead-loop-concept/`*
> *This code is throwaway. Never refactor into production.*
