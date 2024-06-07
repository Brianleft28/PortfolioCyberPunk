/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        lg: "3.5rem",
        xl: "4rem",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
    },
  },
  extend: {},
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    themeRoot: ":root",
    darkTheme: "cyberpunk",
    lightTheme: "cupcake",
    themes: ["business", "cyberpunk"],
  },
  plugins: [require("daisyui")],
};
