/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: 'var(--sr-navy)',
          blue: 'var(--sr-blue)',
          green: 'var(--sr-green)',
          text: 'var(--sr-text)',
          heading: 'var(--sr-heading)',
          muted: 'var(--sr-text-muted)',
          surface: 'var(--sr-surface)'
        }
      },
      boxShadow: {
        panel: 'var(--sr-shadow)'
      },
      fontFamily: {
        sans: ['Manrope', '"Segoe UI"', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};
