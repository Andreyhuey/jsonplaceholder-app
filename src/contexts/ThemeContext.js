// ThemeContext.js

import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = {
    theme,
    handleThemeSwitch,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
