"use client";

import React, {createContext, ReactNode, useEffect, useState} from "react";
import {useLocalStorage} from "usehooks-ts";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const ThemeContext = createContext({
  theme: Theme.LIGHT,
  setTheme: (_: Theme) => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // initialize with the possible value from local storage, rather than the default value specified here
  // this is important to avoid a flash of the default theme when the page loads
  const [savedTheme, setSavedTheme] = useLocalStorage<Theme>("theme", Theme.LIGHT, {
    initializeWithValue: true,
  });

  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    const setThemeOnDocumentElement = () => {
      if (theme === Theme.LIGHT) {
        window.document.documentElement.classList.remove("dark");
      } else {
        window.document.documentElement.classList.add("dark");
      }
    }

    // store the new theme in local storage
    // this change can happen either from the user's system theme changing
    // OR from the user manually toggling the theme on the site
    setSavedTheme(theme);

    // we also need to add/remove the appropriate class to the document element
    // if supported, we will wrap this in a startViewTransition to fade smoothly between the themes
    if (typeof document.startViewTransition !== "undefined") {
      document.startViewTransition(() => {
        setThemeOnDocumentElement();
      });
    } else {
      setThemeOnDocumentElement();
    }
  }, [theme]);

  const handleDarkModePreferenceChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  }

  useEffect(() => {
    const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    userPrefersDarkMode.addEventListener("change", handleDarkModePreferenceChange);

    return () => {
      userPrefersDarkMode.removeEventListener("change", handleDarkModePreferenceChange);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}