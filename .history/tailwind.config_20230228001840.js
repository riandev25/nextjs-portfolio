/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        labelle: ['LaBelleAurore', 'cursive'],
      },
      colors: {
        neon: '#b2fcfb',
      },
      scale: {
        78: '0.78',
      },
      gridTemplateColumns: {
        36: 'repeat(36, minmax(0, 1fr))',
      },
      backgroundImage: {
        bg_gear_image: `url('/gearwheel.png')`,
        bg_chip_image: `url('/chip-700.png')`,
        bg_qr_image: `url('/qr-code.png')`,
        bg_gear_code: `url('/gear-code.png')`,
        bg_binary_image: `url('/binary.png')`,
        bg_weather_image: `url('/weather-app.png')`,
      },
      keyframes: {
        neon_text: {
          '0%, 100%': { color: 'white' },
          '50%': { color: '#b2fcfb' },
        },
        scroll_page_header: {
          '0%': { transform: 'translateY(3rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scroll_left: {
          '0%': { transform: 'translateX(-4rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scroll_right: {
          '0%': { transform: 'translateX(4rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scroll_bottom: {
          '0%': { transform: 'translateY(4rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scroll_top: {
          '0%': { transform: 'translateY(-2rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        neon_text: 'neon_text 2s ease-in-out infinite',
        scroll_page_header: 'scroll_page_header 1s ease-in-out',
        scroll_left: 'scroll_left 1s ease-in-out',
        scroll_right: 'scroll_right 1s ease-in-out',
        scroll_bottom: 'scroll_bottom 1s ease-in-out',
        scroll_top: 'scroll_top 0.7s ease-in-out',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme('translate'), supportsNegativeValues: true }
      );
    }),
  ],
};
