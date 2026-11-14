import type { ComponentType } from "react";
import type { SvgIconProps } from "@thesvg/react";

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
  school: string;
  program: string;
  institution: string;
  period: string;
  image: string;
  imageAlt: string;
};

export type Skill = {
  name: string;
  icon: ComponentType<SvgIconProps>;
  color: string;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};
