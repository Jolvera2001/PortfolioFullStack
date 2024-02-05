/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        pastelGreen: '#E2F5A0',
        greenText: '#3D622D',
        pastelBlue: "#a0e3f5",
        blueText: "#25474f",
        pastelRed: '#FAC9C2',
        redText: '#6A0510',
        redHover: '#4f020b',
        pastelPurple: '#F198D7',
        purpleText: '#463847',
        purpleButtonColor: "#5E254D",
        purpleHover: '#511840'
      }
    },
  },
  plugins: [],
}

