import type { MetadataRoute } from "next";
import { SEO_DESCRIPTION, SITE_NAME } from "./event";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UruHack 2026 — Hackathon de 24 horas en Montevideo",
    short_name: SITE_NAME,
    description: SEO_DESCRIPTION,
    start_url: "/",
    display: "browser",
    lang: "es-UY",
    background_color: "#f6f7f9",
    theme_color: "#1f4fe0",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
