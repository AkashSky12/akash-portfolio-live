# Akash Simon — Portfolio Website

A static-export personal portfolio built with Next.js 16, TypeScript, Tailwind CSS, and Lucide icons.

## Overview

This site is a single-page portfolio assembled in [src/app/page.tsx](/Users/akash/Sky/akash-portfolio-live/src/app/page.tsx) with the following sections:

- Hero
- Experience
- About
- Skills
- Tool marquee
- Certifications
- Contact
- Footer

The app includes:

- Static export via `output: 'export'` in [next.config.js](/Users/akash/Sky/akash-portfolio-live/next.config.js)
- Theme persistence with dark and light modes in [src/components/ThemeToggle.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/ThemeToggle.tsx)
- SEO metadata, Open Graph, Twitter card, and manifest wiring in [src/app/layout.tsx](/Users/akash/Sky/akash-portfolio-live/src/app/layout.tsx)
- Motion and reveal effects implemented with custom components and CSS rather than Framer Motion
- Contact actions for email, WhatsApp, and LinkedIn in [src/components/sections/Contact.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/Contact.tsx) and [src/components/sections/Footer.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/Footer.tsx)

## Local Development

### Requirements

- Node.js `24+`
- npm `11+`

### Start the dev server

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### See changes live while editing

Use `npm run dev` during development. Next.js watches your files and refreshes the page when you save changes in files such as [src/components/sections/Contact.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/Contact.tsx).

Typical workflow:

```bash
npm run dev
```

- Keep the dev server running
- Edit a component under `src/`
- Save the file
- Refresh happens automatically in the browser in most cases

If you want to view the app inside VS Code, open `http://localhost:3000` in the integrated browser while the dev server is running.

### Build and preview the production export

This repo is configured for static export, so `npm run build` writes the deployable site to `out/`.

```bash
npm run build
python3 -m http.server 3000 -d out
```

Open `http://127.0.0.1:3000`.

This preview flow was verified locally in the VS Code integrated browser.

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── public/
├── previews/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AmbientBackground.tsx
│   │   ├── MotionEffects.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── sections/
│   └── lib/
├── next.config.js
├── package.json
└── tailwind.config.js
```

## Deployment

### GitHub Pages

The repository already includes a Pages workflow at [deploy.yml](/Users/akash/Sky/akash-portfolio-live/.github/workflows/deploy.yml). It installs dependencies, runs `npm run build`, and uploads the generated `out/` directory.

Important: the workflow currently triggers on pushes to `main`, while this repository is presently on `master`. Either:

- rename the branch to `main`, or
- update the workflow trigger to `master`

Before using GitHub Pages, make sure repository settings use GitHub Actions as the Pages source.

### Other static hosts

Because the output is plain static files in `out/`, the site can also be deployed to any static host that serves that directory as the web root.

## Content and Customization

### Editing portfolio content

Most content lives directly in the section components under `src/components/sections/`.

- Hero and top-level narrative: [src/components/sections/Hero.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/Hero.tsx)
- Experience: [src/components/sections/Experience.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/Experience.tsx)
- About: [src/components/sections/About.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/About.tsx)
- Skills: [src/components/sections/Skills.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/Skills.tsx)
- Certifications: [src/components/sections/Certifications.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/Certifications.tsx)
- Contact details and form behavior: [src/components/sections/Contact.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/Contact.tsx)

### Contact form behavior

The current contact form does not submit to a backend. It opens the visitor's default mail client with the entered subject and message prefilled.

If you want server-backed submissions, replace the current `handleSubmit` flow in [src/components/sections/Contact.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/sections/Contact.tsx) with your preferred provider or API endpoint.

### Theme and styling

- Global theme tokens and component styling live in [src/app/globals.css](/Users/akash/Sky/akash-portfolio-live/src/app/globals.css)
- Theme switching is handled by [src/components/ThemeToggle.tsx](/Users/akash/Sky/akash-portfolio-live/src/components/ThemeToggle.tsx)
- Archived theme variants are stored under [src/styles/saved-themes](/Users/akash/Sky/akash-portfolio-live/src/styles/saved-themes)

## SEO and Assets

- Metadata, canonical URL, robots directives, and social cards are defined in [src/app/layout.tsx](/Users/akash/Sky/akash-portfolio-live/src/app/layout.tsx)
- Static public assets live in [public](/Users/akash/Sky/akash-portfolio-live/public)
- The generated export includes `robots.txt`, `sitemap.xml`, and `site.webmanifest`

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16.x | App framework and static export |
| React | 18.x | UI runtime |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Lucide React | 0.400.x | Icons |

## License

Personal use. All content copyright Akash Simon.
