export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`} aria-label="UruHack">
      <span className="br">&lt;</span>
      <span className="uru">Uru</span>
      <span className="hack">Hack</span>
      <span className="br">&gt;</span>
    </span>
  );
}
