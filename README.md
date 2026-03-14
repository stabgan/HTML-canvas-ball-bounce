# 🏀 HTML Canvas Ball Bounce

A mesmerizing ball-bouncing animation built with the HTML5 Canvas API. Watch a gradient-shaded ball ricochet off the walls, changing color with every collision — pure browser magic, no dependencies needed.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- Smooth `requestAnimationFrame`-driven animation loop
- Radial gradient ball with dynamic shadow effects
- Random color change on every wall bounce
- Lightweight — single HTML file + single JS file

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| 🟧 HTML5 | Page structure & `<canvas>` element |
| 🎨 CSS3 | Canvas border styling |
| ⚡ JavaScript (ES5) | Animation logic, collision detection, Canvas 2D drawing |

## 🚀 How to Run

1. **Clone the repo**
   ```bash
   git clone https://github.com/stabgan/HTML-canvas-ball-bounce.git
   cd HTML-canvas-ball-bounce
   ```
2. **Open in browser**
   - Simply open `index.html` in any modern web browser.
   - Or use a local dev server:
     ```bash
     npx serve .
     ```

No build step. No installs. Just open and enjoy.

## 📁 Project Structure

```
.
├── index.html   # Canvas element & page layout
├── script.js    # Ball animation & rendering logic
└── README.md
```

## ⚠️ Known Issues

- **Fixed canvas size** — The canvas is hardcoded to 640×480 and does not adapt to different screen or window sizes.
- **No user interaction** — The ball moves autonomously; there are no controls to pause, restart, or influence its direction.
- **Rare color generation edge case** — `Math.random().toString(16).substr(-6)` can occasionally produce fewer than 6 hex characters, resulting in an invalid color value.
- **No mobile / touch support** — The project does not account for mobile viewports or touch events.

## 📄 License

This project is open source. Feel free to fork, modify, and share.
