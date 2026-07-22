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
  const body = `# build 101

> ${EVENT_DESCRIPTION}

## datos clave

- qué: hackathon presencial de 36 horas: se construye un producto real y funcionando durante el evento.
- cuándo: ${EVENT_DATES_LONG}.
- dónde: ${VENUE}, ${VENUE_ADDRESS}, uruguay.
- precio: gratis, con cupos limitados y selección del equipo organizador.
- equipos: ${TEAM_SIZE} personas; la inscripción es por equipo (si no tenés, te ayudamos a formar uno).
- cierre de inscripción: ${APPLY_DEADLINE} (hora de uruguay).
- inscripción: ${LUMA_URL}
- sitio oficial: ${CANONICAL_URL}
- contacto: ${CONTACT_EMAIL}

## preguntas frecuentes

${FAQS.map((f) => `### ${f.q}\n\n${f.aText}`).join("\n\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
