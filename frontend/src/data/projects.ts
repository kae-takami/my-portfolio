export type Project = {
  title: string;
  summary: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [];