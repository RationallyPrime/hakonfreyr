# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Hiring managers and technical reviewers (about 70% of the weighting).** In November 2026 these include reviewers for the data and AI specialist role at Ljósleiðarinn and the AI solutions developer role at KPMG Law. They click through from the CV or an application with about 90 seconds to spare. Their job is to decide whether this person can ship production AI systems and work inside a team, and then to find depth when they want it.
- **Krates reviewers (about 30%).** These are Rannís and EIC Accelerator reviewers and others who look at Krates. The Krates build is complete and verified. The company is on hold while Hákon works full time.

## Product Purpose

hakonfreyr.com is Hákon Freyr Gunnarsson's personal portfolio. It is the CV's companion: the CV makes claims, and the site lets a reader inspect the work behind them, project by project. It succeeds when a reviewer leaves convinced that Hákon builds trustworthy production AI systems, and can name at least one concrete thing he built and why it is unusual.

## Positioning

Hákon is an AI engineer whose systems put correctness in the architecture, not in the prompt. From March to October 2026 he ran a build sprint at his own company, Krates, that took back-office software through a blind verification of a simulated guesthouse’s monthly operations. The company is on hold while he works full time. Two facts are his alone. He designed and leads an engineering team of AI agents (the Weave) that builds his company's software, and that team is measured as a team would be (velocity, review coverage, reverts, unit cost). And his background spans mathematics, statistics (deCODE genetics), finance, travel and enterprise software, each a domain he learned within months.

## Operating Context

- Readers arrive from links in the CV PDF, job applications and email signatures. Some are on a phone, others on a desktop between other candidates.
- The site is a static Next.js 16 export (`output: 'export'`, `trailingSlash: true`) on S3 and CloudFront. Every push to `main` of RationallyPrime/hakonfreyr deploys through a GitHub Action.
- `src/data/portfolio.ts` is the single source of content, and it must stay in sync with the CV. The CV's source is `cv/Hakon-Freyr-Gunnarsson-CV.html` in this repository; render it to `public/Hakon-Freyr-Gunnarsson-CV.pdf` with headless Chrome (`--headless --no-pdf-header-footer --print-to-pdf`). The CV keeps the claims and headline numbers and links each one to its project page; the site carries the mechanism.
- Routes: `/` (home) and `/projects/<slug>/` (one page per project).

## Capabilities and Constraints

- The site is static, with no server runtime: no forms backend and no analytics beyond what CloudFront provides.
- Pages: home (summary, projects, experience, skills, education, contact) and one detail page per project (overview, highlights, metrics, architecture notes, links).
- The cover index and related drawings lead with the CV’s five selected projects, in order: Residual Modeling, ConceptStudio, H3Forge, Sókrates IDR and Autopod. The existing Homegrown Hero Films project URL carries the H3Forge project and its use in production. Krates, the Weave, H3Forge, ConceptStudio and experience keep their numbered home sheets. Hive, Memory Palace and Grimoire retain their detail pages. ConceptStudio's detail page lives at `/projects/ConceptStudio/` (the slug keeps the product's capitalisation).
- The site is in English. An Icelandic version is undecided.

## Brand Commitments

- The name is Hákon Freyr Gunnarsson (display name Hákon Freyr), the title is "AI Engineer", and the cover sheet's status is "Open to full-time roles". On the CV the Krates role is "Founder & Lead Engineer · Krates ehf." Personal contact is rationallyprime@gmail.com, +354 660-9570 and github.com/RationallyPrime.
- Voice rules:
  - Write plainly, positive first, and confidently, with no hedging.
  - State measured numbers with their time window ("106 merged changes a week, July to mid-September 2026"). Never use vague bounds such as "under 300" or "four in five". Hákon's rule is "vague is not measured".
  - No line counts or test counts as achievements.
- Krates products: Sókrates (on-premises AI department), Krepis (agent-first back-office kernels) and the Weave (the AI engineering team).

## Evidence on Hand

Hákon has approved using anything likely to be of value.

- **Weave metrics,** measured 2026-10-07:
  - 106 merged changes a week (July to mid-September 2026).
  - Every code change is reviewed by a second agent before merge. Prose-only pull requests have no code to review.
  - Reviewers found issues in 83% of the changes they reviewed.
  - 0.14% of merged changes reverted.
  - 250 ISK ($2) of subscription cost per merged change.
  - 40 standard operating procedures holding 414 recorded lessons.
- **Throughput.** 1,742 pull requests merged from March through October 2026 across RationallyPrime and Skrates, excluding Dependabot. Measured 24 November 2026.
- **Krepis.** Three parties independently prepared the expected results, ran the system blind and compared the figures for Northlight House. The first run overstated gross pay by 42,000 ISK. After five product fixes, the same September facts yielded 4,913 comparisons with zero differences. The case uses invented pay policies. [Hosted Northlight House case file](public/case-files/northlight-house-september-2026.html) · [Original on Claude](https://claude.ai/artifact/2s9dS11CxGsqxFBVUG3Akr)
- **ConceptStudio.** The Shots workspace stages and exports a shot from one deterministic evaluator. A 124-frame shot exported in 1.64 seconds on an M4. The Swift port of Blockout matched the original within 8.9e-16 across eight scenes. Describe the workspace on main without assigning it a release version. [Source](https://github.com/RationallyPrime/concept-studio)
- **H3Forge.** A 60.4-second take with synchronised sound rendered in one pass under 50 GB. The picture hand-over reduced measured overlap flicker from 0.49 to 0.03. The audio hand-over recovered two seconds of dialogue at the join. [Source](https://github.com/RationallyPrime/ComfyUI-H3Forge)
- **Sókrates IDR.** Hákon built a working research and drafting platform for Icelandic law in 2025. Its graph connects verdicts, statute articles and regulations to the drafting workspace. Describe the working software without claiming a launch or users.
- **Track-record metrics:**
  - 0.42% cash-flow forecast error on 2.4B ISK, six months out (Travelshift).
  - Unreconcilable payment transactions cut from 1 in 35 to under 1 in 1,000.
  - Booking contractors cut from 7 to 2.
  - Better than 10× compression versus gzip for haplotype data (deCODE).
  - Fabric onboarding cut from about three weeks to half a workday (Wise).
- **Homegrown Hero Films:** published films on YouTube (@homegrown-hero-films) and homegrownherofilms.com. Stills and clips live in `~/Projects/Diffusion-Fun/deliveries/`.
- **Public repositories:** github.com/Skrates/found-family (Memory Palace) and github.com/RationallyPrime/ComfyUI-H3Forge.
- **Architecture material** for Sókrates and Krepis lives in the sokrates and krepis repositories. Customer names never appear.
- **Absences that must not be fabricated:** no testimonials, no customer logos, no revenue figures, and no Krates user counts.
- **Launch language stays out:** no framing of Krates as a product sold to Icelandic enterprises. Krates is a completed build sprint (March to October 2026) and the company is on hold while Hákon works full time.

## Product Principles

1. **Show the work, not the adjectives.** Every claim on the site links to an artefact, a number with its window, or an architecture note.
2. **Krates is a finished build, framed as engineering proof.** A hiring manager should see it as evidence of what he can build for them, not as a reason he is unavailable. The Krates sheet carries its revision note (Rev 2026-11: build complete and verified, company on hold).
3. **Depth on demand.** Credibility in the first viewport; architecture detail one click away for a technical reader.
4. **The site obeys its own thesis.** It is correct by construction: one content source, static, fast and accessible.

## Accessibility & Inclusion

Aim for WCAG 2.2 AA. Readers include non-native English speakers and phone users.
