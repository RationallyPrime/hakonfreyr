---
name: Hákon Freyr Gunnarsson — Drawing Set
description: The portfolio as an engineering drawing set; every project is a sheet and every claim is a dimensioned figure.
colors:
  film: "#edf6f8"
  grid: "rgb(64 128 190 / 0.13)"
  graphite: "#353d42"
  graphite-soft: "#5d666c"
  drafting: "#1f5ec4"
  revision: "#d6322b"
  tint: "#dbe8ef"
typography:
  display:
    fontFamily: "'League Gothic', 'Arial Narrow', sans-serif"
    fontSize: "calc(var(--u) * 301)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0"
    fontVariation: "'wdth' 75"
  headline:
    fontFamily: "'League Gothic', 'Arial Narrow', sans-serif"
    fontSize: "max(56px, calc(var(--s) * 150))"
    fontWeight: 400
    lineHeight: 1
    fontVariation: "'wdth' 85"
  figure:
    fontFamily: "'League Gothic', 'Arial Narrow', sans-serif"
    fontSize: "max(30px, calc(var(--s) * 52))"
    fontWeight: 400
    lineHeight: 1
    fontVariation: "'wdth' 85"
  index-caption:
    fontFamily: "'Barlow Semi Condensed', 'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "calc(var(--u) * 66)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  thesis:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "calc(var(--u) * 48)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.008em"
  title:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "max(18px, calc(var(--s) * 30))"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "max(16px, calc(var(--s) * 24))"
    fontWeight: 500
    lineHeight: 1.35
  label:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "max(15px, calc(var(--s) * 22))"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.1em"
  label-field:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "max(10px, calc(var(--s) * 12))"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  circle: "50%"
spacing:
  rule: "1.5px"
  hairline: "1px"
  sheet-gap: "calc(var(--s) * 56)"
  sheet-pad-block: "calc(var(--s) * 44)"
  sheet-pad-inline: "calc(var(--s) * 52)"
  sheet-pad-foot: "calc(var(--s) * 132)"
  column-gap: "calc(var(--s) * 64)"
  stack: "calc(var(--s) * 40)"
  side-column: "calc(var(--s) * 560)"
  phone-gutter: "12px"
  phone-sheet-pad: "20px 16px 24px"
components:
  nav-strip:
    backgroundColor: "{colors.film}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
    height: "calc(var(--u) * 56)"
    padding: "0 calc(var(--u) * 27)"
  index-row-link:
    textColor: "{colors.drafting}"
    height: "calc(var(--u) * 76)"
  index-header:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.graphite}"
    height: "calc(var(--u) * 56)"
  sheet-title:
    textColor: "{colors.graphite}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "calc(var(--s) * 4) calc(var(--s) * 28) 0"
  dimension-figure:
    textColor: "{colors.drafting}"
    typography: "{typography.figure}"
  locator-bubble:
    backgroundColor: "{colors.film}"
    textColor: "{colors.drafting}"
    rounded: "{rounded.circle}"
    size: "max(28px, calc(var(--s) * 44))"
  locator-bubble-hover:
    backgroundColor: "{colors.drafting}"
    textColor: "{colors.film}"
  title-block:
    backgroundColor: "{colors.film}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
    padding: "calc(var(--s) * 8) calc(var(--s) * 16)"
  parts-header:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.graphite}"
    padding: "calc(var(--s) * 12) calc(var(--s) * 18)"
  materials-chip:
    backgroundColor: "{colors.film}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
    padding: "2px 10px"
---

# Design System: Hákon Freyr Gunnarsson — Drawing Set

## Overview

**Creative North Star: "The Drawing Set"**

The site is the drawing set for the systems Hákon builds. The home page is a bound set of sheets: a cover sheet carrying the name, a drawing index and a key plan, then one sheet per body of work (Krates, the Weave, Homegrown Hero Films, Experience), and a contact strip. Each project detail page is a further detail sheet in the same set. Every sheet is a ruled frame on drafting film with zone markers on its border and a title block in its lower-right corner, and every measured claim is drawn as a dimension line with its value.

The world is cool and exact. Cool white drafting film lies over a faint blue grid. Graphite technical-pen linework does almost all of the work, drafting blue is the ink of measurement and reference, and a single red revision cloud marks the row the reader is looking at. Type is heavy condensed technical capitals for names, sheet titles and figures, over a narrow grotesque for everything a draughtsman would letter by hand: notes, labels, tables, field names. Density is high but ordered, like a real sheet: tables, notes and drawings sit in a strict two-column arrangement that collapses to one column on a phone.

