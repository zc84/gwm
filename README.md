# GWM Middle East Website MVP

Production-aligned MVP for the GWM Middle East digital platform.

## Current Status

Epic 1 is complete: foundation and deployment skeleton.

## MVP Direction

- No Docker in the first MVP stage.
- Deployment is managed through `render.yaml`.
- Public website uses Next.js, TypeScript and Tailwind.
- CMS/admin uses Payload CMS with PostgreSQL.
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
- `apps/cms` - Payload CMS admin/API shell.
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

Run the public website:

```bash
npm run dev:web
```

Run the CMS:

```bash
npm run dev:cms
```

Local URLs:

- Web: `http://localhost:3000/en` and `http://localhost:3000/ar`
- CMS: `http://localhost:3001/admin`
- Web health: `http://localhost:3000/api/health`
- CMS health: `http://localhost:3001/api/health`

The CMS requires a reachable PostgreSQL database for admin usage. Render will
provide `DATABASE_URL` from the Blueprint. Local development can use any
PostgreSQL instance that matches `.env.example`.

## Validation

These commands passed after Epic 1:

```bash
npm run lint
npm run typecheck
npm run build --workspace @gwm/web
DATABASE_URL=postgres://gwm:gwm@localhost:5432/gwm PAYLOAD_SECRET=local-dev-secret npm run build --workspace @gwm/cms
npm run format
```

Note: `npm install` currently reports dependency audit findings from installed
packages. Do not run forced upgrades casually; review them during the security
epic or when a direct vulnerable dependency is introduced.

## Render

`render.yaml` defines:

- `gwm-web`
- `gwm-cms`
- `gwm-postgres`

Secret values are configured with `sync: false` or generated values. Before
deploying, set `NEXT_PUBLIC_SITE_URL`, `PAYLOAD_PUBLIC_SERVER_URL` and
`OPENAI_API_KEY` in Render.

## Next Epic

Epic 2 should build the design system from the PDF concept:

- typography scale
- color tokens
- layout primitives
- header/footer components
- editorial section patterns
- EN/AR visual QA for RTL spacing
