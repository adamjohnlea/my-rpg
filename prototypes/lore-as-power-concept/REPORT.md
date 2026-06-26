# Concept Prototype Report: Lore as Power ("Knowledge is Power")

> **Date**: 2026-06-26
> **Prototype Path**: Engine (Phaser 4 / TypeScript / Vite)
> **Concept File**: design/gdd/game-concept.md
> **PIVOT chain**: `unclaimed-valley-concept` (deduction — PIVOT) → **this** (lore-as-power — PROCEED)

---

## Hypothesis

If the player gathers lore while venturing — from **receptive peoples** they choose to
approach (wanderers/traders/hermits yes; soldiers/barbarians no) and from sites — and
completing a **body of knowledge** grants a **thematically-matched mechanical perk** (e.g.
*The Great Fire* → *Fireward*), then discovery **pulls the player forward into exploration**
and feels **rewarding**, with **no deduction step**. Confirmed if the player deliberately
seeks lore sources for the reward/story and reports it **deepened rather than interrupted**
play.

---

## Riskiest Assumption Tested

That knowledge-tied-to-a-*mechanical-reward* (not a puzzle, not pure story) is what makes
discovery compelling and forward-pulling. **It proved out** — the player chased the fire
lore deliberately because the wildfire was coming, and confirmed the loop "was much better"
than the deduction version.

---

## Approach

Built a single Phaser 4 scene (`index.html` + `main.ts`): a hearth ringed by 9 locations,
each showing a *rumor* of its theme. The player ventures (costs provisions), and receptive
peoples/sites yield lore fragments while soldiers/barbarians refuse. Completing one of three
themed sets auto-grants a thematic perk — *The Great Fire → Fireward*, *The Old Roads →
Pathwise (+3 provisions)*, *The River Pact → Wellspring (+1 provision/venture)*. After the
5th venture a **wildfire** strikes: with Fireward it bounces off; without it, −5 provisions.
The contrast *is* the test of "knowledge = power."

**Path chosen:** Engine (Phaser 4) — user's call (over an HTML recommendation), wanting
discovery "felt inside play" and practice in the real stack.
**Reason it still worked:** the loop is turn/click-based (no timing/feel), so the engine
added no validation risk; it rendered natively and read clearly.

**Shortcuts taken (intentional):**
- Fixed, clearly-labeled destinations (the loop under test, not organic discovery).
- Hardcoded nodes/lore/tuning; one resource; placeholder rectangles + text; no save/menus.
- A `window.__lore` hook for automated verification (throwaway).

**Verification (before hand-off):** scripted both decisive paths via the preview —
win line (3 fire clues → Fireward → wildfire bounces, provisions 4→6) and fail line (no
Fireward → wildfire −5, provisions 8→3); faction-gating confirmed (soldier camp gave no
lore). No console errors.

---

## Result

The developer (solo) played and reported **CONFIRMED**.

- **It worked, and was a clear improvement over the deduction prototype.** *"Confirmed. This
  was much better… once these clues and conversations are discovered naturally while
  exploring, rather than being the only fixed points to go to, it will be really good!"*
- **Best moment — the social, faction-gated encounters:** *"I liked getting rebuffed by the
  soldier and talking with the wanderer."* (Consistent with the prior prototype, where the
  traveler was the standout — character-delivered discovery is the emotional core.)
- **Worst moment — the prototype's contrivance, not the mechanic:** *"it all felt a bit
  flat, but again that's caused by the prototype's setup. Once things are spread out on a
  large map, discovered by exploring, and not so linear, it will be good."* Even so, *"there
  was still some joy found in reading the lore and speaking to people."*
- **Surprise:** none — *"There was not much room for that in the prototype."*
- **Verdict:** *"Proceed. When this mechanic is worked into an actual game rather than a
  prototype, it will be a lot of fun."*

---

## Metrics

| Metric | Value |
|--------|-------|
| Path used | Engine (Phaser 4) |
| Iterations to playable | 1 (one-shot; verified via preview before hand-off) |
| Prototype duration | ~1 session |
| Playtesters | 1 internal / 0 external |
| Feel assessment | Loop reads clearly and pulls forward; flatness traced to fixed/labeled nodes, not the mechanic; social encounters carry the most weight |
| Hypothesis verdict | CONFIRMED |

---

## Recommendation: PROCEED

The lore-as-power loop validates Earned Discovery — the concept's dominant aesthetic — in a
form that **pulls the player forward** instead of interrupting play (the failure mode of the
deduction prototype). The developer found genuine joy in the lore and the people even under
the prototype's deliberately contrived, linear setup, which bodes well for the real version
where discovery is organic and spread across a large map. Proceed to design, carrying the
findings below.

---

## If Proceeding

- **Core tuning values discovered:** 3-fragment "keystone" set (The Great Fire) vs.
  2-fragment minor sets felt right; a single known, dated threat (wildfire at venture 5)
  created clear forward-pull and urgency; perks that **extend exploration range** (Pathwise
  +3, Wellspring +1/venture) reinforced the loop by literally enabling more discovery.
- **Assumptions confirmed:** lore → thematic mechanical perk (knowledge = power) is
  compelling and forward-pulling with **no deduction**; faction-gated social sources
  (wanderers yes / soldiers/barbarians no) add real texture and are the **emotional core**.
- **Assumptions disproved / corrected:** discovery should **not** be presented as fixed,
  labeled destinations. The mechanic's payoff depends on lore and conversations being
  **discovered organically while exploring a large, non-linear map** — perks "earned through
  real venturing will land much harder."
- **Emergent / design notes to formalize in GDDs:**
  - Route knowledge primarily through **peoples with dispositions** (a discovery × faction
    interaction), not just environmental sites.
  - Perks must be **thematically matched** to their lore and **paid off by a real threat/
    opportunity** so knowledge visibly becomes power.
  - Discovery must be **embedded in the venture/expand loop** (organic, spread out), echoing
    the concept's Core Mechanic #4 (expeditions return *knowledge/keys*) and resolving Open
    Question #5 (the dominant Discovery aesthetic — now validated in this form).

**Next steps:**
1. `/design-review design/gdd/game-concept.md` — already done; consider a light update to
   fold in "lore-as-power" + faction-gated social discovery as the Earned Discovery delivery.
2. `/gate-check` — confirm readiness to advance to Systems Design.
3. `/art-bible` — visual identity (carry the colorblind hard constraint).
4. `/map-systems` — decompose; add **Lore-as-Power Discovery** and **Spatial Adjacency /
   Zoning** as systems.
5. `/design-system [mechanic]` — use these learnings in Tuning Knobs and Formulas.

---

## Lessons Learned

- **What assumptions were broken by building this?** From the *previous* prototype: that
  discovery needs deduction. This one confirms the opposite — discovery works best as a
  **reward engine** (lore → perk) woven into exploration, with the *act of acquiring*
  (especially from people) carrying the feeling.
- **What surprised us across the two prototypes?** Character/faction-gated encounters are the
  consistent emotional high point in both tests — a strong steer to make *peoples* the
  primary vehicle for discovery.
- **What would we test differently next time?** Test discovery **organic and non-linear** on
  a larger explorable map (the one thing this prototype deliberately couldn't do) — ideally
  woven into the validated season-turn building loop, to confirm the two loops feed each
  other rather than compete.

---

> *Prototype code location: `prototypes/lore-as-power-concept/`*
> *This code is throwaway. Never refactor into production.*
