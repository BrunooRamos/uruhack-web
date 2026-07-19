import type { MetadataRoute } from "next";
import { CANONICAL_URL, SITE_URL } from "./event";

// Política deliberada: se permite TODO crawler, incluidos los de AI
// (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). Que los answer
// engines citen a build 101 es un objetivo del sitio — no los bloquees.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CANONICAL_URL}sitemap.xml`,
    host: SITE_URL,
  };
}
