import { Magnetic } from "./Magnetic";
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
              La hackathon más grande de Uruguay.
            </span>
            <span className="hero-h1-main rise d1">
              Construí un producto{" "}
              <span style={{ color: "var(--blue)" }}>real</span>, en 24 horas.
            </span>
          </h1>
          <p className="lead hero-lead rise d2">
            UruHack es un hackathon de 24 horas para jóvenes builders uruguayos.
            Equipos de 3 a 5 personas construyen un producto real y funcionando
            en un solo fin de semana. Inscripción individual, gratuita y con
            cupos limitados.
          </p>
          <div className="hero-cta rise d3">
            <Magnetic>
              <InscribiteBtn className="btn">Aplicar →</InscribiteBtn>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a href="#build" className="btn btn-ghost">
                Ver el programa
              </a>
            </Magnetic>
          </div>
          <div className="hero-meta rise d4">
            <div className="meta-item">
              <span className="meta-k">Cuándo</span>
              <time className="meta-v" dateTime={EVENT_START_DATE}>
                {EVENT_DATES}
              </time>
            </div>
            <span className="meta-sep" aria-hidden />
            <div className="meta-item">
              <span className="meta-k">Dónde</span>
              <span className="meta-v">Hyatt Centric · Montevideo</span>
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
