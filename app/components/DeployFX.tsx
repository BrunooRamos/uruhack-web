"use client";

import { useEffect, useRef, useState } from "react";
import { SPIN, reducedMotion } from "./useInView";
import { fireConfetti } from "./confetti";

const STEPS = [
  { run: "building…", ok: "compiled ✓", ms: 650 },
  { run: "running tests…", ok: "5 passed ✓", ms: 650 },
  { run: "deploying a prod…", ok: "deployed ✓", ms: 800 },
];

function gotoForm() {
  const el = document.getElementById("live");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => {
    const input = document.querySelector<HTMLInputElement>(
      '#live input[name="equipo"]',
    );
    input?.focus();
  }, 700);
}

/** Listens for `uru:deploy` and plays a fake CI pipeline before opening the form. */
export function DeployFX() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0); // index running; STEPS.length = live
  const [frame, setFrame] = useState(0);
  const busy = useRef(false);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), 80);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onDeploy = () => {
      if (busy.current) return;
      busy.current = true;

      if (reducedMotion()) {
        busy.current = false;
        gotoForm();
        return;
      }

      setStep(0);
      setOpen(true);
      const timers: ReturnType<typeof setTimeout>[] = [];
      let acc = 0;
      STEPS.forEach((s, i) => {
        acc += s.ms;
        timers.push(setTimeout(() => setStep(i + 1), acc));
      });
      // LIVE moment
      timers.push(
        setTimeout(() => {
          fireConfetti({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
        }, acc + 60),
      );
      timers.push(
        setTimeout(() => {
          setOpen(false);
          busy.current = false;
          gotoForm();
        }, acc + 1100),
      );
    };
    window.addEventListener("uru:deploy", onDeploy);
    return () => window.removeEventListener("uru:deploy", onDeploy);
  }, []);

  if (!open) return null;
  const spin = SPIN[frame % SPIN.length];
  const live = step >= STEPS.length;

  return (
    <div className="deploy-overlay" aria-hidden>
      <div className="deploy-card">
        <div className="deploy-head">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">deploy · uruhack.uy</span>
          <span className="win-tag">CI</span>
        </div>
        <div className="deploy-body">
          {STEPS.map((s, i) => {
            const passed = i < step;
            const running = i === step && !live;
            return (
              <div className="deploy-step" key={s.run}>
                {passed ? (
                  <span className="tick pop">✓</span>
                ) : running ? (
                  <span className="spin-glyph ci-spin">{spin}</span>
                ) : (
                  <span className="tick pending">·</span>
                )}
                <span style={{ opacity: passed || running ? 1 : 0.4 }}>
                  {passed ? s.ok : s.run}
                </span>
              </div>
            );
          })}
          <div className={`deploy-live ${live ? "on" : ""}`}>
            <span className="live-dot" /> {live ? "● LIVE — uruhack.uy 🎉" : "esperando deploy…"}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Anchor that triggers the deploy pipeline instead of a plain jump. */
export function InscribiteBtn({
  children,
  className = "btn",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#live"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("uru:deploy"));
      }}
    >
      {children}
    </a>
  );
}
