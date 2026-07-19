import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import {
  CANONICAL_URL,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
} from "./event";
import "./globals.css";

// build 101 uses a single typeface — geist mono, exclusively (no secondary font).
// variable font: omit `weight` to self-host the full axis (we only ever render 400/500/600).
// keep the CSS var named --font-mono so globals.css bindings stay intact.
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      "es-UY": CANONICAL_URL,
      "x-default": CANONICAL_URL,
    },
  },
  keywords: [
    "build 101",
    "hackathon uruguay",
    "hackathon montevideo",
    "hackathon 2026",
    "36 horas",
    "mvp en un fin de semana",
    "builders uruguay",
    "product building montevideo",
  ],
  authors: [{ name: SITE_NAME, url: CANONICAL_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Las imágenes OG/Twitter salen de app/opengraph-image.tsx (file convention);
  // X/Twitter cae en og:image automáticamente.
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: CANONICAL_URL,
    siteName: SITE_NAME,
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  category: "event",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-UY">
      <body className={mono.variable}>{children}</body>
    </html>
  );
}
