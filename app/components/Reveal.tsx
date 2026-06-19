import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** kept for call-site compatibility; stagger now comes from scroll position */
  delay?: number;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
