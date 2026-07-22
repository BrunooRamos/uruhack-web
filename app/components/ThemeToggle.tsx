"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Toggle claro/oscuro. El tema inicial lo setea el script inline del layout
 * (localStorage → sistema) antes del primer paint; acá solo se alterna y
 * persiste. El ícono se resuelve por CSS según [data-theme], así el markup
 * es idéntico en server y client (sin mismatch de hidratación).
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage puede no estar disponible (modo privado) */
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="cambiar entre tema claro y oscuro"
    >
      <Moon className="tt-moon" size={15} strokeWidth={1.5} aria-hidden />
      <Sun className="tt-sun" size={15} strokeWidth={1.5} aria-hidden />
    </button>
  );
}
