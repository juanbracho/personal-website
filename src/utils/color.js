export function shadeD(hex, amt) {
  const h = hex.replace('#', '');
  const r = Math.max(0, Math.min(255, parseInt(h.slice(0, 2), 16) + amt));
  const g = Math.max(0, Math.min(255, parseInt(h.slice(2, 4), 16) + amt));
  const b = Math.max(0, Math.min(255, parseInt(h.slice(4, 6), 16) + amt));
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

export const D = {
  woodBg: `
    radial-gradient(ellipse at 25% 25%, rgba(255,235,195,0.55), transparent 50%),
    radial-gradient(ellipse at 75% 80%, rgba(120,70,30,0.35), transparent 60%),
    linear-gradient(160deg, #b88454 0%, #8a5a32 50%, #6b4220 100%)
  `,
  woodGrain: `
    repeating-linear-gradient(98deg, transparent 0px, transparent 30px, rgba(60,30,10,0.08) 30px, rgba(60,30,10,0.08) 31px),
    repeating-linear-gradient(102deg, transparent 0px, transparent 80px, rgba(255,220,180,0.05) 80px, rgba(255,220,180,0.05) 82px)
  `,
  cream:      '#fffaf0',
  dark:       '#2a1f15',
  terra:      '#c4633c',
  gold:       '#d4a056',
  sticky:     '#fef080',
  ink:        '#1f1d18',
  muted:      '#5a4530',
  ghost:      '#fbeed8',
  green:      '#5e6b4a',
  paper:      '#f5e8d4',
};
