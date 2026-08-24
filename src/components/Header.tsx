import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants/content";
import { IconSun, IconMoon, IconMenu, IconXClose } from "../icons/index.tsx";
import { useTheme } from "../hooks/useTheme.tsx";
import { translations } from "../constants/translations";

export function Header() {
  const { dark, language, toggleDark, toggleLanguage } = useTheme();
  const t = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const borderCls = scrolled
    ? dark
      ? "bg-[#181818]/95 backdrop-blur-sm border-b border-[#333]"
      : "bg-[#F9F9F7]/95 backdrop-blur-sm border-b border-[#E2E2E0]"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${borderCls}`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`font-display text-xl tracking-tight ${
            dark ? "text-white" : "text-[#111111]"
          }`}
        >
          Samuel<span className="text-[#777777]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                dark
                  ? "text-[#AAAAAA] hover:text-white"
                  : "text-[#555555] hover:text-[#111111]"
              }`}
            >
              {t.nav[link.href.slice(1) as keyof typeof t.nav]}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            aria-label={t.languageLabel}
            className={`w-8 h-8 text-xs font-medium flex items-center justify-center rounded-md border transition-colors duration-200 ${
              dark
                ? "border-[#444] text-[#AAAAAA] hover:text-white hover:border-[#666]"
                : "border-[#E2E2E0] text-[#777] hover:text-[#111111] hover:border-[#BBBBB]"
            }`}
          >
            {t.languageButton}
          </button>
          <button
            onClick={toggleDark}
            aria-label={dark ? "Modo claro" : "Modo escuro"}
            className={`w-8 h-8 flex items-center justify-center rounded-md border transition-colors duration-200 ${
              dark
                ? "border-[#444] text-[#AAAAAA] hover:text-white hover:border-[#666]"
                : "border-[#E2E2E0] text-[#777] hover:text-[#111111] hover:border-[#BBBBB]"
            }`}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>
        </nav>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label={t.languageLabel}
            className={`w-8 h-8 text-xs font-medium flex items-center justify-center rounded-md border transition-colors ${
              dark
                ? "border-[#444] text-[#AAAAAA] hover:text-white hover:border-[#666]"
                : "border-[#E2E2E0] text-[#777] hover:text-[#111111] hover:border-[#BBBBB]"
            }`}
          >
            {t.languageButton}
          </button>
          <button
            onClick={toggleDark}
            aria-label={dark ? "Modo claro" : "Modo escuro"}
            className={`w-8 h-8 flex items-center justify-center rounded-md border transition-colors ${
              dark
                ? "border-[#444] text-[#AAAAAA]"
                : "border-[#E2E2E0] text-[#777]"
            }`}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>
          <button
            className={dark ? "text-white p-1" : "text-[#111111] p-1"}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <IconXClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden border-b px-6 pb-5 pt-2 ${
            dark
              ? "bg-[#181818] border-[#333]"
              : "bg-[#F9F9F7] border-[#E2E2E0]"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm border-b last:border-0 ${
                dark
                  ? "text-[#CCCCCC] border-[#2A2A2A]"
                  : "text-[#444444] border-[#F0F0EE]"
              }`}
            >
              {t.nav[link.href.slice(1) as keyof typeof t.nav]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
