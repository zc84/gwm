# Epic 4 - Static Pages and V2 Design Implementation

## Scope

Implement the public MVP pages and page elements from the product plan using
static content, generated placeholder media and the V2 design concept.

CMS/admin remains deferred. API-oriented epics remain in scope for later passes:
forms/leads routes, dealer/service integration mocks, static search and the
OpenAI-backed assistant.

## Implemented

- Shared localized page chrome and primitives:
  - header
  - footer
  - media hero
  - section heading
  - stat band
- Static EN/AR content contract for vehicles, service and forms.
- Original generated bitmap media assets under `apps/web/public/media/`.
- Vehicle catalogue at `/[locale]/vehicles`.
- Product detail pages at `/[locale]/vehicles/[slug]`.
- Service page at `/[locale]/service`.
- Country directory at `/[locale]/countries`.
- Forms page at `/[locale]/forms`.
- News page at `/[locale]/news`.
- Static SEO endpoints:
  - `/robots.txt`
  - `/sitemap.xml`
  - `/llms.txt`

## Design Alignment

The pages follow the V2 concept direction:

- near-black global canvas
- full-bleed cinematic hero imagery
- dense stat strips and feature grids
- low-contrast borders and charcoal surfaces
- restrained GWM red for actions and active states
- compact editorial copy
- EN/AR route support with inherited RTL direction

## Known Deviations

- Generated placeholder vehicle imagery is used instead of licensed production
  GWM photography.
- Product gallery and 360 viewer are static placeholders.
- Form submission is not wired to persistence yet; this belongs to the
  forms/leads API epic.
- Dealer/country links route to the static form journey until dealer APIs are
  implemented.
- Pixel QA is limited until Playwright is added to the project.
