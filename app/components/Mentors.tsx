import { Reveal } from "./Reveal";
import { CONTACT_EMAIL } from "../event";

type Person = {
  name: string;
  role: string;
  org: string;
  /** true = anunciado (datos reales). false = placeholder. */
  confirmed: boolean;
};

// TODO(uruhack): reemplazá por mentores y jurado reales (nombre, rol, empresa, foto).
const PEOPLE: Person[] = [
  { name: "Por anunciar", role: "Mentor · Ingeniería", org: "—", confirmed: false },
  { name: "Por anunciar", role: "Mentor · Producto", org: "—", confirmed: false },
  { name: "Por anunciar", role: "Mentor · Diseño", org: "—", confirmed: false },
  { name: "Por anunciar", role: "Jurado", org: "—", confirmed: false },
  { name: "Por anunciar", role: "Jurado", org: "—", confirmed: false },
  { name: "Por anunciar", role: "Jurado", org: "—", confirmed: false },
];

export function Mentors() {
  return (
    <section id="mentores" className="section-rule">
      <div className="wrap">
        <Reveal>
          <div className="stage-head">
            <div className="eyebrow">
              <span className="slash">//</span> mentores &amp; jurado
            </div>
            <h2>Quién te va a guiar.</h2>
            <p className="lead">
              Mentores del ecosistema acompañan a los equipos durante el build, y
              un jurado técnico evalúa los productos al final. Anuncio próximamente.
            </p>
          </div>
        </Reveal>

        <div className="mentors-grid">
          {PEOPLE.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`mentor-card ${p.confirmed ? "" : "ghost"}`}>
                <div className="mt-avatar" aria-hidden />
                <div className="mt-name">{p.name}</div>
                <div className="mt-role">{p.role}</div>
                <div className="mt-org">{p.org}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mentors-cta">
            ¿Querés mentorear o ser parte del jurado? Escribinos a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="bracket">
              {CONTACT_EMAIL}
            </a>
            .
          </div>
        </Reveal>
      </div>
    </section>
  );
}
