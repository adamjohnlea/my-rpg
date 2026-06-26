// PROTOTYPE - NOT FOR PRODUCTION
// Question: Does lore-as-power discovery pull the player forward into exploration and feel
//           rewarding, with NO deduction? Gather lore while venturing (from receptive peoples
//           and sites; soldiers/barbarians refuse), complete a themed set -> gain a thematic
//           perk (e.g. The Great Fire -> Fireward). A wildfire then tests whether the knowledge
//           you chased actually became power.
// Date: 2026-06-26
//
// Throwaway concept prototype for Hearthfall. Tests ONE loop. No save, no art, no polish.

import { Game, Scene, AUTO } from 'phaser';

// ---- Tuning knobs (hardcoded on purpose) ----
const W = 1040;
const H = 760;
const RING_X = 420;
const RING_Y = 392;

const START_PROVISIONS = 8;
const VENTURE_COST = 1;
const WILDFIRE_AT_VISIT = 5;   // the summer wind comes after your 5th venture
const WILDFIRE_LOSS = 5;       // provisions burned if you are NOT Fireward
const PATHWISE_BONUS = 3;      // Old Roads complete -> +3 provisions at once
const WELLSPRING_REGEN = 1;    // River Pact complete -> +1 provision after each later venture

// Colors
const C_BG = 0x2a2620;
const C_PARCH = 0xefe6d6;
const C_INK = 0x2e2a24;
const C_MUTED = 0x6b6253;
const C_EMBER = 0xc4561e;
const C_RIVER = 0x3f6f86;
const C_ROAD = 0xb08948;
const C_DANGER = 0x9a3b32;
const C_GOOD = 0x3f7d4f;
const C_LINE = 0x4a4338;

type SetKey = 'fire' | 'roads' | 'river';
type Kind = 'site' | 'person' | 'hostile';

interface NodeDef {
  id: string;
  name: string;
  rumor: string;
  x: number; y: number;
  kind: Kind;
  set?: SetKey;
  fragment?: string;       // lore line granted
  refusal?: string;        // hostile line
}

// 9 nodes around the hearth. Themes are mixed around the ring on purpose, so the player must
// READ THE RUMORS and choose where to venture — not just sweep clockwise.
const NODES: NodeDef[] = [
  { id:'milestones', name:'The Old Milestones', rumor:'carved stones along a forgotten road', x:680, y:392, kind:'site', set:'roads',
    fragment:'Mile-markers in a dead tongue — the valley once lay on a great trade road.' },
  { id:'shrine', name:'The Ash Shrine', rumor:'a shrine of cinders, tended by no one', x:618, y:228, kind:'site', set:'fire',
    fragment:'Offerings of charcoal, left unburned. They feared a fire — and tried to appease it.' },
  { id:'ridge', name:'The Scorched Ridge', rumor:'they say the old burning began up here', x:472, y:150, kind:'site', set:'fire',
    fragment:'The south face is glassed smooth; the north untouched. The fire came from beyond it.' },
  { id:'wanderer', name:"A Wanderer's Camp", rumor:'a wanderer who fled some old calamity', x:306, y:178, kind:'person', set:'fire',
    fragment:'"My people name this place the ash that fell. The sky there went wrong, once."' },
  { id:'soldiers', name:'A Soldier Camp', rumor:'armed men — they suffer no strangers', x:200, y:300, kind:'hostile',
    refusal:'Spears lower as you near. They tell you nothing and send you off.' },
  { id:'fisher', name:"A Fisher's Hut", rumor:'an old hermit who reads the river', x:200, y:484, kind:'person', set:'river',
    fragment:'"The river kept a pact with the old folk: tend the weir, and it never floods you."' },
  { id:'weir', name:'The Old Weir', rumor:'a broken weir across the river', x:306, y:606, kind:'site', set:'river',
    fragment:'Sluice-gates built to a clever plan — flood-water could be turned aside by hand.' },
  { id:'barbarians', name:'A Barbarian Band', rumor:'raiders camped on the trail — danger', x:472, y:634, kind:'hostile',
    refusal:'They come at you howling. You flee, and lose provisions in the scramble.' },
  { id:'trader', name:'A Trader on the Road', rumor:'a trader who has walked every road', x:618, y:556, kind:'person', set:'roads',
    fragment:'"Follow the old markers and you halve your journey. The roads remember."' },
];

