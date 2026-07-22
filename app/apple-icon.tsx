import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Ícono iOS generado en build: glyph "b_" blanco sobre negro
// (iOS aplica su propia máscara — sin bordes redondeados acá).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const monoSemiBold = await readFile(
    join(process.cwd(), "assets/fonts/GeistMono-SemiBold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          background: "#000000",
          fontFamily: "Geist Mono",
          fontSize: 104,
          fontWeight: 600,
          letterSpacing: -4,
          color: "#ffffff",
          padding: "0 0 52px",
        }}
      >
        <span style={{ lineHeight: 1 }}>b</span>
        <div
          style={{
            display: "flex",
            width: 41,
            height: 70,
            background: "#2563eb",
            marginLeft: 6,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist Mono", data: monoSemiBold, style: "normal", weight: 600 },
      ],
    },
  );
}
