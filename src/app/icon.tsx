import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1c1917",
        position: "relative",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="OpenConfig.ai"
      >
        <path
          d="M6 10 L26 10 L32 16 L58 16 L58 54 L6 54 Z"
          stroke="#a8a29e"
          strokeWidth="3"
          fill="none"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#d97706",
          fontSize: 8,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          marginTop: 2,
        }}
      >
        .ai
      </div>
    </div>,
    {
      ...size,
    },
  );
}
