import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import type { PluginAPI } from 'tailwindcss/types/config';

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
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
          '0%': { transform: 'translateY(20px) scale(0.95)' },
          '100%': { transform: 'translateY(0) scale(1.05)' },
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.gredientMain': {
          background: 'linear-gradient(120deg, rgba(58,105,137,1) 0%, rgba(9,66,87,1) 100%)',
        },
        '.gredientGray': {
          background: 'linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(242,242,242,1) 54%, rgba(233,233,233,1) 76%, rgba(230,230,230,1) 100%)'
        }
      });
    },
  ],
} satisfies Config

export default config