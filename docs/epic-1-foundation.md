# Epic 1 - Foundation And Deployment Skeleton

Status: complete.

## Goal

Create a runnable and deployable foundation for the GWM Middle East MVP.

## Included

- npm workspace monorepo.
- Next.js public web app.
- Payload CMS app.
- Shared locale/config package.
- EN/AR routing and RTL behavior.
- PostgreSQL-backed CMS configuration.
- Render Blueprint without Docker.
- Environment variable template.
- Local validation scripts.

## Excluded

- CI pipeline.
- Production page implementation.
- Full CMS content schema.
- Lead forms.
- Search implementation.
- AI assistant implementation.
- Production RAG.
- Docker Compose.

## Acceptance Criteria

- `npm install --cache .npm-cache` completes.
- `npm run lint` passes.
- `npm run typecheck` passes.
- `npm run build --workspace @gwm/web` passes.
- `DATABASE_URL=postgres://gwm:gwm@localhost:5432/gwm PAYLOAD_SECRET=local-dev-secret npm run build --workspace @gwm/cms` passes when `DATABASE_URL` and
  `PAYLOAD_SECRET` are configured.
- `npm run format` passes.
- `/en` and `/ar` render the public shell with correct text direction.
- `/api/health` exists for both apps.
- `render.yaml` declares web, CMS and PostgreSQL resources.

## Implementation Notes

Payload follows its current Next.js-native setup with `@payloadcms/next` and
`@payloadcms/db-postgres`.

Next.js is pinned to `15.4.11` because the installed Payload adapter supports
Next 15.4.x but not 15.5.x.

No CI files were added by request.
