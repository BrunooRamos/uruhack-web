"use client";

import { useRef, type ReactNode } from "react";

/** Tilts its child in 3D toward the cursor. */
export function Tilt({
  children,
  max = 9,
  className = "",
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(720px) rotateX(${-py * max}deg) rotateY(${
      px * max
    }deg)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(720px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}
