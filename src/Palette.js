export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#17181B" : "#fff",
    },
    secondary: {
      main: mode === "dark" ? "#202124" : "#d2d2d2",
    },
    background: {
      default: mode === "dark" ? "#17181B" : "#fff",
      paper: mode === "dark" ? "#17181B" : "#fff",
    },

    text: {
      primary: mode === "dark" ? "#FFF" : "#17181B",
    },
  },
  typography: {
    fontFamily: "Sen, sans-serif",
    textTransform: "none",
    body1: {
      fontFamily: "Sen, sans-serif",
      textTransform: "none",
    },
  },
  // components: {
  //   MuiButton: {
  //     fontFamily: "Sen, sans-serif",
  //     textTransform: "none",
  //     "& hover": {
  //       backgroundColor: "red",
  //       color: "blue",
  //     },
  //   },
  // },
});
