import { Reveal } from "./Reveal";
import { CONTACT_EMAIL } from "../event";

type Sponsor = {
  /** Nombre del sponsor — usado como alt del logo y fallback en texto. */
  name: string;
  /** Ruta del logo en /public. Si falta, se muestra el nombre en texto. */
  logo?: string;
  /** Link opcional al sitio del sponsor. */
  url?: string;
};

// Sponsors principales — fila estática, a todo color, arriba.
const MAIN_SPONSORS: Sponsor[] = [
  {
    name: "Freedom 250",
    logo: "/sponsors/freedom250.png",
  },
];

// El resto de los sponsors — carrusel debajo. Agregá acá y el marquee
// aparece solo. Dejá logo vacío para mostrar el nombre en texto.
const SPONSORS: Sponsor[] = [];

function SponsorLogo({ s, className }: { s: Sponsor; className: string }) {
  const inner = s.logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={s.logo} alt={s.name} loading="lazy" />
  ) : (
    <span>{s.name}</span>
  );
  if (s.url) {
    return (
      <a
        href={s.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={className}
        aria-label={s.name}
      >
        {inner}
      </a>
    );
  }
  return (
    <div className={className} aria-label={s.name}>
      {inner}
    </div>
  );
}

export function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-band">
      <div className="wrap">
        <Reveal>
          {/* Sponsors principales — fila estática */}
          <div className="sponsor-tier-label">// main sponsor</div>
          <div className="sponsor-main-row">
            {MAIN_SPONSORS.map((s) => (
              <SponsorLogo key={s.name} s={s} className="sponsor-main" />
            ))}
          </div>

          {/* El resto — carrusel */}
          {SPONSORS.length > 0 && (
            <>
              <div className="sponsor-tier-label">// y quienes acompañan</div>
              <div className="sponsor-carousel">
                <div className="sp-marquee">
                  {[0, 1].map((track) => (
                    <div
                      className="sp-track"
                      key={track}
                      aria-hidden={track === 1}
                    >
                      {SPONSORS.map((s, i) => (
                        <SponsorLogo key={i} s={s} className="sp-logo" />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div style={{ textAlign: "center" }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-ghost">
              Quiero ser sponsor →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
