/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        pastelGreen: '#E2F5A0',
        greenText: '#3D622D',
        pastelRed: '#FAC9C2',
        redText: '#6A0510',
        pastelPurple: '#F198D7',
        purpleText: '#463847',
        purpleButtonColor: "#5E254D"
      }
    },
  },
  plugins: [],
}

