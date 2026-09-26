#

<div align="center">
  <img src="./assets/svg/lockup/lockup-horizontal.svg" alt="Terecode" width="100%" />
</div>

<div align="center">

# Terecode - Landing Page

</div>

<div align="center">
  The public landing page for <a href="https://github.com/terecode/terecode">Terecode</a> -
  a declarative language for UI components that compiles one source to idiomatic,
  readable code for React, Vue, Svelte, Solid, Angular and six more targets.
</div>

<div align="center">
  <a href="https://terecode-dsl.com">terecode-dsl.com</a> ·
  <a href="https://github.com/terecode/terecode">compiler repo</a> ·
  <a href="./assets/README.md">brand assets</a>
</div>

<div align="center">

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,nodejs,npm" alt="Next.js · React · TypeScript · Tailwind CSS · Node.js · npm" />
</a>

</div>

---

<div align="center">

## 🎯 Project shape

</div>

A **single multilingual landing page**, not a SaaS marketing site. No signup, no analytics, no third-party tracking, no fabricated social proof. The audience is developers and technical decision-makers evaluating whether to adopt the compiler.

- Content is translated into **5 languages** via `next-intl`, with English as the base.
- All page sections are React Server Components; client JavaScript is reserved for genuinely interactive primitives (theme toggle, language switcher, reveal-on-scroll).
- Code snippets are **hand-tokenised JSX** - no syntax highlighter reaches the browser, and none runs at build time either.
- Dark mode is the default and is applied before paint, so a stored light preference never flashes.

<div align="center">

## 🛠️ Tech stack

</div>

| Concern           | Choice                                                     |
| ----------------- | ---------------------------------------------------------- |
| Framework         | Next.js 16 (App Router, RSC by default)                    |
| Language          | TypeScript (strict)                                        |
| Runtime           | React 19                                                   |
| Styling           | Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config`)  |
| Design tokens     | `oklch` CSS variables in [`globals.css`](./src/app/globals.css) |
| Icons             | `lucide-react`                                             |
| Class merging     | `clsx` + `tailwind-merge` (`cn()`)                          |
| Fonts             | Geist Sans + Geist Mono via `next/font`                    |
| Theme             | Inline `ThemeScript` (dark default, no flash)              |
| i18n              | `next-intl` v4 - 5 locales, English fallback               |
| Package manager   | `npm`                                                      |

<div align="center">

## 🌐 Locales

</div>

| Code | Language  | Code | Language   |
| ---- | --------- | ---- | ---------- |
| `en` | English   | `de` | Deutsch    |
| `es` | Español   | `pt` | Português  |
| `fr` | Français  |      |            |

Default locale is `en`. The prefix is always present in the URL (`/en/...`, `/es/...`); [`src/proxy.ts`](./src/proxy.ts) negotiates the locale and redirects `/` accordingly. Translation messages live in [`messages/<locale>.json`](./messages); the locale list and labels are configured in [`src/i18n/routing.ts`](./src/i18n/routing.ts).

English is the **source of truth**: [`src/i18n/request.ts`](./src/i18n/request.ts) deep-merges each translation over `messages/en.json`, so a key a translation hasn't caught up with falls back to English instead of throwing.

<div align="center">

## 💻 Local development

</div>

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. You will be redirected to the prefix for the negotiated locale.

<div align="center">

## ⚡ Scripts

</div>

| Script              | Purpose                    |
| ------------------- | -------------------------- |
| `npm run dev`       | Next.js dev server         |
| `npm run build`     | Production build           |
| `npm start`         | Serve the production build |
| `npm run lint`      | ESLint via `next lint`     |
| `npm run typecheck` | TypeScript with `--noEmit` |

<div align="center">

## 📁 Repository layout

</div>

The codebase is organised by **bounded context**, not by file kind. Page sections live apart from UI primitives, layout chrome, and cross-cutting concerns like theme or i18n.

```
src/
├── app/
│   ├── layout.tsx              # passthrough root layout (all routes are locale-prefixed)
│   ├── page.tsx                # "/" entry, handed to the proxy
│   ├── not-found.tsx           # 404
│   ├── globals.css             # Tailwind v4 @theme tokens (oklch), base typography
│   └── [locale]/
│       ├── layout.tsx          # <html>/<body>, fonts, metadata, theme, skip link
│       ├── page.tsx            # the landing page composition
│       └── icon.tsx            # generated favicon
├── components/
│   ├── sections/               # Hero, Why, Targets, CodeTour, Features, Install
│   ├── ui.tsx                  # Container, Section, SectionHeader, Eyebrow, pillButtonStyles
│   ├── logo.tsx                # geometric "T" monogram + wordmark
│   ├── code-block.tsx          # dependency-free code frame + token helpers (kw/str/com/fn/pn)
│   ├── reveal.tsx              # IntersectionObserver fade/lift
│   ├── theme-script.tsx        # pre-paint theme application
│   ├── theme-toggle.tsx        # dark/light switch
│   ├── language-switcher.tsx   # locale switch in the header
│   ├── site-header.tsx
│   └── site-footer.tsx
├── i18n/
│   ├── routing.ts              # locale list, default, labels
│   ├── request.ts              # next-intl config + English deep-merge fallback
│   └── navigation.ts           # locale-aware Link / router
├── lib/
│   └── utils.ts                # cn()
└── proxy.ts                    # next-intl locale negotiation

