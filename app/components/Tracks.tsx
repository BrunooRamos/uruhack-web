import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

export function Tracks() {
  return (
    <section id="tracks" className="section-rule">
      <div className="wrap">
        <Reveal>
          <div
            className="stage-head"
            style={{ textAlign: "center", margin: "0 auto 36px", maxWidth: "60ch" }}
          >
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="slash">//</span> tracks
            </div>
            <h2 style={{ margin: "0 auto" }}>un track principal, y tracks por sponsor.</h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>
              todos los equipos compiten en el track{" "}
              <span className="bracket">zero to product</span>. si querés, sumás
              tu proyecto a un track por sponsor y competís por un premio extra.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="track-general">
            <div className="tg-badge">
              <Star size={14} strokeWidth={1.5} aria-hidden /> track principal
            </div>
            <h3>zero to product</h3>
            <p>
              acá compiten todos los equipos — la mejor ejecución se lleva el
              premio principal. la consigna se revela en el kickoff.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="tracks-soon">
            <span className="tracks-sub">// tracks por sponsor</span>
            <p>se anunciarán más adelante.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
