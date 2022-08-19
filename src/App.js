import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./Palette";
import { ColorModeContext } from "./ColorContext";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

// Dark mode toggler

export default function DarkThemeWithCustomPalette() {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const darkModeTheme = createTheme(getDesignTokens(mode), {});

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={darkModeTheme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
