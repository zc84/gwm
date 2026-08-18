# GWM Middle East V2 Brandbook

## Source Of Truth

The V2 concept screens in `specs/design/` are the active visual source of truth.
They replace the deleted `specs/design concept.pdf`.

Reference set:

- Homepage: desktop, mobile and RTL
- Product page: desktop, mobile and RTL
- Service page: desktop, mobile and RTL
- Country selector: mobile and RTL desktop
- Forms: mobile and RTL desktop

Lightweight thumbnails live in `specs/design/reference-thumbnails/`.

## Brand Direction

V2 is a cinematic premium automotive interface. The product should feel dark,
technical, confident and conversion-focused.

The interface is built from near-black space, full-width vehicle imagery,
charcoal panels, compact white typography and precise red actions. Decoration
comes from photography, contrast, spacing and motion discipline, not from
ornaments.

## Core Principles

- Lead with dramatic vehicle or ownership imagery.
- Keep the global canvas dark.
- Use red only for action, active state and critical emphasis.
- Make modules compact, scannable and information-dense.
- Build depth through surface contrast, borders and image overlays.
- Prefer tab bars, stat strips, cards, accordions and galleries over long prose.
- Preserve RTL layout intent, not just translated strings.
- Design mobile as a first-class long-form product journey.

## Color System

Primary colors:

- `gwm.black`: `#050506` - global page background.
- `gwm.canvas`: `#080808` - main app canvas.
- `gwm.panel`: `#0f1014` - standard card and section surface.
- `gwm.panelRaised`: `#14151a` - raised cards, controls and active dark states.
- `gwm.panelSoft`: `#1a1c22` - secondary panels and form fields.
- `gwm.line`: `#242832` - default border.
- `gwm.lineStrong`: `#343946` - emphasized divider or selected dark border.
- `gwm.text`: `#f7f7f2` - primary text.
- `gwm.muted`: `#a7abb2` - body copy and metadata.
- `gwm.subtle`: `#6f747d` - inactive labels and helper text.
- `gwm.red`: `#d50032` - primary GWM action red.
- `gwm.redHot`: `#f0063c` - hover and high-emphasis red.
- `gwm.redDark`: `#72041e` - deep red surfaces and shadows.

Usage rules:

- Page backgrounds use `black` or `canvas`.
- Cards use `panel`; interactive cards may use `panelRaised`.
- Borders stay low contrast and never become bright gray.
- Red must not be used as broad decoration.
- Large red fills are reserved for conversion banners and primary submit areas.

## Typography

Current implementation should use system fonts until licensed brand fonts are
provided.

Font stacks:

- Latin: `Arial`, `Helvetica`, sans-serif
- Arabic: `Arial`, `Tahoma`, sans-serif
- Monospace/data: `ui-monospace`, `SFMono-Regular`, `Menlo`, monospace

Scale:

- `display-xl`: hero model names and page promises.
- `display-lg`: section-defining marketing claims.
- `heading-lg`: page section titles.
- `heading-md`: card group titles.
- `body`: standard descriptive copy.
- `caption`: metadata, nav items, overlines and helper text.

Rules:

- Use heavy uppercase Latin display type for hero and card headlines.
- Keep body copy short and gray.
- Use compact captions for categories, timestamps, specs and tabs.
- Arabic headings should keep strong weight but avoid excessive tracking.
- Do not scale font size directly with viewport width.

## Layout

Desktop:

- Max content width: 1180px.
- Main page rhythm: 88px section spacing on desktop.
- Hero sections are image-led and occupy the first viewport signal.
- Use two to four column grids for cards depending on content density.
- Footer is dark, compact and multi-column.

Mobile:

- Width target: 390px.
- Use a single column for forms and long product/service content.
- Use horizontal scroll only for tabs, chips and compact galleries.
- Preserve sticky or bottom conversion actions on journeys that need them.

RTL:

- Mirror content alignment and navigation order.
- Reorder hero copy, tabs and forms to match RTL reading flow.
- Keep Latin brand/model strings readable in their native direction.

## Imagery

Image style:

- Cinematic vehicle photography.
- Low-key lighting, strong contrast and controlled reflections.
- Dark service bays, desert/off-road shots and urban night scenes.
- Crops should keep the vehicle readable, not purely atmospheric.

Overlay rules:

- Use a dark linear gradient from content edge to preserve text legibility.
- Hero images may sit under navigation.
- Cards use image overlays for title and CTA only when text remains readable.

Do not ship concept screenshots as production media unless licensing is
confirmed.

## Component Vocabulary

Required primitives:

- `AppShell`: dark page canvas with bounded content.
- `BrandHeader`: transparent-over-hero or solid dark navigation.
- `HeroMedia`: full-width image hero with overlay, overline, headline and CTA.
- `ActionPill`: rounded primary and secondary actions.
- `TabRail`: compact navigation tabs with red active state.
- `StatStrip`: dense numeric proof row.
- `VehicleCard`: image-led model or story card.
- `InfoCard`: icon/number/title/body card.
- `FeatureGrid`: repeated dark cards for model, service and technology details.
- `SpecTable`: dark key/value table with low-contrast dividers.
- `GalleryRail`: horizontal media strip.
- `AccordionRow`: FAQ/news row with plus/chevron affordance.
- `FormField`: dark rounded input/select with inline validation.
- `ConversionBand`: full-width red CTA module.
- `MobileActionBar`: sticky bottom journey actions.
- `BrandFooter`: compact dark footer with grouped links and social icons.

## Interaction

- Primary hover: brighten red to `redHot`.
- Secondary hover: raise panel surface one step.
- Focus: visible red or white outline with at least 2px thickness.
- Active tabs: red fill or red underline, never ambiguous gray only.
- Accordions: one-line row with subtle divider and compact icon.
- Forms: validation appears inline under the field, not in modal summaries.

## Accessibility

- Text on dark surfaces must meet contrast requirements.
- Red text alone cannot be the only status cue.
- Every icon-only action needs an accessible label.
- Focus states must be visible on dark backgrounds.
- Motion must respect reduced-motion preferences.

## Anti-Patterns

- White catalogue pages from the previous concept.
- Pale hero sections or generic SaaS cards.
- Decorative gradients without vehicle or service content.
- Red used on every heading or card.
- Large rounded cards nested inside other cards.
- Low-contrast gray text for essential information.
- Desktop-first layouts that collapse poorly on mobile.

## Build Rules

- Start every page from shared V2 tokens.
- Use the primitives in `apps/web/app/brand.css` before creating new local
  styles.
- Add new tokens to `packages/shared/src/brand.ts` and Tailwind together.
- Compare every implemented page against the corresponding V2 screenshot.
- Record deviations in the active epic document.
