"use client";

import { useEffect, useState } from "react";
import { APPLY_DEADLINE_ISO } from "../event";

const EVENT = new Date(APPLY_DEADLINE_ISO).getTime();

type T = { d: number; h: number; m: number; s: number };

function diff(): T {
  const ms = Math.max(0, EVENT - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms / 3_600_000) % 24),
    m: Math.floor((ms / 60_000) % 60),
    s: Math.floor((ms / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const [t, setT] = useState<T | null>(null);

  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown" role="timer" aria-label="Cuenta regresiva al cierre de inscripciones">
      <span className="cd-prompt">$ cierre --inscripciones</span>
      <span className="cd-clock">
        <b>{t ? t.d : "--"}</b>d <b>{t ? pad(t.h) : "--"}</b>:
        <b>{t ? pad(t.m) : "--"}</b>:<b className="cd-s">{t ? pad(t.s) : "--"}</b>
      </span>
      <span className="cd-blink" />
    </div>
  );
}
