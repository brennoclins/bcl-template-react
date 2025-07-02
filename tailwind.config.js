// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}' // 👈 Storybook também!
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
