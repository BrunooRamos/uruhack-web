import { Logo } from "./components/Logo";
import { Reveal } from "./components/Reveal";
import { ScrollProgress } from "./components/ScrollProgress";
import { ParticleField } from "./components/ParticleField";
import { Hero } from "./components/Hero";
import { Tracks } from "./components/Tracks";
import { Mentors } from "./components/Mentors";
import { FAQ } from "./components/FAQ";
import { ApplyCTA } from "./components/ApplyCTA";
import { Countdown } from "./components/Countdown";
import { Magnetic } from "./components/Magnetic";
import { KonamiMatrix } from "./components/KonamiMatrix";
import { DeployFX, InscribiteBtn } from "./components/DeployFX";
import { FakeCrash } from "./components/FakeCrash";
import { ThemeToggle } from "./components/ThemeToggle";
import { VENUE, VENUE_ADDRESS, VENUE_MAPS, EVENT_DATES, CONTACT_EMAIL } from "./event";

const AGENDA = [
  {
    d: "Sáb · 10h",
    t: "Acreditación & kickoff",
    s: "Llegada, café y presentación de la consigna, la sede y los sponsors.",
  },
  {
    d: "Sáb · 12h",
    t: "Arranca el build",
    s: "Equipos a fondo: definición de scope y primeras líneas. Mentoría 1:1 disponible.",
  },
  {
    d: "Sáb · noche",
    t: "Build a fondo",
    s: "Las horas pesadas, con comidas y café. Mentores rotando por los equipos.",
  },
  {
    d: "Dom · 10h",
    t: "Demos & premiación",
    s: "Cada equipo muestra su producto funcionando. Jurado, premios y cierre.",
  },
];

export default function Home() {
  return (
    <>
      <ParticleField />
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
            <ThemeToggle />
            <Magnetic strength={0.3}>
              <InscribiteBtn className="btn">Aplicar →</InscribiteBtn>
            </Magnetic>
          </div>
        </div>
      </nav>

      <span id="top" />

      {/* ============ HERO (incluye terminal + sponsors) ============ */}
      <Hero />

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
                <span className="slash">//</span> Programa &amp; lugar
              </div>
              <h2>El día, hora por hora.</h2>
              <p className="lead">
                24 horas con estructura, no improvisación.{" "}
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
                    src="/hyatt-rooftop.webp"
                    alt="Azotea del Hyatt Centric Montevideo al atardecer, con vista a la rambla"
                    loading="lazy"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hyatt-exterior.jpg"
                    alt="Entrada del Hyatt Centric Montevideo"
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
                    Ver en el mapa →
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
              <span className="slash">//</span> Inscripción
            </div>
            <h2>Aplicá a UruHack.</h2>
            <p className="lead">
              La inscripción es individual y gratuita, con cupos limitados.
            </p>
            <div className="apply-meta">
              <div>
                <b>{EVENT_DATES}</b>
                <span>// sábado a domingo</span>
              </div>
              <div>
                <b>24 horas</b>
                <span>// build continuo</span>
              </div>
              <div>
                <b>Hyatt Centric</b>
                <span>// Montevideo</span>
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

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <Logo />
              <p className="foot-copy">
                Zero to Product en 24 horas — {EVENT_DATES}.
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
                <a href="#tracks">Tracks</a>
                <a href="#build">Programa</a>
                <a href="#faq">FAQ</a>
              </div>
              <div className="foot-col">
                <b>// participá</b>
                <InscribiteBtn className="">Aplicar</InscribiteBtn>
                <a href={`mailto:${CONTACT_EMAIL}`}>Contacto</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 UruHack · Montevideo, Uruguay</span>
            <span>
              build: <span className="spark">stable</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
