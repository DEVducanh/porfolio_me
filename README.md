# Frontend Developer Portfolio

A responsive portfolio for Nguyễn Đức Anh, built with Next.js App Router, TypeScript, CSS, and Motion. Portfolio content is kept separately in `src/data/portfolio.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
src/
├── app/                 # App Router page, layout, and global styles
├── components/          # Reusable UI and reveal animation
└── data/                # Profile, skills, strengths, and project content
```

Update profile and CV content in `src/data/portfolio.ts`. The project list is paginated with animated transitions. The BitBid Farcaster app, OneChain corporate site, and Game Management CMS use supplied screenshots from `public/images/`; the QR ordering project preview is a CSS illustration. The inquiry form opens the visitor's email app with the message prefilled.
