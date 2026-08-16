export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  techs: string[];
}

export interface Project {
  image: string;
  name: string;
  period: string;
  description: string;
  techs: string[];
  github: string;
}
