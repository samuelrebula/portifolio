import { PROJECTS } from "../constants/content";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";
import { IconExternalLink } from "../icons/index.tsx";
import { useTheme } from "../hooks/useTheme.tsx";

export function Projects() {
  const { dark } = useTheme();
  const heading = dark ? "text-white" : "text-[#111111]";
  const link = dark
    ? "text-[#AAAAAA] hover:text-white"
    : "text-[#555555] hover:text-[#111111]";

  return (
    <section
      id="projects"
      className={`py-24 px-6 border-t ${
        dark ? "border-[#2A2A2A]" : "border-[#E2E2E0]"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionLabel>Projetos</SectionLabel>
            <h2
              className={`font-display text-4xl md:text-5xl leading-tight ${heading}`}
            >
              Trabalhos
              <br />
              <span className="italic">selecionados</span>
            </h2>
          </div>
          <a
            href="https://github.com/samuelrebula"
            className={`hidden md:inline-flex items-center gap-1.5 text-sm transition-colors ${link}`}
          >
            Ver todos <IconExternalLink size={13} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
