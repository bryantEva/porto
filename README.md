# Portfolio Template

A Next.js (App Router) + TypeScript + Tailwind portfolio template with a
file-explorer-style sidebar nav — the sections are labeled like open files
(`home.tsx`, `about.tsx`, ...) and the active one highlights as you scroll.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customizing

Almost everything lives in **`lib/data.ts`**: your name, tagline, summary,
projects, skills, and social links. Edit that one file first — you shouldn't
need to touch the components for a content update.

- `components/Sidebar.tsx` — nav + socials, scroll-spy highlighting
- `components/Hero.tsx` — landing section
- `components/About.tsx` — bio
- `components/Projects.tsx` — project list (edit `projects` in `lib/data.ts`)
- `components/Skills.tsx` — grouped skill tags
- `components/Contact.tsx` — email + socials + footer

Colors and fonts are defined as Tailwind tokens in `tailwind.config.ts`
(`ink`, `panel`, `line`, `paper`, `muted`, `signal`) and as CSS font variables
in `app/layout.tsx` (IBM Plex Mono for headings/labels, IBM Plex Sans for
body text) — change either to reskin the whole site.

## Deploying

The template is a standard Next.js app, so it deploys as-is to Vercel,
Netlify, or any Node host:

```bash
npm run build
npm start
```
