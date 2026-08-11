export function Logo({
  className = "",
  coBrand = false,
}: {
  className?: string;
  coBrand?: boolean;
}) {
  // el wordmark ES el logo. "build 101" — minúsculas, un espacio, una sola línea,
  // sin ícono, sin color. geist mono semibold, tracking -0.04em (ver .logo en globals.css).
  const wordmark = (
    <span className={coBrand ? "logo" : `logo ${className}`} aria-label="build 101">
      build 101
    </span>
  );
  if (!coBrand) return wordmark;

  // coBrand: lockup "build 101 × UM" con el co-organizador. Solo en el nav — el
  // footer ya tiene su propio bloque "co-organizado por" debajo del wordmark.
  return (
    <span className={`logo-lockup ${className}`}>
      {wordmark}
      <span className="logo-x" aria-hidden>
        ×
      </span>
      {/* um-mark = escudo + UM, sin la línea "universidad de montevideo": a la
          altura del nav esa línea es un borrón. El logo completo sigue en el
          hero y en el footer, donde entra grande. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="logo-um"
        src="/sponsors/um-mark.svg"
        alt="Universidad de Montevideo"
      />
    </span>
  );
}
