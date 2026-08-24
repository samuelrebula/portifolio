import { SectionLabel } from "./SectionLabel";
import { useTheme } from "../hooks/useTheme.tsx";
import { translations } from "../constants/translations";

export function About() {
  const { dark, language } = useTheme();
  const t = translations[language];
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
          <SectionLabel>{t.about.label}</SectionLabel>
          <h2
            className={`font-display text-4xl md:text-5xl leading-tight ${heading}`}
          >
            {t.about.title[0]}
            <br />
            <span className="italic">{t.about.title[1]}</span>
            <br />
            {t.about.title[2]}
          </h2>
        </div>
        <div className={`space-y-4 leading-relaxed text-[15px] ${body}`}>
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div
            className={`grid grid-cols-3 gap-6 pt-6 border-t mt-8 ${border}`}
          >
            {[
              {
                value: "2+",
                label: t.about.stats[0],
              },
              {
                value: "1",
                label: t.about.stats[1],
              },
              {
                value: "10+",
                label: t.about.stats[2],
              },
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
