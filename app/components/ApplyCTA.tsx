import { InscribiteBtn } from "./DeployFX";
import { APPLY_DEADLINE } from "../event";

/** Bloque de inscripción: lleva a la postulación. */
export function ApplyCTA() {
  return (
    <div className="apply-cta">
      <InscribiteBtn className="btn">aplicar →</InscribiteBtn>
      <p className="note">
        inscripciones hasta el {APPLY_DEADLINE} · cupos limitados.
      </p>
    </div>
  );
}
