/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["var(--text-sm)", 1.5],
        base: ["var(--text-base)", 1.5],
        lg: ["var(--text-lg)", 1.5],
        xl: ["var(--text-xl)", 1.25],
        "2xl": ["var(--text-2xl)", 1.125],
        "3xl": ["var(--text-3xl)", 1.125],
        "4xl": ["var(--text-4xl)", 1.125],
      },
      maxWidth: {
        ctn: "1200px",
        full: "1400px",
      },
    },
  },
  plugins: [],
};
