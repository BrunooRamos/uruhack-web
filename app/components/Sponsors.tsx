import { Reveal } from "./Reveal";

// TODO(uruhack): reemplazá por los sponsors reales (nombre + logo).
const SPONSORS = [
  { name: "Embajada EE.UU.", flag: "🇺🇸", real: true },
  { name: "tu logo acá", real: false },
  { name: "tu logo acá", real: false },
  { name: "tu logo acá", real: false },
  { name: "tu logo acá", real: false },
  { name: "tu logo acá", real: false },
];

function Track() {
  return (
    <div className="sp-track" aria-hidden>
      {SPONSORS.map((s, i) => (
        <div className={`sp-chip ${s.real ? "real" : "ghost"}`} key={i}>
          {s.flag ? <span className="sp-flag">{s.flag}</span> : <span className="sp-mark">{"</>"}</span>}
          <span>{s.name}</span>
        </div>
      ))}
    </div>
  );
}

export function Sponsors() {
  return (
    <section id="sponsors" className="sponsors">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="slash">//</span> sponsors &nbsp;·&nbsp; el respaldo
          </div>
          <p className="sp-lead">
            Construido con el ecosistema tech uruguayo y el apoyo de la{" "}
            <span className="bracket">Embajada de EE.UU.</span>
          </p>
        </Reveal>
      </div>

      <div className="sp-marquee">
        <Track />
        <Track />
      </div>

      <div className="wrap" style={{ textAlign: "center", marginTop: 26 }}>
        <a href="#live" className="btn btn-ghost">
          + sumá tu logo — sponsoreá
        </a>
      </div>
    </section>
  );
}
