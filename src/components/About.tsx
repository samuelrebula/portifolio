import { SectionLabel } from "./SectionLabel";
import { useTheme } from "../hooks/useTheme.tsx";

export function About() {
  const { dark } = useTheme();
  const heading = dark ? "text-white" : "text-[#111111]";
  const body = dark ? "text-[#AAAAAA]" : "text-[#444444]";
  const border = dark ? "border-[#333]" : "border-[#E8E8E6]";
  const statNum = dark ? "text-white" : "text-[#111111]";
  const statLabel = dark ? "text-[#666666]" : "text-[#888888]";

  return (
    <section
      id="about"
      className={`py-24 px-6 border-t ${
        dark ? "border-[#2A2A2A]" : "border-[#E2E2E0]"
      }`}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
        <div>
          <SectionLabel>Sobre Mim</SectionLabel>
          <h2
            className={`font-display text-4xl md:text-5xl leading-tight ${heading}`}
          >
            Código que
            <br />
            <span className="italic">resolve</span>
            <br />
            problemas reais.
          </h2>
        </div>
        <div className={`space-y-4 leading-relaxed text-[15px] ${body}`}>
          <p>
            Sou estudante de Engenharia de Software pela PUC Minas e
            desenvolvedor full-stack, com experiência profissional desde 2024 no
            desenvolvimento de aplicações B2B. Atualmente, trabalho na dti
            digital em um projeto internacional de e-commerce, desenvolvendo
            soluções para aplicações mobile utilizando principalmente React
            Native, TypeScript, .NET, Azure e Firebase.
          </p>
          <p>
            Tenho experiência com desenvolvimento cross-platform para Android e
            iOS, APIs REST, gerenciamento e sincronização de dados, CI/CD e
            arquitetura de software. Também trabalho com práticas como Clean
            Architecture, SOLID e desenvolvimento ágil, buscando construir
            soluções que sejam escaláveis, organizadas e fáceis de manter.
          </p>
          <p>
            Tenho especial interesse em arquitetura de software, automação e no
            uso de inteligência artificial para tornar o desenvolvimento mais
            eficiente. No meu dia a dia, exploro ferramentas como GitHub
            Copilot, Claude Code e MCP Servers para automatizar tarefas como
            revisão de código, geração de testes e análise de requisitos. Também
            desenvolvo projetos próprios para aprofundar meus conhecimentos e
            experimentar novas tecnologias.
          </p>
          <p>
            Além da experiência técnica, busco constantemente novos desafios que
            contribuam para meu crescimento como desenvolvedor e profissional de
            tecnologia.
          </p>
          <div
            className={`grid grid-cols-3 gap-6 pt-6 border-t mt-8 ${border}`}
          >
            {[
              { value: "2+", label: "Anos de experiência" },
              { value: "1", label: "Projeto profissional" },
              { value: "10+", label: "Tecnologias utilizadas" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className={`font-display text-3xl ${statNum}`}>
                  {stat.value}
                </p>
                <p className={`text-xs mt-1 leading-snug ${statLabel}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
