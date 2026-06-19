"use client";

import { useEffect, useRef, useState } from "react";

/** Fires when the element scrolls into view. By default latches once. */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  opts?: IntersectionObserverInit,
  once = true,
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      opts ?? { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return [ref, inView] as const;
}

export const SPIN = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

export const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
