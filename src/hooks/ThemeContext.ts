import { createContext } from "react";
import type { Language } from "../constants/translations";

export interface ThemeContextType {
  dark: boolean;
  toggleDark: () => void;
  language: Language;
  toggleLanguage: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
