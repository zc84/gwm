# Epic 3 - Static Content and Homepage Finalization

## Scope

Epic 3 now uses static repository content for the MVP because hosted CMS cost is
out of scope. The Strapi REST adapter remains as a future integration path, but
static content is the primary source for Render deployment.

The first implementation focuses on the localized homepage because it is the
front door for the MVP and the place where the V2 design system becomes a real
content surface.

## Implemented

- Added a typed homepage content contract in `apps/web/lib/content/home.ts`.
- Added an optional Strapi REST adapter in `apps/web/lib/strapi.ts`.
- Added `qs` query construction for nested Strapi `populate`, locale and
  published-status parameters.
- Added EN/AR static content so local builds, previews and Render deployment
  work without a live CMS.
- Replaced the placeholder localized homepage with a content-driven V2-aligned
  homepage:
  - full-bleed hero
  - statistics strip
  - brand grid
  - filter chips
  - featured vehicles
  - technology section
  - news list
  - country directory

## Optional Strapi Contract

The web app reads a Strapi single type at:

```text
GET /api/homepage
```

Query parameters:

- `locale=en|ar`
- `status=published`
- explicit nested `populate` for hero media, stats, brands, featured vehicles,
  technology, news and countries

Expected top-level fields:

- `navItems`
- `languageLabel`
- `hero`
- `filters`
- `stats`
- `brands`
- `featuredVehicles`
- `technology`
- `news`
- `countries`

The adapter expects Strapi 5's flattened REST shape, where fields are available
directly on `data` instead of under `data.attributes`.

## Environment

Set these for a real Strapi backend:

```bash
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=replace-with-read-token
```

For the low-cost MVP, leave `STRAPI_API_URL` empty. If it is empty, unreachable,
or returns an invalid payload, the homepage renders static content from the
repository.

## Deferred

- Creating the actual Strapi application and content-type schemas.
- Migrating or replacing the existing Payload app.
- CMS/admin editing workflows.
- Connecting vehicle detail, service, country, form and search pages to Strapi.
- Wiring Strapi preview/draft flows.
- Adding CMS media assets for the homepage hero and model cards.
- Replacing the static first-pass hero with a CMS-managed carousel.

## Visual QA

Validation completed in this pass:

- `npm run typecheck --workspace @gwm/web`
- `npm run lint --workspace @gwm/web`
- `npm run build --workspace @gwm/web`
- HTTP smoke check for `http://localhost:3010/en`
- HTTP smoke check for `http://localhost:3010/ar`
- Health check for `http://localhost:3010/api/health`

Known deviations from the V2 homepage source:

- Production vehicle photography is not committed because source screenshot
  licensing is not confirmed.
- Hero carousel controls are deferred until Strapi content schemas exist.
- Vehicle cards use branded fallback media panels until Strapi media is
  attached.
