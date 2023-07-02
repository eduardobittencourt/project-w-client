/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["var(--font-cinzel)"],
      mono: ["var(--font-quicksand)"],
    },
    fontSize: {
      hg: ["3.75rem", { lineHeight: "5rem" }],
      lg: ["2.5rem", { lineHeight: "3.375rem" }],
      md: ["2rem", { lineHeight: "2.375rem" }],
      sm: ["1.125rem", { lineHeight: "1.5rem" }],
      xs: ["1rem", { lineHeight: "1.125rem" }],
    },
    colors: {
      red: "var(--color-crayon-red)",
      white: "var(--color-white)",
      grey: "var(--color-grey)",
      black: "var(--color-black)",
    },
  },
};
