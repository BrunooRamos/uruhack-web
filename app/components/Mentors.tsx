import { Reveal } from "./Reveal";
import { CONTACT_EMAIL } from "../event";

type Person = {
  name: string;
  role: string;
  org: string;
  /** true = anunciado (datos reales). false = placeholder. */
  confirmed: boolean;
};

// TODO(build101): reemplazá por mentores y jurado reales (nombre, rol, empresa, foto).
// Mientras no estén confirmados, el nombre no se renderiza como texto
// (evita indexar "Por anunciar" repetido en buscadores).
const PEOPLE: Person[] = [
  { name: "", role: "mentor · ingeniería", org: "—", confirmed: false },
  { name: "", role: "mentor · producto", org: "—", confirmed: false },
  { name: "", role: "mentor · diseño", org: "—", confirmed: false },
  { name: "", role: "jurado", org: "—", confirmed: false },
  { name: "", role: "jurado", org: "—", confirmed: false },
  { name: "", role: "jurado", org: "—", confirmed: false },
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
            <h2>quién te va a guiar.</h2>
            <p className="lead">
              mentores del ecosistema acompañan a los equipos durante el build, y
              un jurado técnico evalúa los productos al final. anuncio próximamente.
            </p>
          </div>
        </Reveal>

        <div className="mentors-grid">
          {PEOPLE.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`mentor-card ${p.confirmed ? "" : "ghost"}`}>
                <div className="mt-avatar" aria-hidden />
                <div className="mt-name">
                  {p.confirmed ? p.name : <span className="mt-ghostline" aria-hidden />}
                </div>
                <div className="mt-role">{p.role}</div>
                <div className="mt-org">{p.org}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mentors-cta">
            ¿querés mentorear o ser parte del jurado? escribinos a{" "}
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
