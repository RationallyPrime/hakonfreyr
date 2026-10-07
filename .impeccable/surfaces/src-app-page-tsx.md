---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/projects/[slug]/page.tsx"]
---

# Surface brief: home (hakonfreyr.com /)

## Scope and mode
Home page plus the project detail pages that inherit its world. Visitor mode: Experience (portfolio). The first viewport must still read like a CV to a hiring manager: who, what, and where to go.

## Audience, job, action, proof, constraints
- Audience: hiring managers (70%), Krates funders and prospects (30%); see PRODUCT.md.
- Job: decide within 90 seconds whether he ships trustworthy AI systems, then find depth.
- Action: open a project sheet, open the CV PDF, or email.
- Proof: the measured figures in PRODUCT.md (Evidence on Hand), real Homegrown Hero film frames, public repos.
- Constraints: static Next.js export; content stays in src/data/portfolio.ts; WCAG 2.2 AA.

## Decision record
- Direction round 2026-10-07, seed key 67fccc59, three rounds. The user locked **Drawing Set** in chat ("either ds full or chart, build both, only the drawing set tonight").
- Decision comps: .impeccable/mocks/decision/ds-full.png (full page) and ds-hero.png (first viewport), rendered by the user's external model from handoff-prompts.md.
- **Admiralty Chart** (.impeccable/mocks/decision/chart.png) is approved for a separate later build. It is not part of this run.

## Direction contract
THESIS: The site is the drawing set for the systems he builds: every project is a sheet, and every claim is a dimensioned figure. It refuses the category default, a hero over a grid of screenshot cards.
OWN-WORLD: The ground is cool white drafting film on a faint blue grid. Graphite technical-pen linework is the main ink. Drafting blue is used only for dimension lines and leader callouts, and one red revision cloud marks the newest figure. Sheet titles use heavy condensed technical capitals, and every sheet has a ruled border with zone markers and a title block in the lower-right corner.
STORY: The visitor learns who he is on sheet 1, sees Krates as a machine drawing, the Weave as a dimensioned loop and the films as real frames, then leaves through the Experience parts list to the CV or email.
FIRST VIEWPORT: As built against the approved comp (ds-comp-3): one sheet with a double-rule border and zone markers, the nav strip on top, the name full width in League Gothic at 75% width, and the thesis line beneath it. Below the sheet rule, the DRAWING INDEX table (sheet, title, key dimension) is the primary action. To its right is a key-plan drawing of the appliance with sheet locators 02–05. A one-line title strip reads "COVER SHEET · SHEET 1 OF 5 · REV 2026-10 · DRAWN H.F.G.".
SIGNATURE: Dimension lines draw themselves in as a sheet enters the viewport. Hovering or focusing an index row moves the red revision cloud onto it.
FORM: Drawing Set (ISO engineering drawing sheets and title blocks), position 1 on the grounded list, kept by the user. Seed key 67fccc59.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Approved comp
- .impeccable/mocks/ds-comp-3.png (Drawing index), approved by Hákon in chat on 2026-10-07 over ds-hero.png and ds-comp-2.png (General arrangement).
- Do not literalize: the red revision cloud is a state (it marks the current or hovered row), not a fixed ornament on the Weave row. The key-plan callouts are sheet locators, not claims that a project lives in that hardware part.

## Unresolved
- Which film frames to use (from ~/Projects/Diffusion-Fun/deliveries, published films only).
- Whether project detail pages become full sheets or keep the current long-form layout under the new world.
