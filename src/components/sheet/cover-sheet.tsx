import { drawingIndex, personalInfo } from '@/data/portfolio'

const locators = [
  { sheet: '02', href: '#krates', label: 'Sheet 02, Krates' },
  { sheet: '03', href: '#the-weave', label: 'Sheet 03, The Weave' },
  { sheet: '04', href: '#homegrown-hero-films', label: 'Sheet 04, Homegrown Hero Films' },
  { sheet: '05', href: '#experience', label: 'Sheet 05, Experience' },
]

export function CoverSheet() {
  return (
    <div className="cover">
      <div className="cover-frame">
        <header className="cover-nav">
          <a href="/" className="cover-mark">
            {personalInfo.displayName}
          </a>
          <nav aria-label="Main">
            <ul className="cover-links">
              <li>
                <a href="#krates">Work</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
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

        <h1 className="cover-name">{personalInfo.name}</h1>
        <p className="cover-thesis">
          AI engineer and founder of Krates. I build AI systems that can be trusted with real work.
        </p>

        <section className="cover-index" aria-labelledby="drawing-index">
          <table>
            <caption id="drawing-index">Drawing index</caption>
            <colgroup>
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Sheet</th>
                <th scope="col">Title</th>
                <th scope="col">Key dimension</th>
              </tr>
            </thead>
            <tbody>
              {drawingIndex.map((row) => (
                <tr key={row.sheet} data-current={row.current ? '' : undefined}>
                  <td>{row.sheet}</td>
                  <th scope="row">
                    <a href={row.href}>{row.title}</a>
                  </th>
                  <td>{row.keyDimension}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <figure className="cover-keyplan">
          <img
            src="/plates/key-plan.webp"
            alt="Key plan: isometric drawing of the Krates appliance, with locators for each sheet"
            width={1344}
            height={1008}
          />
          {locators.map((loc) => (
            <a key={loc.sheet} href={loc.href} className={`cover-loc cover-loc-${loc.sheet}`} aria-label={loc.label}>
              {loc.sheet}
            </a>
          ))}
        </figure>

        <p className="cover-titleblock">
          Cover sheet · Sheet 1 of 5 · Rev 2026-10 · Drawn H.F.G.
        </p>
      </div>
    </div>
  )
}
