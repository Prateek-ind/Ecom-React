/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinOnceRight: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },

        spinOnceLeft: {
          "0%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },

      fontFamily: {
        customFont: ["Poppins", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        spinOnceRight: "spinOnceRight .3s linear 1",
        spinOnceLeft: "spinOnceLeft .3s linear 1",
      },
    },
  },
  plugins: [],
};
