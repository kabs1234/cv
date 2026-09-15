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

There is no test setup in this repo (no runner, no test files) despite Jest/Vitest being listed as résumé skills in the content. The only automated checks are the Claude Code hook fixtures described below.

## What this is

A single-page CV/portfolio for one person (Aikhan Zhashkeyev), deployed to GitHub Pages at `https://kabs1234.github.io/cv`. React 19 + Vite + TypeScript + Tailwind v4 + shadcn/ui.

## Architecture

**Routing / GitHub Pages base path.** The site lives under the `/cv` sub-path, and that string is duplicated in three places that must stay in sync: `vite.config.ts` (`base: '/cv'`), `src/App.tsx` (`<BrowserRouter basename="/cv">`), and `public/404.html` (`pathSegmentsToKeep = 1`). `404.html` plus the first inline script in `index.html` implement the spa-github-pages redirect hack so deep links like `/cv/projects` survive a hard refresh. Static asset references in components use relative paths (`./images/...`) rather than absolute, for the same reason.

Route tree is small: `Layout` (`TopBar` + `<main><Outlet/></main>` + `SiteFooter`; scrolls to top on navigation) wraps `Home` (index → `Hero` + the numbered sections in `HOME_SECTIONS`: `Experience`, `FeaturedProjects`, `Skills`, `Knowledge`) and `projects` (`Projects` → one `ProjectRow` per project). Section numbers come from position in `HOME_SECTIONS`, so reorder sections there.

**Content vs. presentation.** `src/const.ts` holds only structural project data (`id`, tech tags, GitHub/demo URLs, image paths) as an `as const` array. Human-readable text is _not_ there: each project's title and bullets live in the locale files under `projects.items.<id>`, and `ProjectRow` / `FeaturedProjects` resolve them from the id. Adding a project means an entry in `const.ts` plus a matching `projects.items.<id>` block in both locale files. Tech tags are shown verbatim in every language, so keep them language-neutral (`OOP`, `BEM`). `const.ts` also holds `CONTACTS` (hero rows; labels come from `header.contacts.<id>`), `FEATURED_PROJECT_IDS` (the three projects on the home page), `SPOKEN_LANGUAGES` with `PROFICIENCY_SCALE`, `REPOSITORY_URL` / `ADDRESS_MAP_URL`, and `CURRENT_YEAR`.

**i18n.** `src/i18n.ts` imports both `public/locales/{en,ru}/translation.json` statically as bundled `resources` (no HTTP backend — the files sit in `public/` but are compiled in, so editing them requires a rebuild). Lists (`experience.achievementsList`, project bullets) are JSON arrays read with `t(key, { returnObjects: true })`.

- **Typed keys.** `src/i18next.d.ts` points i18next's `CustomTypeOptions` at the RU resources, so `t()` only accepts existing keys and `npm run build` fails on a typo, including template keys like `` `projects.items.${id}.title` ``. `i18n.ts` also assigns each locale to the other's type, so a key present in one file but missing from the other is a type error too.
- **Language state.** The default is `ru` with `en` fallback. The choice is persisted in `localStorage` (`cv-language`), and a `languageChanged` listener keeps `<html lang>` and `document.title` (`meta.title`) in sync. The RU/EN switcher is `src/components/language-switcher.tsx`, rendered by `top-bar.tsx`.

**Theme.** `src/theme.ts` toggles `.dark` on `<html>` and stores `cv-theme` only when the user clicks the toggle; otherwise `prefers-color-scheme` decides. The second inline script in `index.html` applies it before first paint, so its storage key must match `THEME_STORAGE_KEY`. Components never use `dark:` utilities: the dark palette is the `.dark` token block in `index.css`, wrapped in `@media screen` so printing always uses the light palette.

**Styling.** Editorial design: a paper/ink palette with one vermilion accent, hairline rules instead of cards, no shadows, gradients or radius. Tailwind v4 via `@tailwindcss/vite`, with no `tailwind.config.js`. Tokens are CSS variables in `src/index.css`: shadcn's names plus `--body`, `--accent-ink` and `--rule-strong` (`text-body`, `text-accent-ink`, `border-rule-strong`). Fonts are self-hosted through `@fontsource`: Literata (`font-serif`, headings), IBM Plex Sans (`font-sans`) and IBM Plex Mono (`font-mono`, for numbers, dates and tech lists). `link-ink`, `link-quiet` and `dash-list` are `@utility` blocks in `index.css`. The A4 CV comes from the `@media print` block there plus `print:` variants in components (`PrintButton` calls `window.print()`); add the `print-url` class to an external link to print its URL. shadcn/ui (new-york style) components live in `src/components/ui/`; only `Button` is used by pages, and those files keep the shadcn CLI's own code style. Add more with the shadcn CLI, which reads `components.json`. Icons are `lucide-react`. `@/` aliases `src/` (declared in both `vite.config.ts` and `tsconfig.app.json`).

## Claude Code hooks

`.claude/settings.json` registers two hook scripts that enforce the `clean-code-ts` skill (`.claude/skills/clean-code-ts/`) on TypeScript. Both are ESM — `package.json` has `"type": "module"`, so `require` throws — and both fail open: malformed input exits 0 instead of blocking.

**Gate — `.claude/hooks/clean-code-ts-gate.js`.** On `PreToolUse` for `Write|Edit` it denies any `.ts`/`.tsx` write until the skill has been loaded in the current session; the denial tells Claude to invoke the skill and retry. "Loaded" means either a marker at `os.tmpdir()/claude-clean-code-ts/<session_id>.marker`, written by the same script on `PostToolUse` for `Skill`, or the string `Non-Negotiable Rules (memorize these)` appearing in the session transcript. That string is copied from a heading in `SKILL.md`: renaming the heading silently disables transcript detection, leaving only the marker.

**Review — `.claude/hooks/clean-code-ts-review.js`.** On `PostToolUse` for `Write|Edit` it runs line-based regex rules over `.ts`/`.tsx` (the whole file on Write, only added patch lines on Edit, so pre-existing debt isn't reported) and returns `decision: "block"` with the violations. The file is already written — the block is feedback to fix it. Rules see each line with string literals and JSX text blanked, so URLs and dates aren't flagged as magic numbers; rules that match on quotes or comment syntax set `readsRawText`. It is purely syntactic: mutation, dead code and naming quality are left to the skill itself.

Neither hook sees files written through Bash (`sed`, `cat >`); both matchers are `Write|Edit` only.

**Fixtures.** `.claude/hooks/fixtures/bad-example.{ts,tsx}` deliberately violate the rules and must be flagged (currently 19 and 15 violations); `good-example.{ts,tsx}` implement the same things correctly and must report 0. Don't "fix" the bad ones. After changing a rule, re-check all four:

```bash
for f in .claude/hooks/fixtures/*.ts*; do node -e 'const fs=require("fs");process.stdout.write(JSON.stringify({tool_name:"Write",tool_input:{file_path:process.argv[1],content:fs.readFileSync(process.argv[1],"utf8")}}))' "$f" | node .claude/hooks/clean-code-ts-review.js | grep -o 'violations in [^:]*' || echo "$f: 0"; done
```

`.claude` is in ESLint's `ignores` so the bad fixtures don't fail `npm run lint`, and it sits outside every tsconfig `include`, so `npm run build` never type-checks the fixtures.

To exercise the gate's deny path in a session where the skill is already loaded, don't edit the sentinel string in the hook — the edit itself lands in the transcript and satisfies the check. Pipe the payload through a filter that deletes `transcript_path` and clear the marker directory instead.