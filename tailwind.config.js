/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        SoftCyan: "hsl(174, 77%, 80%)",
        StrongCyan: "hsl(174, 86%, 45%)",
        LightGrayishRed: "hsl(14, 92%, 95%)",
        LightRed: "hsl(15, 100%, 70%)",
        PaleBlue: "hsl(226, 100%, 87%)",

        White: "hsl (0, 0%, 100%)",
        VeryPaleBlue: "hsl(230, 100%, 99%)",
        LightGrayishBlue: "hsl(224, 65%, 95%)",
        LightestGrayishBlue: "hsl(223, 50%, 87%)",
        GrayishBlue: "hsl(225, 20%, 60%)",
        DarkDesaturatedBlue: "hsl(227, 35%, 25%)",
      },
      screens: {
        md: "550px",
      },
    },
  },

  plugins: [],
};
