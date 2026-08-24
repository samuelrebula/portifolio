export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  descriptionEn?: string;
  techs: string[];
}

export interface Project {
  image?: string;
  video?: string;
  name: string;
  period: string;
  description: string;
  descriptionEn?: string;
  techs: string[];
  github: string;
  linkType?: "github" | "published" | "none";
  availability?: string;
  availabilityEn?: string;
}