const SETS: Record<SetKey, { name: string; perk: string; perkBlurb: string; color: number }> = {
  fire:  { name:'The Great Fire', perk:'Fireward',  perkBlurb:'your wards hold against the wildfire', color:C_EMBER },
  roads: { name:'The Old Roads',  perk:'Pathwise',  perkBlurb:'+'+PATHWISE_BONUS+' provisions; the roads open to you', color:C_ROAD },
  river: { name:'The River Pact', perk:'Wellspring', perkBlurb:'+'+WELLSPRING_REGEN+' provision after each venture', color:C_RIVER },
};

function fragsNeeded(set: SetKey): number {
  return NODES.filter(n => n.set === set).length;
}

class LoreScene extends Scene {
  provisions = START_PROVISIONS;
  visits = 0;
  wildfireDone = false;
  over = false;
  collected: Record<SetKey, number> = { fire:0, roads:0, river:0 };
  done: Record<SetKey, boolean> = { fire:false, roads:false, river:false };
  perks: Record<string, boolean> = {};

  // view refs
  nodeViews: Record<string, { box: any; name: any; sub: any; def: NodeDef; visited: boolean }> = {};
  hudProv!: any;
  hudThreat!: any;
  hudPerks!: any;
  codexText: Record<SetKey, any> = {} as any;
  logLines: string[] = [];
  logText!: any;
  restBtn!: any;

  create() {
    this.add.rectangle(W/2, H/2, W, H, C_BG).setOrigin(0.5);

    // --- HUD bar ---
    this.add.rectangle(W/2, 34, W-24, 52, 0x171410).setOrigin(0.5).setStrokeStyle(1, C_LINE);
    this.add.text(28, 20, 'HEARTHFALL · Knowledge is Power', { fontSize:'15px', color:'#c4561e', fontStyle:'bold' });
    this.hudProv = this.add.text(28, 40, '', { fontSize:'14px', color:'#efe6d6' });
    this.hudThreat = this.add.text(360, 40, '', { fontSize:'14px', color:'#e7b86a' });
    this.hudPerks = this.add.text(360, 20, '', { fontSize:'13px', color:'#9cc9a8' });

    // --- hearth (center, not a venture target) ---
    this.add.circle(RING_X, RING_Y, 34, 0x3a2f23).setStrokeStyle(2, C_EMBER);
    this.add.text(RING_X, RING_Y-7, '⌂', { fontSize:'22px', color:'#c4561e' }).setOrigin(0.5);
    this.add.text(RING_X, RING_Y+14, 'your hearth', { fontSize:'11px', color:'#8a7f6c' }).setOrigin(0.5);

    // --- nodes ---
    NODES.forEach(def => this.buildNode(def));

    // --- codex panel ---
    const px = 742, pw = 282;
    this.add.rectangle(px + pw/2, 392, pw, 612, 0x1d1a14).setOrigin(0.5).setStrokeStyle(1, C_LINE);
    this.add.text(px+16, 104, 'LORE CODEX', { fontSize:'13px', color:'#8a7f6c', fontStyle:'bold' });
    this.add.text(px+16, 122, 'Knowledge completes itself as you venture.', { fontSize:'11px', color:'#6b6253' });
    let cy = 156;
    (['fire','roads','river'] as SetKey[]).forEach(key => {
      const t = this.add.text(px+16, cy, '', { fontSize:'13px', color:'#efe6d6', wordWrap:{ width: pw-32 }, lineSpacing:3 });
      this.codexText[key] = t;
      cy += 150;
    });

    // --- log ---
    this.add.rectangle(W/2, 706, W-24, 84, 0x171410).setOrigin(0.5).setStrokeStyle(1, C_LINE);
    this.logText = this.add.text(28, 676, '', { fontSize:'13px', color:'#d8ccb6', wordWrap:{ width: W-360 }, lineSpacing:4 });

    // --- rest button ---
    this.restBtn = this.add.text(W-150, 678, '⛺ Rest (end season)', { fontSize:'13px', color:'#b9ad97', backgroundColor:'#2e2820', padding:{ x:10, y:8 } })
      .setInteractive({ useHandCursor:true })
      .on('pointerdown', () => { if (!this.over) this.endRun('You rest by the hearth and take stock of what you have learned.'); })
      .on('pointerover', () => this.restBtn.setColor('#ffffff'))
      .on('pointerout', () => this.restBtn.setColor('#b9ad97'));

    this.log('You are the first to settle here in three hundred years. Venture out — read the rumors, seek what the land remembers.', '#e7b86a');
    this.refreshHud();
    this.refreshCodex();

    // PROTOTYPE-ONLY: expose scene for automated verification (harmless throwaway hook)
    (window as any).__lore = this;
  }

