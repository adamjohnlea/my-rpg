# Systems Index: Hearthfall

> **Status**: Draft
> **Created**: 2026-06-26
> **Last Updated**: 2026-06-26 (Content DB + Season-Turn Loop GDDs designed)
> **Source Concept**: design/gdd/game-concept.md

---

## Overview

Hearthfall is a turn/season-based settlement-building RPG: grow a lone homestead into a
regional crossroads while a contested world of races and faiths pushes back. Mechanically it
needs a **data-driven simulation core** (a season-turn clock, a resource economy with a
scaling-upkeep *sink* to defeat the plateau, settlement building on a tile grid) layered with
the systems that make it *Hearthfall* and not a generic builder: **lore-as-power discovery**
(knowledge gathered while venturing grants thematic perks — validated, PROCEED), a **reactive
faction world** that gates who will share lore and who will raid you, and an **expedition loop**
that interlocks home and frontier. Two pillars are prototype-validated — the season-turn
building loop and lore-as-power discovery. Priorities follow the concept's scope tiers: **MVP /
Vertical Slice** is a thin slice of nearly every system end-to-end; **Target Ship** adds depth
and breadth (full factions, the authored arc, settler identity, zoning); **Full Vision** is
multi-region.

---

## Systems Enumeration

Priority tiers use the concept's vocabulary: **MVP** = Vertical Slice (thin slice of each),
**Target Ship** = depth/breadth (concept Tier 2), **Full Vision** = concept Tier 3.
★ = prototype-validated. "(inferred)" = not explicit in the concept.

| # | System Name | Category | Priority | Status | Design Doc | Depends On |
|---|-------------|----------|----------|--------|------------|------------|
| 1 | Data-Driven Content DB (inferred) | Core | MVP | Designed (review pending) | [data-driven-content-db.md](data-driven-content-db.md) | — |
| 2 | Season-Turn Loop ★ | Core | MVP | Designed (review pending) | [season-turn-loop.md](season-turn-loop.md) | — *(was Content DB; removed — see GDD §Dependencies)* |
| 3 | World Grid & Tilemap (inferred) | Core | MVP | Not Started | — | — |
| 4 | Save/Load & World-State Serialization | Persistence | MVP | Not Started | — | (contract: all systems) |
| 5 | Resource Economy ★ | Economy | MVP | Not Started | — | Season-Turn Loop, Content DB |
| 6 | Shared Modifier System (inferred) | Core | MVP | Not Started | — | Content DB |
| 7 | Settlement Building & Placement ★ | Gameplay | MVP | Not Started | — | World Grid, Resource Economy, Content DB |
| 8 | Population & Workers | Gameplay | MVP | Not Started | — | Resource Economy, Building, Season-Turn Loop |
| 9 | Settlement Tiers & Progression | Progression | MVP | Not Started | — | Economy, Building, Population |
| 10 | Expedition / Venture | Gameplay | MVP | Not Started | — | Economy, Population, Season-Turn Loop |
| 11 | Lore-as-Power Discovery ★ | Narrative | MVP | Not Started | — | Shared Modifier, Expedition, Encounter & Dialogue |
| 12 | Faction / Reactive World *(1 culture in MVP)* | Gameplay | MVP | Not Started | — | Resource Economy, Season-Turn Loop |
| 13 | Encounter & Dialogue (peoples) (inferred) | Narrative | MVP | Not Started | — | Faction, Content DB |
| 14 | Trade / Market *(basic in MVP)* | Economy | MVP | Not Started | — | Resource Economy, Faction |
| 15 | Disasters & Raids | Gameplay | MVP | Not Started | — | Season-Turn Loop, Economy, Faction, Shared Modifier |
| 16 | Central Mystery / Authored Narrative *(thin slice in MVP)* | Narrative | MVP | Not Started | — | Lore Discovery, Faction, Expedition |
| 17 | Camera & View / Zoom (inferred) | UI | MVP | Not Started | — | World Grid, Building |
| 18 | UI Framework & HUD (inferred) | UI | MVP | Not Started | — | Resource Economy, Season-Turn Loop |
| 19 | Per-System UIs: Build/Placement · Expedition · Lore Codex · Faction (inferred) | UI | MVP | Not Started | — | respective systems + UI Framework |
| 20 | Event Log & Notifications (inferred) | UI | MVP | Not Started | — | UI Framework, event-emitting systems |
| 21 | Onboarding / Teaching *(minimal in MVP)* | Meta | MVP | Not Started | — | most gameplay + UI |
| 22 | Accessibility *(colorblind constraint seeded in MVP)* (inferred) | Meta | MVP→Target Ship | Not Started | — | UI Framework, Art Bible |
| 23 | Spatial Adjacency / Zoning ★ | Gameplay | Target Ship | Not Started | — | Building & Placement, Shared Modifier |
| 24 | Settler Identity / NPC State (inferred) | Narrative | Target Ship | Not Started | — | Population, Content DB |
| 25 | Audio | Audio | Target Ship | Not Started | — | Season-Turn Loop, Settlement Tiers |
| 26 | Game State / Session (inferred) | Core | MVP | Not Started | — | Save/Load, Season-Turn Loop, UI Framework |
| — | Diplomacy · full 3–4 factions · full authored arc · multiple regions · religion/culture sim · modding | (various) | Target Ship / Full Vision | Not Started | — | (expand MVP systems) |

