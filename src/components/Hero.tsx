import { IconLinkedIn, IconGithub, IconMail } from "../icons/index.tsx";
import { useTheme } from "../hooks/useTheme.tsx";
import { translations } from "../constants/translations";

export function Hero() {
  const { dark, language } = useTheme();
  const t = translations[language];
  const muted = dark ? "text-[#888888]" : "text-[#888888]";
  const sub = dark ? "text-[#AAAAAA]" : "text-[#555555]";
  const heading = dark ? "text-white" : "text-[#111111]";

  return (
    <section className="pt-36 pb-28 px-6 max-w-5xl mx-auto grid md:grid-cols-[minmax(0,1fr)_280px] gap-12 md:gap-20 items-center">
      <div>
        <div
          className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-10 ${
            dark
              ? "border-[#444] bg-[#252525]"
              : "border-[#D8D8D6] bg-[#F4F4F2]"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              dark ? "bg-[#AAAAAA]" : "bg-[#666666]"
            }`}
          />
          <span
            className={`text-xs font-medium tracking-wide uppercase ${
              dark ? "text-[#AAAAAA]" : "text-[#555555]"
            }`}
          >
            &lt;/&gt;
          </span>
        </div>

        <h1
          className={`font-display text-5xl md:text-7xl leading-[1.08] tracking-tight mb-5 ${heading}`}
        >
          {t.hero.greeting}
          <br />
          <span className="italic">Samuel Rebula</span>
        </h1>

        <p
          className={`text-lg md:text-xl font-light mb-5 tracking-wide ${muted}`}
        >
          {t.hero.role}
        </p>

        <p className={`text-base max-w-xl leading-relaxed mb-10 ${sub}`}>
          {t.hero.description}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://www.linkedin.com/in/samuel-rebula/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-colors ${
              dark
                ? "bg-white text-[#111] hover:bg-[#E8E8E6]"
                : "bg-[#111111] text-white hover:bg-[#222222]"
            }`}
          >
            <IconLinkedIn size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/samuelrebula"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 border text-sm font-medium rounded-md transition-colors ${
              dark
                ? "border-[#444] text-[#CCCCCC] hover:border-[#666] hover:bg-[#252525]"
                : "border-[#D0D0CE] text-[#111111] hover:border-[#999] hover:bg-[#F0F0EE]"
            }`}
          >
            <IconGithub size={16} /> GitHub
          </a>
          <a
            href="mailto:rebuuula@gmail.com"
            className={`inline-flex items-center gap-2 px-5 py-2.5 border text-sm font-medium rounded-md transition-colors ${
              dark
                ? "border-[#555] text-[#AAAAAA] hover:bg-[#252525]"
                : "border-[#C8C8C6] text-[#555555] hover:bg-[#F0F0EE]"
            }`}
          >
            <IconMail size={16} /> {t.hero.contact}
          </a>
        </div>
      </div>
      <div className="w-full max-w-[280px] md:max-w-none mx-auto">
        <img
          src="/images/pfp.png"
          alt="Samuel Rebula"
          className={`aspect-[4/5] w-full object-cover object-center rounded-lg border shadow-[0_4px_12px_rgba(0,0,0,0.12)] ${
            dark ? "border-[#333]" : "border-[#E2E2E0]"
          }`}
        />
      </div>
    </section>
  );
}
