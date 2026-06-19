"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "abcdefghijklmnopqrstuvwxyz#$%&/<>{}=+*";

/** Decodes its text once on mount, scrambling letters into place. */
export function Scramble({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [out, setOut] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      return;
    }

    let raf = 0;
    let revealed = 0;
    let tick = 0;
    const total = text.length;

    const run = () => {
      tick++;
      if (tick % 2 === 0) revealed += 0.5;
      const r = Math.floor(revealed);
      let s = "";
      for (let i = 0; i < total; i++) {
        if (text[i] === " ") s += " ";
        else if (i < r) s += text[i];
        else s += CHARS[(Math.random() * CHARS.length) | 0];
      }
      setOut(s);
      if (r < total) {
        raf = requestAnimationFrame(run);
      } else {
        setOut(text);
      }
    };

    const id = setTimeout(() => {
      raf = requestAnimationFrame(run);
    }, delay);

    return () => {
      clearTimeout(id);
      cancelAnimationFrame(raf);
    };
  }, [text, delay]);

  return <span className={className}>{out}</span>;
}
