/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-orbitron)', 'sans-serif'],
        secondary: ['var(--font-exo-2)', 'sans-serif'],
        accent: ['var(--font-audiowide)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
        transformers: ['var(--font-transformers)', 'sans-serif'],
        electrolize: ['var(--font-electrolize)', 'sans-serif'],
        michroma: ['var(--font-michroma)', 'sans-serif'],
        bungee: ['var(--font-bungee)', 'sans-serif'],
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        // Keep existing for backward compatibility
        sans: ['var(--font-exo-2)', 'sans-serif'],
        exo: ['var(--font-exo-2)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
