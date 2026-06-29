import { Magnetic } from "./Magnetic";
import { InscribiteBtn } from "./DeployFX";
import { Terminal } from "./Terminal";
import { EVENT_DATES } from "../event";

// TODO(uruhack): reemplazá los placeholders por <img> de los logos reales.
const SP_LOGOS = ["Logo", "Logo", "Logo", "Logo", "Logo", "Logo", "Logo"];

export function Hero() {
  return (
    <header className="hero" id="init">
      <div className="wrap hero-main">
        <div className="hero-copy">
          <div className="hero-kicker rise">La hackathon más grande de Uruguay.</div>
          <h1 className="hero-h1 rise d1">
            Construí un producto{" "}
            <span style={{ color: "var(--blue)" }}>real</span>, en 24 horas.
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
              <span className="meta-v">{EVENT_DATES}</span>
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

      <div className="wrap hero-sponsors">
        <div className="sp-marquee">
          {[0, 1].map((track) => (
            <div className="sp-track" key={track} aria-hidden={track === 1}>
              {SP_LOGOS.map((name, i) => (
                <span className="sp-logo" key={i}>
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
