"use client";

import { useState } from "react";
import { fireConfetti } from "./confetti";

export function SignupForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        className="rise"
        style={{
          padding: "44px 32px",
          textAlign: "center",
          fontFamily: "var(--font-mono-stack)",
        }}
      >
        <div style={{ fontSize: 36 }}>🚀</div>
        <div
          style={{
            fontFamily: "var(--font-display-stack)",
            fontSize: 22,
            color: "var(--navy)",
            fontWeight: 600,
            margin: "12px 0 6px",
          }}
        >
          Deploy exitoso.
        </div>
        <div style={{ color: "var(--muted)", fontSize: 14 }}>
          Anotamos a tu equipo. Te llega la confirmación al mail — y, si quedan
          seleccionados, los detalles una semana antes. Ahora vení a shippear.
        </div>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const btn = (e.currentTarget.querySelector(
          "button[type=submit]",
        ) as HTMLElement | null)?.getBoundingClientRect();
        fireConfetti(
          btn ? { x: btn.left + btn.width / 2, y: btn.top } : undefined,
        );
        setSent(true);
      }}
    >
      <div className="field">
        <label>// nombre del equipo</label>
        <input type="text" name="equipo" placeholder="Los que shippean" required />
      </div>
      <div className="field">
        <label>// email del capitán</label>
        <input type="email" name="email" placeholder="vos@ejemplo.com" required />
      </div>
      <div className="field">
        <label>// integrantes</label>
        <select name="integrantes" required defaultValue="">
          <option value="" disabled>
            ¿Cuántos son?
          </option>
          <option>2 personas</option>
          <option>3 personas</option>
          <option>4 personas</option>
          <option>5 personas</option>
        </select>
      </div>
      <div className="field">
        <label>// perfil principal</label>
        <select name="rol" required defaultValue="">
          <option value="" disabled>
            Elegí uno…
          </option>
          <option>Dev / Builder</option>
          <option>Diseño</option>
          <option>Producto</option>
          <option>Mix de todo</option>
          <option>Quiero mentorear / sponsorear</option>
        </select>
      </div>
      <button type="submit" className="btn">
        git push --inscribite
      </button>
      <p className="note">
        Cupos limitados · hasta 15 equipos en esta edición. Sin spam.
      </p>
    </form>
  );
}
