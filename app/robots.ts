import type { MetadataRoute } from "next";
import { CANONICAL_URL, SITE_URL } from "./event";

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
