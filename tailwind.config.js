module.exports = {
   purge: {
    enabled: true,
    content: [
      './public/**/*.html',
    ]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      fontFamily: {
        primary: ['Lexend Deca', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
      },
      colors: {
        bodyColor: '#090b1a',
        card: '#1b1938',
        span: '#aa5cdb',
        overlay: '#1c1938',
      },
      backgroundImage: theme => ({
        mobile: "url('/images/image-header-mobile.jpg')",
        desktop: "url('/images/image-header-desktop.jpg')",
      }),
      zIndex: {
        '-50': '-50',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
