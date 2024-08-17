import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import type { PluginAPI } from 'tailwindcss/types/config';

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./style/**/*.css",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "3rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        zain: ['Zain', ...fontFamily.sans]
      },
      fontSize: {
        base: '1.125rem'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "zoom-in": 'zoomin 0.8s ease-in-out forwards'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        zoomin: {
          '0%': { transform: 'translateY(20px) scale(0.90)'},
          '100%': { transform: 'translateY(0) scale(1.00)'}
        },
      },
      minWidth: {
        '100': '100px',
        '150': '150px',
        '175': '175px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
      },
      minHeight: {
        '100': '100px',
        '150': '150px',
        '175': '175px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
      },
      boxShadow: {
        normal:"var(--shadow-normal)",
        darker: "box-shadow: 5px 5px 15px rgba(0, 0, 0, .25)"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.gredientMain': {
          background: 'var(--gredientMain)',
        },
        '.gredientGray': {
          background: 'var(--gredientGray)'
        },
        '.gredientBlue': {
          background: 'var(--gredientBlue)'
        }
      });
    },
    require('@tailwindcss/typography')
  ],
} satisfies Config

export default config