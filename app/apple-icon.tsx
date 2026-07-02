import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Ícono iOS generado en build (iOS aplica su propia máscara — sin bordes redondeados acá).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const displayBold = await readFile(
    join(process.cwd(), "assets/fonts/SpaceGrotesk-Bold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f4fe0",
          fontFamily: "Space Grotesk",
          fontSize: 104,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.6)", marginRight: 2 }}>&lt;</span>
        <span>U</span>
        <span style={{ color: "rgba(255,255,255,0.6)", marginLeft: 2 }}>&gt;</span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Space Grotesk", data: displayBold, style: "normal", weight: 700 }],
    },
  );
}
