# Game Concept: Hearthfall

*Created: 2026-06-25*
*Status: Draft*

---

## Elevator Pitch

> It's a turn-based settlement-building RPG where you arrive as one settler in a
> vast, contested frontier of rival races and faiths, and grow a single homestead
> into the crossroads of an entire region — uncovering why the land sat unclaimed
> as you rise.

Test: A new player understands in 10 seconds — *"I build a home, it becomes a town,
and the world reacts to me."*

---

## Core Identity

| Aspect | Detail |
| ---- | ---- |
| **Genre** | Turn/season-based settlement builder + RPG (light 4X / management hybrid) |
| **Platform** | Web + Desktop (browser-playable; packaged for Steam/itch via desktop wrapper) |
| **Target Audience** | "Strategists & Settlers" — see Target Player Profile |
| **Player Count** | Single-player |
| **Session Length** | 30–120 minutes (a season / an expedition / a tier-up per sitting) |
| **Monetization** | Premium (none decided yet — design assumes paid, no F2P hooks) |
| **Estimated Scope** | Large (2–3 years, solo) for the Target Ship tier |
| **Comparable Titles** | Against the Storm, Songs of Conquest, Civilization (systems); Stardew Valley, Skyrim (sense of home & place) |

---

## Core Fantasy

You turn wilderness into *your* place — and watch a contested world come to depend
on it. Hearthfall is the fantasy of **rootedness earned through cleverness**: laying
the first plank of a lone homestead by hand, then, seasons later, commanding a town
that distant races, faiths, and traders all reckon with. It pairs the warmth of
ownership (a Skyrim house, a Stardew farm) with the strategic brain of an empire game
(Civ) and the "aha!" of outwitting a problem (the King's Quest minotaur). What you can
do here that you can't elsewhere: *grow a home from a single hearth into a regional
power, in a living world that pushes back — without ever needing fast reflexes.*

---

## Unique Hook

It's like **Against the Storm / Songs of Conquest's** deep turn-based settlement
strategy, **AND ALSO** a story-rich RPG of homestead warmth and *earned discovery* —
your town is an intimate, personal hearth first and a regional capital second, set in
a contested world of races and faiths that have their own agendas.

The "and also" that nobody has executed: **most settlement games are systemically deep
but emotionally cold; most cozy building games are warm but shallow.** Hearthfall lives
in that gap — Civ's systems with Stardew's heart and Skyrim's sense of place.

---

## Player Experience Analysis (MDA Framework)

### Target Aesthetics (What the player FEELS)

| Aesthetic | Priority | How We Deliver It |
| ---- | ---- | ---- |
| **Sensation** (sensory pleasure) | 6 | Clean, highly readable "crisp strategy" art; satisfying tier-up moments |
| **Fantasy** (role-playing) | 3 | You are a settler-turned-founder; the homestead is your identity made physical |
| **Narrative** (drama, story arc) | 2 | Authored regional mystery + emergent faction stories; earned emotional beats |
| **Challenge** (mastery) | 4 | Strategic/economic planning; reading the world; no reflex challenge |
| **Fellowship** (social) | N/A | Single-player; "community" is your settlers and the region's peoples, not other players |
| **Discovery** (exploration, secrets) | 1 | Cultures, faiths, locales, and the region's history uncovered through play |
| **Expression** (creativity) | 5 | How you build, who you ally with, where you expand — many viable paths |
| **Submission** (relaxation) | 7 | Cozy early-game tactility; but real stakes keep it from being purely relaxing |

**Dominant axis: Discovery + Narrative**, anchored by Expression (building).

### Key Dynamics (Emergent player behaviors we want)
- Players alternate naturally between **building at home** and **venturing out**, each feeding the other.
- Players form opinions about the region's races/faiths and make **deliberate alliance/rivalry choices**.
- Players **out-think threats** (raids, hard winters, rival claims) through preparation rather than combat skill.
- Players chase the next reveal — *"what's at that ruin? what does this culture want?"*
- Players experiment with town layouts and economies to optimize growth.

### Core Mechanics (Systems we build)
1. **Season-turn settlement building** — place/construct buildings and work plots within a turn, then advance the season.
2. **Hands-on → directive growth** — direct manipulation early (you build), delegation/automation later (you command workers).
3. **Reactive world systems** — races, faiths, and factions with agendas that trade, migrate, threaten, and respond to your rise.
4. **Build-and-venture rhythm** — expeditions to distant locales that return resources, settlers, and story fragments.
5. **Data-driven economy & strategic stakes** — resources, trade, disasters/raids resolved by planning, not reflexes.

---

## Player Motivation Profile

### Primary Psychological Needs Served (Self-Determination Theory)

| Need | How This Game Satisfies It | Strength |
| ---- | ---- | ---- |
| **Autonomy** | How you build, who you ally with among races/faiths, where you expand — many viable paths | Core |
| **Competence** | The town visibly flourishes; you master an interlocking economy; expeditions grow bolder | Core |
| **Relatedness** | Settlers arrive with their own stories and become your community; the region's cultures come to know your name | Supporting |

### Player Type Appeal (Bartle Taxonomy)
- [x] **Achievers** — Progression through settlement tiers (homestead → regional seat); economic mastery; visible growth.
- [x] **Explorers** — Uncovering cultures, faiths, locales, and the region's hidden history; understanding the reactive systems.
- [x] **Socializers** — *Light:* relationships with settlers and the region's peoples (single-player social texture, no multiplayer).
- [ ] **Killers/Competitors** — Explicitly **not** served. No PvP, no leaderboards, no domination fantasy.

### Flow State Design
- **Onboarding curve**: First 10 minutes are intimate and tactile — clear a plot, plant, raise one building, meet one newcomer. Teaches by doing on a tiny scale.
- **Difficulty scaling**: Challenge grows as systems layer in (economy → factions → disasters → diplomacy); the player's *planning skill* scales with it.
- **Feedback clarity**: The town itself is the progress bar — readable, crisp art shows growth at a glance; tier-ups are clear milestones.
- **Recovery from failure**: Setbacks are strategic, not punishing — a lost season, a raided granary, a failed expedition. You recover by re-planning, never by reflex retries. No permadeath spiral.

---

## Core Loop

### Moment-to-Moment (30 seconds)
*Early game (hands-on):* clear land, plant, lay a wall, haul goods, talk to a newcomer
at the gate. *Later game (directive):* assign workers, zone a district, set trade
priorities, dispatch an expedition. Satisfaction shifts from *"I made this with my
hands"* to *"I built a thing that runs and grows."*

### Short-Term (5–15 minutes)
Finish a concrete project — a building goes up, a harvest comes in, a visitor's request
is fulfilled. The *"one more"* hook: *just finish this structure… just see what this
stranger at the gate wants.*

### Session-Level (30–120 minutes)
A chapter of growth: push through a season, prep-and-run an expedition to a distant
locale, and return with a boon — a new settler, a rare resource, or a fragment of the
region's story. Natural stopping points: season's end, an expedition's return, a town
tier-up.

### Long-Term Progression
Your settlement rises through tiers — **homestead → hamlet → village → town → regional
seat** — each unlocking new buildings, new races/faiths willing to deal with you, and
new regions to reach. The long goal: become the *crossroads of the region* and uncover
why the land sat unclaimed and what its peoples truly are.

### Retention Hooks
- **Curiosity**: Unexplored locales, untranslated cultures, the central regional mystery, the next settlement tier.
- **Investment**: A town you've grown by hand; settlers you've come to care about; an economy you don't want to lose.
- **Social**: *(Light)* the community of settlers and the region's peoples reacting to your name.
- **Mastery**: A deeper, cleaner economy to optimize; bolder expeditions; bigger threats to out-plan.

---

## Game Pillars

### Pillar 1: The Hearth Grows
Your settlement is the heart of everything; every system should feed the feeling of a
place you own getting bigger, richer, and more alive.

*Design test*: Torn between deepening settlement growth vs. a feature that doesn't touch
your town? **Grow the hearth.**

### Pillar 2: A World With Its Own Will
The races, faiths, and factions pursue their own agendas. The world pushes back and
rewards understanding; it is never just a backdrop.

*Design test*: A static handcrafted element vs. a reactive systemic one? **Favor
reactive** — except authored story anchors, which stay handcrafted.

### Pillar 3: Cleverness Over Reflexes
Challenge comes from planning and clever reading of the world, never execution speed or
punishment.

*Design test*: If a challenge can only be beaten by reflexes or grinding, **redesign it
into a problem to outthink.**

### Pillar 4: Earned Discovery
The world's secrets, peoples, and emotional beats are *uncovered* through play, creating
"aha!" and awe. Nothing important is just handed over.

*Design test*: Explain it up front vs. let the player uncover it? **Let them uncover
it.**

### Pillar 5: Rooted, Then Vast
It must feel intimate and personal *before* it feels big. Scale is earned; the personal
hearth is never buried under the strategy layer.

*Design test*: A "big" strategic feature that erases the personal/tactile connection?
**Gate it behind growth, or cut it.**

### Anti-Pillars (What This Game Is NOT)

- **NOT twitch combat or Souls-style punishment** — would violate *Cleverness Over Reflexes* and alienate the core audience.
- **NOT a faceless 4X** where your settlement is a stat block on a map — would violate *The Hearth Grows* and *Rooted, Then Vast*.
- **NOT lore-dumps or quest-marker handholding** — would violate *Earned Discovery*.
- **NOT a static theme-park world** that only reacts to the player and otherwise sits frozen — would violate *A World With Its Own Will*.

---

## Visual Identity Anchor

*This section seeds the art bible — the "everything must be readable" decision captured
before it can be forgotten.*

- **Visual direction**: **Crisp & Clean Strategy** — bright, highly legible, systemic
  clarity in the spirit of Civ / Into the Breach. Function-first art, chosen
  deliberately as the most legible, most producible, and most scalable direction for a
  solo first game.
- **One-line visual rule**: *Readability first — every tile, building, and unit is
  instantly legible at a glance, even when the town is dense.*
- **Supporting principles**:
  1. **Clarity over decoration** — *Test: if detail hurts readability, cut it.*
  2. **Color carries meaning** — *Test: does this color communicate state/faction/
     resource before it decorates? If it's purely decorative and competes with
     meaningful color, desaturate it.*
  3. **Calm base, bold accents** — *Test: is the base board restful enough to read for
     hours? Saturation is reserved for what matters.*
- **Color philosophy**: A restful warm-neutral board the player can study for hours;
  saturated accent color reserved for meaning — faction identity, your hearth/town
  center, and alerts.

---

## Inspiration and References

| Reference | What We Take From It | What We Do Differently | Why It Matters |
| ---- | ---- | ---- | ---- |
| Civilization V | Systemic worlds whose scale/variety come from interlocking systems (cultures, religions, terrain) | Single settlement focus with homestead warmth; turn/season not full 4X | Validates that "big & varied" can be systemic, not hand-placed — key to a finishable first game |
| Against the Storm | Deep turn/cycle settlement strategy with real stakes | Persistent, story-rich world and authored discovery instead of roguelite resets | Proves strong appetite for thoughtful settlement strategy |
| Songs of Conquest | Strategy with a strong sense of place and characterful world | Building/ownership focus over army-vs-army wargaming | Shows turn-based + atmosphere can coexist beautifully |
| Stardew Valley | Warmth of ownership; personal, tactile early game | Strategic depth and a contested, reactive world; turn/season pacing | Validates the cozy-ownership hook we anchor on |
| Skyrim / Fallout 3–4 | Sense of place, atmosphere, settlement-building, earned emotional beats | Top-down 2D, turn-based, settlement-first rather than first-person action | The emotional north star (awe, place, ownership) |

**Non-game inspirations**: King's Quest VI (the "aha!" of outwitting a problem); the
*emergence-into-a-world* feeling of a great reveal (the Fallout vault door + music);
frontier and settlement history (homesteads, trade roads, the meeting of cultures).

---

## Target Player Profile

| Attribute | Detail |
| ---- | ---- |
| **Age range** | ~25–50 |
| **Gaming experience** | Mid-core to hardcore (comfortable with systems and management depth) |
| **Time availability** | 30–120 minute sessions, often evenings/weekends; happy to play a long campaign over weeks |
| **Platform preference** | Desktop (Steam/itch) and browser |
| **Current games they play** | Civilization, Against the Storm, Songs of Conquest, Stardew Valley, Skyrim |
| **What they're looking for** | A settlement game with *heart and story*, or a cozy builder with *real systemic depth* — the unmet overlap |
| **What would turn them away** | Twitch/reflex demands, shallow "stat-block" 4X, hand-holding/lore-dumps, predatory monetization |

---

## Technical Considerations

| Consideration | Assessment |
| ---- | ---- |
| **Recommended Engine** | Phaser 4 (TypeScript, Vite) — already configured and locked for this project. Excellent fit: tilemaps, data-driven systems, UI-heavy turn-based 2D |
| **Key Technical Challenges** | A clean, data-driven simulation core; robust save/load of a large evolving world state; performant rendering of a dense, growing town; UI that stays legible as systems layer in |
| **Art Style** | 2D, "crisp & clean strategy" — top-down, highly readable |
| **Art Pipeline Complexity** | Low–Medium (custom 2D, function-first; deliberately chosen to be solo-sustainable) |
| **Audio Needs** | Moderate — atmospheric/ambient with season and milestone cues; supports the "place" and "awe" beats |
| **Networking** | None (single-player) |
| **Content Volume** | Target Ship: one full region, several locales, 3–4 races/faiths, full tier progression, a main authored arc + multiple expeditions. Full Vision: multiple regions |
| **Procedural Systems** | Likely hybrid — systemic/procedural breadth (terrain, culture reactions, economy) with hand-authored hubs and story anchors (per *Rooted, Then Vast* + *A World With Its Own Will*) |

---

## Risks and Open Questions

### Design Risks
- **"Tactile within turns" may feel clunky** — hands-on building must feel satisfying inside a turn structure. *Mitigation: prove it in the Tier-0 prototype before committing.*
- **The hands-on → directive transition** could feel abrupt or lose the personal connection. *Mitigation: gate scale behind growth; design the transition explicitly (Pillar 5).*
- **Discovery pacing** — too slow and it drags; too fast and the world feels thin.

### Technical Risks
- **Save/load of a large, evolving world state** is the core technical challenge. *Mitigation: design a serializable, data-driven simulation from day one.*
- **UI legibility under growing complexity** — the strategy layer must stay readable. *Mitigation: the Visual Identity Anchor's "readability first" rule.*
- Engine risk is **low** — this game is squarely in Phaser 4's wheelhouse.

### Market Risks
- **Settlement/strategy is a crowded space.** *Mitigation: the warmth + story + earned-discovery wedge is the differentiator; lean into it hard.*
- Turn-based + niche-but-loyal audience — viable, but not a mass-market guarantee.

### Scope Risks
- **Systems-heavy strategy RPG = ambitious first game.** *Mitigation: extended timeline, strict tiering, build the MVP before anything else.*
- **Authored content cost** for discovery across multiple cultures. *Mitigation: systemic breadth, hand-authored depth only at hubs.*
- **First-game project management** over 2–3 years is itself the hardest risk. *Mitigation: the studio pipeline — sprints, gates, vertical slices.*

### Open Questions (need prototyping/research)
1. *Does turn-based, tactile building feel good moment-to-moment?* — Resolved by the Tier-0 prototype.
2. *What exactly triggers/structures the hands-on → directive shift?* — Resolved in core-loop GDD + prototype.
3. *How "4X" do the stakes get — raids/disasters only, or full inter-faction war?* — Resolved during systems design; bounded by *Cleverness Over Reflexes*.
4. *How much of the world is procedural vs. authored?* — Resolved in architecture/worldbuilding design.

---

## MVP Definition

**Core hypothesis**: *Building a homestead within a turn/season frame — growing it while
a reactive world trades with and threatens you — is satisfying and worth doing for its
own sake.*

**Required for MVP** (Vertical Slice):
1. One starting valley with the season-turn loop.
2. Settlement tiers homestead → hamlet → village (~3 tiers) with a small building set.
3. A basic resource economy + a shop/trade interaction.
4. ONE neighboring culture that reacts — trades with you **and** threatens you (a raid or a brutal winter).
5. ONE expedition site that returns a tangible boon.
6. One small authored mystery to uncover (a thin slice of *Earned Discovery*).

**Explicitly NOT in MVP** (defer):
- Multiple regions, the full 3–4 races/faiths, and deep diplomacy.
- The full authored story arc.
- Religion/culture simulation depth, modding, and post-launch systems.
- Heavy automation/late-game directive systems beyond a first taste.

### Scope Tiers

| Tier | Content | Features | Timeline |
| ---- | ---- | ---- | ---- |
| **Tier 0 — Prototype** | One valley, placeholder art | Just the season-turn building loop | ~2–4 weeks |
| **Tier 1 — Vertical Slice (MVP)** | One valley, 1 rival culture, 1 expedition, 1 mystery | Core loop + one of each system, end-to-end | ~2–4 months |
| **Tier 2 — Target Ship** | Full region, several locales, 3–4 races/faiths, progression to regional seat | Faction politics + diplomacy, disasters/raids, main authored arc, multiple expeditions | ~2–3 years (solo) |
| **Tier 3 — Full Vision** | Multiple regions | Deep religion/culture sim, emergent diplomacy, larger narrative, modding | Post-launch |

---

## Next Steps

- [ ] `/setup-engine` — already configured (Phaser 4 locked); no action needed beyond version confirmation.
- [ ] `/art-bible` — establish the visual identity spec from the Visual Identity Anchor above (before GDDs).
- [ ] `/design-review design/gdd/game-concept.md` — validate concept completeness.
- [ ] **`/prototype` the Tier-0 core mechanic** — prove turn-based tactile building is fun before writing GDDs (resolves Open Question 1).
- [ ] If prototype PROCEEDS: `/map-systems` — decompose into systems with dependencies.
- [ ] `/design-system [system]` — author per-system GDDs in dependency order.
- [ ] `/create-architecture` → `/architecture-decision (×N)` → `/architecture-review`.
- [ ] `/vertical-slice` — validate the full loop before committing to Production.
- [ ] `/sprint-plan new` — plan the first milestone.
