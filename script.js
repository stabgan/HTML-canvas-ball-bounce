(() => {
  "use strict";

  const canvas = document.getElementById("myCan");
  if (!canvas) {
    console.error("Canvas element #myCan not found");
    return;
  }

  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const ballSize = 30;

  let ballColor = "#ff0000";
  let oldBallColor = "#000000";

  const ball = {
    x: ballSize + 5,
    y: ballSize + 5,
  };

  const velocity = {
    x: 5,
    y: 5,
  };

  /**
   * Generate a random hex colour that is always exactly 6 digits.
   * `Math.random().toString(16).substr(-6)` is unreliable because
   * short floats (e.g. 0.5 → "0.8") produce fewer than 6 hex chars.
   */
  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r} ${g} ${b})`;
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballSize, 0, Math.PI * 2, false);

    const grd = ctx.createRadialGradient(
      ball.x, ball.y, ballSize * 0.3,
      ball.x, ball.y, ballSize * 2
    );
    grd.addColorStop(0, ballColor);
    grd.addColorStop(1, oldBallColor);

    ctx.fillStyle = grd;
    ctx.shadowColor = "#333";
    ctx.shadowBlur = 30;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.fill();

    // Reset shadow so it doesn't bleed into future draws
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  }

  function update() {
    if (ball.y >= h - ballSize || ball.y <= ballSize) {
      velocity.y = -velocity.y;
      oldBallColor = ballColor;
      ballColor = randomColor();
    }

    if (ball.x >= w - ballSize || ball.x <= ballSize) {
      velocity.x = -velocity.x;
      oldBallColor = ballColor;
      ballColor = randomColor();
    }

    ball.x += velocity.x;
    ball.y += velocity.y;

    draw();
    requestAnimationFrame(update);
  }

  update();
})();
