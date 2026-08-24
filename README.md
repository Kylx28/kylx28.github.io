# Engineering portfolio

A static React portfolio for technical and research work. Built with Vite, TypeScript, Tailwind CSS, Framer Motion, and an opt-in Spark Gaussian splat viewer.

## Development

```bash
npm install
npm run dev
```

Run `npm run build` to create the static site in `dist/`.

## Customization

- Profile and contact details: `src/data/profile.ts`
- Projects and project-page sections: `src/data/projects.ts`
- CV entries and skills: `src/data/cv.ts`
- Project images: `public/images/`
- CV PDF: `public/cv.pdf` (the path is configurable in `profile.ts`)
- Gaussian splats: place small assets in `public/splats/` or use an absolute CDN URL in project data

The site uses hash routing, so nested case studies work on GitHub Pages without server rewrites. A Pages deployment workflow is included; set the repository's Pages source to **GitHub Actions**.

The included content is polished sample copy. Replace the placeholder contact URLs, institutions, employers, and `public/cv.pdf` before publishing.