Illustration is technical: isometric and exploded line plates of the Krates appliance, multiplied onto the film so the grid shows through, and real film stills framed as elevations with their pixel dimensions. Plates carry no text; the page draws every label, locator and figure in code.

**Key Characteristics:**
- Drafting-film ground with a 20-comp-pixel blue grid, never a flat colour field.
- Graphite linework at two weights (1.5px rule, 1px hairline) and double-ruled sheet borders.
- Drafting blue only where something is measured, referenced, linked or focused.
- One red revision cloud, as a state, never as decoration.
- Condensed capitals at 75% and 85% width; narrow Barlow for all lettering.
- Desktop geometry in comp pixels, so the cover reproduces the approved 1586 × 992 sheet at any size.
- Dimension lines that draw themselves in once per sheet.

## Colors

A cool, near-monochrome drafting palette: film and graphite carry the page, one blue measures, one red revises.

### Primary
- **Drafting Blue** (`drafting`): the ink of measurement and reference. Dimension lines and their extension ticks, dimension figures, the dashed loop and arrowheads on the Weave drawing, locator bubbles, film-frame dimensions, every inline link, the focus ring and the text selection. It is never a fill for a surface; the one exception is the hovered locator bubble, which inverts to blue with film-coloured numerals.

### Secondary
- **Revision Red** (`revision`): the revision cloud and nothing else. Drawn as a 2.25px stroke around the current index row. Its contrast on film (4.4:1) is fine for linework and is the reason it never carries text.

### Neutral
- **Drafting Film** (`film`): the ground of the page, the fill of every framed element (nav strip, index table, title block, bubbles, loop nodes) so linework reads cleanly over the grid. Sheets use the same film at 55% opacity so the grid ghosts through; parts-list cells at 70%.
- **Grid Blue** (`grid`): the 1px drafting grid on the body, at 13% opacity. Cell size is 20 comp pixels with a 16px floor.
- **Graphite** (`graphite`): primary text and primary linework — sheet borders, the name, sheet titles, table outlines, corner crosses of the zone markers (10.1:1 on film).
- **Soft Graphite** (`graphite-soft`): secondary linework and secondary text — inner border rules, row dividers, zone-marker ticks, title-block field names, item numbers and periods (5.3:1 on film, 4.7:1 on tint).
- **Header Tint** (`tint`): the header band of the drawing index and of every parts list. It is the only tonal fill besides film.

### Named Rules
**The One Cloud Rule.** Revision Red appears only as the revision cloud, and only one cloud is visible at a time. It sits on the current row by default and moves to the row the reader hovers or focuses; the default cloud hides while another row holds it.

**The Measurement Ink Rule.** If a mark is blue, it measures, locates, links or shows focus. Body text, headings and structural rules are graphite.

## Typography

**Display Font:** League Gothic (variable width axis, self-hosted), with Arial Narrow fallback
**Body Font:** Barlow Condensed 500, 600 and 700 (self-hosted), with Arial Narrow fallback
**Caption Font:** Barlow Semi Condensed 800, used only for the DRAWING INDEX caption

**Character:** Engineering capitals over hand lettering. League Gothic, narrowed on its width axis and thickened with a text stroke, gives the dense stencil-like titling of a title sheet; Barlow Condensed reads as neat technical lettering at every size from a 10px field name to a 48-comp-pixel thesis.

### Hierarchy
- **Display** (League Gothic 400 at 75% width, 301 comp px ≈ a fifth of the cover height, line-height 1, uppercase, 3-comp-px graphite stroke): the name on the cover sheet only, one line across the full sheet width. On phones it wraps at `(100vw − 56px) / 2.55` with a 1px stroke and 0.92 line-height.
- **Headline** (League Gothic 400 at 85% width, 150 comp px with a 56px floor, uppercase, 2-comp-px stroke, boxed by a 1.5px graphite rule): sheet titles. 52px on phones. The contact strip's title uses the same face at 110 comp px.
- **Figure** (League Gothic 400 at 85% width in Drafting Blue, 52 comp px with a 30px floor; 42 comp px when laid directly on a drawing): the value of every dimensioned figure. Film-frame captions and loop-node numerals use the same face in graphite.
- **Index caption** (Barlow Semi Condensed 800, 66 comp px, uppercase, 0.01em tracking, 0.12em word spacing): the DRAWING INDEX caption, matched to the approved comp's wider heavy lettering.
- **Thesis** (Barlow Condensed 500, 48 comp px, line-height 1.2): the one line under the name. 21px on phones.
- **Title / lede** (Barlow Condensed 500, 30 comp px with an 18px floor, line-height 1.3, max 900 comp px wide): the paragraph beside each sheet title.
- **Body** (Barlow Condensed 500, 24 comp px with a 16px floor, line-height 1.35): general notes, dimension labels, legend text. Index rows run at 38 comp px.
- **Label** (Barlow Condensed 700, 22 comp px with a 15px floor, 0.1em tracking, uppercase): note headings and table captions. Table headers use 700 at 18 comp px and 0.08em; index headers 600 at 32 comp px and 0.06em.
- **Field label** (Barlow Condensed 600, 12 comp px with a 10px floor, 0.12em tracking, uppercase, Soft Graphite): title-block and contact field names, above an uppercase 700 value at 18 comp px.

