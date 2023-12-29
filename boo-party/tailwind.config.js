/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "halloween": "halloween",
      "inter": 'inter, sans-serif'
    },
    backgroundColor: {
      "black": "#040000",
      "halloween": "#FFBB43"
    },
    backgroundImage: theme => ({
      'custom-gradient': 'linear-gradient(119deg, #675AC8 -9.29%, #3D3766 61.97%, rgba(30, 30, 30, 0.88) 101.15%)',
    }),
    boxShadow: {
      "moon": "5px -7px 110.4px 0px #FFBB43"
    },
    colors: {
      "comum": "#ffffff",
      "halloween": "#FFBB43",
      "label": "#848897"
    },
    borderColor: {
      "input": "#848897"
    },
    screens: {
      'tablet': {
        'max': '900px'
      },
      'small-smartphone': {'max': '578px'}
    },
    fontSize: {
      'title-size': 'clamp(13px, 10vw, 3.5rem)',
      'sub-title-size': 'clamp(0.6rem, 2.5vw, 0.8rem)',
      'btn': 'clamp(0.8rem, 2.5vw, 1rem)'
    }
  },
  plugins: [],
}

