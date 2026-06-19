import { Logo } from "./components/Logo";
import { WindowChrome } from "./components/WindowChrome";
import { Reveal } from "./components/Reveal";
import { Cursor } from "./components/Cursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/Hero";
import { GitLog } from "./components/GitLog";
import { CIChecks } from "./components/CIChecks";
import { SignupForm } from "./components/SignupForm";
import { Sponsors } from "./components/Sponsors";
import { Prizes } from "./components/Prizes";
import { Countdown } from "./components/Countdown";
import { SpotsCounter } from "./components/SpotsCounter";
import { Tilt } from "./components/Tilt";
import { Magnetic } from "./components/Magnetic";
import { GlitchText } from "./components/GlitchText";
import { KonamiMatrix } from "./components/KonamiMatrix";
import { Spotlight } from "./components/Spotlight";
import { Stats } from "./components/Stats";
import { DeployFX, InscribiteBtn } from "./components/DeployFX";
import { FakeCrash } from "./components/FakeCrash";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Spotlight />
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
              <a href="#repo">// qué es</a>
              <a href="#build">// el viaje</a>
              <a href="#live">// fechas</a>
            </div>
            <ThemeToggle />
            <Magnetic strength={0.3}>
              <InscribiteBtn className="btn">git push --inscribite</InscribiteBtn>
            </Magnetic>
          </div>
        </div>
      </nav>

      <span id="top" />

      {/* ============ 01 — HERO / INIT ============ */}
      <Hero />

      {/* ============ STATS BAND ============ */}
      <Stats />

      {/* ============ 02 — REPO / QUÉ ES ============ */}
      <section id="repo">
        <div className="wrap stage-grid">
          <Reveal>
            <Tilt max={5}>
            <WindowChrome title="uruhack / README.md" tag="editor">
              <div className="tree">
                <div className="tree-side">
                  <div className="f dir">📁 uruhack</div>
                  <div className="f indent">📁 builders</div>
                  <div className="f indent">📁 mentores</div>
                  <div className="f indent">📁 sponsors</div>
                  <div className="f indent active">📄 README.md</div>
                  <div className="f indent">📄 consigna.md</div>
                  <div className="f indent">📄 reglas.txt</div>
                </div>
                <div className="tree-main">
                  <div className="md-h"># UruHack</div>
                  <div className="md-q">&gt; Zero to Product — en 48 horas.</div>
                  <div style={{ height: 10 }} />
                  <div className="comment">## Qué es</div>
                  <div className="out">Un hackathon donde jóvenes uruguayos</div>
                  <div className="out">construyen, en un fin de semana,</div>
                  <div className="out">productos reales que la gente use.</div>
                  <div style={{ height: 8 }} />
                  <div className="out">De la idea al deploy. Con mentores,</div>
                  <div className="out">sponsors y el apoyo de la Embajada</div>
                  <div className="out">de EE.UU.</div>
                </div>
              </div>
            </WindowChrome>
            </Tilt>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="eyebrow">
              <span className="slash">//</span> 02 — Repo
            </div>
            <h2>
              Qué es <span className="bracket">&lt;</span>UruHack
              <span className="bracket">&gt;</span>
            </h2>
            <p className="lead">
              Un hackathon para la nueva generación de builders uruguayos. No
              venís a presentar una idea: venís a construir un producto real y
              dejarlo funcionando, de la consigna al deploy.
            </p>
            <ul className="feat">
              <li>
                <span className="k">48h</span>
                <span className="t">
                  <b>Un finde, de cero a producto.</b>{" "}
                  <span>
                    Viernes a domingo. Empezás con un repo en blanco y terminás
                    con algo que anda.
                  </span>
                </span>
              </li>
              <li>
                <span className="k">3-5</span>
                <span className="t">
                  <b>Equipos chicos.</b>{" "}
                  <span>
                    Grupos de 3 a 5 personas para que todos shippeen. Hasta 15
                    equipos en esta primera edición.
                  </span>
                </span>
              </li>
              <li>
                <span className="k">usa</span>
                <span className="t">
                  <b>Apoyo institucional.</b>{" "}
                  <span>
                    Con el respaldo de la Embajada de EE.UU. y sponsors del
                    ecosistema tech.
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ 03 — CONSIGNA / DIFF ============ */}
      <section id="consigna">
        <div className="wrap stage-grid reverse">
          <Reveal>
            <Tilt max={5}>
            <WindowChrome
              title="consigna.md · cambios sin commitear"
              tag="diff"
              dark
            >
              <div className="win-body diff">
                <div className="comment"># Zero to Product</div>
                <div>&nbsp;</div>
                <div className="row del">
                  <span className="mark">-</span>Traé un pitch lindo y una demo grabada.
                </div>
                <div className="row del">
                  <span className="mark">-</span>Que se vea bien en la foto.
                </div>
                <div className="row add">
                  <span className="mark">+</span>Esa idea que te da vueltas hace meses.
                </div>
                <div className="row add">
                  <span className="mark">+</span>Este finde la convertís en producto.
                </div>
                <div>&nbsp;</div>
                <div className="out">&nbsp;&nbsp;Construilo sin restricciones: B2C o B2B.</div>
                <div className="out">&nbsp;&nbsp;Resolvé una necesidad concreta y real.</div>
                <div className="row add">
                  <span className="mark">+</span>Presentalo funcionando el domingo.
                </div>
                <div>&nbsp;</div>
                <div className="comment">// regla de oro: demo en vivo o es humo.</div>
              </div>
            </WindowChrome>
            </Tilt>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="eyebrow">
              <span className="slash">//</span> 03 — Consigna
            </div>
            <GlitchText as="h2" text="Zero to Product." />
            <p className="lead">
              La consigna pública es simple: convertí una idea en un producto
              real, usable, en 48 horas. El detalle fino se revela{" "}
              <span className="bracket">el día del evento</span> — así nadie
              llega con tres semanas de ventaja, y se nota quién construyó en el
              momento.
            </p>
            <ul className="feat">
              <li>
                <span className="k">+</span>
                <span className="t">
                  <b>Sin restricciones de vertical.</b>{" "}
                  <span>B2C o B2B, lo que el equipo quiera. Vos elegís el problema.</span>
                </span>
              </li>
              <li>
                <span className="k">+</span>
                <span className="t">
                  <b>Que la gente lo pueda usar.</b>{" "}
                  <span>Un producto real que funcione de verdad, no un mockup.</span>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ MANIFESTO / QUOTE ============ */}
      <section className="manifesto">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="slash">//</span> manifesto
            </div>
            <p className="quote">
              Acá se shippea. <span className="blue">Deploy</span> o nada.
            </p>
            <p className="quote-sub">
              — la cultura del evento. <span className="spark">demo en vivo o es humo.</span>
            </p>
            <div className="hashtags">
              <span>#ZeroToProduct</span>
              <span>#DeployONada</span>
              <span>#BuiltInUy</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 04 — BUILD ============ */}
      <section id="build">
        <div className="wrap">
          <Reveal>
            <div className="stage-head">
              <div className="eyebrow">
                <span className="slash">//</span> 04 — Build
              </div>
              <GlitchText as="h2" text="El finde, commit a commit." />
              <p className="lead">
                48 horas con estructura, no improvisación. Así se ve el
                cronograma cuando lo mirás como un historial de git.
              </p>
            </div>
          </Reveal>

          <div className="stage-grid" style={{ alignItems: "start" }}>
            <Reveal>
              <div className="timeline">
                {[
                  {
                    d: "Vie · 18h",
                    t: "Llegada & networking",
                    s: "Convocatoria, café y conocer al resto de los equipos.",
                  },
                  {
                    d: "Vie · 19h",
                    t: "Kickoff & consigna",
                    s: "Presentamos la consigna del día, la sede y los sponsors. Charla con nosotros, sin tanta formalidad. Después, cena.",
                  },
                  {
                    d: "Sábado",
                    t: "Build a fondo",
                    s: "Las horas pesadas: mentoreo 1:1, 4 comidas, y alguna actividad para aflojar (con premios de sponsors).",
                  },
                  {
                    d: "Dom · mediodía",
                    t: "Demos & premiación",
                    s: "Cada equipo muestra su producto funcionando. Jurado, premios y cierre.",
                  },
                ].map((it) => (
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

            <Reveal delay={0.1}>
              <GitLog />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 05 — SHIP / CI ============ */}
      <section id="ship">
        <div className="wrap stage-grid">
          <Reveal>
            <CIChecks />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="eyebrow">
              <span className="slash">//</span> 05 — Ship
            </div>
            <GlitchText as="h2" text="Que ande, o no cuenta." />
            <p className="lead">
              El criterio del jurado es transparente como un pipeline de CI: o el
              producto pasa los checks, o no pasa. Nada de “casi anda”. Demo en
              vivo — <span className="bracket">o es humo</span>.
            </p>
            <ul className="feat">
              <li>
                <span className="k">CI</span>
                <span className="t">
                  <b>Rúbrica honesta.</b>{" "}
                  <span>
                    Funcionalidad, ejecución y qué tan real es el producto. Y se
                    tiene en cuenta quién arrancó en el momento.
                  </span>
                </span>
              </li>
              <li>
                <span className="k">✓</span>
                <span className="t">
                  <b>Demo en vivo.</b>{" "}
                  <span>
                    Nada de videos editados: el jurado lo prueba con sus propias
                    manos.
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ SPONSORS ============ */}
      <Sponsors />

      {/* ============ PREMIOS ============ */}
      <Prizes />

      {/* ============ POR QUÉ SUMARTE ============ */}
      <section id="porque">
        <div className="wrap">
          <Reveal>
            <div className="stage-head">
              <div className="eyebrow">
                <span className="slash">//</span> features — por qué sumarte
              </div>
              <GlitchText as="h2" text="Razones para abrir el repo." />
            </div>
          </Reveal>
          <div className="why-grid">
            {[
              {
                n: "// 01",
                h: "Construís de verdad",
                p: "Salís con un producto real y la experiencia de haberlo llevado a deploy en 48 horas bajo presión.",
              },
              {
                n: "// 02",
                h: "Comunidad que shippea",
                p: "Builders, diseño, product people, mentores y sponsors del ecosistema, todos en una misma sala.",
              },
              {
                n: "// 03",
                h: "Visibilidad real",
                p: "Un jurado técnico y el apoyo de la Embajada de EE.UU. mirando lo que construís. Tu trabajo, frente a quien importa.",
              },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 0.08}>
                <Tilt max={7}>
                  <div className="card">
                    <div className="n">{c.n}</div>
                    <h3>{c.h}</h3>
                    <p>{c.p}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 06 — LIVE / BROWSER + FORM ============ */}
      <section id="live">
        <div className="wrap">
          <Reveal>
            <div
              className="stage-head"
              style={{ textAlign: "center", margin: "0 auto 36px" }}
            >
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                <span className="slash">//</span> 06 — Live
              </div>
              <GlitchText as="h2" text="Está online. Anotate." style={{ margin: "0 auto" }} />
              <p className="lead" style={{ margin: "16px auto 0" }}>
                El último paso del viaje: el deploy. Esto es lo que la gente ve
                cuando entra a <span className="bracket">uruhack.uy</span>.
              </p>
              <div style={{ display: "flex", justifyContent: "center", marginTop: 22 }}>
                <Countdown />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <WindowChrome
                title={
                  <>
                    https://<span className="u-blue">uruhack.uy</span>
                  </>
                }
                tag="live"
                url
              >
                <div>
                  <div className="live-hero">
                    <Logo />
                    <h3>Inscribí a tu equipo.</h3>
                    <p>
                      Equipos de 3 a 5 personas. Cupos limitados — hasta 15
                      equipos en esta primera edición. Reservá tu lugar y te
                      avisamos los próximos pasos.
                    </p>
                    <div className="live-dates">
                      <div className="date-card">
                        <div className="d">Inscripciones</div>
                        <div className="l">// abiertas ahora</div>
                      </div>
                      <div className="date-card">
                        <div className="d">48 horas</div>
                        <div className="l">// viernes a domingo</div>
                      </div>
                      <div className="date-card">
                        <div className="d">Sede</div>
                        <div className="l">// Uruguay · 2026</div>
                      </div>
                    </div>
                    <SpotsCounter />
                  </div>
                  <SignupForm />
                </div>
              </WindowChrome>
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
                Zero to Product en 48 horas. Acá se shippea —{" "}
                <span className="spark">deploy o nada</span>.
              </p>
              <p
                className="foot-copy"
                style={{ marginTop: 8, color: "var(--muted-2)" }}
              >
                Con el apoyo de la Embajada de EE.UU. 🇺🇾🇺🇸
              </p>
            </div>
            <div className="foot-links">
              <div className="foot-col">
                <b>// evento</b>
                <a href="#repo">Qué es</a>
                <a href="#consigna">Consigna</a>
                <a href="#build">El viaje</a>
                <a href="#live">Inscripción</a>
              </div>
              <div className="foot-col">
                <b>// comunidad</b>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Discord</a>
                <a href="#">Contacto</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 UruHack · Uruguay 🇺🇾</span>
            <span>
              build: <span className="spark">stable</span> · made with ☕ &amp; git
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