---

## Categories (in use)

| Category | Hearthfall systems |
|----------|--------------------|
| **Core** | Content DB, Season-Turn Loop, World Grid & Tilemap, Shared Modifier System, Game State / Session |
| **Gameplay** | Building & Placement, Population & Workers, Expedition, Faction/Reactive World, Disasters & Raids, Spatial Adjacency/Zoning |
| **Progression** | Settlement Tiers & Progression |
| **Economy** | Resource Economy, Trade/Market |
| **Persistence** | Save/Load & World-State Serialization |
| **UI** | Camera/Zoom, UI Framework & HUD, Per-System UIs, Event Log & Notifications |
| **Audio** | Audio |
| **Narrative** | Lore-as-Power Discovery, Encounter & Dialogue, Central Mystery, Settler Identity |
| **Meta** | Onboarding/Teaching, Accessibility |

---

## Priority Tiers (concept vocabulary)

| Tier | Definition | Target Milestone |
|------|------------|------------------|
| **MVP** | Vertical Slice — a thin, end-to-end slice of nearly every system: one valley, ~3 tiers, one reactive culture, one expedition, the cataclysm slice. Proves the full loop. | Vertical slice / demo |
| **Target Ship** | Depth & breadth — full 3–4 factions + agendas/diplomacy, progression to regional seat, settler identity, the full authored arc, multiple expeditions/locales, zoning depth, audio, full onboarding + accessibility. | Ship (concept Tier 2) |
| **Full Vision** | Multiple regions, deep religion/culture sim, emergent diplomacy, modding. | Post-launch (Tier 3) |

---

## Dependency Map

### Foundation Layer (no/minimal dependencies)
1. **Data-Driven Content DB** — everything reads content from data; project mandate.
2. **Season-Turn Loop** — the clock every system advances on (depends on: Content DB).
3. **World Grid & Tilemap** — the spatial board building/zoning live on.
4. **Save/Load & Serialization** — *cross-cutting contract*: every system exposes serializable state (see Circular Dependencies).

### Core Layer (depends on Foundation)
1. **Resource Economy** — depends on: Season-Turn Loop, Content DB.
2. **Shared Modifier System** — depends on: Content DB. *(Bottleneck — Economy, Adjacency, Lore, Disasters, Faction all consume it.)*
3. **Settlement Building & Placement** — depends on: World Grid, Resource Economy, Content DB.
4. **Population & Workers** — depends on: Resource Economy, Building, Season-Turn Loop.

### Feature Layer (depends on Core)
1. **Settlement Tiers & Progression** — Economy, Building, Population.
2. **Expedition / Venture** — Economy, Population, Season-Turn Loop.
3. **Faction / Reactive World** — Economy, Season-Turn Loop. *(Design the disposition data model first.)*
4. **Encounter & Dialogue** — Faction, Content DB.
5. **Trade / Market** — Economy, Faction.
6. **Lore-as-Power Discovery** — Shared Modifier, Expedition, Encounter & Dialogue.
7. **Disasters & Raids** — Season-Turn Loop, Economy, Faction, Shared Modifier.
8. **Central Mystery / Authored Narrative** — Lore Discovery, Faction, Expedition.
9. **Spatial Adjacency / Zoning** *(Target Ship)* — Building, Shared Modifier.
10. **Settler Identity / NPC State** *(Target Ship)* — Population, Content DB.

### Presentation Layer (wraps gameplay)
1. **Camera & View / Zoom** — World Grid, Building.
2. **UI Framework & HUD** — Economy, Season-Turn Loop. *(Bottleneck — all UIs.)*
3. **Per-System UIs** — each gameplay system + UI Framework.
4. **Event Log & Notifications** — UI Framework + event emitters.
5. **Audio** *(Target Ship)* — Season-Turn Loop, Tiers.
6. **Game State / Session** — Save/Load, Season-Turn Loop, UI Framework. *App-shell: boot → main menu → new game/load → run loop → pause → quit; owns the game-over/victory handoff. Win/loss conditions stay distributed — detecting systems (Tiers/Central Mystery; later Population) emit signals it handles. MVP = soft-only (no hard lose-screen; vertical-slice victory screen only).*

### Polish Layer (depends on everything)
1. **Onboarding / Teaching** — most gameplay + UI.
2. **Accessibility** — UI Framework + Art Bible. *(Colorblind constraint seeded at art-bible time; full pass later.)*

---

## Recommended Design Order

MVP systems by dependency layer (write GDDs in this order; independent same-layer systems can be parallel). Effort: S = 1 session, M = 2–3, L = 4+.

