import { ImageResponse } from "next/og";

export const alt = "INNOVEXA DIGITAL — Build. Automate. Scale.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 75% 20%, rgba(18,231,255,0.18), transparent 45%), radial-gradient(circle at 30% 80%, rgba(157,92,255,0.20), transparent 45%), linear-gradient(135deg, #08090c 0%, #0d1018 55%, #07080b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#7fe9ff"
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              fontSize: 34,
              color: "#02040a",
              background: "linear-gradient(135deg, #12e7ff, #1f7aff 55%, #9d5cff)"
            }}
          >
            I
          </div>
          INNOVEXA DIGITAL
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 920,
            backgroundImage: "linear-gradient(120deg, #ffffff, #b8e6ff 60%, #c8b6ff)",
            backgroundClip: "text",
            color: "transparent"
          }}
        >
          Build. Automate. Scale.
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "rgba(255,255,255,0.66)",
            maxWidth: 880
          }}
        >
          Websites, mobile apps, AI automation, and growth systems for ambitious businesses.
        </div>
      </div>
    ),
    { ...size }
  );
}
