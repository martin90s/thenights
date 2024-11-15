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
        'theme': '#64748B', // Slate grey as primary theme color
        'theme-hover': '#475569', // Darker grey for hover
        'theme-active': '#334155', // Even darker for active states
        'background': {
          'light': '#FFFFFF', // Pure white for light mode
          'dark': '#18181B', // Zinc-900 for dark mode
        },
        'dark': "#27272A", // Zinc-800 for text
        'accent': {
          'primary': '#94A3B8', // Lighter grey for accents
          'secondary': '#CBD5E1', // Even lighter grey for secondary
          'success': '#22C55E', // Subtle green for success
          'warning': '#F59E0B', // Subtle amber for warnings
          'error': '#EF4444', // Subtle red for errors
        },
        'surface': {
          'light': '#F8FAFC', // Slightly off-white for cards
          'dark': '#27272A', // Zinc-800 for dark mode cards
        },
        'text': {
          'primary': '#334155', // Slate-700 for primary text
          'secondary': '#64748B', // Slate-500 for secondary text
          'light': '#94A3B8', // Slate-400 for lighter text
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
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
