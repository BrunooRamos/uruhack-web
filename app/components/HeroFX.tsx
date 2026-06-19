"use client";

import { useEffect, useRef } from "react";

const GLYPHS = [
  "{", "}", "<", ">", "/", ";", "*", "=>", "()", "[]", "#", "+",
  "&&", "||", "::", "</>", "0", "1", "fn", "git",
];

/** Subtle drifting code glyphs behind the hero. */
export function HeroFX() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const parent = cv?.parentElement;
    if (!cv || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let mx = 0; // mouse offset, -1..1
    let my = 0;

    type G = {
      x: number;
      y: number;
      v: number;
      g: string;
      size: number;
      alpha: number;
      drift: number;
      phase: number;
      gold: boolean;
    };
    let parts: G[] = [];

    const seed = () => {
      const n = Math.max(20, Math.min(58, Math.floor(w / 21)));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        v: 0.15 + Math.random() * 0.5,
        g: GLYPHS[(Math.random() * GLYPHS.length) | 0],
        size: 11 + Math.random() * 16,
        alpha: 0.04 + Math.random() * 0.12,
        drift: 6 + Math.random() * 14,
        phase: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.12,
      }));
    };

    const resize = () => {
      const r = parent.getBoundingClientRect();
      w = r.width;
      h = r.height;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    let t = 0;
    const draw = () => {
      if (document.hidden) {
        raf = requestAnimationFrame(draw);
        return;
      }
      t += 0.01;
      ctx.clearRect(0, 0, w, h);
      ctx.font = "500 16px var(--font-mono-stack, monospace)";
      for (const p of parts) {
        p.y -= p.v;
        if (p.y < -24) {
          p.y = h + 24;
          p.x = Math.random() * w;
        }
        // bigger glyphs read as "closer" → stronger parallax
        const depth = p.size / 16;
        const x = p.x + Math.sin(t + p.phase) * p.drift + mx * depth * 18;
        const py = p.y + my * depth * 12;
        ctx.font = `500 ${p.size}px ui-monospace, monospace`;
        ctx.fillStyle = p.gold
          ? `rgba(255, 210, 63, ${p.alpha + 0.04})`
          : `rgba(31, 79, 224, ${p.alpha})`;
        ctx.fillText(p.g, x, py);
      }
      raf = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="hero-fx"
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
