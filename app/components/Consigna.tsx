import { Reveal } from "./Reveal";

export function Consigna() {
  return (
    <section id="consigna" className="section-rule">
      <div className="wrap">
        <Reveal>
          <div
            className="stage-head"
            style={{ textAlign: "center", margin: "0 auto 28px", maxWidth: "60ch" }}
          >
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="slash">//</span> consigna
            </div>
            <h2 style={{ margin: "0 auto" }}>consigna específica</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="consigna-soon">
            <p>coming soon…</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
