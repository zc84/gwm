import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f7f7f2",
        signal: "#d50032",
        line: "#242832",
        mist: "#0f1014",
        gwm: {
          black: "#050506",
          canvas: "#080808",
          panel: "#0f1014",
          "panel-raised": "#14151a",
          "panel-soft": "#1a1c22",
          line: "#242832",
          "line-strong": "#343946",
          text: "#f7f7f2",
          muted: "#a7abb2",
          subtle: "#6f747d",
          red: "#d50032",
          "red-hot": "#f0063c",
          "red-dark": "#72041e",
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        arabic: ["Arial", "Tahoma", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        gwm: "12px",
        "gwm-lg": "18px",
        "gwm-pill": "999px",
      },
      boxShadow: {
        "gwm-panel": "0 18px 60px rgba(0, 0, 0, 0.35)",
        "gwm-red": "0 14px 34px rgba(213, 0, 50, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
