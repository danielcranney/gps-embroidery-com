const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      transparent: "transparent",
      black: "#0F0F0F",
      white: "#fff",
      brand: "#372b26",
      // Build your palette here
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
    extend: {
      backgroundImage: (theme) => ({
        "header-img": "url('/short_header.jpg')",
        // Brexit BGs
        stonehenge: "url('/brexit/stonehenge.jpg')",
        alexandraPark: "url('/brexit/alexandra-park.jpg')",
        blaenavon: "url('/brexit/blaenavon.jpg')",
        breanHead: "url('/brexit/brean-head.jpg')",
        britishCamp: "url('/brexit/british-camp.jpg')",
        grasmere: "url('/brexit/grasmere.jpg')",
        langdale: "url('/brexit/langdale.jpg')",
        lowerSlaughter: "url('/brexit/lower-slaughter.jpg')",
        plymouthHoe: "url('/brexit/plymouth-hoe.jpg')",
        whiteCliffsOfDover: "url('/brexit/white-cliffs-of-dover.jpg')",
        // People Who Mother BGs
        ashtonCourt: "url('/people-who-mother/ashton-court.jpg')",
        camPeakView: "url('/people-who-mother/cam-peak-view.jpg')",
        groznezPoint: "url('/people-who-mother/groznez-point.jpg')",
        knowleWest: "url('/people-who-mother/knowle-west.jpg')",
        laRocque: "url('/people-who-mother/la-rocque.jpg')",
        londonSuburbs: "url('/people-who-mother/london-suburbs.jpg')",
        uphillBeach: "url('/people-who-mother/uphill-beach.jpg')",
        victoriaPark: "url('/people-who-mother/victoria-park.jpg')",
        whaleWharf: "url('/people-who-mother/whale-wharf.jpg')",
        // Acts of Invisible Repair BGs
        northernhay: "url('/acts-of-invisible-repair/northernhay.jpg')",
        riversideValleyPark:
          "url('/acts-of-invisible-repair/river-valley.jpg')",
        stThomas: "url('/acts-of-invisible-repair/st-thomas-2.jpg')",
        higherCemetery: "url('/acts-of-invisible-repair/higher-cemetery.jpg')",
      }),
      width: {
        "32pc": "32%",
        "48pc": "48%",
        "49pc": "49%",
      },
      fontFamily: {
        display: ["usual", "sans-serif"],
        body: ["usual", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive", "group-hover", "group-focus"],
    },
  },
  plugins: [],
};
