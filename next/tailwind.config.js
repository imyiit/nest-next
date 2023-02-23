/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./page/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // https://vercel.com/design/color

      colors: {
        vercel: {
          pink: "#FF0080",
          blue: "#0070F3",
          cyan: "#50E3C2",
          orange: "#F5A623",
          violet: "#7928CA",
        },
      },
      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            "border-color": theme("colors.vercel.pink"),
          },
          "40%": {
            "border-color": theme("colors.vercel.pink"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: 1,
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: 1,
          },
          "30%": {
            transform: "scale(2)",
            opacity: 1,
          },
          "40%": {
            opacity: 0.5,
          },
          "100%": {
            transform: "scale(4)",
            opacity: 0,
          },
        },
        skeleton: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        spin: {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
      }),
      animation: {
        ripple: "ripple 600ms linear",
        skeleton: "skeleton 2000ms linear infinite",
        spin: "spin 2000ms infinite linear",
      },
    },
  },
};
