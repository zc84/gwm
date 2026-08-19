# GWM Middle East Website MVP - Codex Implementation Plan

## 1. Objective

Build a production-aligned MVP of the GWM Middle East digital platform.

The MVP must:

- Follow the provided GWM design concept.
- Cover all major customer-facing RFP capabilities.
- Mock enterprise integrations where access is unavailable.
- Be deployable on Render.com.
- Deploy without Docker for the first MVP stage.
- Preserve migration paths to Azure.
- Preserve a path to AI configuration and AI-driven content operations through
  future administration.

The MVP is not a throwaway prototype. It is a scalable foundation.

## MVP Scope Adjustment

The first MVP stage intentionally avoids Docker and heavyweight managed
infrastructure.

MVP stage:

- Render Blueprint deployment only.
- Native Render services where possible.
- Next.js public website and lightweight API routes for MVP server
  behavior.
- Static JSON/TypeScript content bundles for public MVP content.
- PostgreSQL deferred unless later API epics need persisted leads or events.
- OpenAI API as the configurable AI provider.
- Generated static content bundles to simulate RAG.
- Static JSON/search indexes for website search and assistant context.

Deferred stage:

- Docker Compose local stack.
- ASP.NET Core API service.
- OpenSearch service.
- Ollama service.
- Keycloak service.
- True embeddings, vector search and production RAG.
- Azure OpenAI, Entra ID and Azure-native deployment.

---

# 2. Core Architecture

## Frontend

- Next.js
- TypeScript
- Tailwind
- Responsive design
- EN/AR support
- RTL support

## Backend

- MVP: Next.js API routes/server actions for leads, forms, search
  simulation and AI proxying
- PostgreSQL deferred unless API persistence is required
- REST APIs
- OpenAPI-style endpoint documentation
- Future: ASP.NET Core API when Docker or Azure hosting is introduced

## Content

- MVP uses static repository content.
- CMS/admin is deferred and marked as coming soon.
- Optional future Strapi 5 REST contract is preserved.
- Localised content is represented in EN/AR static bundles.

## Search

- MVP: static generated JSON indexes
- Client/server-side filtering
- English and Arabic keyword matching
- Future: OpenSearch full-text, Arabic analyzers and vector search

## AI

Provider abstraction:

- MVP: OpenAI API
- Azure OpenAI (future)
- Ollama (future/local Docker stage)

## Identity

- MVP: no CMS/admin authentication.
- Future: lightweight admin access control.
- Future: Keycloak locally
- Entra ID migration ready

---

# 3. Render.com Deployment

The MVP must be deployable on Render.

Services:

- Next.js Web Service
- Optional background worker for content/index generation if required

Deployment must support:

- `render.yaml` Blueprint deployment.
- Render environment variables for all configuration.
- `sync: false` secret values for API keys and private credentials.
- Native local development commands without Docker.

Docker-based local and hosted services are deferred until the platform needs
OpenSearch, Keycloak, Ollama or the ASP.NET Core API.

---

# 4. Design Concept Implementation

The provided design concept is the UI source of truth.

Principles:

- Editorial clarity
- Information-first layouts
- Catalogue style
- Strong typography
- Minimal decoration
- Bilingual-ready layouts

Implement:

## Homepage

- [x] Full bleed hero carousel (static hero + dot indicators; carousel is
      non-interactive — single slide)
- [x] Brand grid
- [x] Featured vehicles
- [x] Filter chips
- [x] Technology statistics (Forest Ecosystem section)
- [x] News list
- [x] Country directory (network strip + link to `/countries`)

Epic 3 status:

- Localized homepage now renders from a typed content contract.
- Static repository content is the MVP source of truth.
- Optional Strapi 5 REST remains available when `STRAPI_API_URL` is configured.

Epic 4 status: rebuilt section-by-section against `V2_Homepage.png` (quick
action bar, brand grid, featured models, tech section, network strip, news
list, CTA band, full footer). See
`docs/epic-4-static-pages-design-implementation.md`.

## Product Page

- [x] Sticky anchor navigation — superseded by the V2 layout's tabbed
      sections (quick stats, why-cards, feature banner, details, 360,
      safety, colour, trim, specs, related) rather than a sticky nav bar
