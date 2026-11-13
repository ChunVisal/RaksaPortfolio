import type { SkillGroup } from "@/types";
import {
  siBlender,
  siClaude,
  siDeepseek,
  siGooglegemini,
  siPinterest,
} from "simple-icons";
import {
  LuBookOpen,
  LuBot,
  LuCamera,
  LuClapperboard,
  LuFilePenLine,
  LuFileText,
  LuFingerprint,
  LuImage,
  LuLightbulb,
  LuMegaphone,
  LuOrbit,
  LuPalette,
  LuPenTool,
  LuPresentation,
  LuScissors,
} from "react-icons/lu";

export const skills: SkillGroup[] = [
  {
    category: "Specialties",
    skills: [
      { name: "Marketing", icon: LuMegaphone, color: "#FF7A18" },
      { name: "Content Editing", icon: LuFilePenLine, color: "#F59E0B" },
      { name: "Branding", icon: LuFingerprint, color: "#C084FC" },
      { name: "Creativity", icon: LuLightbulb, color: "#EC4899" },
    ],
  },
  {
    category: "Design & production",
    skills: [
      { name: "Adobe Photoshop", icon: LuImage, color: "#31A8FF" },
      { name: "Adobe Illustrator", icon: LuPenTool, color: "#FF9A00" },
      { name: "Adobe InDesign", icon: LuBookOpen, color: "#FF3366" },
      { name: "Canva", icon: LuPalette, color: "#00C4CC" },
      { name: "CapCut", icon: LuScissors, color: "#00C4B4" },
      { name: "Blender", icon: siBlender, color: `#${siBlender.hex}` },
      { name: "Adobe After Effects", icon: LuClapperboard, color: "#D946EF" },
      { name: "Photography / Camera", icon: LuCamera, color: "#8B5CF6" },
      { name: "Pinterest", icon: siPinterest, color: `#${siPinterest.hex}` },
    ],
  },
  {
    category: "Office & AI tools",
    skills: [
      { name: "Microsoft Word", icon: LuFileText, color: "#2B579A" },
      { name: "Microsoft PowerPoint", icon: LuPresentation, color: "#D24726" },
      {
        name: "Google Gemini",
        icon: siGooglegemini,
        color: `#${siGooglegemini.hex}`,
      },
      { name: "Claude", icon: siClaude, color: `#${siClaude.hex}` },
      { name: "DeepSeek", icon: siDeepseek, color: `#${siDeepseek.hex}` },
      { name: "Grok", icon: LuOrbit, color: "#141414" },
      { name: "ChatGPT", icon: LuBot, color: "#10A37F" },
    ],
  },
];
