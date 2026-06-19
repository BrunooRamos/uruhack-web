"use client";

import { useEffect } from "react";

/** Soft blue halo that trails the cursor over the page. */
export function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = document.createElement("div");
    el.className = "spotlight";
    document.body.appendChild(el);

    let x = window.innerWidth / 2;
    let y = window.innerHeight * 0.3;
    let cx = x;
    let cy = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.setProperty("--mx", `${cx}px`);
      el.style.setProperty("--my", `${cy}px`);
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      el.remove();
    };
  }, []);

  return null;
}
