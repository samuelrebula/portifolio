import { useTheme } from "../hooks/useTheme.tsx";

export function SectionLabel({ children }: { children: string }) {
  const { dark } = useTheme();

  return (
    <p
      className={`text-xs font-semibold tracking-[0.15em] uppercase mb-4 ${
        dark ? "text-[#666666]" : "text-[#888888]"
      }`}
    >
      {children}
    </p>
  );
}
