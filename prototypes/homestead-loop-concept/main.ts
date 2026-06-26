// PROTOTYPE - NOT FOR PRODUCTION
// Question: Does a turn-based, tactile homestead building loop feel satisfying ("one more season")?
// Date: 2026-06-25
//
// Throwaway concept prototype for Hearthfall. Tests ONE mechanic: the season-turn
// build-and-grow loop with winter-survival pressure. No art, no save, no polish.

import { Game, Scene, AUTO } from 'phaser';

// ---- Tuning knobs (hardcoded on purpose — this is a prototype) ----
const GRID_COLS = 6;
const GRID_ROWS = 6;
const CELL = 74;
const GRID_X = 300;
const GRID_Y = 150;

const SEASONS = ['Spring', 'Summer', 'Autumn', 'Winter'];
const FARM_YIELD = [3, 5, 6, 0]; // food per farm, by season (winter = dormant)

type BKey = 'FARM' | 'FORESTER' | 'HOUSE' | 'GRANARY';

const BUILDINGS: Record<BKey, { name: string; letter: string; cost: number; color: number; blurb: string }> = {
  FARM:     { name: 'Farm',     letter: 'F', cost: 10, color: 0x6fae5f, blurb: 'grows food (best in summer/autumn)' },
  FORESTER: { name: 'Forester', letter: 'T', cost: 8,  color: 0x46703a, blurb: 'cuts wood every season' },
  HOUSE:    { name: 'House',    letter: 'H', cost: 15, color: 0xd98a4a, blurb: '+4 population cap' },
  GRANARY:  { name: 'Granary',  letter: 'G', cost: 18, color: 0x6a89a0, blurb: '+25 food storage' },
};

const START = { wood: 45, food: 20, pop: 3 };
const BASE_POP_CAP = 4;     // + 4 per house
const BASE_FOOD_CAP = 25;   // + 25 per granary
const GROWTH_FOOD_BUFFER = 5;

function tierFor(pop: number): string {
  if (pop >= 12) return 'Village';
  if (pop >= 6) return 'Hamlet';
  return 'Homestead';
}

class Homestead extends Scene {
  // game state
  wood = START.wood;
  food = START.food;
  pop = START.pop;
  season = 0;
  year = 1;
  tier = 'Homestead';
  selected: BKey | null = 'FORESTER';
  grid: (BKey | null)[][] = [];

  // view refs
  cells: any[][] = [];
  cellLabels: any[][] = [];
  statText!: any;
  seasonText!: any;
  tierText!: any;
  hintText!: any;
  logLines: string[] = [];
  logText!: any;
  toolButtons: Record<string, { rect: any; key: BKey }> = {} as any;
  bannerText!: any;

  constructor() {
    super('Homestead');
  }

