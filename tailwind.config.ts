import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main" : "#161616",
        "secondary": "#1f1f1f",
        "accent": "#86c232",
        // "accent": "#3DB2FF",
        "text-light": "#fff",
        "orange": "#ffa500",
        "gray-light": "#9a9a9a"
        
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1920px",
        xs: "375px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
