import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useTheme } from "../hooks/useTheme.tsx";

export function Layout({ children }: { children: ReactNode }) {
  const { dark } = useTheme();

  return (
    <div
      className={
        dark ? "bg-[#181818] min-h-screen" : "bg-[#F9F9F7] min-h-screen"
      }
    >
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
