/** @type {import('tailwindcss').Config} */
module.exports = {

  mode: 'jit',
  content: ['./apps/site/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')]
}
