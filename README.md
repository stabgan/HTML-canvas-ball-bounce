# HTML Canvas Ball Bounce

A bouncing ball animation built with the HTML5 Canvas API. The ball ricochets off the canvas edges and changes colour on every bounce, using a radial gradient and drop shadow for a simple 3-D effect.

## How It Works

- A single `<canvas>` element is drawn on each frame via `requestAnimationFrame`.
- The ball's position is updated by a velocity vector; when it hits a wall the relevant axis is reversed.
- Each collision generates a new random colour that blends into the previous one through a `createRadialGradient`.

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| 🏗️ Markup | HTML5 |
| 🎨 Styling | CSS3 |
| ⚙️ Logic | Vanilla JavaScript (ES6+) |
| 🖼️ Rendering | Canvas 2D API |

## Getting Started

No build step required — just open the file in a browser:

```bash
# clone the repo
git clone https://github.com/stabgan/HTML-canvas-ball-bounce.git
cd HTML-canvas-ball-bounce

# open in your default browser (macOS)
open index.html

# …or on Linux
xdg-open index.html
```

## Fixes Applied

- Replaced unreliable `Math.random().toString(16).substr(-6)` colour generator (could produce invalid colours) with a robust RGB approach.
- Replaced deprecated `substr()` usage.
- Modernised `var` → `const` / `let`.
- Wrapped all code in an IIFE to avoid global scope pollution.
- Added canvas null-check for safety.
- Reset shadow state after each draw call to prevent bleed.
- Tuned gradient radii to be proportional to ball size.
- Added `<meta viewport>`, `lang` attribute, and basic page styling.

## ⚠️ Known Issues

- Canvas dimensions are fixed at 640 × 480; not responsive to window resize.
- No pause / resume controls.

## License

This project does not include a licence file. Contact the repository owner for usage terms.
