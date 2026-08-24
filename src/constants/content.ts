export const NAV_LINKS = [
  { label: "Sobre Mim", href: "#about" },
  { label: "Experiências", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export const EXPERIENCES = [
  {
    period: "Feb 2026 – Presente",
    company: "dti digital",
    role: "Software Developer",
    description:
      "Desenvolvimento e evolução de features full-stack para a aplicação mobile B2B da ADI Global, atuando com React Native, TypeScript e .NET. Trabalho na implementação de novas funcionalidades, melhorias de performance, experiência do usuário e segurança, além de contribuir para decisões técnicas e evolução da arquitetura da aplicação.\n\nAtuação com desenvolvimento para Android e iOS, gerenciamento e sincronização de dados, integração com APIs e automação de processos de desenvolvimento. Também colaboro com equipes internacionais em inglês e participo de diferentes etapas do ciclo de desenvolvimento, desde o refinamento até implantação e suporte pós-release.",
    techs: [
      "React Native",
      "TypeScript",
      ".NET",
      "C#",
      "Azure",
      "Firebase",
      "Redux Toolkit",
      "TanStack Query",
      "Kotlin",
      "Azure DevOps",
    ],
  },
  {
    period: "Mar 2024 – Feb 2026",
    company: "dti digital",
    role: "Software Developer Intern",
    description:
      "Atuação no desenvolvimento da aplicação mobile B2B da ADI Global, contribuindo para a implementação de novas funcionalidades, correção de bugs e melhorias de performance e experiência do usuário. Desenvolvimento utilizando React Native, TypeScript e .NET, com participação em diferentes etapas do ciclo de desenvolvimento.\n\nDurante o período, também desenvolvi conhecimentos em desenvolvimento mobile para Android e iOS, Git e práticas de engenharia de software, evoluindo gradualmente minha autonomia técnica e participação no projeto.",
    techs: ["React Native", "TypeScript", ".NET", "C#", "Azure", "Git"],
  },
];

export const PROJECTS = [
  {
    image: "/images/ref/adi.png",
    name: "ADI Global Mobile App",
    period: "Mar 2024 – Presente",
    description:
      "Aplicação mobile B2B desenvolvida para a ADI Global, com funcionalidades voltadas à operação e à experiência dos usuários. Atuação no desenvolvimento full-stack, integração com APIs, sincronização de dados, performance e evolução contínua do produto para Android e iOS.",
    techs: ["React Native", "TypeScript", ".NET", "C#", "Azure"],
    github: "https://github.com/samuelrebula",
    linkType: "none",
    availability:
      "Disponível para download na App Store e Play Store para o mercado dos Estados Unidos (US).",
  },
  {
    video: "/images/ref/daily.mp4",
    name: "Daily",
    period: "2026",
    description:
      "Aplicação web para acompanhamento de hábitos e metas pessoais. O usuário define um objetivo em dias e registra sua evolução diariamente, enquanto o sistema salva o progresso e evita registros duplicados no mesmo dia.",
    techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS 4"],
    github: "https://daily-self.vercel.app/",
    linkType: "published",
  },
  {
    video: "/images/ref/esp.mp4",
    name: "ESP Guitars",
    period: "2025",
    description:
      "Site desenvolvido como estudo de interface e homenagem ao guitarrista Alexi Laiho. A aplicação apresenta modelos de guitarras, informações sobre o artista e uma navegação inspirada na identidade visual da ESP Guitars.",
    techs: ["React", "JavaScript", "CSS", "Vercel"],
    github: "https://espguitars.vercel.app/",
    linkType: "published",
  },
  {
    video: "/images/ref/jam.mp4",
    name: "JAM",
    period: "2025",
    description:
      "Sistema de gestão para estúdios musicais que centraliza o agendamento de sessões, o controle de equipamentos e o gerenciamento financeiro. A plataforma ajuda a organizar reservas, pagamentos e recursos, melhorando a comunicação entre estúdios, músicos e produtores.",
    techs: ["Java", "Spring Boot", "React", "Vite", "PostgreSQL"],
    github:
      "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-2-ti2-1381100-JAM",
    linkType: "none",
  },
];
