import { type ReactNode } from "react";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Language } from "../constants/translations";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState<Language>("pt");

  const toggleDark = () => setDark((v) => !v);
  const toggleLanguage = () =>
    setLanguage((value) => (value === "pt" ? "en" : "pt"));

  return (
    <ThemeContext.Provider
      value={{ dark, toggleDark, language, toggleLanguage }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
