import { Logo } from "./components/Logo";
import { Reveal } from "./components/Reveal";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/Hero";
import { Sponsors } from "./components/Sponsors";
import { Tracks } from "./components/Tracks";
import { Mentors } from "./components/Mentors";
import { FAQ } from "./components/FAQ";
import { ApplyCTA } from "./components/ApplyCTA";
import { Countdown } from "./components/Countdown";
import { KonamiMatrix } from "./components/KonamiMatrix";
import { DeployFX, InscribiteBtn } from "./components/DeployFX";
import { FakeCrash } from "./components/FakeCrash";
import { StructuredData } from "./components/StructuredData";
import {
  VENUE,
  VENUE_ADDRESS,
  VENUE_MAPS,
  EVENT_DATES,
  EVENT_START_DATE,
  CONTACT_EMAIL,
} from "./event";

const AGENDA = [
  {
    d: "sáb · 8h",
    t: "acreditación & kickoff",
    s: "llegada, café y presentación de la consigna, la sede y los sponsors.",
  },
  {
    d: "sáb · 12h",
    t: "arranca el build",
    s: "equipos a fondo: definición de scope y primeras líneas. mentoría 1:1 disponible.",
  },
  {
    d: "sáb · noche",
    t: "build a fondo",
    s: "las horas pesadas, con comidas y café. mentores rotando por los equipos.",
  },
  {
    d: "dom · mañana",
    t: "último sprint",
    s: "las últimas horas: cerrar features, arreglar bugs y dejar la demo pronta.",
  },
  {
    d: "dom · 18h",
    t: "demos & premiación",
    s: "cada equipo muestra su producto funcionando. jurado, premios y cierre.",
  },
];

export default function Home() {
  return (
    <>
      <StructuredData />
      <ScrollProgress />
      <KonamiMatrix />
      <DeployFX />
      <FakeCrash />

      {/* ============ NAV ============ */}
      <nav className="topnav">
        <div className="wrap">
          <a href="#top">
            <Logo />
          </a>
          <div className="nav-links">
            <div className="nav-secondary">
              <a href="#tracks">// tracks</a>
              <a href="#build">// programa</a>
              <a href="#faq">// faq</a>
            </div>
            <InscribiteBtn className="btn">aplicar →</InscribiteBtn>
          </div>
        </div>
      </nav>

      <span id="top" />

      {/* ============ HERO ============ */}
      <Hero />

      {/* ============ SPONSORS ============ */}
      <Sponsors />

      {/* ============ TRACKS ============ */}
      <Tracks />

      {/* ============ MENTORES & JURADO ============ */}
      <Mentors />

      {/* ============ PROGRAMA & LUGAR ============ */}
      <section id="build" className="section-rule">
        <div className="wrap">
          <Reveal>
            <div className="stage-head">
              <div className="eyebrow">
                <span className="slash">//</span> programa &amp; lugar
              </div>
              <h2>dos días, hora por hora.</h2>
              <p className="lead">
                36 horas con estructura, no improvisación.{" "}
                <span className="comment">
                  // cronograma preliminar, se confirma antes del evento.
                </span>
              </p>
            </div>
          </Reveal>
          <div className="agenda-grid">
            <Reveal>
              <div className="timeline">
                {AGENDA.map((it) => (
                  <div className="tl-item" key={it.d}>
                    <div className="tl-date">{it.d}</div>
                    <div className="tl-body">
                      <b>{it.t}</b>
                      <span>{it.s}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="lugar">
                <div className="lugar-photos">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/fium-fachada.webp"
                    alt="fachada de la facultad de ingeniería (fium), universidad de montevideo, en el parque tecnológico del latu"
                    width={1920}
                    height={768}
                    loading="lazy"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/fium-campus.webp"
                    alt="edificio del campus de la universidad de montevideo (fium)"
                    width={1200}
                    height={677}
                    loading="lazy"
                  />
                </div>
                <div className="lugar-info">
                  <div className="eyebrow">
                    <span className="slash">//</span> lugar
                  </div>
                  <b>{VENUE}</b>
                  <span>{VENUE_ADDRESS}</span>
                  <a
                    href={VENUE_MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lugar-map"
                  >
                    ver en el mapa →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQ />

      {/* ============ INSCRIPCIÓN ============ */}
      <section id="live" className="section-rule">
        <div className="wrap split2 inscripcion">
          <Reveal>
            <div className="eyebrow">
              <span className="slash">//</span> inscripción
            </div>
            <h2>buscamos builders.</h2>
            <p className="lead">
              la inscripción es individual y gratuita, con cupos limitados.
            </p>
            <div className="apply-meta">
              <div>
                <b>
                  <time dateTime={EVENT_START_DATE}>{EVENT_DATES}</time>
                </b>
                <span>// sábado a domingo</span>
              </div>
              <div>
                <b>36 horas</b>
                <span>// build continuo</span>
              </div>
              <div>
                <b>fium</b>
                <span>// montevideo</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="apply-box">
              <Countdown />
              <ApplyCTA />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CLOSING BAND ============ */}
      <section className="closing-band">
        <div className="wrap">
          <p className="closing-line">construí. shippeá. repetí.</p>
          <p className="closing-sub">menos charla, más producto.</p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <Logo />
              <p className="foot-copy">
                zero to product en 36 horas —{" "}
                <time dateTime={EVENT_START_DATE}>{EVENT_DATES}</time>.
              </p>
              <p className="foot-copy" style={{ marginTop: 8 }}>
                <a href={VENUE_MAPS} target="_blank" rel="noopener noreferrer">
                  {VENUE} · {VENUE_ADDRESS}
                </a>
              </p>
            </div>
            <div className="foot-links">
              <div className="foot-col">
                <b>// evento</b>
                <a href="#tracks">tracks</a>
                <a href="#build">programa</a>
                <a href="#faq">faq</a>
              </div>
              <div className="foot-col">
                <b>// participá</b>
                <InscribiteBtn className="">aplicar</InscribiteBtn>
                <a href={`mailto:${CONTACT_EMAIL}`}>contacto</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 build 101 · montevideo, uruguay</span>
            <span>
              build: <span className="spark">stable</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
