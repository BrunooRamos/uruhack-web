// Fotos reales de la sede FIUM — interiores y exteriores, en una cinta
// horizontal que se desplaza sola (varias fotos visibles a la vez), sin
// captions: la imagen habla sola. Duotono azul en reposo, color al
// hover/focus (ver globals.css .sedem). La lista se duplica para que el
// loop del marquee sea continuo; la copia va aria-hidden.
const SLIDES = [
  {
    src: "/fium-frontal.webp",
    alt: "fachada frontal de la facultad de ingeniería de la universidad de montevideo con gente llegando",
  },
  {
    src: "/fium-escalera.webp",
    alt: "escalera-tribuna de madera del atrio de fium llena de estudiantes",
  },
  {
    src: "/fium-openspace.webp",
    alt: "open space de fium con mesas de trabajo y luz natural",
  },
  {
    src: "/fium-atrio.webp",
    alt: "atrio de doble altura de fium visto desde el nivel superior",
  },
  {
    src: "/fium-lounge.webp",
    alt: "lounge de fium con sillones junto a los ventanales",
  },
  {
    src: "/fium-fachada.webp",
    alt: "fachada de fium al atardecer en el parque tecnológico del latu",
  },
  {
    src: "/fium-aerea.webp",
    alt: "vista aérea del campus de la universidad de montevideo en el latu",
  },
];

function Strip({ hidden }: { hidden?: boolean }) {
  return (
    <div className="sedem-strip" aria-hidden={hidden || undefined}>
      {SLIDES.map((s) => (
        <figure className="sedem-shot" key={s.src}>
          <div className="sede-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={hidden ? "" : s.alt}
              width={1600}
              height={1000}
              loading="lazy"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}

export function SedeCarousel() {
  return (
    <div className="sedem" aria-label="fotos de la sede">
      <div className="sedem-track">
        <Strip />
        <Strip hidden />
      </div>
    </div>
  );
}
