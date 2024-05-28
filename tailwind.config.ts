import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': 'rgb(var(--bg-primary) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--bg-secondary) / <alpha-value>)',
        'bg-peach': 'rgb(var(--bg-peach) / <alpha-value>)',
        'bg-light-purple': 'rgb(var(--bg-light-purple) / <alpha-value>)',
        'bg-purple': 'rgb(var(--bg-purple) / <alpha-value>)',
        'dark-purple': 'rgb(var(--dark-purple) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        'text-accent': 'rgb(var(--text-accent) / <alpha-value>)',
        'card-border': 'rgb(var(--card-border) / <alpha-value>)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-visible': {
          "--scrollbar": "#7469b659",
          '&::-webkit-scrollbar-thumb': {
            'background': 'var(--scrollbar)',
          },
        },
        '.scrollbar-hidden': {
          "--scrollbar": "transparent",
          '&::-webkit-scrollbar-thumb': {
            'background': 'var(--scrollbar)',
          },
        },
        '.animate-scrollbar': {
          "transition": "--scrollbar .5s"
        }
      })
    })
  ],
}
export default config
