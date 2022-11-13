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
        bg_binary_image: `url('/binary.png')`,
      },
      keyframes: {
        neon_text: {
          '0%, 100%': { color: 'white' },
          '50%': { color: '#b2fcfb' },
        },
        neon_bg: {
          '0%, 100%': { color: 'white' },
          '50%': { color: '#b2fcfb' },
        },
      },
      animation: {
        neon_text: 'neon_text 2s ease-in-out infinite',
        neon_bg: 'neon_bg 2s ease-in-out infinite',
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
