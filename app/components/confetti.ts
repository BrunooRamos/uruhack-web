/** Dependency-free confetti burst. Fires monochrome shards from a point. */
export function fireConfetti(origin?: { x: number; y: number }) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9998";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = window.innerWidth;
  const H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  const colors = ["#000000", "#404040", "#a3a3a3", "#ffffff"];
  const ox = origin?.x ?? W / 2;
  const oy = origin?.y ?? H * 0.4;

  type P = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    rot: number;
    vr: number;
    w: number;
    h: number;
    color: string;
    life: number;
  };

  const parts: P[] = Array.from({ length: 150 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 11;
    return {
      x: ox,
      y: oy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.4,
      w: 6 + Math.random() * 6,
      h: 9 + Math.random() * 8,
      color: colors[(Math.random() * colors.length) | 0],
      life: 1,
    };
  });

  let frame = 0;
  const maxFrames = 150;

  const tick = () => {
    ctx.clearRect(0, 0, W, H);
    frame++;
    let alive = false;
    for (const p of parts) {
      p.vy += 0.32; // gravity
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      if (frame > maxFrames * 0.5) p.life -= 0.03;
      if (p.life <= 0 || p.y > H + 40) continue;
      alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (alive && frame < maxFrames) {
      requestAnimationFrame(tick);
    } else {
      canvas.remove();
    }
  };
  requestAnimationFrame(tick);
}
