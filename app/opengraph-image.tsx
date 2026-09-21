import { ImageResponse } from "next/og";

export const alt = "The Quran Group — Your journey into sacred knowledge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated at build time; no binary asset to keep in sync with the brand. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #12201a 0%, #17291f 55%, #0f1b15 100%)",
          color: "#f9f6f1",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#d4af47",
          }}
        >
          The Quran Group
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 78,
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Your Journey Into
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 600,
            color: "#d4af47",
            lineHeight: 1.1,
          }}
        >
          Sacred Knowledge
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 28,
            color: "rgba(249,246,241,0.7)",
          }}
        >
          Quran · Tajweed · Arabic · Fiqh
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            width: 260,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #d4af47, transparent)",
          }}
        />
      </div>
    ),
    size
  );
}
