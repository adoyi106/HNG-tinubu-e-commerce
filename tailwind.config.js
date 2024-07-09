/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Jakarta: "Plus Jakarta Sans, sans-serif",
    },
    extend: {
      gridTemplateColumns: {
        "2fr-1fr": "2fr 1fr",
      },
      backgroundImage: {
        cta: "url('/public/cta.png')",
      },
    },
  },
  plugins: [],
};
