module.exports = {
  mode: "jit",
  purge: [
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-black": '#272727',
        "theme-green-light": '#fbfefb',
      },
      height: {
        'screen-75': '90vh'
      },
      fontFamily: {
        'main': ['"Open Sans"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
