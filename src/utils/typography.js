import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Poppins",
      styles: ["700", "300"],
    },
  ],

  baseFontSize: "15px",
  scaleRatio: 2,
  baseLineHeight: 1.5,
  headerFontFamily: ["Poppins", "sans-serif"],
  bodyFontFamily: ["Poppins", "sans-serif"],
  headerWeight: 700,
  bodyWeight: 300,

  overrideStyles: ({ rhythm }, options, styles) => ({
    h1: {
      marginBottom: rhythm(4),
    },
  }),
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
export const rhythm = typography.rhythm
