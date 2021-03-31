import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Poppins",
      styles: ["800", "300"],
    },
  ],

  baseFontSize: "18px",
  scaleRatio: 2,
  baseLineHeight: 1.45,
  headerFontFamily: ["Poppins", "sans-serif"],
  bodyFontFamily: ["Poppins", "sans-serif"],
  headerWeight: 800,
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
export const rhythm = typography.rhythm
