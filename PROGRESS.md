# Portfolio build — progress log

Last updated: 2026-05-26 (before PC restart)

## Decisions made

- **Domain:** annaletizia.com (Namecheap, currently parked)
- **Hosting:** Vercel (later, after GitHub is set up)
- **Stack:** Next.js 16 + TypeScript + Tailwind CSS
- **Tests:** Jest + React Testing Library
- **Style:** bold and creative
- **Languages:** Spanish & Italian (native), English, basic French
- **GitHub:** annaletizia10
- **LinkedIn:** https://www.linkedin.com/in/anna-yarossi-4738111b8/
- **Highlights:** self-taught developer, self-directed learner, photography

## Collaboration rules

1. Anna codes hands-on with the agent — pair programming, not agent-only
2. Small, descriptive PRs — one focused change each
3. Unit tests with every feature
4. Flow: `feature-branch` → PR → review → merge to `main`

## Done

- [x] Project scaffold at `/home/leti/annaletizia-portfolio`
- [x] Next.js app created (default template)
- [x] Local git repo on `main` with initial commit (`66f11fc`)
- [x] `npm install` completed (`node_modules` present)

## Not done yet (pick up here)

- [ ] Agree on GitHub repo name and create remote under `annaletizia10`
- [ ] **PR #1:** Add Jest, CONTRIBUTING.md, PR template, workflow docs (in progress on `chore/vitest-and-workflow`)
- [ ] **PR #2:** Bold/creative design tokens and base layout
- [ ] **PR #3+:** Sections (hero, about, skills, projects, photography, contact)
- [ ] Push to GitHub and connect Vercel
- [ ] Point annaletizia.com DNS at Vercel

## Resume commands

```bash
cd ~/annaletizia-portfolio
npm run dev
```

Open http://localhost:3000 — you should see the default Next.js starter page.

## Next session prompt

> "Let's continue the portfolio project — we're ready for PR #1 (testing + GitHub workflow)."
