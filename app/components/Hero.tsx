import { Logo } from "./Logo";
import { Terminal } from "./Terminal";
import { HeroFX } from "./HeroFX";
import { Scramble } from "./Scramble";
import { Magnetic } from "./Magnetic";
import { InscribiteBtn } from "./DeployFX";

export function Hero() {
  return (
    <header className="hero" id="init" style={{ padding: "76px 0 64px", position: "relative" }}>
      <HeroFX />
      <div className="wrap hero-grid" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <div className="eyebrow rise">
            <span className="slash">//</span> 01 — Init &nbsp;·&nbsp; Zero to Product
          </div>
          <h1
            className="rise d1"
            style={{ fontSize: "clamp(38px,5.6vw,62px)", fontWeight: 700, lineHeight: 1.03 }}
          >
            Vení a{" "}
            <span style={{ color: "var(--blue)" }}>
              <Scramble text="shippear" delay={420} />
            </span>
            ,
            <br />
            no a presentar.
          </h1>
          <p className="lead rise d2" style={{ fontSize: 19, maxWidth: "48ch" }}>
            UruHack es el hackathon donde jóvenes uruguayos construyen, en 48
            horas, productos reales que la gente pueda usar. De la idea al
            deploy — con el apoyo de la Embajada de EE.UU.
          </p>
          <div
            className="rise d3"
            style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}
          >
            <Magnetic>
              <InscribiteBtn className="btn">git push --inscribite</InscribiteBtn>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a href="#build" className="btn btn-ghost">
                ver el viaje
              </a>
            </Magnetic>
          </div>
          <div
            className="rise d4"
            style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}
          >
            <span className="pill">
              <b>48</b> horas
            </span>
            <span className="pill">
              Equipos de <b>3 a 5</b>
            </span>
            <span className="pill">
              Uruguay · <b>2026</b>
            </span>
          </div>
        </div>

        <div className="rise d2">
          <Terminal />
        </div>
      </div>
      <div
        className="wrap"
        style={{ marginTop: 56, display: "flex", justifyContent: "center", position: "relative", zIndex: 1 }}
      >
        <div
          aria-hidden
          className="scroll-hint"
          style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "var(--muted-2)" }}
        >
          ↓ scrolleá para ver el build &nbsp;·&nbsp; <Logo />
        </div>
      </div>
    </header>
  );
}