  buildNode(def: NodeDef) {
    const bw = 176, bh = 56;
    const box = this.add.rectangle(def.x, def.y, bw, bh, C_PARCH).setStrokeStyle(2, this.themeColor(def));
    const name = this.add.text(def.x, def.y-12, def.name, { fontSize:'13px', color:'#2e2a24', fontStyle:'bold' }).setOrigin(0.5);
    const sub = this.add.text(def.x, def.y+9, def.rumor, { fontSize:'10.5px', color:'#6b6253', fontStyle:'italic', wordWrap:{ width: bw-14 }, align:'center' }).setOrigin(0.5);
    box.setInteractive({ useHandCursor:true })
      .on('pointerdown', () => this.venture(def.id))
      .on('pointerover', () => { if (!this.nodeViews[def.id].visited && !this.over) box.setFillStyle(0xfff6e6); })
      .on('pointerout', () => { if (!this.nodeViews[def.id].visited && !this.over) box.setFillStyle(C_PARCH); });
    this.nodeViews[def.id] = { box, name, sub, def, visited:false };
  }

  themeColor(def: NodeDef): number {
    if (def.kind === 'hostile') return C_DANGER;
    if (def.set === 'fire') return C_EMBER;
    if (def.set === 'roads') return C_ROAD;
    if (def.set === 'river') return C_RIVER;
    return C_MUTED;
  }

  venture(id: string) {
    if (this.over) return;
    const view = this.nodeViews[id];
    if (view.visited) return;
    if (this.provisions < VENTURE_COST) { this.log('You have no provisions left to venture.', '#e08a6a'); return; }

    view.visited = true;
    this.provisions -= VENTURE_COST;
    this.visits++;

    const def = view.def;
    if (def.kind === 'hostile') {
      view.box.setFillStyle(0xe7cfc9);
      view.sub.setText('— turned away —');
      if (id === 'barbarians') { this.provisions = Math.max(0, this.provisions - 1); this.log('⚔ ' + def.refusal, '#e08a6a'); }
      else this.log('⚔ ' + def.refusal, '#e0b06a');
    } else {
      // receptive person or site -> lore fragment
      view.box.setFillStyle(0xf6e7cf);
      const verb = def.kind === 'person' ? 'They share what they know:' : 'You read the land:';
      this.log('❖ ' + verb + ' "' + def.fragment + '"', '#e7d8b6');
      const set = def.set!;
      this.collected[set]++;
      view.sub.setText('✓ recorded');
      if (this.collected[set] >= fragsNeeded(set) && !this.done[set]) this.completeSet(set);
    }

    // Wellspring regen (after the venture resolves)
    if (this.perks['Wellspring'] && !this.over) this.provisions += WELLSPRING_REGEN;

    // The summer wind
    if (this.visits === WILDFIRE_AT_VISIT && !this.wildfireDone) this.triggerWildfire();

    this.refreshHud();
    this.refreshCodex();

    if (!this.over) {
      if (this.provisions <= 0) this.endRun('Your provisions are spent. The season closes.');
      else if (Object.values(this.nodeViews).every(v => v.visited)) this.endRun('You have walked the whole valley.');
    }
  }

  completeSet(set: SetKey) {
    this.done[set] = true;
    const s = SETS[set];
    this.perks[s.perk] = true;
    this.log('★ You now understand ' + s.name + ' — gained ' + s.perk + ' (' + s.perkBlurb + ').', '#9cc9a8');
    if (s.perk === 'Pathwise') this.provisions += PATHWISE_BONUS;
  }

