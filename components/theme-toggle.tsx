"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { Sun, Moon } from "react-feather";
import { Theme } from "@/providers/theme-provider";
import useTheme from "@/hooks/use-theme";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [isChecked, setIsChecked] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsChecked(theme === Theme.DARK);
  }, [theme]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTheme(event.target.checked ? Theme.DARK : Theme.LIGHT);
  };

  // if the theme has not yet been checked, hide the toggle
  // this will prevent a flash of the toggle in the wrong state
  if (isChecked === undefined) {
    return null;
  }

  return (
    <div>
      <label
        htmlFor="themeIsDark"
        title={isChecked ? "Switch to light mode" : "Switch to dark mode"}
        className="cursor-pointer"
      >
        <input
          type="checkbox"
          id="themeIsDark"
          checked={isChecked}
          onChange={handleChange}
          className="sr-only"
        />
        <span aria-hidden="true">{isChecked ? <Moon /> : <Sun />}</span>
      </label>
    </div>
  );
};
