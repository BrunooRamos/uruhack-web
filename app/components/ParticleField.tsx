"use client";

import { useEffect, useRef } from "react";

/**
 * Page-wide animated blue particle-wave background (fixed, behind all content).
 * Layered ribbons of fine dots flowing along sine waves spread across the whole
 * viewport + a network mesh + twinkles. Stronger toward the edges, softer in the
 * central reading column so text stays legible. Mirrors the reference image.
 */

// Ribbons spread across the full height (front cobalt → back sky blue).
const SHEETS = [
  { col: "31,79,224", baseF: 0.86, amp: 60, f1: 0.0042, f2: 0.011, sp: 0.5, R: 6, rowGap: 5, peak: 0.26 },
  { col: "56,96,232", baseF: 0.64, amp: 50, f1: 0.0036, f2: 0.01, sp: 0.42, R: 6, rowGap: 5, peak: 0.2 },
  { col: "96,132,248", baseF: 0.42, amp: 44, f1: 0.0056, f2: 0.013, sp: 0.66, R: 5, rowGap: 6, peak: 0.16 },
  { col: "140,168,255", baseF: 0.2, amp: 36, f1: 0.0072, f2: 0.016, sp: 0.88, R: 5, rowGap: 6, peak: 0.12 },
];

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;

    type Node = { x: number; y: number; vx: number; vy: number };
    type Tw = { x: number; y: number; ph: number; sp: number };
    let nodes: Node[] = [];
    let twinkles: Tw[] = [];

    const seed = () => {
      const nN = Math.max(28, Math.min(64, Math.floor(w / 22)));
      nodes = Array.from({ length: nN }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
      const nT = Math.max(14, Math.min(34, Math.floor(w / 48)));
      twinkles = Array.from({ length: nT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        ph: Math.random() * Math.PI * 2,
        sp: 0.5 + Math.random() * 1.3,
      }));
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    // Waves everywhere (base presence), stronger toward the edges, softer center.
    const mask = (x: number, y: number) => {
      const cx = Math.abs(x / w - 0.5) * 2;
      const cy = Math.abs(y / h - 0.5) * 2;
      const edge = Math.max(cx, cy * 0.75);
      return Math.min(1, 0.22 + 0.78 * Math.pow(edge, 1.1));
    };

    const drawSheets = () => {
      const colGap = w > 900 ? 6 : 9;
      const dx = mx * 12;
      const dy = my * 8;
      for (const s of SHEETS) {
        ctx.fillStyle = `rgb(${s.col})`;
        const baseY = h * s.baseF;
        for (let x = 0; x <= w; x += colGap) {
          const e = Math.abs(x / w - 0.5) * 2;
          const env = 0.45 + 0.55 * Math.pow(e, 1.15);
          const surf =
            baseY +
            s.amp * env * Math.sin(x * s.f1 + t * s.sp) +
            s.amp * 0.42 * Math.sin(x * s.f2 - t * s.sp * 0.7);
          for (let r = -s.R; r <= s.R; r++) {
            const y = surf + r * s.rowGap;
            if (y < -4 || y > h + 4) continue;
            const m = mask(x, y);
            if (m < 0.04) continue;
            const band = 1 - Math.abs(r) / (s.R + 1);
            const shimmer = 0.6 + 0.4 * Math.sin(x * 0.02 + r * 0.6 + t * 1.3);
            const a = s.peak * band * shimmer * m;
            if (a < 0.012) continue;
            ctx.globalAlpha = a > 0.6 ? 0.6 : a;
            const sz = 1.1 + band * 0.9;
            ctx.fillRect(x + dx, y + dy, sz, sz);
          }
        }
      }
    };

    const drawMesh = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      const D = 150;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgb(31,79,224)";
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const ax = a.x + mx * 26;
        const ay = a.y + my * 20;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const bx = b.x + mx * 26;
          const by = b.y + my * 20;
          const dist = Math.hypot(ax - bx, ay - by);
          if (dist < D) {
            const m = (mask(a.x, a.y) + mask(b.x, b.y)) / 2;
            ctx.globalAlpha = (1 - dist / D) * 0.22 * (0.3 + 0.7 * m);
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 0.5 * (0.3 + 0.7 * mask(a.x, a.y));
        ctx.fillStyle = "rgb(31,79,224)";
        ctx.beginPath();
        ctx.arc(ax, ay, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawTwinkles = () => {
      ctx.fillStyle = "rgb(150,175,255)";
      for (const tw of twinkles) {
        const a = 0.5 + 0.5 * Math.sin(t * tw.sp + tw.ph);
        ctx.globalAlpha = a * 0.6 * mask(tw.x, tw.y);
        ctx.beginPath();
        ctx.arc(tw.x + mx * 16, tw.y + my * 13, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;
      drawSheets();
      drawMesh();
      drawTwinkles();
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      if (document.hidden) {
        raf = requestAnimationFrame(loop);
        return;
      }
      t += 0.013;
      render();
      raf = requestAnimationFrame(loop);
    };

    const onMouse = (e: MouseEvent) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduce) {
      render();
    } else {
      window.addEventListener("mousemove", onMouse);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="page-fx"
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
