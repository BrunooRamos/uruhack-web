import { Magnetic } from "./Magnetic";
import { InscribiteBtn } from "./DeployFX";
import { APPLY_DEADLINE } from "../event";

/** Bloque de inscripción: lleva a la postulación. */
export function ApplyCTA() {
  return (
    <div className="apply-cta">
      <Magnetic>
        <InscribiteBtn className="btn">Aplicar →</InscribiteBtn>
      </Magnetic>
      <p className="note">
        Inscripciones hasta el {APPLY_DEADLINE} · cupos limitados.
      </p>
    </div>
  );
}
