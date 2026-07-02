// ============================================================
// <UruHack> — datos del evento (fuente única de verdad)
// Editá acá y se actualiza en toda la landing.
// ============================================================

/** Identidad pública del sitio. */
export const SITE_NAME = "UruHack";
export const SITE_URL = "https://uruhack.uy";
export const CANONICAL_URL = `${SITE_URL}/`;
export const OG_IMAGE_URL = `${SITE_URL}/opengraph-image`;
export const OG_IMAGE_ALT =
  "UruHack 2026 — hackathon de 24 horas, 29 y 30 de agosto, Hyatt Centric Montevideo. Gratis, cupos limitados.";
export const LOGO_URL = `${SITE_URL}/logo.png`;

/** Metadata principal para buscadores (~155 caracteres, sin cortes en SERP). */
export const SEO_TITLE =
  "UruHack 2026 | Hackathon de 24 horas en Montevideo, Uruguay";
export const SEO_DESCRIPTION =
  "UruHack es un hackathon gratuito de 24 horas en Montevideo: 29 y 30 de agosto de 2026, Hyatt Centric. Equipos de 3 a 5, inscripción individual, cupos limitados.";

/** Descripción larga para datos estructurados (Event) y answer engines. */
export const EVENT_DESCRIPTION =
  "UruHack es un hackathon gratuito de 24 horas para jóvenes builders uruguayos. Aplicá individualmente, formá un equipo de 3 a 5 personas y construí un producto real y funcionando el 29 y 30 de agosto de 2026 en el Hyatt Centric Montevideo.";

/** Última actualización de contenido del sitio (bumpeala con cada anuncio real:
 *  tracks, mentores, sponsors, cronograma). Alimenta sitemap y schema. */
export const CONTENT_UPDATED_ISO = "2026-07-01T00:00:00-03:00";

/** Link de inscripción en Luma (selección con aprobación del organizador). */
export const LUMA_URL = "https://luma.com/2kxg61n8";

/** Perfiles oficiales (schema.org sameAs — consolidan la entidad UruHack).
 *  TODO(uruhack): agregar Instagram / X / LinkedIn cuando existan. */
export const SOCIAL_PROFILES = [LUMA_URL];

/** Sede. */
export const VENUE = "Hyatt Centric Montevideo";
export const VENUE_ADDRESS = "Rbla. República del Perú 1479, Montevideo";
export const VENUE_REGION = "Montevideo";
export const VENUE_POSTAL_CODE = "11300";
/** TODO(uruhack): verificar el pin exacto (aprox. Hyatt Centric, Pocitos). */
export const VENUE_GEO = { lat: -34.9166, lng: -56.15 };
export const VENUE_MAPS = "https://www.google.com/maps/search/?api=1&query=Hyatt+Centric+Montevideo";

/** Fechas (29–30 de agosto de 2026, sábado a domingo). */
export const EVENT_DATES = "29–30 ago 2026";
export const EVENT_DATES_LONG = "Sábado 29 → domingo 30 de agosto, 2026";
export const EVENT_START_DATE = "2026-08-29";

/** Kickoff del evento. TODO(uruhack): confirmar horario exacto. */
export const EVENT_KICKOFF_ISO = "2026-08-29T10:00:00-03:00";
export const EVENT_END_ISO = "2026-08-30T10:00:00-03:00";

/** Inscripciones: apertura y cierre (cuenta regresiva del hero/inscripción).
 *  TODO(uruhack): confirmar fecha real de apertura. */
export const APPLY_OPEN_ISO = "2026-07-01T00:00:00-03:00";
export const APPLY_DEADLINE_ISO = "2026-08-09T23:59:00-03:00";
export const APPLY_DEADLINE = "9 de agosto, 23:59";

/** Formato. */
export const DURATION_HOURS = 24;
export const TEAM_SIZE = "3 a 5";

/** Contacto. TODO(uruhack): poné el mail/handle reales. */
export const CONTACT_EMAIL = "hola@uruhack.uy";
