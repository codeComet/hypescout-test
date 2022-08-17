import React, { useState, useContext, useMemo } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./Palette";
import { ColorModeContext } from "./ColorContext";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

// Dark mode toggler

export default function DarkThemeWithCustomPalette() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const darkModeTheme = createTheme(getDesignTokens(mode));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={darkModeTheme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
