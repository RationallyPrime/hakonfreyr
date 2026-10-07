import { education, experience, featuredProjects, personalInfo, sheetCopy, skills } from '@/data/portfolio'

export function TitleBlock({ sheet, title }: { sheet: string; title: string }) {
  return (
    <dl className="titleblock">
      <div>
        <dt>Project</dt>
        <dd>Hákon Freyr Gunnarsson</dd>
      </div>
      <div>
        <dt>Sheet</dt>
        <dd>{sheet}</dd>
      </div>
      <div>
        <dt>Title</dt>
        <dd>{title}</dd>
      </div>
      <div>
        <dt>Scale</dt>
        <dd>N.T.S.</dd>
      </div>
      <div>
        <dt>Rev</dt>
        <dd>2026-10</dd>
      </div>
    </dl>
  )
}

export function Sheet({
  id,
  sheet,
  title,
  lede,
  children,
}: {
  id: string
  sheet: string
  title: string
  lede: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="sheet" id={id} aria-labelledby={`${id}-title`}>
      <header className="sheet-head">
        <h2 id={`${id}-title`} className="sheet-title">
          {title}
        </h2>
        <p className="sheet-lede">{lede}</p>
      </header>
      {children}
      <TitleBlock sheet={sheet} title={title} />
    </section>
  )
}

type Figure = { value: string; label: string }

/** A measured figure, drawn as a dimension line with its value. */
export function Dim({ value, label }: Figure) {
  return (
    <div className="dim">
      <span className="dim-line" aria-hidden="true" />
      <p>
        <strong>{value}</strong> {label}
      </p>
    </div>
  )
}

/** A dimension laid against one side of a drawing. */
function DimOn({ side, figure }: { side: 'top' | 'left' | 'bottom'; figure: Figure }) {
  return (
    <p className={`dim-on dim-on-${side}`}>
      <span className={`dim-line${side === 'left' ? ' dim-line-v' : ''}`} aria-hidden="true" />
      <span className="dim-text">
        <strong>{figure.value}</strong> {figure.label}
      </span>
    </p>
  )
}

