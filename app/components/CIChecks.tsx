"use client";

import { useEffect, useState } from "react";
import { WindowChrome } from "./WindowChrome";
import { SPIN, reducedMotion, useInView } from "./useInView";

const CHECKS = [
  { label: "build · el proyecto compila", dur: "12s" },
  { label: "test · los casos pasan", dur: "8s" },
  { label: "deploy · está en producción", dur: "21s" },
  { label: "demo · anda en vivo (no grabado)", dur: "15s" },
  { label: "users · alguien lo usó y funcionó", dur: "9s" },
];

export function CIChecks() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  // -1 = nothing running yet, i = currently running index, CHECKS.length = all done
  const [running, setRunning] = useState(0);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), 80);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion()) {
      setRunning(CHECKS.length);
      return;
    }
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((r) => timers.push(setTimeout(r, ms)));

    (async () => {
      // loop forever, re-running the pipeline so it always feels live
      for (;;) {
        for (let i = 0; i <= CHECKS.length; i++) {
          if (cancelled) return;
          setRunning(i);
          await sleep(i === CHECKS.length ? 0 : 620);
        }
        await sleep(4200);
        if (cancelled) return;
        setRunning(0);
        await sleep(500);
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [inView]);

  const spin = SPIN[frame % SPIN.length];
  const allDone = running >= CHECKS.length;

  return (
    <div ref={ref}>
      <WindowChrome title="CI · uruhack/demo · pipeline #1" tag="checks" dark>
        <div className="win-body ci">
          {CHECKS.map((c, i) => {
            const passed = i < running;
            const active = i === running && !allDone;
            return (
              <div className="check" key={c.label}>
                {passed ? (
                  <span className="tick pop">✓</span>
                ) : active ? (
                  <span className="spin-glyph ci-spin">{spin}</span>
                ) : (
                  <span className="tick pending">·</span>
                )}
                <span className="label" style={{ opacity: passed || active ? 1 : 0.45 }}>
                  {c.label}
                </span>
                <span className="dur">{passed ? c.dur : active ? "running…" : "queued"}</span>
              </div>
            );
          })}
          <div className="ci-foot" style={{ opacity: allDone ? 1 : 0.4 }}>
            {allDone ? "✓" : "○"} All checks passed —{" "}
            <span style={{ color: "#cdd3e3" }}>demo en vivo o es humo.</span>
          </div>
        </div>
      </WindowChrome>
    </div>
  );
}
