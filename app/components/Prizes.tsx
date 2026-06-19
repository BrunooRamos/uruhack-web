import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";

// TODO(uruhack): poné los premios reales (montos, créditos, perks).
const PRIZES = [
  {
    place: "1er",
    medal: "🥇",
    amount: "$XX.XXX",
    perks: ["Premio mayor en efectivo", "Mentoría con founders", "Demo ante sponsors"],
    cls: "gold",
  },
  {
    place: "2do",
    medal: "🥈",
    amount: "$XX.XXX",
    perks: ["Premio en efectivo", "Créditos cloud", "Difusión en el ecosistema"],
    cls: "silver",
  },
  {
    place: "3er",
    medal: "🥉",
    amount: "$XX.XXX",
    perks: ["Premio en efectivo", "Kit de sponsors", "Networking"],
    cls: "bronze",
  },
];

export function Prizes() {
  return (
    <section id="premios" className="prizes">
      <div className="wrap">
        <Reveal>
          <div className="stage-head" style={{ textAlign: "center", margin: "0 auto 36px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="slash">//</span> premios — git tag --reward
            </div>
            <h2 style={{ margin: "0 auto" }}>Lo que te llevás si shippeás.</h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>
              Tremendos premios para los equipos que mejor ejecuten — más visibilidad
              real frente a sponsors y la Embajada de EE.UU.
            </p>
          </div>
        </Reveal>

        <div className="prize-grid">
          {PRIZES.map((p, i) => (
            <Reveal key={p.place} delay={i * 0.08}>
              <Tilt max={7}>
                <div className={`prize-card ${p.cls}`}>
                  <div className="pz-top">
                    <span className="pz-medal">{p.medal}</span>
                    <span className="pz-place">{p.place} puesto</span>
                  </div>
                  <div className="pz-amount">{p.amount}</div>
                  <ul className="pz-perks">
                    {p.perks.map((perk) => (
                      <li key={perk}>
                        <span className="pz-plus">+</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="pz-mentions">
            <span className="pz-mtag">// menciones</span>
            Premios sorpresa de sponsors durante el finde — y reconocimiento a
            <span className="bracket"> mejor demo en vivo</span>,{" "}
            <span className="bracket">mejor diseño</span> y{" "}
            <span className="bracket">más loco que funcione</span>.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
