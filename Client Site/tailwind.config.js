/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    // We are directly defining 'screens' here to override the defaults.
    // Ensure you include all standard breakpoints (sm, md, lg, xl, 2xl)
    // if you want them to behave as expected, or just the ones you need.
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1280px', // Changed 'lg' from 1024px to 1280px
      'xl': '1536px',
      '2xl': '1920px',
    },
    plugins: [],
  }
}
