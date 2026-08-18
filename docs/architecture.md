# Architecture Notes

## Epic 1 Foundation

The MVP starts as a no-Docker Render Blueprint deployment.

Services:

- `gwm-web`: public Next.js site.
- `gwm-cms`: deferred admin placeholder, not deployed in the low-cost Render MVP.

Packages:

- `apps/web`: customer-facing site shell.
- `apps/cms`: deferred admin placeholder.
- `packages/shared`: shared locale and configuration contracts.

## Boundaries

The web app owns public UX, static content loading, locale routing and
customer-facing API routes.

PostgreSQL is deferred unless a later API epic requires persisted leads, events
or operational records.

The MVP does not include Docker, OpenSearch, Keycloak, Ollama, ASP.NET Core or a
hosted CMS. Those remain deferred migration paths.

## AI Contract

The first AI provider is OpenAI. The API key is configured through environment
variables. Admin-managed AI settings are deferred with CMS.

Production RAG is deferred. The MVP assistant will use generated static
knowledge bundles and source labels.
