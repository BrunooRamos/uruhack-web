import type { MetadataRoute } from "next";
import { SEO_DESCRIPTION, SITE_NAME } from "./event";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "build 101 — hackathon de 36 horas en montevideo",
    short_name: SITE_NAME,
    description: SEO_DESCRIPTION,
    start_url: "/",
    display: "browser",
    lang: "es-UY",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
