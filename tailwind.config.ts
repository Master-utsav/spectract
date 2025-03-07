import type { Config } from 'tailwindcss';

const config: Config  = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            salsa: ["var(--font-salsa)", "var(--font-maven-pro)", "serif"],
            assistant: ["var(--font-assistant)", "sans-serif"],
            maven: ["var(--font-maven-pro)", "sans-serif"],
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

export default config;