export const translations = {
  pt: {
    nav: {
      about: "Sobre Mim",
      experience: "Experiências",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, sou",
      role: "Software Developer",
      description:
        "Desenvolvimento full-stack de aplicações robustas e escaláveis com foco em arquitetura limpa, boas práticas de engenharia e soluções inovadoras. Experiência em React, React Native, .NET, Azure e CI/CD. Gosto de resolver problemas complexos, explorar novas tecnologias e utilizar IA, agentes e automação para tornar o desenvolvimento mais eficiente.",
      contact: "Contato",
    },
    about: {
      label: "Sobre Mim",
      title: ["Código que", "resolve", "problemas reais."],
      paragraphs: [
        "Sou estudante de Engenharia de Software pela PUC Minas e desenvolvedor full-stack, com experiência profissional desde 2024 no desenvolvimento de aplicações B2B. Atualmente, trabalho na dti digital em um projeto internacional de e-commerce, desenvolvendo soluções para aplicações mobile utilizando principalmente React Native, TypeScript, .NET, Azure e Firebase.",
        "Tenho experiência com desenvolvimento cross-platform para Android e iOS, APIs REST, gerenciamento e sincronização de dados, CI/CD e arquitetura de software. Também trabalho com práticas como Clean Architecture, SOLID e desenvolvimento ágil, buscando construir soluções que sejam escaláveis, organizadas e fáceis de manter.",
        "Tenho especial interesse em arquitetura de software, automação e no uso de inteligência artificial para tornar o desenvolvimento mais eficiente. No meu dia a dia, exploro ferramentas como GitHub Copilot, Claude Code e MCP Servers para automatizar tarefas como revisão de código, geração de testes e análise de requisitos. Também desenvolvo projetos próprios para aprofundar meus conhecimentos e experimentar novas tecnologias.",
        "Além da experiência técnica, busco constantemente novos desafios que contribuam para meu crescimento como desenvolvedor e profissional de tecnologia.",
      ],
      stats: [
        "Anos de experiência",
        "Projeto profissional",
        "Tecnologias utilizadas",
      ],
    },
    experience: {
      label: "Experiências",
      title: ["Trajetória", "profissional"],
    },
    projects: {
      label: "Projetos",
      title: ["Trabalhos", "selecionados"],
      github: "Ver todos projetos no GitHub",
    },
    contact: {
      label: "Contato",
      title: ["Vamos criar", "algo juntos?"],
      description:
        "Estou aberto a colaborações técnicas ou a uma conversa sobre engenharia de software e tecnologia. Respondo mensagens assim que possível.",
      ready: "E-mail preparado!",
      readyDescription:
        "Seu aplicativo de e-mail foi aberto com a mensagem preenchida.",
      name: "Nome",
      namePlaceholder: "Seu nome completo",
      emailPlaceholder: "seu@email.com",
      message: "Mensagem",
      messagePlaceholder: "Conte-me sobre o seu projeto ou oportunidade...",
      send: "Enviar mensagem",
      subject: "Contato pelo portfólio",
      bodyName: "Nome",
    },
    footer: "Todos os direitos reservados.",
    languageButton: "EN",
    languageLabel: "Switch to English",
    published: "Publicado",
    publishedLabel: "Projeto publicado",
    availability:
      "Disponível para download na App Store e Play Store para o mercado dos Estados Unidos (US).",
  },
  en: {
    nav: {
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Software Developer",
      description:
        "Full-stack development of robust and scalable applications focused on clean architecture, engineering best practices, and innovative solutions. Experienced with React, React Native, .NET, Azure, and CI/CD. I enjoy solving complex problems, exploring new technologies, and using AI, agents, and automation to make development more efficient.",
      contact: "Contact",
    },
    about: {
      label: "About Me",
      title: ["Code that", "solves", "real problems."],
      paragraphs: [
        "I am a Software Engineering student at PUC Minas and a full-stack developer, with professional experience since 2024 building B2B applications. I currently work at dti digital on an international e-commerce project, developing mobile solutions mainly with React Native, TypeScript, .NET, Azure, and Firebase.",
        "I have experience with cross-platform development for Android and iOS, REST APIs, data management and synchronization, CI/CD, and software architecture. I also work with Clean Architecture, SOLID, and agile practices to build scalable, organized, and maintainable solutions.",
        "I am especially interested in software architecture, automation, and using artificial intelligence to make development more efficient. I explore tools such as GitHub Copilot, Claude Code, and MCP Servers to automate code reviews, test generation, and requirements analysis.",
        "I am always looking for new challenges that contribute to my growth as a developer and technology professional.",
      ],
      stats: [
        "Years of experience",
        "Professional project",
        "Technologies used",
      ],
    },
    experience: {
      label: "Experience",
      title: ["Professional", "journey"],
    },
    projects: {
      label: "Projects",
      title: ["Selected", "work"],
      github: "View all projects on GitHub",
    },
    contact: {
      label: "Contact",
      title: ["Let's create", "something together?"],
      description:
        "I am open to technical collaborations or a conversation about software engineering and technology. I reply to messages as soon as possible.",
      ready: "Email ready!",
      readyDescription:
        "Your email application was opened with the message filled in.",
      name: "Name",
      namePlaceholder: "Your full name",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project or opportunity...",
      send: "Send message",
      subject: "Portfolio contact",
      bodyName: "Name",
    },
    footer: "All rights reserved.",
    languageButton: "PT",
    languageLabel: "Mudar para português",
    published: "Published",
    publishedLabel: "Published project",
    availability:
      "Available for download on the App Store and Play Store for the United States (US) market.",
  },
} as const;

export type Language = keyof typeof translations;
