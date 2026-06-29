import { Reveal } from "./Reveal";
import { CONTACT_EMAIL } from "../event";

export function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-band">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="slash">//</span> sponsors
          </div>
          <p className="sp-lead">
            Espacio para los logos de quienes acompañen UruHack.
          </p>
          <div className="sponsor-logos">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="logo-slot" key={i}>
                Logo
              </div>
            ))}
          </div>
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
