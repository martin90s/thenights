/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector','[data-color-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'theme': '#3B82F6', // Modern blue as primary theme color
        'theme-hover': '#2563EB', // Deeper blue for hover states
        'theme-active': '#1D4ED8', // Even deeper blue for active states
        'background': {
          'light': '#F8FAFC', // Subtle cool gray for light mode
          'dark': '#0F172A', // Deep navy for dark mode
        },
        'dark': "#1E293B", // Slate dark for text
        'accent': {
          'primary': '#38BDF8', // Sky blue for accents
          'secondary': '#818CF8', // Indigo for secondary accents
          'success': '#34D399', // Emerald for success states
          'warning': '#FBBF24', // Amber for warnings
          'error': '#EF4444', // Red for errors
        },
        'surface': {
          'light': '#FFFFFF',
          'dark': '#1E293B',
        },
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
