import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'grey-rgba': 'rgba(0, 0, 0, 0.1)',
        cyan: "#00FFFF",
        "steel-blue": "#2F4157",
        black: "#101010",
        "dusk-blue": "#233141",
        white: "#F9FAFB",
        "light-purple": "#F6F8FF"
      },
    },
  },
  plugins: [],
} satisfies Config;
