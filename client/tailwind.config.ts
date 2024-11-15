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
        'theme': '#2c3e50', // Dark blue-grey for primary elements
        'theme-hover': '#34495e', // Slightly lighter blue-grey for hover
        'theme-active': '#2c3e50', // Same as theme for consistency
        'background': {
          'light': '#faf8f1', // Warm cream background
          'dark': '#2c3e50', // Dark blue-grey for dark mode
        },
        'dark': "#2c3e50", // Main text color
        'accent': {
          'primary': '#34495e', // Slightly lighter blue-grey
          'secondary': '#7f8c8d', // Muted grey for secondary elements
          'success': '#27ae60', // Subdued green
          'warning': '#f39c12', // Warm orange
          'error': '#c0392b', // Deep red
        },
        'surface': {
          'light': '#fff', // Pure white for cards
          'dark': '#34495e', // Lighter blue-grey for dark mode
        },
        'text': {
          'primary': '#2c3e50', // Dark blue-grey for primary text
          'secondary': '#34495e', // Slightly lighter for secondary text
          'light': '#7f8c8d', // Grey for lighter text
          'link': '#2980b9', // Blue for links
        }
      },
      fontFamily: {
        'sans': ['PT Serif', 'Georgia', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['PT Serif', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: '#2c3e50',
            a: {
              color: '#2980b9',
              '&:hover': {
                color: '#3498db',
              },
            },
          },
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
