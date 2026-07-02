import {
  APPLY_DEADLINE,
  CANONICAL_URL,
  CONTACT_EMAIL,
  EVENT_DATES_LONG,
  EVENT_DESCRIPTION,
  LUMA_URL,
  TEAM_SIZE,
  VENUE,
  VENUE_ADDRESS,
} from "../event";
import { FAQS } from "../faqs";

// /llms.txt — resumen del sitio en markdown para answer engines y crawlers de
// LLMs (convención emergente, https://llmstxt.org). Se genera en build desde
// event.ts + faqs.tsx: nunca puede divergir del contenido visible.
export const dynamic = "force-static";

export function GET() {
  const body = `# UruHack

> ${EVENT_DESCRIPTION}

## Datos clave

- Qué: hackathon presencial de 24 horas ("Zero to Product": se construye un producto real y funcionando durante el evento).
- Cuándo: ${EVENT_DATES_LONG}.
- Dónde: ${VENUE}, ${VENUE_ADDRESS}, Uruguay.
- Precio: gratis, con cupos limitados y selección del equipo organizador.
- Equipos: ${TEAM_SIZE} personas; la inscripción es individual (te ayudamos a formar equipo).
- Cierre de inscripción: ${APPLY_DEADLINE} (hora de Uruguay).
- Inscripción: ${LUMA_URL}
- Sitio oficial: ${CANONICAL_URL}
- Contacto: ${CONTACT_EMAIL}

## Preguntas frecuentes

${FAQS.map((f) => `### ${f.q}\n\n${f.aText}`).join("\n\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
