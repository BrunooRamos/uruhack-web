import type { MetadataRoute } from "next";
import { CANONICAL_URL, CONTENT_UPDATED_ISO, OG_IMAGE_URL } from "./event";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CANONICAL_URL,
      lastModified: new Date(CONTENT_UPDATED_ISO),
      changeFrequency: "weekly",
      priority: 1,
      images: [OG_IMAGE_URL],
    },
  ];
}
