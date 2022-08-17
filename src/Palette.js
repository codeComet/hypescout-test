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

    button: {
      text: mode === "dark" ? "#FFF" : "#17181B",
    },
  },
});
