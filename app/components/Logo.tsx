export function Logo({ className = "" }: { className?: string }) {
  // el wordmark ES el logo. "build 101" — minúsculas, un espacio, una sola línea,
  // sin ícono, sin color. geist mono semibold, tracking -0.04em (ver .logo en globals.css).
  return (
    <span className={`logo ${className}`} aria-label="build 101">
      build 101
    </span>
  );
}
