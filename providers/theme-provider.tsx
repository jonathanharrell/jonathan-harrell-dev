"use client";

import React, {createContext, ReactNode, useEffect, useState} from "react";

export enum Theme {
  LIGHT,
  DARK,
}

export const ThemeContext = createContext({
  theme: Theme.LIGHT,
  setTheme: (_: Theme) => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(Theme.LIGHT);

  useEffect(() => {
    document.startViewTransition(() => {
      if (theme === Theme.LIGHT) {
        window.document.documentElement.classList.remove("dark");
      } else {
        window.document.documentElement.classList.add("dark");
      }
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}