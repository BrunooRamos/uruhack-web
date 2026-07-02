import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { EVENT_DATES, OG_IMAGE_ALT, VENUE } from "./event";

// Social card (WhatsApp / X / LinkedIn / Slack). Se genera en build —
// editá los datos en event.ts y este archivo solo para el diseño.
export const alt = OG_IMAGE_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLUE = "#1f4fe0";
const NAVY = "#20253a";
const BG = "#f6f7f9";
const MUTED = "#5b6478";

async function font(file: string) {
  return readFile(join(process.cwd(), "assets/fonts", file));
}

export default async function Image() {
  const [displayBold, monoRegular, monoMedium] = await Promise.all([
    font("SpaceGrotesk-Bold.ttf"),
    font("JetBrainsMono-Regular.ttf"),
    font("JetBrainsMono-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
          backgroundImage:
            "linear-gradient(#e8ebf1 1px, transparent 1px), linear-gradient(90deg, #e8ebf1 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", height: 10, width: "100%", background: BLUE }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: "52px 72px 56px",
          }}
        >
          {/* wordmark */}
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            <span style={{ color: BLUE }}>&lt;Uru</span>
            <span style={{ color: NAVY }}>Hack</span>
            <span style={{ color: BLUE }}>&gt;</span>
          </div>

          {/* main copy */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: 24,
                fontWeight: 500,
                color: BLUE,
                letterSpacing: 4,
                marginBottom: 20,
              }}
            >
              {"// HACKATHON · ZERO TO PRODUCT"}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 84,
                fontWeight: 700,
                color: NAVY,
                letterSpacing: -3,
                lineHeight: 1.04,
              }}
            >
              <span>
                Construí un producto <span style={{ color: BLUE, marginLeft: 20 }}>real</span>,
              </span>
              <span>en 24 horas.</span>
            </div>
          </div>

          {/* facts row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 48,
              fontFamily: "JetBrains Mono",
              fontSize: 23,
              color: MUTED,
            }}
          >
            <span style={{ color: NAVY, fontWeight: 500 }}>{EVENT_DATES}</span>
            <span style={{ color: BLUE }}>·</span>
            <span style={{ color: NAVY, fontWeight: 500 }}>{VENUE}</span>
            <span style={{ color: BLUE }}>·</span>
            <span style={{ color: NAVY, fontWeight: 500 }}>gratis, cupos limitados</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: displayBold, style: "normal", weight: 700 },
        { name: "JetBrains Mono", data: monoRegular, style: "normal", weight: 400 },
        { name: "JetBrains Mono", data: monoMedium, style: "normal", weight: 500 },
      ],
    },
  );
}
