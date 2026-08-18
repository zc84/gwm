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
- Support AI configuration and AI-driven content operations through
  administration.

The MVP is not a throwaway prototype. It is a scalable foundation.

## MVP Scope Adjustment

The first MVP stage intentionally avoids Docker and heavyweight managed
infrastructure.

MVP stage:

- Render Blueprint deployment only.
- Native Render services where possible.
- Next.js public website and lightweight API routes for MVP server
  behavior.
- Payload CMS for content, admin workflows and AI configuration.
- PostgreSQL for persisted CMS data and leads.
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
- PostgreSQL
- REST APIs
- OpenAPI-style endpoint documentation
- Future: ASP.NET Core API when Docker or Azure hosting is introduced

## CMS

- Payload CMS
- Localised content models
- Workflow states
- Media management

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

- MVP: Payload CMS admin authentication
- Lightweight admin access control
- Future: Keycloak locally
- Entra ID migration ready

---

# 3. Render.com Deployment

The MVP must be deployable on Render.

Services:

- Next.js Web Service
- Payload CMS Service
- PostgreSQL Database
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

- Full bleed hero carousel
- Brand grid
- Featured vehicles
- Filter chips
- Technology statistics
- News list
- Country directory

## Product Page

- Sticky anchor navigation
- Overview
- Design
- Performance
- Interior
- Specifications
- Colour selector
- Gallery
- CTA actions

## Service Page

- Numbered checklist flow
- Genuine Care section
- Warranty
- Roadside assistance
- Dealer CTA

## Country Page

- Regional grouping
- Flat country directory
- Visit site actions

## Forms

- Single column
- Inline validation
- One-scroll completion

---

# 5. CMS Content Model

Create:

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

Every content item supports:

- generatedByAI
- prompt used
- model used
- approval status
- generation timestamp

---

# 6. AI Administration Module

Create an admin AI configuration section.

Admin must be able to configure AI without code changes.

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

CMS editors can use AI assistance.

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

- Brand
- Body type
- Powertrain
- Country

## Product Pages

Include:

- Specs
- Images
- Colours
- Comparison
- Brochure
- Test drive CTA

## 360 Viewer

MVP:

Image sequence viewer.

Future:

Replace with production assets.

---

# 10. Lead Generation

Implement:

Forms:

- Test drive
- Brochure
- Dealer enquiry
- Contact
- Fleet enquiry
- Service booking

Store:

Lead:

- type
- country
- vehicle
- dealer
- source
- campaign
- status

---

# 11. Mocked Enterprise Integrations

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

Payload media library and placeholder assets.

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

MVP simulates RAG with generated static content bundles:

    CMS/static seed content

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

- sitemap.xml
- robots.txt
- llms.txt
- canonical URLs
- hreflang

Schema:

- Vehicle
- AutoDealer
- Article
- FAQPage
- Breadcrumb

---

# 15. Security

Implement:

- Validation
- CSP
- HSTS
- Secure cookies
- Rate limiting
- Dependency scanning
- OWASP checks

---

# 16. Testing

Frontend:

- Vitest
- Playwright

Backend:

- API route tests
- Future: xUnit for ASP.NET Core API

Accessibility:

- axe-core

Critical journeys:

- Homepage
- Language switch
- Vehicle discovery
- Dealer search
- Test drive
- AI assistant

---

# 17. Observability

MVP implement:

- Application logs
- Request timing
- AI request timing
- Error logging

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

CMS

## Sprint 4

Homepage

## Sprint 5

Vehicle platform

## Sprint 6

Forms and leads

## Sprint 7

Dealer and service

## Sprint 8

News and SEO

## Sprint 9

Static search and generated assistant knowledge bundles

## Sprint 10

OpenAI-backed AI assistant using static RAG simulation

## Sprint 11

AI CMS generation helpers and prompt management

## Sprint 12

Security, testing and demo

---

# Definition of Done

The MVP is complete when:

- Render deployment works
- Design concept is implemented
- EN/AR works
- RTL works
- Vehicle journey works
- Dealer journey works
- Lead journey works
- CMS works
- AI assistant works using OpenAI and generated static knowledge bundles
- AI configuration works from admin
- AI content generation works
- AI image prompt workflow works
- Integrations are mocked
- Tests pass
- Documentation exists

Deferred definition of done:

- Docker Compose local stack works.
- ASP.NET Core API works.
- OpenSearch works.
- Keycloak works.
- Ollama works.
- Production RAG with embeddings and vector search works.
