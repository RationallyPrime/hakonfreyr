# Hákon Freyr — portfolio

Source for [hakonfreyr.com](https://hakonfreyr.com), Hákon Freyr Gunnarsson's personal portfolio and companion to his CV. The site presents projects, engineering evidence, experience, skills, education and contact details.

## Stack

- Next.js 16, React 19 and TypeScript.
- Tailwind CSS 4.
- Static export to `out/`, hosted on Amazon S3 behind CloudFront.
- pnpm 10 and Node.js 22, matching the deployment workflow.

## Local development

Install Node.js 22 and pnpm 10, then run:

```sh
git clone https://github.com/RationallyPrime/hakonfreyr.git
cd hakonfreyr
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Next.js.

## Production build

```sh
pnpm build
```

The build produces the static site in `out/`. There is no production Next.js server: `next.config.ts` enables `output: 'export'`, trailing slashes and unoptimised images. Deploy the exported files to static hosting.

## Content and layout

| Path | Purpose |
| --- | --- |
| `src/data/portfolio.ts` | Shared portfolio content; keep claims and metrics aligned with the CV. |
| `src/app/page.tsx` | Homepage. |
| `src/app/projects/[slug]/page.tsx` | Project detail pages at `/projects/<slug>/`. |
| `src/app/layout.tsx` | Shared application layout. |
| `src/app/globals.css` and `src/app/sheet.css` | Site styles. |
| `public/` | Static assets, including the published CV PDF. |
| `cv/Hakon-Freyr-Gunnarsson-CV.html` | CV source. |
| [PRODUCT.md](PRODUCT.md) | Audience, positioning, content requirements and evidence. |
| [DESIGN.md](DESIGN.md) | Design guidance. |

The CV PDF is generated separately from its HTML source using headless Chrome with `--no-pdf-header-footer` and `--print-to-pdf`, and saved as `public/Hakon-Freyr-Gunnarsson-CV.pdf`. The site build does not regenerate it.

## Deployment

[The main deployment workflow](.github/workflows/upload-to-s3.yaml) runs on every push to `main`. It:

1. Installs Node.js 22 and pnpm 10.
2. Installs dependencies from the lockfile and builds the static export.
3. Syncs `out/` to the configured S3 bucket.
4. Invalidates the CloudFront cache.

The workflow requires these repository Actions secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`

The S3 bucket and CloudFront distribution must already exist. The deployment identity needs permission to list the bucket, upload and delete objects, and create CloudFront invalidations.

### Residual Modeling explorer

The main deployment preserves `residual-modeling` and `projects/residual-modeling/explorer`, including their contents, rather than deleting or replacing those separately managed assets.

[The explorer deployment workflow](.github/workflows/deploy-residual-modeling.yaml) is manually dispatched with a release tag and the SHA-256 digest of a reviewed `residual-modeling-site.zip` release asset. It verifies the archive, publishes only `/projects/residual-modeling/explorer`, and invalidates that application's CloudFront paths.
