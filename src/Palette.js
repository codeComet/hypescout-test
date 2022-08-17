export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#17181B" : "#fff",
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
  components: {
    MuiButton: {
      root: {
        fontFamily: "Sen, sans-serif",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "red",
        },
      },
    },
  },
});
