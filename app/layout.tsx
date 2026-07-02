import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import {
  CANONICAL_URL,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
} from "./event";
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
    "UruHack",
    "hackathon Uruguay",
    "hackathon Montevideo",
    "hackathon 2026",
    "jóvenes builders Uruguay",
    "programación Uruguay",
    "diseño de producto Uruguay",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#080b16" },
  ],
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
