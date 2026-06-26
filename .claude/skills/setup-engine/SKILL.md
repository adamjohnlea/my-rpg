---
name: setup-engine
description: "Confirm and pin the project's Phaser version. This project is locked to Phaser 4 (TypeScript, Vite); the engine is not selectable. Pins the version in CLAUDE.md, flags the Phaser 3 -> 4 knowledge gap, and points all engine knowledge at node_modules/phaser/skills/."
argument-hint: "[version] | refresh | upgrade [old-version] [new-version] | no args to confirm the pinned version"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, WebSearch, WebFetch, Task, AskUserQuestion
model: sonnet
---

When this skill is invoked:

> **Engine is fixed.** This project is a Phaser 4 (TypeScript, Vite) game. The
> engine is not selectable and there is no guided engine-selection flow. The
> authoritative Phaser API knowledge lives in `node_modules/phaser/skills/`
> (~28 subsystem folders, each with a `SKILL.md`). This skill only confirms the
> version, pins it, and surfaces the version knowledge gap. The `phaser-specialist`
> agent is the engine authority for all implementation.

## 1. Parse Arguments

Three modes:

- **Version**: `/setup-engine 4.0.0` — pin a specific Phaser version
- **No args**: `/setup-engine` — read the installed Phaser version and confirm the pin
- **Refresh**: `/setup-engine refresh` — re-check the latest Phaser release and update the pin (see Section 6)
- **Upgrade**: `/setup-engine upgrade [old-version] [new-version]` — migrate to a new Phaser version (see Section 7)

---

## 2. Determine the Installed Version

The installed Phaser version is the source of truth, not memory.

1. Read `package.json` and take the `dependencies.phaser` value.
2. If `node_modules/phaser/package.json` exists, read its `version` field and prefer
   it (it reflects what is actually installed). If it is absent, tell the user to run
   `npm install` and stop.
3. If a `version` argument was passed and it disagrees with the installed version,
   surface the mismatch and ask which is authoritative before continuing.

Report: "Installed Phaser is `[version]` (from `node_modules/phaser`)."

---

## 3. Update CLAUDE.md Engine Line

Read `CLAUDE.md`. The engine line should read (idempotent — do not duplicate if a
similar line already exists):

```
Engine: Phaser 4 (TypeScript, Vite). Engine authority agent: phaser-specialist. Engine knowledge lives in node_modules/phaser/skills/
```

If the line is already present and correct, note "already applied" and skip. If the
version in the Technology Stack section is stale, ask:
"May I update the pinned Phaser version in `CLAUDE.md` to `[version]`?" and wait for
confirmation before editing.

---

## 4. Confirm Technical Preferences

The Phaser defaults already live in `.claude/docs/technical-preferences.md` (Engine &
Language, Input & Platform, Naming Conventions, Performance Budgets, Testing, Engine
Specialists, File Extension Routing — all routed to `phaser-specialist`).

Read the file and confirm the Engine & Language section matches the installed version:

```markdown
- **Engine**: Phaser 4 (TypeScript, Vite)
- **Language**: TypeScript
- **Rendering**: WebGL (Phaser 4 renderer), Canvas fallback
- **Physics**: Arcade (top-down RPG); Matter only if a system truly needs it
```

If any section still contains `[TO BE CONFIGURED]`, offer to fill it and wait for
approval before writing. Do NOT add speculative dependencies to Allowed Libraries —
only add a library when it is actively being integrated.

The Engine Specialists routing is fixed for this project:

```markdown
## Engine Specialists
- **Primary**: phaser-specialist
- **Language/Code Specialist**: phaser-specialist
- **Shader Specialist**: phaser-specialist (see node_modules/phaser/skills/filters-and-postfx)
- **UI Specialist**: phaser-specialist
- **Additional Specialists**: none
- **Routing Notes**: All engine knowledge lives in node_modules/phaser/skills/. The specialist must Read the matching SKILL.md before implementing any subsystem.

### File Extension Routing

| File Extension / Type | Specialist to Spawn |
|-----------------------|---------------------|
| Game code (TypeScript .ts) | phaser-specialist |
| Shader / material files | phaser-specialist |
| UI / screen files | phaser-specialist |
| Scene / prefab / level files | phaser-specialist |
| Native extension / plugin files | phaser-specialist |
| General architecture review | Primary |
```

---

## 5. Knowledge Gap — Phaser 3 vs Phaser 4

The LLM knowledge cutoff is **May 2025**. Training data covers Phaser **3.x** well but
predates much of Phaser **4**. Treat all Phaser 4 specifics as `HIGH RISK` for
hallucination — verify against the in-repo skills rather than relying on memory.

The canonical references already ship in the repo:

- `node_modules/phaser/skills/v3-to-v4-migration/SKILL.md` — what changed from 3 to 4
- `node_modules/phaser/skills/v4-new-features/SKILL.md` — APIs new in 4 that the model
  does not know
- Every subsystem folder (`scenes/`, `physics-arcade/`, `tilemaps/`,
  `input-keyboard-mouse-touch/`, `animations/`, `filters-and-postfx/`, etc.) has its
  own `SKILL.md` — Read the matching one before implementing that subsystem.

Because the authoritative docs are vendored in `node_modules/phaser/skills/`, there is
**no separate `docs/engine-reference/` set to generate** for Phaser. Do not create one
— it would duplicate the vendored skills and drift out of date. Confirm to the user that
the engine reference is the vendored skills directory.

