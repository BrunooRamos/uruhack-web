import type { ReactNode } from "react";
import { LUMA_URL, VENUE, VENUE_ADDRESS, VENUE_MAPS, CONTACT_EMAIL } from "./event";

/**
 * FAQs — fuente única de verdad.
 * `aText` (texto plano) alimenta el JSON-LD FAQPage y /llms.txt; `a` (JSX)
 * es la versión con links que se muestra en la página. Si editás una,
 * editá la otra: el schema debe decir lo mismo que se ve en pantalla.
 */
export type FaqItem = {
  q: string;
  /** Respuesta en texto plano (schema.org / llms.txt). */
  aText: string;
  /** Respuesta con markup para la página. Si falta, se usa aText. */
  a?: ReactNode;
};

export const FAQS: FaqItem[] = [
  {
    q: "¿Qué es UruHack?",
    aText:
      "Un hackathon de 24 horas donde equipos construyen un producto real y funcional en un solo fin de semana. 29 y 30 de agosto de 2026 en Montevideo.",
  },
  {
    q: "¿Quién puede participar?",
    aText:
      "Jóvenes builders de Uruguay: estudiantes y jóvenes profesionales de desarrollo, diseño y producto. No necesitás haber participado antes en un hackathon.",
  },
  {
    q: "¿Cuánto cuesta?",
    aText:
      "Participar es gratis. Los cupos son limitados y la inscripción está sujeta a selección por parte del equipo organizador.",
  },
  {
    q: "¿Cómo me inscribo y cómo es la selección?",
    aText:
      "La inscripción es a través de Luma (luma.com/2kxg61n8). Postulás a tu equipo y te confirmamos si quedaron seleccionados, junto con los próximos pasos.",
    a: (
      <>
        La inscripción es a través de{" "}
        <a href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="bracket">
          Luma
        </a>
        . Postulás a tu equipo y te confirmamos si quedaron seleccionados, junto con
        los próximos pasos.
      </>
    ),
  },
  {
    q: "¿Necesito tener un equipo para aplicar?",
    aText:
      "No. La inscripción es individual. Si ya tenés equipo, pueden aplicar y sumarse juntos; si no, te ayudamos a formar uno. Se compite en equipos de 3 a 5 personas.",
  },
  {
    q: "¿Necesito saber programar?",
    aText:
      "Buscamos perfiles diversos, pero al menos parte del equipo debería poder construir el producto. Diseño y producto suman muchísimo, pero el objetivo es shippear algo que funcione.",
  },
  {
    q: "¿Qué puedo construir?",
    aText:
      "Cualquier producto, B2C o B2B. La consigna detallada se revela al inicio del hackathon, para que nadie llegue con ventaja.",
  },
  {
    q: "¿Cómo funcionan los tracks?",
    aText:
      "Todos los equipos compiten en el track General por el premio principal. Si querés, podés inscribir tu proyecto además en un track por sponsor y competir por ese premio extra: siempre presentás en General y, opcionalmente, en un track más.",
  },
  {
    q: "¿Puedo empezar a trabajar antes del evento?",
    aText:
      "No. Se construye durante las 24 horas del evento, y eso es lo que se evalúa. Podés llegar con ideas, pero el código se escribe ahí.",
  },
  {
    q: "¿De quién es lo que construyo?",
    aText:
      "El proyecto es 100% tuyo y de tu equipo. Conservás la propiedad intelectual de lo que crees.",
  },
  {
    q: "¿Qué tengo que llevar?",
    aText:
      "Tu notebook, cargador y documento. El espacio, la conexión, la comida y el café los ponemos nosotros.",
  },
  {
    q: "¿Hay comida? ¿Se descansa en la sede?",
    aText:
      "Sí, hay comidas y café durante todo el evento. Al ser 24 horas continuas, habrá espacios para descansar. El cronograma detallado se comparte antes del evento.",
  },
  {
    q: "¿Dónde es?",
    aText: `En el ${VENUE}, ${VENUE_ADDRESS}, Uruguay.`,
    a: (
      <>
        En el {VENUE}, {VENUE_ADDRESS}.{" "}
        <a href={VENUE_MAPS} target="_blank" rel="noopener noreferrer" className="bracket">
          Ver en el mapa
        </a>
        .
      </>
    ),
  },
  {
    q: "¿Tenés otra pregunta?",
    aText: `Escribinos a ${CONTACT_EMAIL} y te respondemos.`,
    a: (
      <>
        Escribinos a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="bracket">
          {CONTACT_EMAIL}
        </a>{" "}
        y te respondemos.
      </>
    ),
  },
];
