// stitches.config.js
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
    bp2: "(min-width: 830px)",
    bp3: "(min-width: 1480px)",
  },
  utils: {
    size: (value) => ({ width: value, height: value }),
    circle: (value) => ({ width: value, height: value, borderRadius: value }),
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
  },
});

export const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&family=Ubuntu:wght@300;400;500;700&display=swap')",
  ],
  "*": { margin: 0, padding: 0, boxSizing: "border-box", fontFamily: "Ubuntu"},
});
