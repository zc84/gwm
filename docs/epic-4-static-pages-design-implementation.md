# Epic 4 - Static Pages and V2 Design Implementation

## Scope

Implement the public MVP pages and page elements to structurally and visually
match the V2 design concept screens in `specs/design/` (`V2_Homepage.png`,
`V2_Product Page.png`, `V2_Service.png`, `V2_Country_*.png`,
`V2_Forms_*.png`), using static content and honest placeholders for the
photography this MVP does not have.

CMS/admin remains deferred. API-oriented epics remain in scope for later passes:
forms/leads routes, dealer/service integration mocks, static search and the
OpenAI-backed assistant.

## Implemented

- Shared localized page chrome and primitives (`app/[locale]/components.tsx`):
  - header / footer (footer matches the V2 four-column layout: Vehicles,
    Owners, Company, Support, plus social row and legal bar)
  - full-bleed page hero, section heading, stat band, CTA band
  - `QuickActionBar` — the 4-icon Test Drive / Dealer / Brochure / Ask AI
    strip shown on the homepage (top) and service/forms pages (bottom)
  - `PhotoPlaceholder` — an intentionally-honest stand-in for missing
    photography (dashed border, diagonal hatch, small caption naming the
    shot that belongs there). No image-generation tool was available in the
    session that built this pass, so every photo the V2 mockups call for and
    this repo doesn't already have a matching real asset for uses this
    component instead of fabricated art.
- Static EN/AR content contract (`lib/content/home.ts`, `lib/content/site.ts`)
  restructured to match each mockup's actual section list — brand grid,
  featured models, Forest Ecosystem tech section, country network, vehicle
  quick-stats/why-cards/feature-banner/details/360/safety/colour/trim
  sections, service plans/ownership/handbooks, forms tabs/fields.
- Homepage at `/[locale]` matching `V2_Homepage.png`.
- Vehicle catalogue at `/[locale]/vehicles` and product detail pages at
  `/[locale]/vehicles/[slug]` matching `V2_Product Page.png`.
- Service page at `/[locale]/service` matching `V2_Service.png`.
- Country directory at `/[locale]/countries` matching `V2_Country_*.png`
  (flag list + selected-market detail panel, driven by a `?country=` query
  param). Dealer/contact data for Saudi Arabia and the UAE is real, sourced
  from `greatwall.com.sa` (dealer locator) and the V2 mockup itself; the
  other 8 markets (Qatar, Kuwait, Bahrain, Oman, Jordan, Lebanon, Iraq,
  Syria) use plausible fabricated dealer names/addresses/hours in the same
  format, clearly meant to be replaced with real distributor data.
- Forms page at `/[locale]/forms` matching `V2_Forms_*.png` (request-type
  tabs, two-column field grid, not-a-robot + consent checkboxes).
- News page at `/[locale]/news` (not one of the V2 mockup screens; kept as a
  simple editorial list consistent with the homepage's "Latest from GWM").
- Static SEO endpoints: `/robots.txt`, `/sitemap.xml`, `/llms.txt`.

## Design Alignment

The pages match the V2 concept structurally, section-by-section, not just
directionally:

- near-black global canvas, restrained GWM red for actions and active states
- the same section order, copy patterns and card layouts as each mockup
- EN/AR route support with inherited RTL direction, verified in-browser for
  both locales on every rebuilt page

## Known Deviations

- Photography: 4 real generated bitstamps exist (`apps/web/public/media/`)
  and are used where they genuinely fit — `home-hero.png` (homepage),
  `product-hero.png` (Haval H6 HEV hero — the one vehicle a real photo
  matched), `service-hero.png` (service page), `contact-hero.png` (forms
  page). Every other photo the V2 mockups call for — brand grid images,
  other featured-model shots, Tank/Poer hero and detail shots, the 360
  viewer, the safety X-ray diagram, colour-preview shots, country skyline
  thumbnails — is a labeled `PhotoPlaceholder`, not real photography or
  generated art. A prior pass in this epic generated stylized vector
  silhouette art for these slots; that was explicitly rejected (it read as
  finished content rather than a placeholder) and has been removed.
- 360 viewer and safety X-ray are structural/UI placeholders only — no
  frame-by-frame spin sequence or real diagram exists yet.
- Form submission is not wired to persistence yet; this belongs to the
  forms/leads API epic.
- Non-KSA/UAE dealer and contact data (8 of 10 markets) is fabricated for
  structural completeness, not sourced from real distributors.
- Pixel QA is limited until Playwright is added to the project.
