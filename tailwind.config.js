/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "hsla(0, 0%, 100%, 0.9)",
      },
      boxShadow: {
        "custom-hover":
          "0 0.08px 2.55728px rgba(0, 0, 0, .053), 0 1.28px 5.57858px rgba(0, 0, 0, .077), 0 3px 10px rgba(0, 0, 0, .13)",
      },
      dropShadow: {
        custom: [
          "0 0 0.880517px rgba(0, 0, 0, 0.0288)",
          "0 0 2.29197px rgba(0, 0, 0, 0.03)",
          "0 0 5.52px rgba(0, 0, 0, 0.0543)",
          "0 0 11px rgba(0, 0, 0, 0.09)",
        ],
      },
      brightness: {
        110: "1.1",
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1400px",
      },
    },
  },
  plugins: [],
};
