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
          background:
            "linear-gradient(135deg, rgba(9,35,86,1), rgba(38,117,255,0.92))",
          color: "white",
          fontSize: 160,
          fontWeight: 800,
          letterSpacing: "-0.08em",
        }}
      >
        浮
      </div>
    ),
    size,
  );
}
