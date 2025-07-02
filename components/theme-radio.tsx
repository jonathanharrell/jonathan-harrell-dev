"use client";

import { Moon, Sun } from "react-feather";
import { Theme } from "@/providers/theme-provider";
import useTheme from "@/hooks/use-theme";

export const ThemeRadio = () => {
  const { theme, setTheme } = useTheme();

  return (
    <fieldset>
      <legend className="sr-only">Select theme</legend>
      <div className="flex items-center gap-4">
        <div className="group">
          <input
            type="radio"
            id="light"
            name="theme"
            value="light"
            checked={theme === Theme.LIGHT}
            onChange={() => setTheme(Theme.LIGHT)}
            className="sr-only"
          />
          <label
            htmlFor="light"
            className="block p-4 rounded border border-neutral-200 dark:border-neutral-700 bg-transparent group-has-[:checked]:bg-neutral-200 dark:group-has-[:checked]:bg-neutral-700 text-neutral-400 dark:text-neutral-600 group-has-[:checked]:text-neutral-800 dark:group-has-[:checked]:text-neutral-100 cursor-pointer"
          >
            <span aria-hidden="true">
              <Sun />
            </span>
            <span className="sr-only">Light</span>
          </label>
        </div>
        <div className="group">
          <input
            type="radio"
            id="dark"
            name="theme"
            value="dark"
            checked={theme === Theme.DARK}
            onChange={() => setTheme(Theme.DARK)}
            className="sr-only"
          />
          <label
            htmlFor="dark"
            className="block p-4 rounded border border-neutral-200 dark:border-neutral-700 bg-transparent group-has-[:checked]:bg-neutral-200 dark:group-has-[:checked]:bg-neutral-700 text-neutral-400 dark:text-neutral-600 group-has-[:checked]:text-neutral-800 dark:group-has-[:checked]:text-neutral-100 cursor-pointer"
          >
            <span aria-hidden="true">
              <Moon />
            </span>
            <span className="sr-only">Dark</span>
          </label>
        </div>
      </div>
    </fieldset>
  );
};
