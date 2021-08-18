module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      0: "0px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
      8: "40px",
      "1em": "1em",
      "0.66em": "0.66em",
      "0.33em": "0.33em",
      "max-content": "max-content",
      unset: "unset",
    },
    colors: {
      transparent: "transparent",
      red: {
        DEFAULT: "#EC6580",
      },
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
        livestream: "#9C969C",
        light: "#C5C5C5",
        lighter: "#E5E7EB",
        lightest: "#F4F5F7",
      },
    },
    extend: {
      gridTemplateColumns: {
        large: "320px auto 250px",
      },
      gridTemplateRows: {
        large: "200px auto", //small height for the livestream
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