- [x] Overview (quick stats + "Why [Model]" cards)
- [x] Design (feature banner + exterior/interior detail shots)
- [x] Performance (quick stats + specifications)
- [x] Interior (detail shots)
- [x] Specifications
- [x] Colour selector (swatches; no live preview swap)
- [x] Gallery (exterior/interior detail shots + 360° viewer chrome)
- [x] CTA actions (test drive, add to compare, continue)
- [ ] 360° viewer is structural/UI only — no real spin-frame sequence
- [ ] Safety X-ray diagram is a placeholder — no real diagram asset
- [ ] "Add to Compare" has no comparison logic behind it yet

## Service Page

- [x] Numbered checklist flow — superseded by the V2 layout's needs grid +
      prepaid plans + ownership features + handbook downloads + FAQ
- [x] Genuine Care section (needs grid + GWM Care ownership features)
- [x] Warranty (stat band + FAQ)
- [x] Roadside assistance (stat band + ownership feature card)
- [x] Dealer CTA ("Find a service centre" → countries page)

## Country Page

- [x] Regional grouping (`region` field per market)
- [x] Flat country directory (flag list, all 10 markets)
- [x] Visit site actions ("Continue to [country]" → forms page)
- [x] Local dealer directory + regional contact per market (real data for
      Saudi Arabia and the UAE, sourced from `greatwall.com.sa` and the
      V2 mockup; plausible fabricated data for the other 8 markets)

## Forms

- [x] Single column form inside a tabbed request-type page
- [ ] Inline validation — fields render but there is no client-side
      validation or error state yet
- [x] One-scroll completion
- [ ] Submission is not wired to any persistence or API route (forms/leads
      API epic)

---

# 5. Static Content Model

Status: [x] Vehicle and Content bundles below are implemented as typed
TypeScript content (`apps/web/lib/content/`). [ ] Dealer is implemented only
as the country-page directory (name/address/hours), not a standalone typed
model with coordinates/services/contacts. [ ] AI Content Metadata is not
implemented (no CMS to attach it to yet).

Create static content bundles for:

## Vehicle

- Brand
- Model
- Variant
- Body type
- Powertrain
- Specifications
- Colours
- Gallery
- Brochure
- SEO metadata

## Dealer

- Country
- City
- Coordinates
- Services
- Contacts

## Content

- Pages
- News
- FAQ
- Manuals
- Warranty
- Service plans
- Fleet content
- Careers

## AI Content Metadata

Deferred CMS metadata fields:

- generatedByAI
- prompt used
- model used
- approval status
- generation timestamp

---

# 6. AI Administration Module

Deferred. The admin placeholder should mark this as coming soon.

MVP AI configuration uses environment variables and code-owned defaults.

## AI Provider Settings

Fields:

- Provider:

  - OpenAI
  - Azure OpenAI
  - Local Ollama (future)

- API Key

- Model

- Embedding model (future/optional for production RAG)

- Temperature

- Maximum tokens

Example:

    Provider:
    OpenAI

    API Key:
    ************

    Model:
    gpt-4.1

    Embeddings:
    text-embedding-3-large

## AI Features Toggle

Admin can enable/disable:

- AI website assistant
- Content generation
- Translation
- SEO generation
- Image prompt generation
- Image generation (future)
- FAQ generation

## Prompt Management

Admin can edit:

- System prompt
- Brand tone
- Safety rules
- Answer style
- Content guidelines

---

# 7. AI Content Generation in CMS

Deferred with CMS/admin. Keep API routes and provider abstractions in scope.

Features:

## Vehicle Content

Generate:

- Marketing descriptions
- Highlights
- Feature explanations
- FAQ
- SEO metadata

## News Content

Generate:

- Draft articles
- Titles
- Summaries
- Social snippets

## Translation

Generate:

- English to Arabic
- Arabic to English

## SEO

Generate:

- Meta titles
- Meta descriptions
- Structured data suggestions

## Human Approval

AI generated content flow:

    Draft
     |
    AI Generated
     |
    Editor Review
     |
    Approved
     |
    Published

