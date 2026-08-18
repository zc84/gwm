# Architecture Notes

## Epic 1 Foundation

The MVP starts as a no-Docker Render Blueprint deployment.

Services:

- `gwm-web`: public Next.js site.
- `gwm-cms`: Payload CMS admin/API hosted as a Next.js app.
- `gwm-postgres`: PostgreSQL database provisioned by Render.

Packages:

- `apps/web`: customer-facing site shell.
- `apps/cms`: Payload CMS shell.
- `packages/shared`: shared locale and configuration contracts.

## Boundaries

The web app owns public UX, locale routing and customer-facing API routes.

Payload owns admin authentication, media, content workflows and AI
configuration.

PostgreSQL persists Payload data and later lead data.

The MVP does not include Docker, OpenSearch, Keycloak, Ollama or ASP.NET Core.
Those remain deferred migration paths.

## AI Contract

The first AI provider is OpenAI. The API key is configured through environment
variables and represented in Payload admin settings without storing the secret
in content records.

Production RAG is deferred. The MVP assistant will use generated static
knowledge bundles and source labels.
