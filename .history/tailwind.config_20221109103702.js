/** @type {import('tailwindcss').Config} */
export const content = [
  './node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    fontFamily: {
      labelle: ['LaBelleAurore', 'cursive'],
    },
  },
};
export const plugins = [require('flowbite/plugin')];