assets/                         # brand assets (svg/ source, png/ 4× raster)
messages/                       # one JSON file per locale (en is the base)
public/grid.svg                 # decorative grid used by the Install panel
```

<div align="center">

## 🔗 Import conventions

</div>

- The `@/` alias maps to `src/`.
- Across contexts, use `@/components/<file>` and `@/i18n/<file>` for clarity.
- No barrel `index.ts` files - direct imports keep the dependency graph explicit and preserve Next.js tree-shaking.

<div align="center">

## 🎨 Design principles

</div>

- **Polished and honest.** Polished typography, generous whitespace; every claim points to something real.
- **Show code, not screenshots of code.** Real, tokenised, readable snippets of `.trc` source next to the code each emitter produces.
- **No fake testimonials, metrics, or logos.** Until organisations are genuinely using Terecode in production with written permission, there is no "Trusted by" section.
- **No third-party tracking.** No analytics, no widgets, no cookie banners.
- **Dark mode default**, light mode toggleable, no flash on load.
- **Performance is part of the message.** No highlighter and no motion library - animation is a small `Reveal` component on top of `IntersectionObserver`.
- **Accessible by default.** Semantic HTML, skip link, keyboard navigable, visible focus rings via the `--ring` token.

<div align="center">

## ✏️ Editing content

</div>

| What you want to edit       | Where it lives                                                             |
| --------------------------- | -------------------------------------------------------------------------- |
| Copy / translations         | [`messages/<locale>.json`](./messages)                                     |
| Compile targets on the page | [`src/components/sections/targets.tsx`](./src/components/sections/targets.tsx) |
| Code snippets on the page   | [`src/components/sections/code-tour.tsx`](./src/components/sections/code-tour.tsx) |
| Header / footer links       | [`src/components/site-header.tsx`](./src/components/site-header.tsx)       |
| Locale list / labels        | [`src/i18n/routing.ts`](./src/i18n/routing.ts)                             |
| Section composition / order | [`src/app/[locale]/page.tsx`](./src/app/%5Blocale%5D/page.tsx)             |
| Brand accent                | `--accent`, `--accent-muted`, `--ring` in [`globals.css`](./src/app/globals.css) |

Adding a **locale** takes no component changes: add the code to `routing.ts` with a label, drop in `messages/<code>.json`, and it is live.

<div align="center">

## 🚀 Deployment

</div>

Optimised for Vercel or Cloudflare Pages. `next build` emits prerendered routes for every locale prefix plus the dynamic `/icon`. Configure the deployment platform to serve `.next/`.

<div align="center">

## 📄 License

Private and unpublished - no license is granted yet.

</div>
