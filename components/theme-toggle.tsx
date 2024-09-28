"use client";

import useTheme from "@/hooks/use-theme";
import {Theme} from "@/providers/theme-provider";
import {ChangeEventHandler, useEffect, useState} from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [isChecked, setIsChecked] = useState<boolean|undefined>(undefined);

  useEffect(() => {
    setIsChecked(theme === Theme.DARK);
  }, [theme]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTheme(event.target.checked ? Theme.DARK : Theme.LIGHT);
  }

  // if the theme has not yet been checked, hide the toggle
  // this will prevent a flash of the toggle in the wrong state
  if (isChecked === undefined) {
    return null;
  }

  return (
    <label htmlFor="themeIsDark" className="cursor-pointer">
      <input
        type="checkbox"
        id="themeIsDark"
        checked={isChecked}
        onChange={handleChange}
      />
      Dark mode
    </label>
  );
}