module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#140039",
        secondary: "#ff7200",
        extra: "darkslategray",

        background: {
          DEFAULT: "#140039",
          300: "#595959",
          400: "#4d4d4d",
          500: "#404040",
          600: "#333333",
          700: "#262626",
          800: "#1a1a1a",
          900: "#0d0d0d",
        },
        typography: {
          DEFAULT: "#FFFFFF",
        },
      },
      keyframes: {
        scaleIn: {
          "0%, 100%": { scale: "1" },
          "50%": { scale: "0.1" },
        },
      },
      animation: {
        scaleIn: "scaleIn 2s linear",
      },
    },
  },

  plugins: [],
};
