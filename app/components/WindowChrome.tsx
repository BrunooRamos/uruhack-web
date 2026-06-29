import type { ReactNode } from "react";

type WindowChromeProps = {
  title: ReactNode;
  tag?: string;
  dark?: boolean;
  url?: boolean;
  children: ReactNode;
  className?: string;
};

export function WindowChrome({
  title,
  tag,
  dark = false,
  url = false,
  children,
  className = "",
}: WindowChromeProps) {
  return (
    <div className={`win ${dark ? "dark" : ""} ${className}`}>
      <div className="win-bar">
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
        {url ? (
          <div className="browser-url">{title}</div>
        ) : (
          <span className="win-title">{title}</span>
        )}
        {tag ? <span className="win-tag">{tag}</span> : null}
      </div>
      {children}
    </div>
  );
}
