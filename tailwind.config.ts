import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        space: ['var(--font-space)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          purple: {
            900: "#1a0b2e", // Deep purple background
            800: "#2a1b4e", // Floating card background
            600: "#4a2b8e", // Accent purple
          },
          orange: {
            500: "#ff6b35", // Vibrant orange
            400: "#ff8c5a", // Lighter orange
          },
          gold: {
            400: "#ffd700", // Gold accents
          }
        },
        tech: {
          bg: "#020202", // Pitch black base
          panel: "#0a0a0c", // Dark bento panel
          border: "#1f1f2e", // Sleek border
          cyan: "#00f0ff", // Neon cyan
          magenta: "#ff0055", // Neon magenta
          lime: "#39ff14", // Cyber lime
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom, #1a0b2e, #2a1b4e)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon': '0 0 15px rgba(255, 107, 53, 0.5)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'levitate': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'levitate': 'levitate 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
