"use client";

import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "arrowup", "arrowup", "arrowdown", "arrowdown",
  "arrowleft", "arrowright", "arrowleft", "arrowright",
  "b", "a",
];
const MATRIX_CHARS =
  "アイウエオカキクケコサシスセソ01<>{}[]/=+*#$;ABCDEF日本語ハック";

/** Easter egg: Konami code (or typing "deploy") triggers a matrix rain. */
export function KonamiMatrix() {
  const [on, setOn] = useState(false);
  const cv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let ki = 0;
    let buf = "";
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      // konami
      if (k === KONAMI[ki]) {
        ki++;
        if (ki === KONAMI.length) {
          ki = 0;
          setOn(true);
        }
      } else {
        ki = k === KONAMI[0] ? 1 : 0;
      }
      // typed word
      if (k.length === 1) {
        buf = (buf + k).slice(-6);
        if (buf === "deploy") setOn(true);
      }
    };
    const onTrigger = () => setOn(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("uru:matrix", onTrigger);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("uru:matrix", onTrigger);
    };
  }, []);

  useEffect(() => {
    if (!on) return;
    const canvas = cv.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = (canvas.width = window.innerWidth * dpr);
    let h = (canvas.height = window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const fontSize = 16;
    const cols = Math.floor(vw / fontSize);
    const drops = Array.from({ length: cols }, () =>
      Math.floor((Math.random() * vh) / fontSize),
    );

    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(8, 11, 22, 0.12)";
      ctx.fillRect(0, 0, vw, vh);
      ctx.font = `${fontSize}px ui-monospace, monospace`;
      for (let i = 0; i < cols; i++) {
        const ch = MATRIX_CHARS[(Math.random() * MATRIX_CHARS.length) | 0];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle =
          Math.random() < 0.04 ? "#ffd23f" : Math.random() < 0.5 ? "#4a72f0" : "#2bbf6a";
        ctx.fillText(ch, x, y);
        if (y > vh && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onResize = () => {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", onResize);

    const t = setTimeout(() => setOn(false), 6500);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [on]);

  if (!on) return null;
  return (
    <div className="matrix-overlay" aria-hidden>
      <canvas ref={cv} className="matrix-cv" />
      <div className="matrix-toast">
        modo hacker activado — <span className="spark">git push --chaos</span>
      </div>
    </div>
  );
}
