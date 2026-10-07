import { education, experience, featuredProjects, personalInfo, skills } from '@/data/portfolio'

function TitleBlock({ sheet, title }: { sheet: number; title: string }) {
  return (
    <dl className="titleblock">
      <div>
        <dt>Project</dt>
        <dd>Hákon Freyr Gunnarsson</dd>
      </div>
      <div>
        <dt>Sheet</dt>
        <dd>{sheet} / 5</dd>
      </div>
      <div>
        <dt>Title</dt>
        <dd>{title}</dd>
      </div>
      <div>
        <dt>Rev</dt>
        <dd>2026-10</dd>
      </div>
    </dl>
  )
}

function Sheet({
  id,
  sheet,
  title,
  lede,
  children,
}: {
  id: string
  sheet: number
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
        <span className="sheet-no" aria-hidden="true">
          {String(sheet).padStart(2, '0')}
        </span>
      </header>
      {children}
      <TitleBlock sheet={sheet} title={title} />
    </section>
  )
}

/** A measured figure, drawn as a dimension line with its value. */
function Dim({ value, label }: { value: string; label: string }) {
  return (
    <div className="dim">
      <span className="dim-line" aria-hidden="true" />
      <p>
        <strong>{value}</strong> {label}
      </p>
    </div>
  )
}

function Notes({ children }: { children: React.ReactNode }) {
  return (
    <div className="notes">
      <h3>General notes</h3>
      <ol>{children}</ol>
    </div>
  )
}

const project = (slug: string) => featuredProjects.find((p) => p.slug === slug)!

export function KratesSheet() {
  return (
    <Sheet
      id="krates"
      sheet={2}
      title="Krates"
      lede="An AI-native back office for Icelandic enterprises, correct by construction: agents do the work, rules are executable logic, and a human consents before anything leaves the box. Founder, March 2026 to present; now in pilots."
    >
      <div className="sheet-body sheet-body-drawing">
        <figure className="drawing drawing-exploded">
          <img
            src="/plates/exploded.webp"
            alt="Exploded isometric drawing of the Krates appliance: lid, cooler, memory, board, drive and chassis pulled apart along assembly lines"
            width={1024}
            height={1088}
            loading="lazy"
          />
          <figcaption className="callout callout-a">
            <a href="/projects/sokrates/">
              <span className="callout-key">A</span> Sókrates
            </a>
            <span>The on-premises AI department: one NixOS appliance, 14 services in five credential-isolated containers.</span>
          </figcaption>
          <figcaption className="callout callout-b">
            <a href="/projects/krepis/">
              <span className="callout-key">B</span> Krepis
            </a>
            <span>Seven back-office kernels built for AI agents rather than for people clicking through screens.</span>
          </figcaption>
        </figure>
        <div className="sheet-side">
          <div className="dims">
            <Dim value="14" label="services in five credential-isolated containers" />
            <Dim value="7" label="agent-first kernels: accounting, payroll, workforce and more" />
            <Dim value="2" label="editions: gateway-routed mini-PC, or fully local on a DGX Spark" />
          </div>
          <Notes>
            <li>Business rules are Logica laws compiled to DuckDB SQL; each returns the set of violations, not a pass or fail.</li>
            <li>An agent that dies mid-task never repeats an external action (DBOS, write-ahead attempt records).</li>
            <li>Every governed action carries a signed consent token and is its own trace span in a queryable audit store.</li>
            <li>Krepis kernels are event-sourced and append-only; every action is idempotent and has a dry run.</li>
            <li>Agent behaviour is tested against invariants over live systems, not string matching.</li>
          </Notes>
          <p className="sheet-links">
            <a href="/projects/sokrates/">Sheet A: Sókrates</a>
            <a href="/projects/krepis/">Sheet B: Krepis</a>
          </p>
        </div>
      </div>
    </Sheet>
  )
}

const stages = ['Ticket', 'Write', 'Review', 'Repair', 'Merge']

