# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # tsc -b (typecheck, project refs) then vite build
npm run lint      # ESLint (flat config, TS + react-hooks + react-refresh)
npm run preview   # serve dist/
npm run deploy    # predeploy runs build, then gh-pages -d dist
```

There is no test setup in this repo (no runner, no test files) despite Jest/Vitest being listed as résumé skills in the content.

## What this is

A single-page CV/portfolio for one person (Aikhan Zhashkeyev), deployed to GitHub Pages at `https://kabs1234.github.io/cv`. React 19 + Vite + TypeScript + Tailwind v4 + shadcn/ui.

## Architecture

**Routing / GitHub Pages base path.** The site lives under the `/cv` sub-path, and that string is duplicated in three places that must stay in sync: `vite.config.ts` (`base: '/cv'`), `src/App.tsx` (`<BrowserRouter basename="/cv">`), and `public/404.html` (`pathSegmentsToKeep = 1`). `404.html` plus the inline script in `index.html` implement the spa-github-pages redirect hack so deep links like `/cv/projects` survive a hard refresh. Static asset references in components use relative paths (`./images/...`) rather than absolute, for the same reason.

Route tree is small: `Layout` (Header + `<Outlet/>`) wraps `Home` (index → `About` + `Experience`) and `projects` (`Projects` → `ProjectInfo` cards).

**Content vs. presentation.** `src/const.ts` holds structural project/skill data (tech stacks, GitHub/demo URLs, image paths, icon components, gradient classes). Human-readable text is *not* in `const.ts` — the fields there store i18n **key strings** (`'projects.1.title'`, `'skills.0'`) that components resolve with `t()`. Adding a project means editing both `const.ts` and both locale files, keeping the numeric indices aligned.

**i18n.** `src/i18n.ts` imports both `public/locales/{en,ru}/translation.json` statically as bundled `resources` (no HTTP backend — the files sit in `public/` but are compiled in, so editing them requires a rebuild). Default language is `ru` with `en` fallback; the RU/EN switcher lives in `header.tsx`.

**Styling.** Tailwind v4 via `@tailwindcss/vite` — no `tailwind.config.js`; theme tokens are CSS variables in `src/index.css`. shadcn/ui (new-york style, neutral base) components live in `src/components/ui/`; add more with the shadcn CLI, which reads `components.json`. Icons are `lucide-react`. `@/` aliases `src/` (declared in both `vite.config.ts` and `tsconfig.app.json`).

## Known issues in the current WIP state

i18n was added recently and is incomplete (`f4d0fd8 feat: add i18n to work. WIP (not full translation)`), with uncommitted changes in the working tree. Two concrete problems:

1. **Duplicate `projects` key in both translation JSONs.** Each file declares `"projects"` twice at the top level — once as an object (`title`, `description`, `backToMain`) and again ~100 lines down as an array of project entries. `JSON.parse` keeps the last, so the array wins and `t('projects.title')` / `t('projects.backToMain')` render as raw key strings. There is also a `projectsList` key holding an identical copy of that array which nothing references. Resolving this means picking one shape and updating `const.ts` key strings plus `projects.tsx` to match.
2. **`knowledge.tsx` is still hardcoded Russian** (education and languages sections) — it and `about.tsx`/`home.tsx`/`layout.tsx` are the components without `useTranslation`; only `knowledge.tsx` actually contains untranslated user-visible copy.

Also note `projects.tsx` already calls `t()` on titles and bullets before passing them to `ProjectInfo`, which calls `t()` on them again — harmless double-translation, but don't add a third layer.