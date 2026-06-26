# Concept Prototype Report: The Unclaimed Valley (Earned Discovery slice)

> **Date**: 2026-06-26
> **Prototype Path**: HTML
> **Concept File**: design/gdd/game-concept.md

---

## Hypothesis

If the player uncovers a cataclysm's truth by gathering and combining concrete, **systemic**
clues (not lore text), they will feel an **earned "aha!"** — we will know it held if the
player forms and voices a theory about what happened *before* the game confirms it, and
reports the convergence as satisfying rather than "being told."

---

## Riskiest Assumption Tested

That the *earning* — the player personally connecting fragments into a conclusion — is what
creates the feeling, rather than good prose. The prototype attacked this directly by keeping
every clue terse and observational and forcing the player to do the connecting, with a
standalone "form a conclusion" step and tempting decoy explanations (an ordinary wildfire
being the trap).

**Outcome:** the assumption did **not** hold as framed. The deduction step was the *least*
compelling part; the *acquisition* of knowledge (especially from a person) was the spark.

---

## Approach

Built a single self-contained `prototype.html` (no install, no server dependency) in one
session. A four-site investigation (excavate ruins / climb the ridge / speak to a traveler /
work the valley floor), 8 terse observational clues, a Field Journal, and a 5-option
Conclusion step with one true cause (something fell from beyond the north ridge — an
unnatural fire) and four decoys. Six action-days against eight clues, so the player's path
shapes what they learn. A nudge ("what do you think happened?") appears at the 3rd clue to
invite a theory before concluding.

**Path chosen:** HTML
**Reason for path:** Interactive deduction with no timing sensitivity; the emotional payoff
requires the player to personally make the connection, which a read-through paper log can't
reproduce.

**Shortcuts taken (intentional):**
- Hardcoded clue/explanation data; no economy, winter, art, save, or branching narrative.
- Placeholder styling only (warm-neutral board + ember accent to nod at the art direction).
- No menus, no audio, no onboarding beyond the one-paragraph premise.

**Verification:** all three logic paths confirmed via automated browser checks before
hand-off — earned ending (truth + ≥3 converging clues), decoy contradiction (cites the
refuting clue and returns the player to play), and the 3-clue theory nudge.

---

## Result

The playtester (the developer, solo) played a full cycle and reported:

- **Hypothesis verdict: PARTIALLY CONFIRMED.** The core deduction landed — the player
  concluded it was *"a fire of some type that was either not natural or very unusual."* But
  the play pattern was **gather-everything-then-pick**, not a theory forming during
  investigation. The convergence became a *menu choice at the end* rather than a realization.
- **Best moment:** the realization that the cause was an unnatural/unusual fire — and,
  separately, **speaking to the traveler was the most enjoyable part**, *"even though the
  selection was the same as the other options, 'speaking' to another person made it feel a
  bit more alive."*
- **Worst / decisive reaction:** *"I honestly didn't find this all that compelling… Perhaps
  we drop this mechanic and re-examine… I have a feeling what we just tested might pull the
  player out of the game mid play."*
- **Proposed direction:** discovery embedded in the venture/expand loop (Civ-style) — uncover
  lore/scrolls through play, with **acquiring knowledge granting a thematic perk** (lore of a
  great fire → a fire-defense bonus). Some lore from **receptive peoples only** (wanderers
  yes; soldiers/barbarians no).

---

## Metrics

| Metric | Value |
|--------|-------|
| Path used | HTML |
| Iterations to playable | N/A (one-shot; verified before hand-off) |
| Prototype duration | ~1 session |
| Playtesters | 1 internal / 0 external |
| Feel assessment | Deduction step felt flat and "pull-out"; social (traveler) clue felt alive despite identical mechanics |
| Hypothesis verdict | PARTIALLY CONFIRMED |

---

## Recommendation: PIVOT

The standalone "investigate clues → choose a conclusion" mechanic is not compelling on its
own and risks pulling the player *out* of the game — a separate deduction minigame is, in
effect, the opposite of "discovery through systemic play." But the prototype succeeded at its
real job: it cheaply isolated what *does* work (knowledge acquired from living
peoples/places) from what doesn't (the puzzle/deduction), **before any GDD was written.** The
goal — Earned Discovery as the dominant aesthetic — is preserved; the *delivery* changes.

---

## If Pivoting

**Pivot direction:** **Lore-as-power, no deduction.** Lore fragments are gathered through
normal venture/expand play (and from receptive peoples), assemble themselves into the full
story over time, and each completed body of knowledge grants a **thematically-matched
mechanical perk** (e.g. "the great fire" → fire defense). Discovery becomes a **reward engine
that pulls the player forward into exploration**, not a screen that interrupts play.
Faction-gated social sources (wanderers yes, soldiers/barbarians no) make *who will talk to
you* part of the reactive world.

**What to keep:**
- People/place-delivered discovery feels alive — knowledge from encounters, not abstract
  journals.
- Knowledge-as-reward is the right instinct (make the reward tangible, not just an "aha").
- The cataclysm lore direction (an unnatural fire that *fell*) reads well as content.

**What to drop:** the deduction / "pick the answer" step entirely.

**Next step:** `/prototype` the lore-as-power loop — preferably a minimal **engine** slice
wired into a small venture/expand action, so discovery is felt *inside* play rather than as a
standalone screen. (Full revised hypothesis in `PIVOT-NOTE.md`.)

---

## Lessons Learned

- **What assumptions were broken by actually building this?** That "earned discovery"
  requires the player to *deduce*. It doesn't — the deduction was the dead part. The reward
  and the *source* of knowledge matter more than the act of solving.
- **What surprised us that didn't show up in the brainstorm?** A mechanically identical
  interaction felt meaningfully more alive when framed as *speaking to a person*. Social
  framing is doing real emotional work — a strong signal for the "World With Its Own Will"
  pillar and for routing discovery through peoples/factions.
- **What would we test differently next time?** Embed discovery inside the systemic loop
  (venture/expand) rather than as a standalone mode, tie knowledge to mechanical perks, and
  test feel *in context* (engine slice) rather than in an isolated HTML screen.

---

> *Prototype code location: `prototypes/unclaimed-valley-concept/`*
> *This code is throwaway. Never refactor into production.*
