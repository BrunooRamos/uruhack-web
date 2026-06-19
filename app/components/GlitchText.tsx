"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import { reducedMotion, useInView } from "./useInView";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&/<>{}=+*";

/** Decodes its text once when it scrolls into view. */
export function GlitchText({
  text,
  className,
  as: Tag = "span" as ElementType,
  style,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
}) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.55 });
  const [out, setOut] = useState(text);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    if (reducedMotion()) {
      setOut(text);
      return;
    }
    let raf = 0;
    let rev = 0;
    let tick = 0;
    const total = text.length;
    const run = () => {
      tick++;
      if (tick % 2 === 0) rev += 0.6;
      const r = Math.floor(rev);
      let s = "";
      for (let i = 0; i < total; i++) {
        const ch = text[i];
        if (ch === " ") s += " ";
        else s += i < r ? ch : CHARS[(Math.random() * CHARS.length) | 0];
      }
      setOut(s);
      if (r < total) raf = requestAnimationFrame(run);
      else setOut(text);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [inView, text]);

  return (
    <Tag ref={ref} className={className} style={style}>
      {out}
    </Tag>
  );
}