export function WeaveSheet() {
  const weave = project('the-weave')
  return (
    <Sheet
      id="the-weave"
      sheet={3}
      title="The Weave"
      lede="The engineering organisation that builds Krates: five named AI engineers (Claude and Codex), each with its own machine and role, working under a written doctrine. I designed it and lead it, in the role a CTO plays."
    >
      <div className="sheet-body sheet-body-drawing">
        <figure className="drawing loop" aria-label="The Weave's delivery loop: ticket, write, review, repair, merge">
          <ol className="loop-stages">
            {stages.map((stage, i) => (
              <li key={stage} style={{ '--i': i } as React.CSSProperties}>
                <span className="loop-node">{String(i + 1).padStart(2, '0')}</span>
                <span className="loop-label">{stage}</span>
              </li>
            ))}
          </ol>
          <figcaption className="loop-caption">
            Reviews always come from an agent other than the author. Repairs go back through review before the merge gate.
          </figcaption>
        </figure>
        <div className="sheet-side">
          <div className="dims">
            <Dim value="106" label="merged changes a week, July to mid-September 2026" />
            <Dim value="94%" label="of code changes independently reviewed before merge (September)" />
            <Dim value="83%" label="of reviewed changes drew findings from the reviewer" />
            <Dim value="0.14%" label="of merged changes ever reverted" />
            <Dim value="250 ISK" label="($2) of AI subscription per merged change" />
          </div>
          <Notes>
            <li>A scheduler I built gives each task to the agent best placed to take it, by remaining subscription capacity, skills, availability and parallelism.</li>
            <li>Mistakes become procedure: a daily harvest turns what reviewers catch into 40 standard operating procedures holding 414 recorded lessons.</li>
            <li>A self-built broker with outbound-only edges over Tailscale wakes the right agent on the right machine from Slack, Linear and GitHub.</li>
          </Notes>
          <p className="sheet-links">
            <a href={`/projects/${weave.slug}/`}>Full drawing: The Weave</a>
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
  return (
    <Sheet
      id="homegrown-hero-films"
      sheet={4}
      title="Homegrown Hero Films"
      lede="Short films, photoreal or animated, where a child is the hero of their own adventure, made with an AI video pipeline I built end to end."
    >
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
            <Dim value="60 fps" label="finishing: NVIDIA RTX VSR upscaling and RIFE interpolation, shot by shot" />
            <Dim value="Every film" label="reviewed frame by frame by an AI quality gate before a human sees it" />
          </div>
          <Notes>
            <li>Generation runs on rented GPUs with my own open-source extensions to the MiniMax H3 video model.</li>
            <li>Interpolation never blends two shots: cuts are detected and every shot is finished on its own.</li>
            <li>Publishing to YouTube and TikTok is scheduled through their APIs, with AI disclosure on every post.</li>
          </Notes>
          <p className="sheet-links">
            <a href={hhf.url}>homegrownherofilms.com</a>
            <a href={hhf.githubUrl}>Model extensions on GitHub</a>
            <a href={`/projects/${hhf.slug}/`}>Full drawing</a>
          </p>
        </div>
      </div>
    </Sheet>
  )
}

const related = ['memory-palace', 'grimoire', 'autopod', 'sokrates-idr']

export function ExperienceSheet() {
  return (
    <Sheet
      id="experience"
      sheet={5}
      title="Experience"
      lede="Mathematics and statistics first, then production systems in genomics, finance, travel and enterprise software, each a new domain learned within months."
    >
      <div className="sheet-body sheet-body-tables">
        <div className="table-scroll">
        <table className="parts">
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
                <td>{String(i + 1).padStart(2, '0')}</td>
                <th scope="row">{entry.company}</th>
                <td>{entry.role}</td>
                <td className="nowrap">{entry.period.replace('—', '–')}</td>
                <td>{entry.keyResult}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

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