AI never publishes directly.

---

# 8. AI Image Generation Pipeline

MVP supports AI-generated image prompts and placeholder media assignment.
Direct image generation is deferred.

Capabilities:

- Generate image prompts
- Create prompt briefs for hero images
- Create prompt briefs for promotional visuals
- Generate placeholders
- Attach images to content

Workflow:

    CMS Editor

    ↓

    Describe required image

    ↓

    AI image prompt generation

    ↓

    Preview prompt and selected placeholder

    ↓

    Approve

    ↓

    Attach to content

Store:

- prompt
- selected placeholder image
- model
- timestamp
- creator

Future:

- Direct image generation.
- Generated image preview.
- Generated image asset storage.

---

# 9. Vehicle Experience

Implement:

## Catalogue

Filters:

- [ ] Brand — filter chips render (`home.filters`) but are not wired to
      client-side filtering yet; the catalogue always shows all vehicles
- [ ] Body type — not implemented
- [ ] Powertrain — not implemented
- [ ] Country — not implemented

## Product Pages

Include:

- [x] Specs
- [ ] Images — real photography only exists for the Haval hero
      (`product-hero.png`); every other image slot is a labeled
      `PhotoPlaceholder`, not real photography
- [x] Colours (swatches; no live colour-swap preview)
- [ ] Comparison — "Add to Compare" button exists with no comparison logic
- [ ] Brochure — no download/request wiring yet (routes to the forms page)
- [x] Test drive CTA

## 360 Viewer

MVP:

- [ ] Image sequence viewer — not implemented; current state is a static
      placeholder with drag-hint copy and dot pagination chrome only.

Future:

Replace with production assets.

---

# 10. Lead Generation

Implement:

Forms (request-type tabs on `/[locale]/forms`):

