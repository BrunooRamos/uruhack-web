import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uruhack.uy"),
  title: "<UruHack> — Hackathon de 24 horas en Montevideo",
  description:
    "Hackathon de 24 horas para jóvenes builders uruguayos. Construí un producto real y funcionando. 29–30 de agosto de 2026, Hyatt Centric Montevideo.",
  openGraph: {
    title: "<UruHack> — Hackathon de 24 horas en Montevideo",
    description:
      "Construí un producto real en 24 horas. 29–30 de agosto de 2026, Hyatt Centric Montevideo.",
    locale: "es_UY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('uru-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;}catch(e){}})();",
          }}
        />
      </head>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
