import {useContext} from "react";
import {ThemeContext} from "@/providers/theme-provider";

export default function useTheme() {
  return useContext(ThemeContext);
}