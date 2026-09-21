import React from "react";

// 16 tick marks evenly spaced on Ring 1 (radius from ring center: 207px)
const RING1_R = 207;
const TICKS = Array.from({ length: 16 }, (_, i) => {
  const angle = (i * 360) / 16; // degrees
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: 210 + RING1_R * Math.cos(rad), y: 210 + RING1_R * Math.sin(rad) };
});

// 8 diamond gems evenly spaced on Ring 2 (radius: 172px), offset by 22.5°
const RING2_R = 172;
const GEMS = Array.from({ length: 8 }, (_, i) => {
  const angle = (i * 360) / 8 + 22.5;
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: 175 + RING2_R * Math.cos(rad), y: 175 + RING2_R * Math.sin(rad) };
});

// 4 bright dots on Ring 3 (radius: 130px)
const RING3_R = 130;
const DOTS = Array.from({ length: 4 }, (_, i) => {
  const angle = (i * 360) / 4;
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: 134 + RING3_R * Math.cos(rad), y: 134 + RING3_R * Math.sin(rad) };
});

export default function HeroBook() {
  return (
    <div className="orb-scene" aria-hidden="true">
      {/* Ambient glow */}
      <div className="orb-glow" />
      {/* Floor shadow */}
      <div className="orb-floor" />

      {/* Expanding halo pulses */}
      <div className="orb-pulse" />
      <div className="orb-pulse" />
      <div className="orb-pulse" />

      {/* ── Ring 1: outer dashed, slow CW, with 16 tick marks ── */}
      <div className="orb-ring orb-ring-1">
        <svg
          width="420"
          height="420"
          viewBox="0 0 420 420"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {TICKS.map((t, i) => (
            <circle
              key={i}
              cx={t.x}
              cy={t.y}
              r="2.5"
              fill={i % 4 === 0 ? "hsl(40 65% 58%)" : "hsl(40 65% 52% / 0.6)"}
            />
          ))}
        </svg>
      </div>

      {/* ── Ring 2: CCW, with 8 diamond gems ── */}
      <div className="orb-ring orb-ring-2">
        <svg
          width="350"
          height="350"
          viewBox="0 0 350 350"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {GEMS.map((g, i) => (
            <rect
              key={i}
              x={g.x - 4}
              y={g.y - 4}
              width="8"
              height="8"
              fill="hsl(40 65% 56%)"
              transform={`rotate(45 ${g.x} ${g.y})`}
              style={{ filter: "drop-shadow(0 0 5px hsl(40 65% 52% / 0.9))" }}
            />
          ))}
        </svg>
      </div>

      {/* ── 8-pointed Islamic star (two overlapping squares) ── */}
      <div className="orb-star" />

      {/* ── Ring 3: CW, with 4 glowing dots ── */}
      <div className="orb-ring orb-ring-3">
        <svg
          width="268"
          height="268"
          viewBox="0 0 268 268"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {DOTS.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r="5"
              fill="hsl(40 65% 58%)"
              style={{
                filter:
                  "drop-shadow(0 0 7px hsl(40 65% 52%)) drop-shadow(0 0 14px hsl(40 65% 52% / 0.6))",
              }}
            />
          ))}
        </svg>
      </div>

      {/* ── Center medallion ── */}
      <div className="orb-center">
        <span className="orb-arabic">اقْرَأْ</span>
        <span className="orb-caption">Iqra · Read</span>
      </div>
    </div>
  );
}
