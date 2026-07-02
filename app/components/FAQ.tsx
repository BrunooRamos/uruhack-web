import { Reveal } from "./Reveal";
import { FAQS } from "../faqs";

export function FAQ() {
  return (
    <section id="faq" className="section-rule">
      <div className="wrap">
        <Reveal>
          <div className="stage-head" style={{ textAlign: "center", margin: "0 auto 36px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="slash">//</span> faq — preguntas frecuentes
            </div>
            <h2 style={{ margin: "0 auto" }}>Preguntas frecuentes.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="faq">
            {FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  <h3 className="faq-q">{item.q}</h3>
                  <span className="faq-mark" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="faq-a">{item.a ?? item.aText}</div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
