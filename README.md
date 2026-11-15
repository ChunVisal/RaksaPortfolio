# Raksa Sou — Portfolio

A single-page portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update the portfolio content

- `data/projects.ts` contains the Content Creation, Graphic Design, and Photoshoot cards and their image collections.
- `data/experience.ts`, `data/education.ts`, and `data/skills.ts` contain the resume content.
- `types/index.ts` defines the data shapes, and `lib/getData.ts` exposes the typed data helpers.
- `components/` contains the page sections and reusable project card.
- `app/globals.css` contains the responsive site styles.
- Place local media in `public/images/` and reference it from the relevant component.
- Each project card opens its gallery at `/projects/<slug>`. Update a collection's `images` array in `data/projects.ts` to add or replace gallery images.

The project and resume entries are starter content; replace them with your own details before publishing.