Tables and the index set numerals tabular (`font-variant-numeric: tabular-nums`).

### Named Rules
**The Two Widths Rule.** League Gothic runs at exactly two widths: 75% for the name, 85% for sheet titles and figures. No other width, no other display face.

**The One Caption Rule.** Barlow Semi Condensed 800 sets the DRAWING INDEX caption and nothing else. All other lettering is Barlow Condensed at 500 (reading), 600 (links, nav, field names) or 700 (labels, headers).

## Layout

**The comp-pixel unit.** All desktop geometry is written in comp pixels. `--u` is one pixel of the approved 1586 × 992 cover, scaled to fit the viewport: `min(100vw / 1586, 100svh / 992)`. The cover is an absolutely positioned 1586 × 992 sheet in that unit, so the first viewport reproduces the comp at any desktop size. Sheets below the cover reuse the unit as `--s` (currently identical to `--u`) and are 1570 comp px wide, centred. Text sizes that would become unreadable on small screens carry a pixel floor through `max(<px>, calc(var(--s) * n))`.

**The cover sheet.** Nav strip across the top (56 comp px), the name below it, the thesis line, a double rule at 468 comp px, then the lower half: the drawing index on the left (984 comp px) and the key plan with four locator bubbles on the right, with the one-line cover title block under the key plan.

**Sheets.** Each sheet is a framed section 56 comp px below the last, padded 44 / 52 / 132 comp px (the deep foot holds the title block). The head is a two-column grid: boxed title, then lede, over a soft-graphite rule. Bodies use one of three arrangements: drawing + side column (drawing fluid, side column 560 comp px, 64 comp px gap), an elevation of three frames with a two-up row of dimensions and notes, or stacked parts lists with a two-up row. Detail sheets use the drawing + side column arrangement with notes in the main column and figures, materials and links on the side.

**Responsive.** One breakpoint, 860px. Below it `--u` becomes `100vw / 1586`, the cover drops absolute positioning and becomes a single-column flex stack in a 12px gutter, every sheet and the contact strip reflow to one column (12px outer margin, 20 / 16 / 24px padding), side-by-side dimensions move above and below their drawing as horizontal lines, the film elevation becomes a horizontal scroll-snap strip at 72% card width, the parts list reflows to one record per organisation, and the title block becomes a two-column grid with the Project field spanning the top.

**The Comp Pixel Rule.** Desktop sizes are multiples of `--u` / `--s`, never free pixels, so the set scales as one drawing. Pixel values appear only as legibility floors inside `max()` and inside the 860px phone layout.

## Elevation & Depth

The system is flat. Depth is drafted, not lit: a framed element reads as raised because it is ruled, filled with film and laid over the grid. Sheet frames are double-ruled — a 1.5px graphite border with a 1px soft-graphite line inset 5 comp px (cover) or 6 comp px (sheets) — drawn with inset box-shadows, which are rule lines and never cast light. Plates are multiplied onto the film so their white drops out and the grid runs through the drawing.

**The No-Light Rule.** No drop shadows, glows, gradients or blur anywhere. If something needs to stand forward, rule it and fill it with film.

## Shapes

Every rectangle is square-cornered (0px radius): frames, nav strip, index, title blocks, tables, chips, film frames. Circles (50%) are reserved for drawing symbols — locator bubbles, legend bubbles, loop nodes and the loop's dashed path. The revision cloud is the only irregular outline: a closed run of shallow outward arcs with deliberately uneven bumps, drawn as an SVG stretched over its row with a non-scaling stroke.

Every sheet frame and the cover frame carry **zone markers** just outside the border: centre ticks and quarter ticks in Soft Graphite on all four sides, and corner crosses in Graphite.

## Components

### Navigation
Drafted, quiet, always the same strip.
- **Style:** a 1.5px graphite ruled strip filled with film; the display name on the left in Barlow Condensed 500, links on the right in 600.
- **Links:** graphite text with a 2px Drafting Blue underline; hover turns the text blue; focus shows the 2px blue outline at 3px offset.
- **Mobile:** wraps; name 20px, links 17px with a 16px gap.
- **Detail pages:** the same strip as a free-standing header above the detail sheet, with "Cover sheet" in place of "Work".

