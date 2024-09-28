"use client";

import useTheme from "@/hooks/use-theme";
import {Theme} from "@/providers/theme-provider";
import {ChangeEventHandler} from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTheme(event.target.checked ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <label htmlFor="theme">
      <input
        type="checkbox"
        id="theme"
        checked={theme === Theme.DARK}
        onChange={handleChange}
      />
      Dark mode
    </label>
  );
}