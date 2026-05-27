# Contributing

Thanks for helping build [annaletizia.com](https://annaletizia.com). This repo uses a simple branch-and-PR workflow so changes stay small and reviewable.

## Before you start

1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev` → open http://localhost:3000
3. Run tests: `npm test` (single run) or `npm run test:watch` (watch mode)

## Workflow

1. **Create a branch** from `main` — use a short, descriptive name:
   - `feat/hero-section`
   - `fix/contact-form-validation`
   - `chore/update-dependencies`
2. **Make one focused change** per pull request.
3. **Add or update tests** for any new behavior.
4. **Open a PR** into `main` and fill in the PR template.
5. **Review and merge** after checks pass.

## Tests

- **Unit tests:** Jest + React Testing Library (`npm test`)
- **Lint:** ESLint (`npm run lint`)
- **Build:** Next.js production build (`npm run build`)

Every feature PR should include tests that cover the behavior you added or changed.

## Code style

- Match the existing TypeScript and React patterns in the repo.
- Keep components focused; prefer small, reusable pieces over large files.
- Use Tailwind utility classes for styling unless a shared pattern emerges.

## Questions

If something in this doc is unclear, open an issue or note it in your PR — we'll update this file as the project grows.
