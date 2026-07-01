import {
  APPLY_DEADLINE_ISO,
  CANONICAL_URL,
  CONTACT_EMAIL,
  DURATION_HOURS,
  EVENT_DATES_LONG,
  EVENT_END_ISO,
  EVENT_KICKOFF_ISO,
  LUMA_URL,
  OG_IMAGE_URL,
  SEO_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TEAM_SIZE,
  VENUE,
  VENUE_ADDRESS,
} from "../event";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const eventId = `${SITE_URL}/#event`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      logo: `${SITE_URL}/logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: SITE_NAME,
      url: CANONICAL_URL,
      inLanguage: "es-UY",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "Event",
      "@id": eventId,
      name: "UruHack 2026",
      alternateName: SITE_NAME,
      description: SEO_DESCRIPTION,
      url: CANONICAL_URL,
      image: [OG_IMAGE_URL],
      startDate: EVENT_KICKOFF_ISO,
      endDate: EVENT_END_ISO,
      duration: `PT${DURATION_HOURS}H`,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      inLanguage: "es-UY",
      keywords:
        "hackathon Uruguay, hackathon Montevideo, UruHack, builders Uruguay, programación, diseño, producto",
      location: {
        "@type": "Place",
        name: VENUE,
        address: {
          "@type": "PostalAddress",
          streetAddress: VENUE_ADDRESS,
          addressLocality: "Montevideo",
          addressCountry: "UY",
        },
      },
      organizer: { "@id": organizationId },
      offers: {
        "@type": "Offer",
        url: LUMA_URL,
        price: "0",
        priceCurrency: "UYU",
        availability: "https://schema.org/LimitedAvailability",
        validThrough: APPLY_DEADLINE_ISO,
      },
      audience: {
        "@type": "Audience",
        audienceType: `Jóvenes builders de Uruguay en equipos de ${TEAM_SIZE} personas`,
      },
      about: EVENT_DATES_LONG,
      isAccessibleForFree: true,
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
