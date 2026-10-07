import { DrawIn } from '@/components/sheet/draw-in'
import { ContactBlock, Dim, Notes, Sheet } from '@/components/sheet/sheets'
import { featuredProjects, personalInfo } from '@/data/portfolio'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = featuredProjects.find((p) => p.slug === slug)
  if (!project) return { title: 'Project not found' }
  return {
    title: `${project.name} — ${project.subtitle}`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = featuredProjects.findIndex((p) => p.slug === slug)
  if (index < 0) notFound()
  const project = featuredProjects[index]
  const letter = String.fromCharCode(65 + index)

  return (
    <>
      <header className="detail-nav">
        <a href="/" className="cover-mark">
          {personalInfo.displayName}
        </a>
        <nav aria-label="Main">
          <ul className="cover-links">
            <li>
              <a href="/">Cover sheet</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/Hakon-Freyr-Gunnarsson-CV.pdf">CV</a>
            </li>
            <li>
              <a href={`mailto:${personalInfo.email}`}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <Sheet
        id={project.slug}
        sheet={letter}
        sheetLabel={`Detail ${letter}`}
        title={project.name}
        lede={
          <>
            <strong className="detail-subtitle">{project.subtitle}.</strong> {project.longDescription}
          </>
        }
      >
        <div className="sheet-body sheet-body-detail">
          <div className="detail-main">
            <Notes>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </Notes>
            {project.architectureNotes && (
              <Notes title="Construction notes">
                {project.architectureNotes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </Notes>
            )}
          </div>
          <div className="sheet-side">
            {project.metrics && (
              <div className="dims">
                {project.metrics.map((m) => (
                  <Dim key={m.stat} value={m.stat} label={m.text} />
                ))}
              </div>
            )}
            <div className="notes">
              <h3>Materials</h3>
              <ul className="materials-list">
                {project.techStack.split(',').map((t) => (
                  <li key={t}>{t.trim()}</li>
                ))}
              </ul>
            </div>
            <p className="sheet-links">
              {project.url && <a href={project.url}>{project.urlLabel ?? project.url}</a>}
              {project.githubUrl && project.githubLabel !== 'Private' && (
                <a href={project.githubUrl}>Code on GitHub</a>
              )}
              <a href="/">Back to the cover sheet</a>
            </p>
          </div>
        </div>
      </Sheet>
      <ContactBlock />
      <DrawIn />
    </>
  )
}
