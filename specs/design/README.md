# V2 Design Concept Sources

The files in this directory are the active visual source of truth for the GWM
Middle East MVP. They replace the deleted `specs/design concept.pdf`.

## Original Screens

| File                         | Page             | Viewport | Direction |
| ---------------------------- | ---------------- | -------- | --------- |
| `V2_Homepage.png`            | Homepage         | Desktop  | LTR       |
| `V2_Homepage_Mobile.png`     | Homepage         | Mobile   | LTR       |
| `V2_Homepage_RTL.png`        | Homepage         | Desktop  | RTL       |
| `V2_Product Page.png`        | Product          | Desktop  | LTR       |
| `V2_Product Page_RTL.png`    | Product          | Desktop  | RTL       |
| `V2_Product page_mobile.png` | Product          | Mobile   | LTR       |
| `V2_Service.png`             | Service          | Desktop  | LTR       |
| `V2_Service_RTL.png`         | Service          | Desktop  | RTL       |
| `V2_Service_mobile.png`      | Service          | Mobile   | LTR       |
| `V2_Country_RTL.png`         | Country selector | Desktop  | RTL       |
| `V2_Country_mobile.png`      | Country selector | Mobile   | LTR       |
| `V2_Forms_RTL.png`           | Forms            | Desktop  | RTL       |
| `V2_Forms_mobile.png`        | Forms            | Mobile   | LTR       |

## Derived Assets

- `reference-thumbnails/` contains lightweight PNG thumbnails for fast review.
- `reference-thumbnails/v2-contact-sheet.png` gives a quick overview of all V2
  screens.
- `gwm-v2-design-tokens.json` contains machine-readable design tokens mirrored
  by `packages/shared/src/brand.ts` and `apps/web/app/brand.css`.

## Usage Rules

- Use the original PNG files for final pixel comparison.
- Use thumbnails only for orientation, planning and quick handoff review.
- Do not ship source screenshots as production imagery unless licensing is
  confirmed.
- Future page work must cite the matching V2 source screen in its visual QA
  notes.
