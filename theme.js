import { themes } from "mdx-deck";

const montserrat = "'Montserrat', system-ui,  sans-serif";
const teal = "#007A75";
const slate = "#1B0458";

export default {
  ...themes.prism,
  googleFont:
    "https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap",
  fonts: {
    body: montserrat,
    heading: montserrat,
    monospace: "Menlo, monospace",
  },
  fontSizes: [8, 12, 16, 20, 24, 28, 32],
  colors: {
    dark: slate,
    bright: teal,
    headerFooterBackground: "white",
    text: slate,
    background: "white",
    heading: slate,
  },
  styles: {
    img: {
      maxWidth: "70vw",
      maxHeight: "40vh",
      margin: "0 auto",
      marginBottom: "2rem",
    },
    h1: {
      textAlign: "center",
    },
    h2: {
      textAlign: "center",
    },
    p: {
      textAlign: "center",
    },
    li: {
      marginTop: "1em",
    },
    button: {
      fontFamily: montserrat,
      fontSize: "1em",
    },
    a: {
      color: slate,
      textDecoration: "none",
      backgroundImage: `linear-gradient(${teal}, ${teal})`,
      backgroundSize: "100% 0.25em",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left 0 bottom 0%",
      transition: "100ms background-size linear",
      ":hover, :focus": {
        color: "white",
        backgroundSize: "100% 100%",
      },
    },
    code: {
      fontSize: "80%",
    },
  },
};
