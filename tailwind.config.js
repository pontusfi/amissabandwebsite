/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080808',
        surface: {
          DEFAULT: '#111111',
          2: '#181818',
          3: '#1f1f1f',
        },
        'site-border': '#252525',
        accent: {
          DEFAULT: '#c4c4c4',
          bright: '#f0f0f0',
          dim: '#888888',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.4em',
      },
    },
  },
  plugins: [],
}
