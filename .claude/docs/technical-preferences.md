# Technical Preferences

<!-- Populated by /setup-engine. Updated as the user makes decisions throughout development. -->
<!-- All agents reference this file for project-specific standards and conventions. -->

## Engine & Language

## Engine & Language

- **Engine**: Phaser 4 (TypeScript, Vite)
- **Language**: TypeScript
- **Rendering**: WebGL (Phaser 4 renderer), Canvas fallback
- **Physics**: Arcade (top-down RPG); Matter only if a system truly needs it

## Input & Platform

<!-- Written by /setup-engine. Read by /ux-design, /ux-review, /test-setup, /team-ui, and /dev-story -->
<!-- to scope interaction specs, test helpers, and implementation to the correct input methods. -->

- **Target Platforms**: Web (desktop browser first; mobile web later)
- **Input Methods**: Keyboard/Mouse (Gamepad optional)
- **Primary Input**: Keyboard/Mouse
- **Gamepad Support**: Partial (optional)
- **Touch Support**: Partial (mobile web, later)
- **Platform Notes**: Runs in a browser tab. No native build chain. No app store.

## Naming Conventions

- **Classes**: PascalCase
- **Variables**: camelCase
- **Signals/Events**: camelCase event names
- **Files**: PascalCase for class files, kebab-case for assets
- **Scenes/Prefabs**: PascalCase scene keys
- **Constants**: UPPER_SNAKE_CASE

## Performance Budgets

- **Target Framerate**: 60 fps
- **Frame Budget**: 16 ms
- **Draw Calls**: Keep low; batch sprites; use SpriteGPULayer for large counts
- **Memory Ceiling**: Target under 512 MB in-browser

## Testing

- **Framework**: Vitest (unit) + Playwright (gameplay/E2E)
- **Minimum Coverage**: Pragmatic to start; raise as systems stabilize
- **Required Tests**: Balance formulas, gameplay systems, save/load

## Forbidden Patterns

<!-- Add patterns that should never appear in this project's codebase -->
- [None configured yet — add as architectural decisions are made]

## Allowed Libraries / Addons

<!-- Add approved third-party dependencies here -->
- [None configured yet — add as dependencies are approved]

## Architecture Decisions Log

<!-- Quick reference linking to full ADRs in docs/architecture/ -->
- [No ADRs yet — use /architecture-decision to create one]

## Engine Specialists

- **Primary**: phaser-specialist
- **Language/Code Specialist**: phaser-specialist
- **Shader Specialist**: phaser-specialist (see node_modules/phaser/skills/filters-and-postfx)
- **UI Specialist**: phaser-specialist
- **Additional Specialists**: none
- **Routing Notes**: All engine knowledge lives in node_modules/phaser/skills/. The specialist must Read the matching SKILL.md before implementing any subsystem.

### File Extension Routing

<!-- Skills use this table to select the right specialist per file type. -->
<!-- If a row says [TO BE CONFIGURED], fall back to Primary for that file type. -->

| File Extension / Type | Specialist to Spawn |
|-----------------------|---------------------|
| Game code (TypeScript .ts) | phaser-specialist  |
| Shader / material files | phaser-specialist |
| UI / screen files | phaser-specialist  |
| Scene / prefab / level files | phaser-specialist  |
| Native extension / plugin files | phaser-specialist  |
| General architecture review | Primary |
