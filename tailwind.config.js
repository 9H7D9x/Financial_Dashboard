module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors : {
        blue: {
          700: "#146EB4",
          750: "#1174c2",
          800: "#2596be",
          900: "#bee0ec",

        },
        white: {
          50: "#FAFAFA",
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.8)",
          500: "#ffffff",
        },
        grey : {
          100: "#353C53",
          200: "#1A181E"
        },
        black: {
          100: "#F2F2F2",
          200: "#E6E6E6",
          150: "#D9D9D9",
          300: "#808080",
          400: "#4D4D4D",
          500: "#999999",
          600: "#1A181E"
        },
        grey: {
          500: "#17B31B"
        }
      },
      fontFamily : {
        'inter':["Inter", 'sans-serif'],
        'grotesque' : ["grotesque"]
      },
      boxShadow: {
        'custom': '0 2px 6px 0px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
