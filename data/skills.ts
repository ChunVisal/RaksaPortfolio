import type { SkillGroup } from "@/types";
import {
  Adobe,
  Photoshop,
  Illustrator, 
  Indesign,
  AfterEffects,
  Blender,
  Canva,
  Capcut,
  Claude,
  Deepseek,
  Figma,
  Gemini,
  Google,
  GoogleAds,
  MicrosoftPowerpoint,
  MicrosoftWord,
  Notion,
  OpenaiChatgpt,
  Pinterest,
  Grok,
} from "@thesvg/react";

import { 
  Camera,
  Megaphone,
  Film,
  Palette,
  Crown,
  MessagesSquare,
  Lightbulb, } from 'lucide-react';

export const skills: SkillGroup[] = [
  {
    category: "Specialties",
    skills: [
     { name: "Marketing", icon: Megaphone, color: "#F97316" },
    { name: "Content Editing", icon: Film, color: "#3B82F6" },
    { name: "Branding", icon: Palette, color: "#A855F7" },
    { name: "Creativity", icon: Lightbulb, color: "#EC4899" },
    { name: "Leadership", icon: Crown, color: "#EAB308" },
    { name: "Communication", icon: MessagesSquare, color: "#14B8A6" },
    ],
  },
  {
    category: "Design & production",
    skills: [
      { name: "Adobe Photoshop", icon: Photoshop, color: "#31A8FF" },
      { name: "Adobe Illustrator", icon: Illustrator, color: "#FF9A00" },
      { name: "Adobe InDesign", icon: Indesign, color: "#FF3366" },
      { name: "Canva", icon: Canva, color: "#00C4CC" },
      { name: "CapCut", icon: Capcut, color: "#d6d6d6" },
      { name: "Blender", icon: Blender, color: "#D946EF" },
      { name: "Adobe After Effects", icon: AfterEffects, color: "#D946EF" },
      { name: "Photography / Camera", icon: Camera, color: "#d6d6d6" },
      { name: "Pinterest", icon: Pinterest, color: "#E60023" },
    ],
  },
  {
    category: "Office & AI tools",
    skills: [
      { name: "Microsoft Word", icon: MicrosoftWord, color: "#2B579A" },
      {
        name: "Microsoft PowerPoint",
        icon: MicrosoftPowerpoint,
        color: "#D24726",
      },
      { name: "Google Gemini", icon: Gemini, color: "#8B5CF6" },
      { name: "Claude", icon: Claude, color: "#D97706" },
      { name: "DeepSeek", icon: Deepseek, color: "#171717" },
      { name: "Grok", icon: Grok, color: "#141414" },
      { name: "ChatGPT", icon: OpenaiChatgpt, color: "#d6d6d6" },
    ],
  },
];
