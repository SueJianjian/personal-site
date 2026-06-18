import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, rgba(6,26,66,1), rgba(32,105,236,0.92))",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 36,
            fontWeight: 700,
            opacity: 0.92,
          }}
        >
          浮云阁
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              whiteSpace: "pre-wrap",
            }}
          >
            专业定制官网
            {"\n"}
            让你的业务更有信任感
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.86)",
              maxWidth: 900,
            }}
          >
            企业官网、产品展示页、服务介绍页制作。适合预算不高、想尽快上线的客户。
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 24,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          <div style={{ display: "flex" }}>微信：suxiaojian0828</div>
          <div style={{ display: "flex" }}>邮箱：xiaosuzi1987@gmail.com</div>
        </div>
      </div>
    ),
    size,
  );
}