  create() {
    this.cameras.main.setBackgroundColor('#f4f1ea');

    // title + instructions
    this.add.text(20, 18, 'HEARTHFALL — concept prototype', { fontFamily: 'Georgia, serif', fontSize: '22px', color: '#3a352c' });
    this.add.text(20, 48, 'Pick a building below, click an empty tile to place it,\nthen press End Season. Survive winter. Grow your settlement.',
      { fontFamily: 'system-ui', fontSize: '13px', color: '#7a7263' });

    // ---- left panel: resources ----
    this.add.text(20, 150, 'SETTLEMENT', { fontFamily: 'system-ui', fontSize: '13px', color: '#a89e8c' });
    this.statText = this.add.text(20, 172, '', { fontFamily: 'monospace', fontSize: '17px', color: '#3a352c', lineSpacing: 8 });
    this.seasonText = this.add.text(20, 336, '', { fontFamily: 'Georgia, serif', fontSize: '20px', color: '#3a352c' });
    this.tierText = this.add.text(20, 366, '', { fontFamily: 'Georgia, serif', fontSize: '18px', color: '#b5643a' });

    this.add.text(20, 404, 'RECENT EVENTS', { fontFamily: 'system-ui', fontSize: '13px', color: '#a89e8c' });
    this.logText = this.add.text(20, 426, '', { fontFamily: 'system-ui', fontSize: '13px', color: '#5a5346', lineSpacing: 5, wordWrap: { width: 250 } });

    this.hintText = this.add.text(GRID_X, GRID_Y + GRID_ROWS * CELL + 16, '', { fontFamily: 'system-ui', fontSize: '13px', color: '#7a7263' });

    // ---- grid ----
    for (let r = 0; r < GRID_ROWS; r++) {
      this.grid[r] = [];
      this.cells[r] = [];
      this.cellLabels[r] = [];
      for (let c = 0; c < GRID_COLS; c++) {
        this.grid[r][c] = null;
        const x = GRID_X + c * CELL + CELL / 2;
        const y = GRID_Y + r * CELL + CELL / 2;
        const rect = this.add.rectangle(x, y, CELL - 6, CELL - 6, 0xe7e2d6)
          .setStrokeStyle(2, 0xcfc8b8)
          .setInteractive({ useHandCursor: true });
        rect.on('pointerover', () => { if (!this.grid[r][c]) rect.setStrokeStyle(3, 0xd98a4a); });
        rect.on('pointerout', () => { if (!this.grid[r][c]) rect.setStrokeStyle(2, 0xcfc8b8); });
        rect.on('pointerdown', () => this.placeBuilding(r, c));
        const label = this.add.text(x, y, '', { fontFamily: 'Georgia, serif', fontSize: '26px', color: '#ffffff' }).setOrigin(0.5);
        this.cells[r][c] = rect;
        this.cellLabels[r][c] = label;
      }
    }

    // ---- toolbar ----
    const toolY = GRID_Y + GRID_ROWS * CELL + 56;
    let tx = 40;
    (Object.keys(BUILDINGS) as BKey[]).forEach((key) => {
      const b = BUILDINGS[key];
      const w = 104;
      const rect = this.add.rectangle(tx, toolY, w, 56, b.color, 0.92)
        .setOrigin(0, 0)
        .setStrokeStyle(2, 0xb9b1a0)
        .setInteractive({ useHandCursor: true });
      this.add.text(tx + 8, toolY + 8, b.name, { fontFamily: 'system-ui', fontSize: '15px', color: '#ffffff' });
      this.add.text(tx + 8, toolY + 30, `${b.cost} wood`, { fontFamily: 'monospace', fontSize: '13px', color: '#fdf6ec' });
      rect.on('pointerdown', () => { this.selected = key; this.refresh(); });
      this.toolButtons[key] = { rect, key };
      tx += w + 10;
    });

    // End Season button
    const endRect = this.add.rectangle(tx + 6, toolY, 150, 56, 0xb5643a)
      .setOrigin(0, 0)
      .setStrokeStyle(2, 0x8f4d2c)
      .setInteractive({ useHandCursor: true });
    this.add.text(tx + 6 + 75, toolY + 28, '▶  End Season', { fontFamily: 'system-ui', fontSize: '16px', color: '#ffffff' }).setOrigin(0.5);
    endRect.on('pointerdown', () => this.endSeason());

    // tier-up banner (hidden until used)
    this.bannerText = this.add.text(GRID_X + (GRID_COLS * CELL) / 2, GRID_Y - 30, '', { fontFamily: 'Georgia, serif', fontSize: '24px', color: '#b5643a' }).setOrigin(0.5);

    this.log('You arrive at an empty plot. Build a Forester to start cutting wood.');
    this.refresh();
  }

  placeBuilding(r: number, c: number) {
    if (this.grid[r][c]) { this.flashHint('That tile is already built.'); return; }
    if (!this.selected) { this.flashHint('Pick a building first.'); return; }
    const b = BUILDINGS[this.selected];
    if (this.wood < b.cost) { this.flashHint(`Not enough wood for ${b.name} (need ${b.cost}).`); return; }
    this.wood -= b.cost;
    this.grid[r][c] = this.selected;
    this.cells[r][c].setFillStyle(b.color, 1);
    this.cells[r][c].setStrokeStyle(2, 0xcfc8b8);
    this.cellLabels[r][c].setText(b.letter);
    this.refresh();
  }

  counts() {
    let farm = 0, forester = 0, house = 0, granary = 0;
    for (let r = 0; r < GRID_ROWS; r++)
      for (let c = 0; c < GRID_COLS; c++) {
        const k = this.grid[r][c];
        if (k === 'FARM') farm++;
        else if (k === 'FORESTER') forester++;
        else if (k === 'HOUSE') house++;
        else if (k === 'GRANARY') granary++;
      }
    return { farm, forester, house, granary };
  }

