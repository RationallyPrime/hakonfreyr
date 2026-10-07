# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Hiring managers and technical reviewers (about 70% of the weighting).** In October 2026 these are the reviewers for the AI-engineering roles Hákon is applying to (Alfreð, atNorth, 50skills). They click through from the CV or an application with about 90 seconds to spare. Their job is to decide whether this person can ship production AI systems and work inside a team, and then to find depth when they want it.
- **Krates prospects and funders (about 30%).** These are Rannís and EIC Accelerator reviewers and Icelandic enterprise buyers. Their job is to judge whether the founder behind Krates can build what Krates promises.

## Product Purpose

hakonfreyr.com is Hákon Freyr Gunnarsson's personal portfolio. It is the CV's companion: the CV makes claims, and the site lets a reader inspect the work behind them, project by project. It succeeds when a reviewer leaves convinced that Hákon builds trustworthy production AI systems, and can name at least one concrete thing he built and why it is unusual.

## Positioning

Hákon is an AI engineer and founder whose systems put correctness in the architecture, not in the prompt. Two facts are his alone. He designed and leads an engineering team of AI agents (the Weave) that builds his company's software, and that team is measured as a team would be (velocity, review coverage, reverts, unit cost). And his background spans mathematics, statistics (deCODE genetics), finance, travel and enterprise software, each a domain he learned within months.

## Operating Context

- Readers arrive from links in the CV PDF, job applications and email signatures. Some are on a phone, others on a desktop between other candidates.
- The site is a static Next.js 16 export (`output: 'export'`, `trailingSlash: true`) on S3 and CloudFront. Every push to `main` of RationallyPrime/hakonfreyr deploys through a GitHub Action.
- `src/data/portfolio.ts` is the single source of content, and it must stay in sync with the CV (`~/Downloads/Hakon-Freyr-Gunnarsson-CV-2026-10.html`).
- Routes: `/` (home) and `/projects/<slug>/` (one page per project).

## Capabilities and Constraints

- The site is static, with no server runtime: no forms backend and no analytics beyond what CloudFront provides.
- Pages: home (summary, projects, experience, skills, education, contact) and one detail page per project (overview, highlights, metrics, architecture notes, links).
- Projects in order: Sókrates, Krepis, the Weave, Homegrown Hero Films, Memory Palace, Grimoire, Sókrates IDR, Autopod.
- The site is in English. An Icelandic version is undecided.

## Brand Commitments

- The name is Hákon Freyr Gunnarsson (display name Hákon Freyr), and the title is "AI Engineer · Founder of Krates ehf." Contact is hakon@sokrates.is, +354 660-9570 and github.com/RationallyPrime.
- Voice rules:
  - Write plainly, positive first, and confidently, with no hedging.
  - State measured numbers with their time window ("106 merged changes a week, July to mid-September 2026"). Never use vague bounds such as "under 300" or "four in five". Hákon's rule is "vague is not measured".
  - No line counts or test counts as achievements.
- Krates products: Sókrates (on-premises AI department), Krepis (agent-first back-office kernels) and the Weave (the AI engineering team).

## Evidence on Hand

Hákon has approved using anything likely to be of value.

- **Weave metrics,** measured 2026-10-07:
  - 106 merged changes a week (July to mid-September 2026).
  - 94% of code changes independently reviewed before merge (September).
  - Reviewers found issues in 83% of the changes they reviewed.
  - 0.14% of merged changes reverted.
  - 250 ISK ($2) of subscription cost per merged change.
  - 40 standard operating procedures holding 414 recorded lessons.
- **Track-record metrics:**
  - 0.42% cash-flow forecast error on 2.4B ISK, six months out (Travelshift).
  - Unreconcilable payment transactions cut from 1 in 35 to under 1 in 1,000.
  - Booking contractors cut from 7 to 2.
  - Better than 10× compression versus gzip for haplotype data (deCODE).
  - Fabric onboarding cut from about three weeks to half a workday (Wise).
- **Homegrown Hero Films:** published films on YouTube (@homegrown-hero-films) and homegrownherofilms.com. Stills and clips live in `~/Projects/Diffusion-Fun/deliveries/`.
- **Public repositories:** github.com/Skrates/found-family (Memory Palace) and github.com/RationallyPrime/ComfyUI-H3Forge.
- **Architecture material** for Sókrates and Krepis lives in the sokrates and krepis repositories. Customer names never appear.
- **Absences that must not be fabricated:** no testimonials, no customer logos, no pilot results, no revenue figures, and no Krates user counts. Krates pilots are unpaid and ongoing.

## Product Principles

1. **Show the work, not the adjectives.** Every claim on the site links to an artefact, a number with its window, or an architecture note.
2. **Krates is the centrepiece, framed as engineering proof.** A hiring manager should see it as evidence of what he can build for them, not as a reason he is unavailable.
3. **Depth on demand.** Credibility in the first viewport; architecture detail one click away for a technical reader.
4. **The site obeys its own thesis.** It is correct by construction: one content source, static, fast and accessible.

## Accessibility & Inclusion

Aim for WCAG 2.2 AA. Readers include non-native English speakers and phone users.
