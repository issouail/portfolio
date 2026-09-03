/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#030304",
        surface: "#0F1115",
        stardust: "#94A3B8",
        btc: "#F7931A",
        ember: "#EA580C",
        gold: "#FFD600",
        boundary: "#1E293B",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-orange": "0 0 20px -5px rgba(234,88,12,0.5)",
        "glow-orange-lg": "0 0 30px -5px rgba(247,147,26,0.6)",
        "glow-gold": "0 0 20px rgba(255,214,0,0.3)",
        "glow-card": "0 0 50px -10px rgba(247,147,26,0.1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
