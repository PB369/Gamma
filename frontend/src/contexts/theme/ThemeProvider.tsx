import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Theme } from "./types";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getLocalTheme = () => {return localStorage.getItem("theme")}

  const [theme, setTheme] = useState<Theme>(getLocalTheme() as Theme || 'dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  } ,[theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}