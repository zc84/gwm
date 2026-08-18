# Epic 2 - V2 Brand System And Pixel-Perfect QA

Status: restarted from the V2 concept.

## Goal

Build the brand system, reusable UI assets and visual QA process required for
all customer-facing implementation to match the newly supplied V2 design
concept.

The V2 image set in `specs/design/` replaces the deleted PDF concept as the
source of truth.

## Source Review

Reviewed sources:

- `specs/design/V2_Homepage.png`
- `specs/design/V2_Homepage_Mobile.png`
- `specs/design/V2_Homepage_RTL.png`
- `specs/design/V2_Product Page.png`
- `specs/design/V2_Product Page_RTL.png`
- `specs/design/V2_Product page_mobile.png`
- `specs/design/V2_Service.png`
- `specs/design/V2_Service_RTL.png`
- `specs/design/V2_Service_mobile.png`
- `specs/design/V2_Country_RTL.png`
- `specs/design/V2_Country_mobile.png`
- `specs/design/V2_Forms_RTL.png`
- `specs/design/V2_Forms_mobile.png`

The V2 concept direction is cinematic, dark, premium and conversion-led:

- Near-black global canvas with charcoal surfaces.
- Full-bleed vehicle and service imagery as the primary brand signal.
- Strong white display type, compact metadata and restrained gray copy.
- GWM red reserved for primary actions, active tabs and high-value signals.
- Rounded dark panels with subtle borders instead of flat white catalogue grids.
- Dense cards, stat strips, accordions, filters and tabbed page anchors.
- Mobile-first long pages with sticky bottom conversion actions.
- Arabic layouts that are direction-aware, visually balanced and reordered for
  RTL reading.

Current implementation status:

- The web app still has the Epic 1 shell and does not match V2.
- Tailwind tokens have only the previous early palette.
- No shared brandbook, V2 design tokens, component vocabulary or visual QA
  reference thumbnails existed before this epic restart.

## Included

- Parse the V2 concept screens into a brandbook.
- Add machine-readable V2 tokens for TypeScript consumers.
- Add web CSS variables and reusable utility classes for V2 primitives.
- Add Tailwind token aliases for the V2 color, radius and shadow system.
- Generate lightweight reference thumbnails from the large V2 source screens.
- Document reusable page and component patterns for future epics.
- Update the main implementation plan and README to point at V2.

## Excluded

- Full page rebuilds.
- CMS-backed content loading.
- Lead persistence.
- Search.
- AI assistant.
- Production asset licensing and DAM integration.

## Reusable Asset Targets

Epic 2 must leave future development with:

- `docs/brandbook-v2.md`
- `specs/design/README.md`
- `specs/design/gwm-v2-design-tokens.json`
- `specs/design/reference-thumbnails/`
- `packages/shared/src/brand.ts`
- exported `@gwm/shared/brand`
- `apps/web/app/brand.css`
- Tailwind aliases for V2 tokens

## Pixel-Perfect QA Protocol

Every implemented page must be compared against the V2 source image for its
page type, locale direction and viewport.

Required checks:

- Use the original V2 files for final visual comparison.
- Use `specs/design/reference-thumbnails/` for quick orientation.
- Capture browser screenshots with Playwright at the matching viewport.
- Compare:
  - image crop and hero height
  - dark surface depth
  - section sequence
  - content width
  - typography scale and weight
  - CTA shape, size and color
  - card radius, border and padding
  - active tab/chip state
  - stat strip alignment
  - RTL order and alignment
  - mobile sticky action placement
  - text overflow
- Record every intentional deviation in the active epic note before closing the
  task.

Target breakpoints:

- Mobile: 390px wide
- Tablet: 768px wide
- Desktop: 1440px wide

## Acceptance Criteria

- V2 brandbook exists and identifies source screens, principles, tokens,
  patterns and anti-patterns.
- V2 design tokens exist in JSON, TypeScript, Tailwind and CSS variable forms.
- Reference thumbnails exist for all supplied V2 screens.
- Shared package exports brand tokens for future frontend/CMS usage.
- README and the main plan no longer refer to the deleted PDF as the active
  concept source.
- `npm run format` passes.
- `npm run typecheck` passes.

## Implementation Order

1. Parse V2 source screens and generate reference thumbnails.
2. Write brandbook and design-source manifest.
3. Add shared TypeScript tokens and exports.
4. Add CSS variables and reusable web classes.
5. Update Tailwind aliases.
6. Update README and main plan.
7. Run format and typecheck.

## Known Risks

- Source screens include real automotive imagery that may not be licensed for
  production reuse. Treat screenshots as references, not production media.
- The current app shell is far from V2 and should be rebuilt from shared
  primitives in the next implementation pass.
- Pixel parity will drift if future pages bypass the shared tokens/classes.
