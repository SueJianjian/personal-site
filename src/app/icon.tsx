import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#ffffff",
          fontSize: 262,
          fontWeight: 900,
          letterSpacing: "-0.17em",
          fontFamily: '"Arial Black", Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            transform: "translateY(-11px) scaleX(1.01)",
          }}
        >
          FYG
        </div>
      </div>
    ),
    size,
  );
}