- [x] Test drive
- [x] Brochure
- [ ] Dealer enquiry — not a distinct tab (routes through Contact Us /
      the countries page's "Continue to [country]" instead)
- [x] Contact (as "Contact Us")
- [x] Fleet enquiry (as "Fleet")
- [ ] Service booking — not a distinct tab (routed via the service page's
      "Find a service centre" CTA instead)
- Extra tab not in the original plan: "Delivery" (matches the V2 mockup)

Store:

- [ ] Lead persistence is not implemented — the form has no submit handler
      and nothing is stored. This is the forms/leads API epic's scope:
      type, country, vehicle, dealer, source, campaign, status.

---

# 11. Mocked Enterprise Integrations

Status: [ ] Deferred — no CRM, DMS, marketing automation, email/SMS, DAM,
analytics, consent or maps integration exists yet, mocked or otherwise.

## CRM

Mock adapter:

- Lead creation
- Status updates

Future:

Salesforce / Dynamics

## Dealer DMS

Mock:

- Availability
- Service slots
- Inventory

## Marketing Automation

Mock events:

- vehicle viewed
- lead created
- brochure downloaded

## Email/SMS

MVP:

Log outbound email/SMS payloads and show submitted lead status in admin.

Future:

- Mailpit for local integration testing.
- Azure Communication Services

## DAM

MVP:

Static placeholder assets and repository-managed metadata.

Future:

Enterprise DAM.

## Analytics

MVP:

Persist mocked marketing events for demo reporting.

Future:

- Matomo.
- GA4/GTM.

## Consent

Cookie management module.

Future:

OneTrust.

## Maps

MapLibre.

Future:

Google Maps.

---

# 12. Search

Status: [ ] Deferred — not started. No index, autocomplete or filtering
exists; the vehicle catalogue's filter chips are static and unwired.

MVP static search implementation.

Index:

- Vehicles
- Dealers
- Pages
- News
- FAQs
- Services

Features:

- Autocomplete
- Filters
- English and Arabic keyword search
- Basic synonyms from static configuration
- Zero-result tracking

Future:

- OpenSearch implementation.
- Arabic analyzers.
- Vector search.
- Search latency monitoring.

---

# 13. AI Assistant

Status: [ ] Deferred — not started. `NEXT_PUBLIC_AI_ASSISTANT_ENABLED=false`
in `render.yaml`; no assistant UI, API route or knowledge bundle exists. The
homepage/service/forms "Ask AI" quick-action button currently just routes
to the forms page.

MVP simulates RAG with generated static content bundles:

    Static seed content

    ↓

    Generated assistant knowledge bundles

    ↓

    Keyword/source matching

    ↓

    OpenAI API

    ↓

    Answer + Sources

Requirements:

- EN answers
- AR answers
- Citations
- Guardrails
- Follow-up CTAs

Future production RAG:

- CMS content chunking.
- Embeddings.
- Vector search.
- Retrieval evaluation.

---

# 14. SEO

Implement:

- [x] sitemap.xml (`apps/web/app/sitemap.ts`)
- [x] robots.txt (`apps/web/app/robots.ts`)
- [x] llms.txt (`apps/web/app/llms.txt/route.ts`)
- [ ] canonical URLs — not implemented
- [ ] hreflang — not implemented (EN/AR pages exist but carry no
      `alternates.languages` metadata)

Schema: none implemented yet.

- [ ] Vehicle
- [ ] AutoDealer
- [ ] Article
- [ ] FAQPage
- [ ] Breadcrumb

---

# 15. Security

Implement:

- [ ] Validation — no server-side input validation exists yet (no API
      routes accept input yet beyond `/api/health`)
- [ ] CSP — not configured
- [ ] HSTS — not configured
- [ ] Secure cookies — no cookies are set yet
- [ ] Rate limiting — not implemented
- [ ] Dependency scanning — not configured; README notes `npm install`
      currently reports unreviewed audit findings
- [ ] OWASP checks — not performed

---

# 16. Testing

Status: [ ] Deferred — no test runner is configured in either workspace.
Validation today is `npm run lint` + `npm run typecheck` +
`npm run build --workspace @gwm/web` plus manual in-browser QA (see
`docs/epic-4-static-pages-design-implementation.md`).

Frontend:

- [ ] Vitest
- [ ] Playwright

Backend:

- [ ] API route tests
- Future: xUnit for ASP.NET Core API

Accessibility:

- [ ] axe-core

Critical journeys (none automated yet, manually verified in-browser for
EN/AR on this pass):

- [ ] Homepage
- [ ] Language switch
- [ ] Vehicle discovery
- [ ] Dealer search
- [ ] Test drive
- [ ] AI assistant

---

# 17. Observability

Status: [ ] Deferred — only Next.js/Render's default request logging exists.
No custom application logs, request timing, AI timing or structured error
logging have been added.

MVP implement:

- [ ] Application logs
- [ ] Request timing
- [ ] AI request timing
- [ ] Error logging

Future:

- OpenTelemetry
- Metrics
- Tracing

Monitor:

- API performance
- Search latency
- AI latency
- Errors

MVP observability may use application logs and lightweight request timing.
Full distributed tracing is deferred.

---

# 18. Codex Rules

For every generated task:

1.  Follow existing architecture.
2.  Reuse components.
3.  Follow design concept.
4.  Add tests.
5.  Update documentation.
6.  Avoid hard-coded data.
7.  Keep Azure migration compatibility.

## Epic Completion Protocol

At the end of every epic:

- Update this implementation plan with the epic status.
- Mark implemented scope clearly.
- Record deferred scope and known gaps.
- Update `README.md` with current setup, commands and continuation notes.
- Leave enough context for a new Codex session to proceed without relying on
  previous chat history.

---

# 19. Development Sequence

## Sprint 1

Foundation:

- repository - implemented
- Render Blueprint setup - implemented
- database configuration - implemented through Render PostgreSQL Blueprint
- environment configuration - implemented
- CI pipeline - intentionally skipped

Epic 1 completed scope:

- npm workspace monorepo.
- Next.js public website shell.
- Payload CMS admin/API shell.
- Shared locale/config package.
- EN/AR routes with RTL direction handling.
- PostgreSQL-backed CMS configuration.
- Render Blueprint without Docker.
- Environment variable template.
- Local validation scripts.
- Epic handoff documentation in `README.md` and `docs/`.

Epic 1 deferred scope:

- CI pipeline.
- Production page design implementation.
- Full CMS content model.
- Lead forms.
- Search.
- AI assistant.
- Production RAG.
- Docker Compose.

## Sprint 2

V2 brand system - restarted

Epic 2 scope:

- Treat `specs/design/` V2 PNG screens as the active source of truth.
- Parse V2 into a brandbook.
- Extract reusable design tokens.
- Implement TypeScript, Tailwind and CSS token assets.
- Generate lightweight reference thumbnails for future QA.
- Establish pixel-perfect QA protocol for all later implemented content.

Epic 2 acceptance gate:

- Implemented UI must be reviewed against V2 source screens at mobile, tablet
  and desktop breakpoints.
- RTL behavior must be verified through Arabic screenshots.
- Intentional deviations must be documented before the epic is closed.

Epic 2 handoff:

- `docs/brandbook-v2.md`
- `docs/epic-2-design-system-pixel-perfect.md`
- `specs/design/README.md`
- `specs/design/gwm-v2-design-tokens.json`

## Sprint 3

Static content and homepage finalization - implemented

## Sprint 4

Homepage - implemented, rebuilt in Epic 4 to match `V2_Homepage.png`
section-by-section

## Sprint 5

Vehicle platform - implemented: static catalogue and product detail pages
rebuilt to match `V2_Product Page.png` (quick stats, why-cards, feature
banner, details, 360/safety/colour/trim chrome, specs, related vehicles).
Catalogue filter chips and product comparison are still unwired (see
Section 9).

## Sprint 6

Forms and leads API routes - partially implemented: the forms UI matches
`V2_Forms_*.png` (tabs, field grid, consent). No API route, validation or
lead persistence exists yet — deferred.

## Sprint 7

Dealer and service page implementation, API integrations later -
implemented: service page matches `V2_Service.png`; countries page has a
real static dealer directory (real data for Saudi Arabia/UAE, fabricated
for the other 8 markets) instead of live dealer/DMS APIs.

## Sprint 8

Static news and SEO outputs - partially implemented: news page and
sitemap.xml/robots.txt/llms.txt exist. Canonical URLs, hreflang and schema
markup are deferred (see Section 14).

## Sprint 9

Static search and generated assistant knowledge bundles - not started

## Sprint 10

OpenAI-backed AI assistant using static RAG simulation - not started

## Sprint 11

AI API helpers and prompt management without CMS persistence - not started

## Sprint 12

Security, testing and demo - not started

---

# Definition of Done

The MVP is complete when:

- [x] Render deployment works (`render.yaml` defines `gwm-web`; not yet
      deployed/verified against a live Render environment from this session)
- [x] Design concept is implemented (all 5 V2 mockup pages rebuilt
      section-by-section; photography slots the MVP lacks use labeled
      `PhotoPlaceholder`s, not finished imagery)
- [x] EN/AR works
- [x] RTL works
- [ ] Vehicle journey works — browsing and viewing detail pages work;
      filtering, comparison and brochure download do not
- [ ] Dealer journey works — the country directory and static dealer list
      work; there is no live dealer/DMS API behind it
- [ ] Lead journey works — the forms UI exists; nothing is submitted or
      persisted yet
- [x] Static content bundles work
- [ ] AI assistant works using OpenAI and generated static knowledge
      bundles — not started
- [ ] AI configuration works from environment variables — env vars are
      defined in `.env.example` but nothing reads `OPENAI_API_KEY` yet
- [x] AI content generation CMS workflow is deferred
- [ ] AI image prompt workflow works — not started
- [ ] Integrations are mocked — not started (no CRM/DMS/analytics/consent
      mocks exist)
- [ ] Tests pass — no test runner is configured yet
- [x] Documentation exists (this plan, `README.md`,
      `docs/epic-4-static-pages-design-implementation.md`)

Deferred definition of done:

- [ ] Docker Compose local stack works.
- [ ] ASP.NET Core API works.
- [ ] OpenSearch works.
- [ ] Keycloak works.
- [ ] Ollama works.
- [ ] Production RAG with embeddings and vector search works.
