import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff4b4b",
        secondary_deep: "#1746A2",
        secondary_light: "#5F9DF7",
        body: "#FFF7E9",
      },
      boxShadow: {
        "default": "0px 1px 10px rgba(0 , 0, 0, 0.05)"
      },
      letterSpacing: {
        tightest: '-.065em'
      },
      spacing: {
        "25" : "6.25rem",
        "30": "7.5rem",
        "50" : "12.5rem"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      fontFamily: {
        "Dana": "dana-normal",
        "DanaMedium": "dana-medium",
        "DanaBold": "dana-bold",
        "Morabba": "morabba-normal",
        "MorabbaMedium": "morabba-medium",
        "MorabbaBold": "morabba-bold",
        "Koodak": "koodak"
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        '.flex-center': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
      });
    },
    function ({ addVariant }: { addVariant: (name: string, selector: string) => void }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
};
export default config;
