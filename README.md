# GWM Middle East Website MVP

Production-aligned MVP for the GWM Middle East digital platform.

## Current Status

Epic 1 is complete: foundation and deployment skeleton.

Epic 2 established the V2 brand system and reusable visual language.

Epic 3 has shifted to static public content and homepage finalization.

Epic 4 is active: implement the static public pages and V2-aligned page
elements from the plan.

## MVP Direction

- No Docker in the first MVP stage.
- Deployment is managed through `render.yaml`.
- Public website uses Next.js, TypeScript and Tailwind.
- Public website content uses static repository content for the MVP.
- CMS/admin is deferred and marked as coming soon.
- Public website content can still read Strapi 5 REST content later when
  configured.
- AI uses a configurable OpenAI API key.
- RAG is simulated with generated static knowledge bundles until production
  embeddings and vector search are introduced.

## Epic Handoff Rule

At the end of every epic, update:

- `specs/GWM_Codex_Implementation_Plan.md` with completed and deferred scope.
- This `README.md` with current commands, setup notes and next-step context.

This keeps the repo usable from a fresh Codex session.

## Repository Structure

- `apps/web` - public Next.js website shell.
- `apps/cms` - deferred admin placeholder.
- `packages/shared` - shared locale and configuration contracts.
- `docs` - implementation and architecture notes.
- `specs` - product/design implementation plan and source design concept.

## Local Setup

Install dependencies:

```bash
npm install --cache .npm-cache
```

Create local environment values:

```bash
cp .env.example .env.local
```

Optional future Strapi-backed homepage content can be enabled with:

```bash
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=replace-with-read-token
```

Run the public website:

```bash
npm run dev:web
```

Run the deferred admin placeholder:

```bash
npm run dev:cms
```

Local URLs:

- Web: `http://localhost:3000/en` and `http://localhost:3000/ar`
- Vehicles: `http://localhost:3000/en/vehicles`
- Product: `http://localhost:3000/en/vehicles/haval-h6-hev`
- Service: `http://localhost:3000/en/service`
- Countries: `http://localhost:3000/en/countries`
- Forms: `http://localhost:3000/en/forms`
- News: `http://localhost:3000/en/news`
- Admin placeholder: `http://localhost:3001`
- Web health: `http://localhost:3000/api/health`
- Admin health: `http://localhost:3001/api/health`

The MVP does not require PostgreSQL for content. Public content is loaded from
typed static files in the repository. PostgreSQL is deferred unless a later API
epic needs persisted leads or events.

The public homepage reads Strapi content from `STRAPI_API_URL` when configured.
Without a reachable Strapi instance it renders typed EN/AR fallback content, so
local builds do not require CMS availability.

## Validation

Useful validation commands:

```bash
npm run lint
npm run typecheck
npm run build --workspace @gwm/web
npm run format
```

The deferred admin placeholder can still be built locally if needed:

```bash
DATABASE_URL=postgres://gwm:gwm@localhost:5432/gwm PAYLOAD_SECRET=local-dev-secret npm run build --workspace @gwm/cms
```

Note: `npm install` currently reports dependency audit findings from installed
packages. Do not run forced upgrades casually; review them during the security
epic or when a direct vulnerable dependency is introduced.

## Render

`render.yaml` defines:

- `gwm-web`

Secret values are configured with `sync: false` or generated values. Before
deploying, set `NEXT_PUBLIC_SITE_URL` and any API provider values needed by the
active API epics.

## Active Epic

Epic 4 implements the static public website pages and V2-aligned elements:

- reusable localized header, footer, hero, section and stat primitives
- vehicle catalogue and product detail pages
- service, country, forms and news pages
- static SEO endpoints
- generated placeholder visual assets

Primary handoff files:

- `docs/brandbook-v2.md`
- `docs/epic-2-design-system-pixel-perfect.md`
- `docs/epic-3-strapi-driven-content.md`
- `docs/epic-4-static-pages-design-implementation.md`
- `specs/design/README.md`
