import { IconLinkedIn, IconGithub, IconMail } from "../icons/index.tsx";
import { useTheme } from "../hooks/useTheme.tsx";

export function Hero() {
  const { dark } = useTheme();
  const muted = dark ? "text-[#888888]" : "text-[#888888]";
  const sub = dark ? "text-[#AAAAAA]" : "text-[#555555]";
  const heading = dark ? "text-white" : "text-[#111111]";

  return (
    <section className="pt-36 pb-28 px-6 max-w-5xl mx-auto">
      <div
        className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-10 ${
          dark ? "border-[#444] bg-[#252525]" : "border-[#D8D8D6] bg-[#F4F4F2]"
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
          Software Developer
        </span>
      </div>

      <h1
        className={`font-display text-5xl md:text-7xl leading-[1.08] tracking-tight mb-5 ${heading}`}
      >
        Olá, sou
        <br />
        <span className="italic">Samuel Rebula</span>
      </h1>

      <p
        className={`text-lg md:text-xl font-light mb-5 tracking-wide ${muted}`}
      >
        Full-Stack | Mobile
      </p>

      <p className={`text-base max-w-xl leading-relaxed mb-10 ${sub}`}>
        Desenvolvimento full-stack de aplicações robustas e escaláveis com foco
        em arquitetura limpa, boas práticas de engenharia e soluções inovadoras.
        Experiência em React, React Native, .NET, Azure e CI/CD. Gosto de
        resolver problemas complexos, explorar novas tecnologias e utilizar IA,
        agentes e automação para tornar o desenvolvimento mais eficiente.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="https://www.linkedin.com/in/samuel-rebula/"
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
          <IconMail size={16} /> Contato
        </a>
      </div>
    </section>
  );
}
