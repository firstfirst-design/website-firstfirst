import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Poppins",
      styles: ["800", "300"],
    },
  ],

  baseFontSize: "15px",
  scaleRatio: 4,
  baseLineHeight: 1.5,
  headerFontFamily: ["Poppins", "sans-serif"],
  bodyFontFamily: ["Poppins", "sans-serif"],
  headerWeight: 800,
  bodyWeight: 300,

  overrideStyles: ({ rhythm }, options, styles) => ({
    h1: {
      marginBottom: rhythm(8),
    },
  }),
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
export const rhythm = typography.rhythm
