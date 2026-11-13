import type { SimpleIcon } from "simple-icons";
import type { IconType } from "react-icons";

export type Project = {
  title: string;
  category: string;
  description: string;
  year: string;
  services: string[];
  visual: "sunrise" | "editorial" | "social";
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Education = {
  program: string;
  institution: string;
  period: string;
};

export type Skill = {
  name: string;
  icon: IconType | SimpleIcon;
  color: string;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};