| Order | System | Priority | Layer | Agent(s) | Est. Effort |
|-------|--------|----------|-------|----------|-------------|
| 1 | Data-Driven Content DB | MVP | Foundation | game-designer + phaser-specialist | M |
| 2 | Season-Turn Loop | MVP | Foundation | game-designer | S |
| 3 | World Grid & Tilemap | MVP | Foundation | phaser-specialist | S |
| 4 | Save/Load & Serialization | MVP | Foundation | phaser-specialist | M |
| 5 | Resource Economy | MVP | Core | game-designer + economy-designer | L |
| 6 | Shared Modifier System | MVP | Core | systems-designer | M |
| 7 | Settlement Building & Placement | MVP | Core | game-designer | M |
| 8 | Population & Workers | MVP | Core | game-designer + systems-designer | M |
| 9 | Settlement Tiers & Progression | MVP | Feature | economy-designer + game-designer | M |
| 10 | Faction / Reactive World (1 culture) | MVP | Feature | game-designer + narrative-director | L |
| 11 | Encounter & Dialogue (peoples) | MVP | Feature | narrative-director + writer | M |
| 12 | Trade / Market (basic) | MVP | Feature | economy-designer | M |
| 13 | Expedition / Venture | MVP | Feature | game-designer | M |
| 14 | Lore-as-Power Discovery | MVP | Feature | game-designer + narrative-director | L |
| 15 | Disasters & Raids | MVP | Feature | systems-designer | M |
| 16 | Central Mystery (thin slice) | MVP | Feature | narrative-director + writer | M |
| 17 | UI Framework & HUD | MVP | Presentation | ux-designer + ui-programmer | M |
| 18 | Camera & View / Zoom | MVP | Presentation | phaser-specialist | S |
| 19 | Per-System UIs | MVP | Presentation | ux-designer | L |
| 20 | Event Log & Notifications | MVP | Presentation | ux-designer | S |
| 21 | Onboarding / Teaching (minimal) | MVP | Polish | ux-designer | M |
| 22 | Game State / Session | MVP | Presentation | ux-designer + game-designer | M |
| 23+ | Target Ship: Adjacency/Zoning, Settler Identity, Audio, full Accessibility, full factions/diplomacy, authored arc | Target Ship | — | (per system) | — |

---

## Circular Dependencies

- **Faction ↔ Encounter & Dialogue** — Faction gates who will talk to you; talking changes relations. **Resolution:** Faction owns the disposition *data model*; Encounter *reads* disposition and *emits* relation-change events Faction consumes. Design Faction's data model before Encounter.
- **Save/Load ↔ all systems** — not a logic cycle but a serialization contract. **Resolution:** Save/Load is a Foundation framework defining a "serializable state" contract; every system implements it. No system is designed without specifying its serializable state.

---

## High-Risk Systems

| System | Risk Type | Risk Description | Mitigation |
|--------|-----------|-----------------|------------|
| Save/Load & Serialization | Technical | Concept's #1 named risk — persisting a large, evolving world state | Contract-first; prototype serialization early; design every system's state to be serializable |
| Resource Economy | Design | Plateau if no real sink; tuning the scaling-upkeep + seasonal swing | Prototype-validated (PROCEED); keep fully data-driven; tune in playtest |
| Lore-as-Power Discovery | Design | Validated linearly, but the payoff depends on **organic, non-linear** delivery on a large map | Prototype PROCEED; validate organic delivery in the vertical slice, not just the slice's first build |
| Faction / Reactive World | Design + Scope | Believable agendas can balloon authored content | Systemic breadth, authored depth only at hubs; MVP = ONE culture |
| Shared Modifier System | Technical | Bottleneck — many consumers; a weak interface forces rewrites | Design the effect interface early, before its consumers |
| Hands-on → Directive transition | Design | Two interaction modes; risk of a "grief point" (lives in Building/Population) | Concept decision = **additive** (hands-on never removed); design the transition explicitly |

---

## Progress Tracker

| Metric | Count |
|--------|-------|
| Total systems identified | 26 (+ deferred breadth items) |
| MVP-tier systems | 22 (incl. accessibility constraint; +Game State/Session added 2026-06-26) |
| Design docs started | 2 |
| Design docs reviewed | 0 |
| Design docs approved | 0 |
| MVP systems designed | 2 / 22 |
| Target Ship systems designed | 0 / 4+ |

---

## Next Steps

- [ ] Design MVP-tier systems in the order above (`/design-system [system-name]`, or `/map-systems next`)
- [ ] Run `/design-review design/gdd/[system].md` after each GDD
- [ ] `/art-bible` before/early in UI work — lock the visual identity + colorblind hard constraint
- [ ] Run `/gate-check systems-design` (fires CD-SYSTEMS + TD-SYSTEM-BOUNDARY) for a formal director sign-off
- [ ] `/vertical-slice` to validate the full loop before committing to Production
