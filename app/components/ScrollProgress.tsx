"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  { id: "init", n: "01", label: "Init" },
  { id: "repo", n: "02", label: "Repo" },
  { id: "consigna", n: "03", label: "Consigna" },
  { id: "build", n: "04", label: "Build" },
  { id: "ship", n: "05", label: "Ship" },
  { id: "live", n: "06", label: "Live" },
];

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("init");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    STAGES.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={bar} className="scroll-bar" />
      <nav className="rail" aria-label="Etapas">
        {STAGES.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? "active" : ""}
          >
            <span className="dot" />
            <span className="label">
              {s.n} — {s.label}
            </span>
          </a>
        ))}
      </nav>
    </>
  );
}
