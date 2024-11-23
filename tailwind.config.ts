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
      },
      animation: {
        scroll: "scrollText 20s linear infinite",
        'move-cloud': 'move-cloud 15s linear infinite',
        'fly-kite': 'fly-kite 10s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-in-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: "0",
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: "1",
            transform: 'translateY(0)',
          },
        },
        scrollText: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'move-cloud': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'fly-kite': {
          '0%, 100%': { transform: 'translate(-20px, 0) rotate(45deg)' },
          '50%': { transform: 'translate(20px, 20px) rotate(45deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