  triggerWildfire() {
    this.wildfireDone = true;
    if (this.perks['Fireward']) {
      this.log('🔥 A wildfire rides the summer wind — and breaks against your warded granaries. You lose nothing. The knowledge you chased became power.', '#9cc9a8');
    } else {
      this.provisions -= WILDFIRE_LOSS;
      this.log('🔥 A wildfire rides the summer wind. You did not yet understand the old fire — flames take your outer stores. (−' + WILDFIRE_LOSS + ' provisions)', '#e08a6a');
      if (this.provisions <= 0) { this.refreshHud(); this.endRun('The wildfire guts your settlement. You needed the old knowledge sooner.'); }
    }
  }

  refreshHud() {
    this.hudProv.setText('Provisions: ' + Math.max(0, this.provisions) + '   ·   Ventured: ' + this.visits);
    if (!this.wildfireDone) {
      const n = WILDFIRE_AT_VISIT - this.visits;
      this.hudThreat.setText('A summer wind is coming in ' + Math.max(0, n) + ' venture' + (n === 1 ? '' : 's') + '…');
    } else {
      this.hudThreat.setText(this.perks['Fireward'] ? 'The wildfire passed. You were ready.' : 'The wildfire came. You were not ready.');
    }
    const perks = Object.keys(this.perks);
    this.hudPerks.setText(perks.length ? 'Perks: ' + perks.join(' · ') : 'Perks: none yet');
  }

  refreshCodex() {
    (['fire','roads','river'] as SetKey[]).forEach(key => {
      const s = SETS[key];
      const have = this.collected[key];
      const need = fragsNeeded(key);
      const head = (this.done[key] ? '★ ' : '') + s.name + '  ' + have + '/' + need;
      const body = this.done[key]
        ? '  → ' + s.perk + ': ' + s.perkBlurb
        : '  perk: ' + s.perk + ' (' + s.perkBlurb + ')';
      this.codexText[key].setText(head + '\n' + body);
      this.codexText[key].setColor(this.done[key] ? '#9cc9a8' : '#cdbfa6');
    });
  }

  endRun(reason: string) {
    if (this.over) return;
    this.over = true;
    const learned = (['fire','roads','river'] as SetKey[]).filter(k => this.done[k]).map(k => SETS[k].name);
    const survived = this.provisions > 0;

    const veil = this.add.rectangle(W/2, H/2, W, H, 0x140f0a, 0.82).setOrigin(0.5).setInteractive();
    this.add.text(W/2, 210, survived ? 'The season closes.' : 'The settlement falls.', { fontSize:'30px', color: survived ? '#e7b86a' : '#e08a6a', fontStyle:'bold' }).setOrigin(0.5);
    this.add.text(W/2, 262, reason, { fontSize:'15px', color:'#d8ccb6', wordWrap:{ width:680 }, align:'center' }).setOrigin(0.5);
    this.add.text(W/2, 340,
      learned.length ? 'Knowledge earned: ' + learned.join(' · ') : 'You earned no full knowledge this season.',
      { fontSize:'15px', color:'#9cc9a8', wordWrap:{ width:680 }, align:'center' }).setOrigin(0.5);
    this.add.text(W/2, 392, 'Provisions remaining: ' + Math.max(0, this.provisions), { fontSize:'14px', color:'#cdbfa6' }).setOrigin(0.5);

    const btn = this.add.text(W/2, 470, '↻ Begin again', { fontSize:'16px', color:'#ffffff', backgroundColor:'#c4561e', padding:{ x:18, y:11 } })
      .setOrigin(0.5).setInteractive({ useHandCursor:true })
      .on('pointerdown', () => this.scene.restart());
    void veil; void btn;
  }

  log(msg: string, color = '#d8ccb6') {
    this.logLines.push(msg);
    if (this.logLines.length > 3) this.logLines.shift();
    this.logText.setText(this.logLines.join('\n'));
    this.logText.setColor(color);
  }
}

new Game({
  type: AUTO,
  width: W,
  height: H,
  parent: 'game',
  backgroundColor: '#211d17',
  scene: LoreScene,
});
