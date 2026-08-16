import { useState } from "react";
import type { Project } from "../types/index";
import { IconGithub, IconExternalLink } from "../icons/index.tsx";
import { useTheme } from "../hooks/useTheme.tsx";

export function ProjectCard({ project }: { project: Project }) {
  const { dark } = useTheme();
  const [hovered, setHovered] = useState(false);
  const cardBg = dark
    ? "bg-[#222222] border-[#333]"
    : "bg-white border-[#E2E2E0]";
  const name = dark ? "text-[#EEEEEE]" : "text-[#111111]";
  const per = dark ? "text-[#666666]" : "text-[#888888]";
  const desc = dark ? "text-[#AAAAAA]" : "text-[#555555]";
  const techBg = dark
    ? "bg-[#2A2A2A] text-[#AAAAAA]"
    : "bg-[#F4F4F2] text-[#555555]";
  const ghBtn = dark
    ? "border-[#444] text-[#AAAAAA] hover:border-[#666]"
    : "border-[#E2E2E0] text-[#777] hover:border-[#999]";

  return (
    <div
      className={`group border rounded-md overflow-hidden transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] ${cardBg}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 overflow-hidden bg-[#E8E8E6]">
        <img
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className={`font-semibold text-sm leading-snug ${name}`}>
            {project.name}
          </h3>
          <a
            href={project.github}
            className={`flex-shrink-0 flex items-center gap-1 text-xs border rounded px-2 py-1 transition-colors ${ghBtn}`}
            aria-label="GitHub"
          >
            <IconGithub size={12} /> GitHub <IconExternalLink size={11} />
          </a>
        </div>
        <p className={`text-xs mb-3 ${per}`}>{project.period}</p>
        <p className={`text-sm leading-relaxed mb-4 ${desc}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2 py-0.5 rounded ${techBg}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