  endSeason() {
    const { farm, forester, house, granary } = this.counts();
    const popCap = BASE_POP_CAP + house * 4;
    const foodCap = BASE_FOOD_CAP + granary * 25;
    const isWinter = this.season === 3;

    // 1. production
    this.wood += forester * (isWinter ? 2 : 4);
    this.food += farm * FARM_YIELD[this.season];

    // 2. storage clamp (spoilage)
    if (this.food > foodCap) {
      const spoiled = this.food - foodCap;
      this.food = foodCap;
      if (spoiled > 0) this.log(`${spoiled} food spoiled — build a Granary to store more.`);
    }

    // 3. consumption
    const eaten = this.pop * (isWinter ? 2 : 1);
    this.food -= eaten;

    // 4. growth or starvation
    if (this.food < 0) {
      this.food = 0;
      if (this.pop > 1) { this.pop -= 1; this.log(`⚠ ${isWinter ? 'Harsh winter' : 'Hunger'} — a settler was lost (pop -1).`); }
      else this.log('⚠ Famine grips your lone settler. Plant farms, store food!');
    } else if (this.pop < popCap && this.food >= GROWTH_FOOD_BUFFER) {
      this.pop += 1;
      this.log('A family heard of your hearth and joined you (pop +1).');
    } else if (this.pop >= popCap && farm > 0) {
      this.flashHint('Build a House to make room for more settlers.');
    }

    // 5. advance the turn
    this.season = (this.season + 1) % 4;
    if (this.season === 0) { this.year += 1; this.log(`— Year ${this.year} begins —`); }

    // 6. tier-up moment
    const newTier = tierFor(this.pop);
    if (newTier !== this.tier && this.pop > 0) {
      const grew = ['Homestead', 'Hamlet', 'Village'].indexOf(newTier) > ['Homestead', 'Hamlet', 'Village'].indexOf(this.tier);
      this.tier = newTier;
      if (grew) this.showBanner(`✦ Your settlement grew into a ${newTier}! ✦`);
    }

    this.refresh();
  }

  showBanner(msg: string) {
    this.bannerText.setText(msg);
    this.bannerText.setAlpha(1);
    this.tweens.add({ targets: this.bannerText, alpha: 0, duration: 2600, ease: 'Cubic.easeIn' });
  }

  flashHint(msg: string) {
    this.hintText.setText(msg);
    this.hintText.setColor('#b5643a');
    this.tweens.killTweensOf(this.hintText);
    this.hintText.setAlpha(1);
    this.tweens.add({ targets: this.hintText, alpha: 0.0, delay: 1400, duration: 600 });
  }

  log(line: string) {
    this.logLines.unshift(line);
    if (this.logLines.length > 6) this.logLines.pop();
    if (this.logText) this.logText.setText(this.logLines.join('\n'));
  }

  refresh() {
    const { farm, forester, house, granary } = this.counts();
    const popCap = BASE_POP_CAP + house * 4;
    const foodCap = BASE_FOOD_CAP + granary * 25;

    this.statText.setText(
      `Wood        ${this.wood}\n` +
      `Food        ${this.food} / ${foodCap}\n` +
      `Population   ${this.pop} / ${popCap}\n\n` +
      `Farms ${farm}  Foresters ${forester}\n` +
      `Houses ${house}  Granaries ${granary}`
    );

    const seasonHints = ['planting season', 'strong harvests', 'best harvests — stock up!', 'farms dormant, settlers eat double'];
    this.seasonText.setText(`${SEASONS[this.season]}, Year ${this.year}`);
    this.tierText.setText(`${this.tier}`);
    this.hintText.setColor('#7a7263');
    this.hintText.setAlpha(1);
    const b = this.selected ? BUILDINGS[this.selected] : null;
    this.hintText.setText(
      `${SEASONS[this.season]}: ${seasonHints[this.season]}` +
      (b ? `   •   Selected: ${b.name} — ${b.blurb}` : '')
    );

    // highlight selected tool
    (Object.keys(this.toolButtons) as string[]).forEach((k) => {
      const tb = this.toolButtons[k];
      tb.rect.setStrokeStyle(tb.key === this.selected ? 4 : 2, tb.key === this.selected ? 0x3a352c : 0xb9b1a0);
    });
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const game = new Game({
  type: AUTO,
  width: 920,
  height: 720,
  parent: 'game',
  backgroundColor: '#f4f1ea',
  scene: [Homestead],
});
