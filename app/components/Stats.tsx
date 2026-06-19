"use client";

import { useEffect, useState } from "react";
import { reducedMotion, useInView } from "./useInView";

const STATS = [
  { n: 48, suffix: "h", label: "// de build sin parar" },
  { n: 15, suffix: "", label: "// equipos, máximo" },
  { n: 4, suffix: "", label: "// comidas + café infinito" },
  { n: 1, suffix: "", label: "// objetivo: deploy a prod" },
];

function StatNum({ target, suffix, go }: { target: number; suffix: string; go: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!go) return;
    if (reducedMotion()) {
      setN(target);
      return;
    }
    let raf = 0;
    let start = -1;
    const dur = 1200;
    const run = (now: number) => {
      if (start < 0) start = now;
      const p = Math.min(1, Math.max(0, (now - start) / dur));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [go, target]);
  return (
    <span className="stat-n">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.4 });
  return (
    <section className="stats-band">
      <div className="wrap stats-grid" ref={ref}>
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <StatNum target={s.n} suffix={s.suffix} go={inView} />
            <span className="stat-l">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
