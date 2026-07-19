import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Favicon generado en build: glyph "b_" (una b + cursor block) blanco sobre negro.
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
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
          fontSize: 300,
          fontWeight: 600,
          letterSpacing: -12,
          color: "#ffffff",
          padding: "0 0 150px",
        }}
      >
        <span style={{ lineHeight: 1 }}>b</span>
        <div
          style={{
            display: "flex",
            width: 118,
            height: 200,
            background: "#ffffff",
            marginLeft: 16,
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
