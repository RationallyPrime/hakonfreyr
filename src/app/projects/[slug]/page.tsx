import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Eyebrow } from '@/components/elements/eyebrow'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import {
  Feature,
  FeaturesWithLargeDemo,
} from '@/components/sections/features-with-large-demo'
import { HeroSimpleLeftAligned } from '@/components/sections/hero-simple-left-aligned'
import {
  Stat,
  StatsThreeColumnWithDescription,
} from '@/components/sections/stats-three-column-with-description'
import { featuredProjects } from '@/data/portfolio'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // For static export, we need synchronous access — use a workaround
  // Next.js will resolve this at build time
  return params.then(({ slug }) => {
    const project = featuredProjects.find((p) => p.slug === slug)
    if (!project) return { title: 'Project not found' }
    return {
      title: `${project.name} — ${project.subtitle}`,
      description: project.description,
    }
  })
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = featuredProjects.find((p) => p.slug === slug)

  if (!project) notFound()

  const techs = project.techStack.split(',').map((t) => t.trim())

  return (
    <>
      {/* Hero */}
      <HeroSimpleLeftAligned
        eyebrow={<Eyebrow>Featured project</Eyebrow>}
        headline={project.name}
        subheadline={
          <>
            <p>{project.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex rounded-full bg-mist-950/5 px-3 py-1 text-xs/5 font-medium text-mist-700 dark:bg-white/10 dark:text-mist-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        }
        cta={
          <div className="flex flex-wrap items-center gap-4">
            {project.githubUrl && (
              <ButtonLink href={project.githubUrl} target="_blank">
                GitHub {project.githubLabel && `(${project.githubLabel})`}
              </ButtonLink>
            )}
            <PlainButtonLink href="/#projects">
              &larr; Back to projects
            </PlainButtonLink>
          </div>
        }
      />

      {/* Metrics + Long Description */}
      {project.metrics && (
        <StatsThreeColumnWithDescription
          heading={project.name}
          description={<p>{project.longDescription}</p>}
        >
          {project.metrics.map((m) => (
            <Stat key={m.stat} stat={m.stat} text={m.text} />
          ))}
        </StatsThreeColumnWithDescription>
      )}

      {/* Architecture / Highlights */}
      <FeaturesWithLargeDemo
        eyebrow="Architecture"
        headline="Technical highlights."
        features={
          <>
            {project.highlights.map((h, i) => (
              <Feature
                key={i}
                headline={getHighlightTitle(h)}
                subheadline={<p>{getHighlightBody(h)}</p>}
              />
            ))}
            {project.architectureNotes?.map((note, i) => (
              <Feature
                key={`arch-${i}`}
                headline={getHighlightTitle(note)}
                subheadline={<p>{getHighlightBody(note)}</p>}
              />
            ))}
          </>
        }
      />

      {/* Back CTA */}
      <CallToActionSimpleCentered
        headline="View more projects."
        subheadline={
          <p>
            Every project exhibits the same design principles: clean separation of concerns,
            protocol-based extensibility, and comprehensive observability.
          </p>
        }
        cta={
          <ButtonLink href="/#projects">
            All projects &rarr;
          </ButtonLink>
        }
      />
    </>
  )
}

/** Extract a short title from a highlight string (text before the first colon, or first ~4 words) */
function getHighlightTitle(text: string): string {
  const colonIdx = text.indexOf(':')
  if (colonIdx > 0 && colonIdx < 60) {
    return text.slice(0, colonIdx)
  }
  return text.split(' ').slice(0, 5).join(' ')
}

/** Extract the body of a highlight (text after the first colon, or the full text) */
function getHighlightBody(text: string): string {
  const colonIdx = text.indexOf(':')
  if (colonIdx > 0 && colonIdx < 60) {
    return text.slice(colonIdx + 1).trim()
  }
  return text
}
