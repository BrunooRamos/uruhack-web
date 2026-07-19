import { InscribiteBtn } from "./DeployFX";
import { Terminal } from "./Terminal";
import { EVENT_DATES, EVENT_START_DATE } from "../event";

export function Hero() {
  return (
    <header className="hero" id="init">
      <div className="wrap hero-main">
        <div className="hero-copy">
          {/* El kicker vive dentro del h1: el heading principal nombra la
              entidad (hackathon + Uruguay) para buscadores y answer engines. */}
          <h1 className="hero-h1">
            <span className="hero-kicker rise">
              la hackathon más grande de uruguay.
            </span>
            <span className="hero-h1-main rise d1">
              construí algo que genere valor.
            </span>
          </h1>
          <p className="lead hero-lead rise d2">
            build 101 es un hackathon de 36 horas para jóvenes builders
            uruguayos. equipos de 3 a 5 personas construyen un producto real y
            funcionando en un fin de semana. inscripción individual, gratuita y
            con cupos limitados.
          </p>
          <div className="hero-cta rise d3">
            <InscribiteBtn className="btn">aplicar →</InscribiteBtn>
            <a href="#build" className="btn btn-ghost">
              ver el programa
            </a>
          </div>
          <div className="hero-meta rise d4">
            <div className="meta-item">
              <span className="meta-k">cuándo</span>
              <time className="meta-v" dateTime={EVENT_START_DATE}>
                {EVENT_DATES}
              </time>
            </div>
            <span className="meta-sep" aria-hidden />
            <div className="meta-item">
              <span className="meta-k">dónde</span>
              <span className="meta-v">fium · montevideo</span>
            </div>
          </div>
        </div>

        <div className="hero-term rise d2">
          <Terminal />
        </div>
      </div>
    </header>
  );
}
