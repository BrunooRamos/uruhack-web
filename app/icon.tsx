import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Favicon generado en build: monograma <U> sobre el azul de marca.
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 100,
          fontFamily: "Space Grotesk",
          fontSize: 300,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.6)", marginRight: 6 }}>&lt;</span>
        <span>U</span>
        <span style={{ color: "rgba(255,255,255,0.6)", marginLeft: 6 }}>&gt;</span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Space Grotesk", data: displayBold, style: "normal", weight: 700 }],
    },
  );
}
