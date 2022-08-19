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
      paper: mode === "dark" ? "#17181B" : "#F7F7F8",
      modal: mode === "dark" ? "#17181B" : "#F7F7F8",
      button: mode === "dark" ? "#000" : "#F7F7F8",
    },

    text: {
      primary: mode === "dark" ? "#FFF" : "#17181B",
      secondary: mode === "dark" ? "#96B3CD" : "#564FB1",
      paragraph: mode === "dark" ? "#637381" : "#000",
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
