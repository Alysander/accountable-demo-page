module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
      8: "40px",
    },
    colors: {
      white: {
        DEFAULT: "#FFF",
      },
      black: {
        DEFAULT: "#000",
      },
      orange: {
        DEFAULT: "#F9690E",
      },
      gray: {
        dark: "#595959",
        DEFAULT: "#65676B",
        light: "#C5C5C5",
        lightest: "#E5E5E5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
