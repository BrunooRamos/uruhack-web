"use client";

import { useEffect, useState } from "react";
import { reducedMotion, useInView } from "./useInView";

// TODO(uruhack): actualizá estos números con los reales.
const TAKEN = 9;
const TOTAL = 15;

export function SpotsCounter() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion()) {
      setN(TAKEN);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const run = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - start) / dur));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * TAKEN));
      if (p < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const left = TOTAL - TAKEN;
  const pct = (n / TOTAL) * 100;

  return (
    <div className="spots" ref={ref}>
      <div className="spots-top">
        <span className="spots-num">
          <b>{n}</b>
          <span className="spots-tot"> / {TOTAL}</span> equipos ya reservaron
        </span>
        <span className="spots-left">
          quedan <b>{left}</b> cupos
        </span>
      </div>
      <div className="spots-bar">
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
