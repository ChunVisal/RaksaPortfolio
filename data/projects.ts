import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "content",
    title: "Content Creation",
    category: "Stories & ideas",
    description:
      "Interviews, creative ideas, and personal stories made to connect with an audience.",
    image: "/images/project/contant.png",
    collections: [
      {
        slug: "content-interview",
        title: "Content Interview",
        images: [
          {
            src: "/images/project/photoshoot.png",
            alt: "Behind the scenes of a creator filming a beauty video",
          },
        ],
      },
      {
        slug: "creative-content",
        title: "Creative Content Ideas",
        images: [
          {
            src: "/images/hero.png",
            alt: "Studio portrait used as a creative content concept",
          },
        ],
      },
      {
        slug: "personal-content",
        title: "Personal Content",
        images: [
          {
            src: "/images/about.png",
            alt: "Personal Raksa Sou portrait artwork",
          },
        ],
      },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Visual direction",
    description:
      "A collection for skincare poster designs, fashion styles, and visual experiments.",
    image: "/images/project/graphicdesign.png",
    collections: [
      {
        slug: "skincare-posters",
        title: "Skincare Poster Design",
        images: [
          {
            src: "/images/about.png",
            alt: "Bold orange personal-brand poster concept",
          },
        ],
      },
      {
        slug: "fashion-styles",
        title: "Fashion Styles",
        images: [
          {
            src: "/images/hero.png",
            alt: "Fashion editorial studio portrait",
          },
          {
            src: "/images/project/graphicdesign.png",
            alt: "Illustrated visual-creator poster design",
          },
        ],
      },
    ],
  },
  {
    slug: "photoshoot",
    title: "Photoshoot",
    category: "Behind the lens",
    description:
      "A visual journal of shoot ideas, portraits, and the moments in between.",
    image: "/images/project/photoshoot.png",
    collections: [
      {
        slug: "shooting-ideas",
        title: "Shooting Ideas",
        images: [
          {
            src: "/images/project/photoshoot.png",
            alt: "Creator working on a beauty shoot in the studio",
          },
        ],
      },
      {
        slug: "visual-shooting",
        title: "Visual Shooting",
        images: [
          {
            src: "/images/hero.png",
            alt: "Fashion portrait from a studio photoshoot",
          },
          {
            src: "/images/about.png",
            alt: "Creative portrait artwork from a photoshoot concept",
          },
        ],
      },
    ],
  },
];
