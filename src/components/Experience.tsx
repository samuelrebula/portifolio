import { EXPERIENCES } from "../constants/content";
import { SectionLabel } from "./SectionLabel";
import { useTheme } from "../hooks/useTheme.tsx";
import { translations } from "../constants/translations";

export function Experience() {
  const { dark, language } = useTheme();
  const t = translations[language];
  const heading = dark ? "text-white" : "text-[#111111]";
  const role = dark ? "text-[#EEEEEE]" : "text-[#111111]";
  const company = dark ? "text-[#666666]" : "text-[#888888]";
  const desc = dark ? "text-[#AAAAAA]" : "text-[#555555]";
  const techBg = dark
    ? "bg-[#2A2A2A] text-[#AAAAAA]"
    : "bg-[#F9F9F7] text-[#555555]";
  const line = dark ? "bg-[#333]" : "bg-[#E2E2E0]";
  const dot = dark
    ? "border-[#777] bg-[#181818]"
    : "border-[#777] bg-[#F9F9F7]";
  const period = dark ? "text-[#666666]" : "text-[#888888]";

  return (
    <section
      id="experience"
      className={`py-24 px-6 border-t ${
        dark ? "border-[#2A2A2A] bg-[#1A1A1A]" : "border-[#E2E2E0] bg-[#FFFFFF]"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t.experience.label}</SectionLabel>
        <h2
          className={`font-display text-4xl md:text-5xl mb-14 leading-tight ${heading}`}
        >
          {t.experience.title[0]}
          <br />
          <span className="italic">{t.experience.title[1]}</span>
        </h2>

        {/* Timeline */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="flex gap-0 items-start">
              {/* Period column */}
              <div className="hidden md:block w-[180px] flex-shrink-0 pt-0.5 pr-6 text-right">
                <span className={`text-xs font-medium ${period}`}>
                  {exp.period}
                </span>
              </div>

              {/* Timeline line and dot */}
              <div className="hidden md:flex flex-col items-center flex-shrink-0 w-[24px]">
                <div
                  className={`w-3 h-3 rounded-full border-2 flex-shrink-0 mt-0.5 z-10 ${dot}`}
                />
                {i < EXPERIENCES.length - 1 && (
                  <div className={`w-px flex-1 mt-1 min-h-[80px] ${line}`} />
                )}
              </div>

              {/* Content column */}
              <div className="flex-1 pl-0 md:pl-6">
                <span
                  className={`md:hidden block text-xs font-medium mb-2 ${period}`}
                >
                  {exp.period}
                </span>

                <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                  <h3 className={`text-sm font-semibold ${role}`}>
                    {exp.role}
                  </h3>
                  <span className={`text-xs ${company}`}>{exp.company}</span>
                </div>
                <p className={`text-sm leading-relaxed mb-4 ${desc}`}>
                  {language === "pt" ? exp.description : exp.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.techs.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
