/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["poppins", "sans-serif"],
        titleFont: ["montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "##FFFFFF",
        lightText: "##000000",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "##000000",
      },
      boxShadow: {
        shadowOne: "(0px 4px 3px) #1c1e22, (0px 2px 2px) #262a2e",
      },
    },
  },
  plugins: [],
};
