"use client";

import { useEffect, useState } from "react";
import { WindowChrome } from "./WindowChrome";
import { reducedMotion, useInView } from "./useInView";

const COMMITS = [
  { hash: "a1f9c0", msg: <>init: armamos equipo (3-5) 🤝</>, when: "vie 19h" },
  { hash: "7d22e1", msg: <>feat: idea elegida, scope cerrado</>, when: "vie 23h" },
  { hash: "b3e8aa", msg: <>feat: el core anda 🎉</>, when: "sáb 04h" },
  { hash: "c91002", msg: <>fix: el bug de las 4am (todos)</>, when: "sáb 05h" },
  { hash: "e40b7d", msg: <>chore: mentoreo → pivot a tiempo</>, when: "sáb 16h" },
  { hash: "f8a1cc", msg: <>feat: deploy a prod 🚀</>, when: "dom 02h" },
  {
    hash: "9c0fff",
    msg: (
      <>
        demo: <span className="accent">anda en vivo. y se nota.</span>
      </>
    ),
    when: "dom 12h",
  },
];

export function GitLog() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.25 });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion()) {
      setShown(COMMITS.length);
      return;
    }
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    COMMITS.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          if (!cancelled) setShown(i + 1);
        }, 220 + i * 300),
      );
    });
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [inView]);

  return (
    <div ref={ref}>
      <WindowChrome title="git log --oneline" tag="commits">
        <div className="win-body gitlog" style={{ minHeight: 210 }}>
          {COMMITS.slice(0, shown).map((c, i) => (
            <div
              key={c.hash}
              className={`c commit-in ${i === shown - 1 ? "latest" : ""}`}
            >
              <span className="hash">{c.hash}</span>
              <span className="msg">{c.msg}</span>
              <span className="when">{c.when}</span>
            </div>
          ))}
          {shown < COMMITS.length && (
            <div className="c">
              <span className="hash" style={{ opacity: 0.5 }}>
                ……
              </span>
              <span className="cursor sm" />
            </div>
          )}
        </div>
      </WindowChrome>
    </div>
  );
}
