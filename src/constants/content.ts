export const NAV_LINKS = [
  { label: "About Me", labelPt: "Sobre Mim", href: "#about" },
  { label: "Experience", labelPt: "Experiências", href: "#experience" },
  { label: "Projects", labelPt: "Projetos", href: "#projects" },
  { label: "Contact", labelPt: "Contato", href: "#contact" },
];

export const EXPERIENCES = [
  {
    period: "Feb 2026 – Presente",
    company: "dti digital",
    role: "Software Developer",
    roleEn: "Software Developer",
    description:
      "Desenvolvimento e evolução de features full-stack para a aplicação mobile B2B da ADI Global, atuando com React Native, TypeScript e .NET. Trabalho na implementação de novas funcionalidades, melhorias de performance, experiência do usuário e segurança, além de contribuir para decisões técnicas e evolução da arquitetura da aplicação.\n\nAtuação com desenvolvimento para Android e iOS, gerenciamento e sincronização de dados, integração com APIs e automação de processos de desenvolvimento. Também colaboro com equipes internacionais em inglês e participo de diferentes etapas do ciclo de desenvolvimento, desde o refinamento até implantação e suporte pós-release.",
    descriptionEn:
      "Development and evolution of full-stack features for ADI Global's B2B mobile application, working with React Native, TypeScript, and .NET. I implement new functionality, performance and user experience improvements, security enhancements, and contribute to technical decisions and the application's architecture.",
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
    roleEn: "Software Developer Intern",
    description:
      "Atuação no desenvolvimento da aplicação mobile B2B da ADI Global, contribuindo para a implementação de novas funcionalidades, correção de bugs e melhorias de performance e experiência do usuário. Desenvolvimento utilizando React Native, TypeScript e .NET, com participação em diferentes etapas do ciclo de desenvolvimento.\n\nDurante o período, também desenvolvi conhecimentos em desenvolvimento mobile para Android e iOS, Git e práticas de engenharia de software, evoluindo gradualmente minha autonomia técnica e participação no projeto.",
    descriptionEn:
      "Worked on the development of ADI Global's B2B mobile application, contributing to new features, bug fixes, performance improvements, and user experience enhancements with React Native, TypeScript, and .NET. I also developed skills in Android and iOS development, Git, and software engineering practices.",
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
    descriptionEn:
      "B2B mobile application developed for ADI Global, focused on business operations and user experience. I work across full-stack development, API integration, data synchronization, performance, and continuous product evolution for Android and iOS.",
    techs: ["React Native", "TypeScript", ".NET", "C#", "Azure"],
    github: "https://github.com/samuelrebula",
    linkType: "none",
    availability:
      "Disponível para download na App Store e Play Store para o mercado dos Estados Unidos (US).",
    availabilityEn:
      "Available for download on the App Store and Play Store for the United States (US) market.",
  },
  {
    video: "/images/ref/daily.mp4",
    name: "Daily",
    period: "2026",
    description:
      "Aplicação web para acompanhamento de hábitos e metas pessoais. O usuário define um objetivo em dias e registra sua evolução diariamente, enquanto o sistema salva o progresso e evita registros duplicados no mesmo dia.",
    descriptionEn:
      "Web application for tracking personal habits and goals. Users set a target number of days and record their progress daily, while the system saves progress and prevents duplicate check-ins on the same day.",
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
    descriptionEn:
      "Website created as an interface study and tribute to guitarist Alexi Laiho. The application presents guitar models, artist information, and navigation inspired by ESP Guitars visual identity.",
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
    descriptionEn:
      "Management system for music studios that centralizes session scheduling, equipment tracking, and financial management. The platform organizes bookings, payments, and resources while improving communication between studios, musicians, and producers.",
    techs: ["Java", "Spring Boot", "React", "Vite", "PostgreSQL"],
    github:
      "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-2-ti2-1381100-JAM",
    linkType: "none",
  },
];