### Drawing index (signature)
The cover's table of contents, set as a drawing schedule.
- **Structure:** heavy DRAWING INDEX caption, a tinted header row (Sheet / Title / Key dimension), then one row per sheet with a centred sheet number, an uppercase blue underlined title link and a key dimension.
- **Rules:** 1.5px graphite outline; soft-graphite column and row dividers.
- **State:** the revision cloud (below).

### Revision cloud (signature)
A state, not ornament. Drawn around the current row (`data-current`) by default; moves to any row that is hovered or focused, and the default cloud fades out while another row holds it. Fades over 160ms; instant under reduced motion. 2.25px Revision Red stroke, round joins.

### Key plan and locator bubbles
An isometric line plate of the appliance with blue leader lines; the page draws numbered circular locators (2px blue ring, film fill, blue numerals) that link to each sheet. Locators are sheet locators, not claims about which hardware part a project lives in. Hover inverts the bubble to a blue fill with film numerals. Legend bubbles on the Krates sheet use the same symbol inline.

### Sheet frame
- **Frame:** double rule (see Elevation), film at 55%, zone markers outside the border.
- **Head:** headline-boxed title, lede beside it, soft-graphite rule under both.
- **Title block:** lower-right, a ruled five-cell strip — Project / Sheet / Title / Scale (N.T.S.) / Rev — with soft-graphite field names over uppercase 700 values. Home sheets number "2 / 5" to "5 / 5"; detail sheets letter "Detail A" onward. The cover carries a one-line strip instead: "Cover sheet · Sheet 1 of 5 · Rev 2026-10 · Drawn H.F.G.".

### Dimension (signature)
Every measured figure is a dimension: a 2px Drafting Blue line with 18px extension ticks at both ends, and the value in the figure face followed by its label in body text. In a list (`.dims`) the line sits above its text; laid on a drawing it runs along the top, bottom or left edge of the plate (vertical on the left, text rotated) and spans the dimension it describes. On phones every laid dimension becomes a horizontal line above or below the drawing.
- **Draw-in:** when a sheet is first 25% into the viewport it is marked drawn and its dimension lines scale from 0 to full length over 700ms (`cubic-bezier(0.2, 0.7, 0.2, 1)`), staggered 90ms per line. It runs once per sheet. Without JavaScript, and under `prefers-reduced-motion: reduce`, every line renders fully drawn.

### General notes
A drafting notes block: a Label heading ("General notes", "Construction notes") over a decimal-numbered list in body text.

### Film elevation
Real stills framed as 9:16 elevations with a 1.5px graphite border, Drafting Blue width and height dimensions (1080 / 1920) drawn above and beside each frame, and an uppercase figure-face caption.

### Parts lists
Experience, related drawings, education and materials as drafting schedules: hairline soft-graphite cell borders, film-tinted cells, a tinted uppercase header, bold row headers and blue underlined links.

### Materials chips
On detail sheets, the tech stack as square hairline-ruled tags (1px soft graphite, film fill, Barlow Condensed 600).

### Contact strip
A ruled film strip closing every page: the Contact title in the headline face beside a five-cell ruled list (Email, Phone, Code, CV, Location) with field-label names and blue links.

## Do's and Don'ts

### Do:
- **Do** frame every sheet with the double rule, zone markers and a lower-right title block (Project / Sheet / Title / Scale N.T.S. / Rev).
- **Do** draw every measured figure as a dimension line: blue line with extension ticks, value in the figure face, label in body text.
- **Do** keep Drafting Blue to measurement, location, links and focus, and keep Revision Red to the single revision cloud.
- **Do** write desktop sizes in comp pixels (`--u` on the cover, `--s` on sheets) with a `max()` pixel floor wherever text could fall below legibility.
- **Do** multiply text-free line plates onto the film and draw labels, locators and figures in code.
- **Do** let a hovered or focused row take the revision cloud, and let the current row hold it otherwise.
- **Do** reflow to one column at 860px and move laid dimensions above and below their drawing.

### Don't:
- **Don't** present projects as a hero over a grid of screenshot cards; a project is a sheet.
- **Don't** use Revision Red for text, fills, badges or a fixed ornament, and never show two clouds at once.
- **Don't** add drop shadows, glows, gradients or rounded rectangles; circles are for drawing symbols only.
- **Don't** set League Gothic at any width but 75% or 85%, or introduce another display face.
- **Don't** bake text, labels or locator numbers into a plate.
- **Don't** animate anything beyond the once-per-sheet dimension draw-in and the cloud fade, and honour reduced motion for both.
