import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { EducationCard, EducationSection } from '@/components/custom/education-section'
import { ExperienceTimeline, TimelineItem } from '@/components/custom/experience-timeline'
import { ProjectPreview } from '@/components/custom/project-preview'
import { ChartBarIcon } from '@/components/icons/chart-bar-icon'
import { ChartLineIcon } from '@/components/icons/chart-line-icon'
import { CloudIcon } from '@/components/icons/cloud-icon'
import { CodeSquareIcon } from '@/components/icons/code-square-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { HardDriveIcon } from '@/components/icons/hard-drive-icon'
import { LockIcon } from '@/components/icons/lock-icon'
import { SparklesIcon } from '@/components/icons/sparkles-icon'
import { Squares2StackedIcon } from '@/components/icons/squares-2-stacked-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import {
  Feature as ProjectCard,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import {
  Feature as SkillFeature,
  FeaturesThreeColumn,
} from '@/components/sections/features-three-column'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { Stat, StatsFourColumns } from '@/components/sections/stats-four-columns'
import {
  education,
  experience,
  featuredProjects,
  personalInfo,
  professionalSummary,
  skills,
  stats,
} from '@/data/portfolio'

const skillIcons: Record<string, React.ReactNode> = {
  'code-square': <CodeSquareIcon />,
  cpu: <CpuIcon />,
  'hard-drive': <HardDriveIcon />,
  cloud: <CloudIcon />,
  'squares-2-stacked': <Squares2StackedIcon />,
  'chart-line': <ChartLineIcon />,
  lock: <LockIcon />,
  sparkles: <SparklesIcon />,
  'chart-bar': <ChartBarIcon />,
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroSimpleCentered
        id="hero"
        headline="Backend Engineer."
        subheadline={<p>{professionalSummary}</p>}
        cta={
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={personalInfo.github} target="_blank" size="lg">
              GitHub
            </ButtonLink>
            <PlainButtonLink href={`mailto:${personalInfo.email}`} size="lg">
              Get in touch &rarr;
            </PlainButtonLink>
          </div>
        }
      />

      {/* Featured Projects */}
      <FeaturesStackedAlternatingWithDemos
        id="projects"
        eyebrow="Featured projects"
        headline="Built to ship."
        subheadline={
          <p>
            Every project exhibits the same design principles: clean separation of concerns,
            protocol-based extensibility, event-driven patterns, and comprehensive observability.
          </p>
        }
        features={
          <>
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.name}
                headline={
                  <>
                    {project.name}{' '}
                    <span className="text-mist-500">— {project.subtitle}</span>
                  </>
                }
                subheadline={
                  <>
                    <p>{project.description}</p>
                    <ul className="list-disc space-y-1 pl-4 text-sm/7">
                      {project.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  </>
                }
                cta={
                  <div>
                    <PlainButtonLink href={`/projects/${project.slug}`}>
                      View project &rarr;
                    </PlainButtonLink>
                  </div>
                }
                demo={
                  <ProjectPreview
                    slug={project.slug}
                    techStack={project.techStack}
                    name={project.name}
                    metrics={project.metrics}
                  />
                }
              />
            ))}
          </>
        }
      />

      {/* Stats */}
      <StatsFourColumns id="stats" eyebrow="By the numbers" headline="Impact across domains.">
        {stats.map((s) => (
          <Stat key={s.stat} stat={s.stat} text={s.text} />
        ))}
      </StatsFourColumns>

      {/* Experience Timeline */}
      <ExperienceTimeline
        id="experience"
        eyebrow="Career"
        headline="Professional experience."
      >
        {experience.map((entry, i) => (
          <TimelineItem
            key={entry.company}
            role={entry.role}
            company={entry.company}
            period={entry.period}
            description={entry.description}
            highlights={entry.highlights}
            isLast={i === experience.length - 1}
          />
        ))}
      </ExperienceTimeline>

      {/* Skills */}
      <FeaturesThreeColumn
        id="skills"
        eyebrow="Technical skills"
        headline="Tools and technologies."
        subheadline={
          <p>Deep experience across the full stack, from architecture to observability.</p>
        }
        features={
          <>
            {skills.map((skill) => (
              <SkillFeature
                key={skill.name}
                icon={skillIcons[skill.iconName]}
                headline={skill.name}
                subheadline={<p>{skill.items}</p>}
              />
            ))}
          </>
        }
      />

      {/* Education */}
      <EducationSection id="education" eyebrow="Education" headline="Academic background.">
        {education.map((edu) => (
          <EducationCard
            key={edu.degree}
            degree={edu.degree}
            school={edu.school}
            period={edu.period}
            focus={edu.focus}
          />
        ))}
      </EducationSection>

      {/* Contact CTA */}
      <CallToActionSimpleCentered
        id="contact"
        headline="Let's connect."
        subheadline={
          <p>
            Looking for a backend engineer who ships production systems across domains? I'm
            always open to interesting conversations.
          </p>
        }
        cta={
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={`mailto:${personalInfo.email}`} size="lg">
              Email me
            </ButtonLink>
            <PlainButtonLink href={personalInfo.github} target="_blank" size="lg">
              View GitHub &rarr;
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
