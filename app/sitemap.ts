import type { MetadataRoute } from "next";
import { CANONICAL_URL, OG_IMAGE_URL } from "./event";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CANONICAL_URL,
      lastModified: new Date("2026-06-30T00:00:00-03:00"),
      changeFrequency: "weekly",
      priority: 1,
      images: [OG_IMAGE_URL],
    },
  ];
}
