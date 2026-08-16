import { IconLinkedIn, IconGithub, IconMail } from "../icons/index.tsx";
import { useTheme } from "../hooks/useTheme.tsx";

export function Footer() {
  const { dark } = useTheme();

  return (
    <footer
      className={`border-t py-10 px-6 ${
        dark ? "border-[#2A2A2A] bg-[#181818]" : "border-[#E2E2E0] bg-[#F9F9F7]"
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="#"
          className={`font-display text-lg ${
            dark ? "text-white" : "text-[#111111]"
          }`}
        >
          Samuel<span className="text-[#777777]">.</span>
        </a>
        <div className="flex items-center gap-5">
          {[
            {
              icon: <IconLinkedIn size={16} />,
              href: "https://linkedin.com/in/samuel-rebula",
              label: "LinkedIn",
            },
            {
              icon: <IconGithub size={16} />,
              href: "https://github.com/samuelrebula",
              label: "GitHub",
            },
            {
              icon: <IconMail size={16} />,
              href: "mailto:rebuuula@gmail.com",
              label: "Email",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className={`transition-colors ${
                dark
                  ? "text-[#666] hover:text-white"
                  : "text-[#888888] hover:text-[#111111]"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className={`text-xs ${dark ? "text-[#555]" : "text-[#AAAAAA]"}`}>
          © {new Date().getFullYear()} Samuel Rebula. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
