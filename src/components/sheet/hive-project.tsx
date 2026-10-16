import { featuredProjects, hiveStory } from '@/data/portfolio'
import { HiveAttention } from './hive-attention'
import { Dim, Sheet } from './sheets'

export function HiveProject({ letter }: { letter: string }) {
  const project = featuredProjects.find((p) => p.slug === 'hive')!

  return (
    <div className="hive-project">
      <Sheet id="hive" sheet={`Detail ${letter}`} title={project.name} lede={
        <><strong>{project.subtitle}.</strong> {project.longDescription}</>
      }>
        <div className="sheet-body">
          <figure className="hive-loop">
            <ol>
              {hiveStory.loop.map((node, i) => (
                <li key={i}><strong>{node.title}</strong><span>{node.detail}</span></li>
              ))}
            </ol>
            <figcaption>Project, work and artifacts stay attached to the intervention and its return.</figcaption>
          </figure>
          <div className="hive-intro">
            <div>
              <h3>The question is: why did this need me?</h3>
              <p>The Weave is the AI engineering team I designed and lead. Its agents plan, write,
                review and repair software. Hive is the service that connects them. It delivers
                the handoffs between agents and brings me the decisions that need human judgement.</p>
              <p>A useful request arrives with enough context to answer it: what to decide, what
                to inspect and what happens next. Once I answer, I should not have to find the
                right terminal and explain the project again.</p>
            </div>
            <div className="hive-intro-side">
              <Dim value="1" label="active intervention per human; the rest can wait without holding an agent turn open" />
              <p className="sheet-links"><a href="#attention-workflow">Explore the attention workflow</a></p>
            </div>
          </div>
        </div>
      </Sheet>

      <Sheet id="attention-workflow" sheet={`Detail ${letter}.1`} title="Attention, returned" lede="A structured Slack surface closes the human part of the loop. Follow one intervention from an agent’s request to a recorded response and a return to the work.">
        <HiveAttention />
      </Sheet>

      <Sheet id="coordination" sheet={`Detail ${letter}.2`} title="The work stays attached" lede="Preserving context means returning to the right work with the evidence needed to continue. The live demonstration used a fresh turn with the saved work packet.">
        <div className="sheet-body hive-construction">
          <div>
            <h3>Two explicit return paths</h3>
            <dl className="hive-return-paths">
              {hiveStory.returns.map((path) => (
                <div key={path.title}><dt>{path.title}</dt><dd><strong>{path.label}.</strong> {path.text}</dd></div>
              ))}
            </dl>
            <h3>Recording a decision does not complete the work</h3>
            <p>The response becomes a durable continuation through Hive’s ordinary delivery
              machinery. Retries carry the same response identity. A changed brief invalidates
              an older decision form, and a blocked or failed return remains visible.</p>
            <p>An approval is recorded data. It does not grant merge, deployment or spending
              authority. The receiving agent still works within its existing permissions and
              the project’s review and delivery rules.</p>
          </div>
          <div>
            <h3>Across the Weave</h3>
            <dl className="hive-coordination">
              {hiveStory.coordination.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.text}</dd></div>)}
            </dl>
            <h3>One broker, outward connections</h3>
            <p>The central broker owns Slack and a durable SQLite ledger. A small edge process
              on each agent’s machine connects outward and handles local sessions. Deliveries
              can be retried; Hive records their status and the agent’s outcome rather than
              claiming execution happens exactly once.</p>
            <p className="sheet-links"><a href="/projects/the-weave/">Meet the Weave</a></p>
          </div>
        </div>
      </Sheet>

      <Sheet id="evidence" sheet={`Detail ${letter}.3`} title="Built, tried, bounded" lede="Hive Attention has moved from a specification to an implemented queue and a live Slack interaction. The evidence supports a precise claim: a human response can return to an agent with its work context.">
        <div className="sheet-body">
          <dl className="hive-evidence">
            {hiveStory.evidence.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.text}</dd></div>)}
          </dl>
          <p className="hive-caption">Evidence checked on 16 October 2026 against the public source, change history
            and read-only live delivery records. The reconstruction uses the shape of the implemented
            interface and a paraphrased public engineering case. Private Slack content is omitted.
            No original Slack capture is presented.</p>
          <div className="hive-source-section">
            <div>
              <h3>Inspect the work</h3>
              <ul className="hive-sources">{hiveStory.sources.map((source) => (
                <li key={source.href}><a href={source.href}>{source.title}</a><span>{source.description}</span></li>
              ))}</ul>
            </div>
            <div>
              <h3>Materials</h3>
              <ul className="materials-list">{project.techStack.split(',').map((item) => <li key={item}>{item.trim()}</li>)}</ul>
              <p className="sheet-links"><a href="/">Back to the cover sheet</a></p>
            </div>
          </div>
        </div>
      </Sheet>
    </div>
  )
}
