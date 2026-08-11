"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Fotos reales de la sede FIUM — interiores y exteriores. Duotono azul en
// reposo, color al hover/focus (ver globals.css .sede-img).
const SLIDES = [
  {
    src: "/fium-frontal.webp",
    alt: "fachada frontal de la facultad de ingeniería de la universidad de montevideo con gente llegando",
    caption: "llegás acá el sábado 8:00",
  },
  {
    src: "/fium-escalera.webp",
    alt: "escalera-tribuna de madera del atrio de fium llena de estudiantes",
    caption: "acá son las demos",
  },
  {
    src: "/fium-openspace.webp",
    alt: "open space de fium con mesas de trabajo y luz natural",
    caption: "36 horas acá",
  },
  {
    src: "/fium-atrio.webp",
    alt: "atrio de doble altura de fium visto desde el nivel superior",
    caption: "doble altura, cero excusas",
  },
  {
    src: "/fium-lounge.webp",
    alt: "lounge de fium con sillones junto a los ventanales",
    caption: "war room",
  },
  {
    src: "/fium-fachada.webp",
    alt: "fachada de fium al atardecer en el parque tecnológico del latu",
    caption: "la sede al atardecer",
  },
  {
    src: "/fium-aerea.webp",
    alt: "vista aérea del campus de la universidad de montevideo en el latu",
    caption: "el campus completo, en el latu",
  },
];

const AUTO_MS = 4500;

export function SedeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const paused = useRef(false);

  const go = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const n = ((i % SLIDES.length) + SLIDES.length) % SLIDES.length;
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
  }, []);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setIdx(Math.round(el.scrollLeft / el.clientWidth));
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (!paused.current) go(idx + 1);
    }, AUTO_MS);
    return () => clearInterval(t);
  }, [idx, go]);

  return (
    <div
      className="sedec"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div className="sedec-frame">
        <div
          className="sedec-track"
          ref={trackRef}
          onScroll={onScroll}
          aria-live="polite"
        >
          {SLIDES.map((s) => (
            <figure className="sedec-slide" key={s.src}>
              <div className="sede-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                />
              </div>
            </figure>
          ))}
        </div>
        <button
          type="button"
          className="sedec-btn prev"
          aria-label="foto anterior"
          onClick={() => go(idx - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="sedec-btn next"
          aria-label="foto siguiente"
          onClick={() => go(idx + 1)}
        >
          ›
        </button>
      </div>
      <div className="sedec-foot">
        <span className="sedec-caption">
          <span className="slash">//</span> {SLIDES[idx]?.caption}
        </span>
        <div className="sedec-dots" role="tablist" aria-label="fotos de la sede">
          {SLIDES.map((s, i) => (
            <button
              type="button"
              key={s.src}
              className={i === idx ? "dot on" : "dot"}
              aria-label={`foto ${i + 1} de ${SLIDES.length}`}
              aria-current={i === idx}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