Optionally, pin the version in a lightweight note for humans:

```markdown
# Phaser — Version Reference

| Field | Value |
|-------|-------|
| **Engine Version** | [version] |
| **Language** | TypeScript (Vite bundler) |
| **Project Pinned** | [today's date] |
| **LLM Knowledge Cutoff** | May 2025 (covers Phaser 3.x; Phaser 4 is largely beyond it) |
| **Authoritative Source** | node_modules/phaser/skills/ |
| **Risk Level** | HIGH for Phaser-4-specific APIs — verify against vendored skills |
```

Ask before writing this note, and only if the user wants a human-readable pin.

---

## 6. Refresh Subcommand

If invoked as `/setup-engine refresh`:

1. Read the installed version from `node_modules/phaser/package.json`.
2. Use WebSearch to check for a newer stable Phaser release than what is installed.
3. If a newer release exists, report it and the headline changes, and tell the user
   they can adopt it with `npm install phaser@latest` followed by
   `/setup-engine upgrade [installed] [new]`. Do NOT bump the dependency yourself.
4. Update any human-readable version note and the CLAUDE.md version with the
   currently-installed version if it had drifted. Report what changed.

---

## 7. Upgrade Subcommand

If invoked as `/setup-engine upgrade [old-version] [new-version]`:

### Step 1 — Establish versions
If `old-version` is omitted, use the version currently pinned in `CLAUDE.md` /
`package.json`. Confirm both old and new with the user.

### Step 2 — Fetch migration notes
Prefer the in-repo `node_modules/phaser/skills/v3-to-v4-migration/SKILL.md` and
`v4-new-features/SKILL.md` for major-version moves. Supplement with WebSearch/WebFetch:

- `"Phaser [new-version] release notes"`
- `"Phaser [old-version] to [new-version] migration"`

Extract: renamed APIs, removed APIs, changed defaults, and behavior changes.

### Step 3 — Pre-Upgrade Audit
Grep `src/` for APIs known to be deprecated or changed in the target version (old
function names, removed types, changed properties). Present as a table:

```
Pre-Upgrade Audit: Phaser [old-version] -> [new-version]
========================================================
Files requiring changes:
  File                          | Deprecated API Found | Effort
  ----------------------------- | -------------------- | ------
  src/game/scenes/Game.ts       | old_api_name         | Low

Breaking changes to watch for:
  - [change from migration notes]

Recommended migration order (dependency-sorted):
  1. [system with fewest dependencies first]
```

If nothing matches, report: "No deprecated API usage found in src/ — upgrade may be
low-risk."

### Step 4 — Confirm before updating
Ask before any changes:

> "Pre-upgrade audit complete. Found [N] files using deprecated APIs. Proceed with
> updating the pinned version to [new-version]? (Updates the pin and migration notes;
> does NOT change source files or run npm.)"

Wait for explicit confirmation.

### Step 5 — Update the pin
After confirmation, update the Phaser version in `CLAUDE.md` (and the human-readable
version note if one exists), add a `## Migration Notes — [old] -> [new]` section with
the migration source, key breaking changes, and the audit's recommended order.

### Step 6 — Post-Upgrade Reminder

```
Phaser pin updated: [old-version] -> [new-version]

Next steps:
1. Run `npm install phaser@[new-version]` if not already installed
2. Migrate the deprecated API usages in the files listed above
3. Re-read node_modules/phaser/skills/v3-to-v4-migration and v4-new-features if this
   crossed a major version
4. Run /architecture-review — the upgrade may invalidate ADRs referencing specific APIs
5. If any ADRs are invalidated, run /propagate-design-change to update downstream stories
```

---

## 8. Output Summary

After setup is complete, output:

```
Engine Setup Complete
=====================
Engine:          Phaser [version] (TypeScript, Vite)
Authority:       phaser-specialist
Knowledge:       node_modules/phaser/skills/
Knowledge Risk:  HIGH for Phaser-4-specific APIs (cutoff predates Phaser 4)
CLAUDE.md:       [updated/already applied]
Tech Prefs:      [confirmed/updated]

Next Steps:
1. [If fresh start] Run /brainstorm to discover your game concept
2. [If from /brainstorm] Run /map-systems to decompose your concept into systems
3. [If from /brainstorm] Run /design-system to author per-system GDDs
4. [If from /brainstorm] Run /prototype [core-mechanic] to validate the core idea
5. Create your first milestone: /sprint-plan new
```

---

Verdict: **COMPLETE** — Phaser version confirmed and pinned.

## Guardrails

- The engine is fixed to Phaser 4. Never offer Godot/Unity/Unreal paths or spawn
  specialists for other engines — only `phaser-specialist` exists in this project.
- NEVER guess the Phaser version — read it from `node_modules/phaser/package.json` or
  confirm with the user.
- NEVER bump the `phaser` dependency in `package.json` yourself — tell the user the
  `npm install` command to run.
- Treat Phaser 4 APIs as HIGH RISK for hallucination — verify against
  `node_modules/phaser/skills/` rather than relying on training data.
- Do NOT create a `docs/engine-reference/` set for Phaser — the vendored skills are the
  authoritative source.
- Always show the user what you're about to change before editing `CLAUDE.md` or
  `technical-preferences.md`.
- Never add speculative dependencies to Allowed Libraries.