export function Notes({ title = 'General notes', items }: { title?: string; items: string[] }) {
  return (
    <div className="notes">
      <h3>{title}</h3>
      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

const project = (slug: string) => featuredProjects.find((p) => p.slug === slug)!

export function KratesSheet() {
  const copy = sheetCopy.krates
  return (
    <Sheet id="krates" sheet="2 / 5" title="Krates" lede={copy.lede}>
      <div className="sheet-body sheet-body-drawing">
        <div>
          <figure className="drawing drawing-exploded dimensioned">
            <DimOn side="top" figure={copy.widthDim} />
            <DimOn side="left" figure={copy.heightDim} />
            <div className="plate-wrap">
            <img
              src="/plates/exploded.webp"
              alt="Exploded isometric drawing of the Krates appliance: lid, cooler, memory, board, drive and chassis pulled apart along assembly lines"
              width={1024}
              height={1088}
              loading="lazy"
            />
            <span className="bubble bubble-a" aria-hidden="true">A</span>
            <span className="bubble bubble-b" aria-hidden="true">B</span>
            </div>
          </figure>
          <dl className="legend">
            <div>
              <dt>
                <span className="bubble-inline" aria-hidden="true">A</span>
                <a href="/projects/sokrates/">Sókrates</a>
              </dt>
              <dd>{copy.sokrates}</dd>
            </div>
            <div>
              <dt>
                <span className="bubble-inline" aria-hidden="true">B</span>
                <a href="/projects/krepis/">Krepis</a>
              </dt>
              <dd>{copy.krepis}</dd>
            </div>
          </dl>
        </div>
        <div className="sheet-side">
          <Notes items={copy.notes} />
          <p className="sheet-links">
            <a href="/projects/sokrates/">Detail: Sókrates</a>
            <a href="/projects/krepis/">Detail: Krepis</a>
          </p>
        </div>
      </div>
    </Sheet>
  )
}

const stages = ['Ticket', 'Write', 'Review', 'Repair', 'Merge']

export function WeaveSheet() {
  const copy = sheetCopy.weave
  return (
    <Sheet id="the-weave" sheet="3 / 5" title="The Weave" lede={copy.lede}>
      <div className="sheet-body sheet-body-drawing">
        <figure className="drawing loop dimensioned" aria-label="The Weave's delivery loop: ticket, write, review, repair, merge">
          <DimOn side="top" figure={copy.topDim} />
          <DimOn side="left" figure={copy.sideDim} />
          <div className="loop-field">
            <ol className="loop-stages">
              {stages.map((stage, i) => (
                <li key={stage} style={{ '--i': i } as React.CSSProperties}>
                  <span className="loop-node">{String(i + 1).padStart(2, '0')}</span>
                  <span className="loop-label">{stage}</span>
                </li>
              ))}
            </ol>
            <ol className="loop-arrows" aria-hidden="true">
              {stages.map((stage, i) => (
                <li key={stage} style={{ '--i': i } as React.CSSProperties} />
              ))}
            </ol>
          </div>
          <DimOn side="bottom" figure={copy.bottomDim} />
          <figcaption className="loop-caption">{copy.caption}</figcaption>
        </figure>
        <div className="sheet-side">
          <Notes items={copy.notes} />
          <p className="sheet-links">
            <a href="/projects/the-weave/">Detail: The Weave</a>
          </p>
        </div>
      </div>
    </Sheet>
  )
}

const films = [
  { src: '/films/lia-at-lanternfall.jpg', title: 'Lia at Lanternfall' },
  { src: '/films/the-hangar-call.jpg', title: 'The Hangar Call' },
  { src: '/films/gromble.jpg', title: 'Gromble and the Failed Ornithopter' },
]

export function FilmsSheet() {
  const hhf = project('homegrown-hero-films')
  const copy = sheetCopy.films
  return (
    <Sheet id="homegrown-hero-films" sheet="4 / 5" title="Homegrown Hero Films" lede={copy.lede}>
      <div className="sheet-body">
        <div className="elevation">
          {films.map((film) => (
            <figure key={film.title} className="frame">
              <div className="frame-dims" aria-hidden="true">
                <span className="frame-w">1080</span>
                <span className="frame-h">1920</span>
              </div>
              <img src={film.src} alt={`Still from ${film.title}`} width={720} height={1280} />
              <figcaption>{film.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="sheet-side sheet-side-row">
          <div className="dims">
            <Dim value={copy.dim.value} label={copy.dim.label} />
          </div>
          <Notes items={copy.notes} />
        </div>
        <p className="sheet-links">
          <a href={hhf.url}>homegrownherofilms.com</a>
          <a href={hhf.githubUrl}>Model extensions on GitHub</a>
          <a href={`/projects/${hhf.slug}/`}>Detail: Homegrown Hero Films</a>
        </p>
      </div>
    </Sheet>
  )
}

const related = ['memory-palace', 'grimoire', 'autopod', 'sokrates-idr']

export function ExperienceSheet() {
  return (
    <Sheet id="experience" sheet="5 / 5" title="Experience" lede={sheetCopy.experience.lede}>
      <div className="sheet-body sheet-body-tables">
        <table className="parts parts-list">
          <caption>Parts list</caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Organisation</th>
              <th scope="col">Role</th>
              <th scope="col">Period</th>
              <th scope="col">Key result</th>
            </tr>
          </thead>
          <tbody>
            {experience.map((entry, i) => (
              <tr key={entry.company}>
                <td data-label="Item">{String(i + 1).padStart(2, '0')}</td>
                <th scope="row">{entry.company}</th>
                <td data-label="Role">{entry.role}</td>
                <td data-label="Period" className="nowrap">
                  {entry.period.replace('—', '–')}
                </td>
                <td data-label="Key result">{entry.keyResult}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="tables-row">
          <table className="parts">
            <caption>Related drawings</caption>
            <tbody>
              {related.map((slug) => {
                const p = project(slug)
                return (
                  <tr key={slug}>
                    <th scope="row">
                      <a href={`/projects/${p.slug}/`}>{p.name}</a>
                    </th>
                    <td>{p.subtitle}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <table className="parts">
            <caption>Education</caption>
            <tbody>
              {education.map((edu) => (
                <tr key={edu.degree}>
                  <th scope="row">{edu.degree}</th>
                  <td>
                    {edu.school}, {edu.period.replace('—', '–')}. {edu.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <table className="parts materials">
          <caption>Materials</caption>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.name}>
                <th scope="row">{skill.name}</th>
                <td>{skill.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sheet>
  )
}

export function ContactBlock() {
  return (
    <footer className="contact" id="contact">
      <p className="contact-title">Contact</p>
      <dl>
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>
            <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}>{personalInfo.phone}</a>
          </dd>
        </div>
        <div>
          <dt>Code</dt>
          <dd>
            <a href={personalInfo.github}>github.com/RationallyPrime</a>
          </dd>
        </div>
        <div>
          <dt>CV</dt>
          <dd>
            <a href="/Hakon-Freyr-Gunnarsson-CV.pdf">Download (PDF)</a>
          </dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{personalInfo.location}</dd>
        </div>
      </dl>
    </footer>
  )
}
