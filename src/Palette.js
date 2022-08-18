export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#000" : "#fff",
    },
    secondary: {
      main: mode === "dark" ? "#202124" : "#d2d2d2",
    },
    background: {
      default: mode === "dark" ? "#000" : "#fff",
      paper: mode === "dark" ? "#17181B" : "#F7F7F7",
      modal: mode === "dark" ? "#17181B" : "#F7F7F7",
      button: mode === "dark" ? "#000" : "#F7F7F7",
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
});
