'use client'

import { hiveStory } from '@/data/portfolio'
import { useState } from 'react'

export function HiveAttention() {
  const [step, setStep] = useState(0)
  const current = hiveStory.steps[step]
  const brief = hiveStory.intervention

  return (
    <div className="hive-attention">
      <p className="hive-caption" id="hive-reconstruction">
        Illustrative reconstruction of a real engineering intervention. Wording is paraphrased;
        this is a portfolio walkthrough, not a Slack screenshot or a connected queue.
      </p>
      <ol className="hive-step-list" aria-label="Explore the attention workflow">
        {hiveStory.steps.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              aria-pressed={step === i}
              aria-controls="hive-walkthrough"
              onClick={() => setStep(i)}
            >
              <span className="hive-step-number">{i + 1}</span>
              {item.title}
            </button>
          </li>
        ))}
      </ol>
      <div className="hive-walkthrough" id="hive-walkthrough" aria-live="polite" aria-atomic="true">
        <div className="hive-elevation" aria-describedby="hive-reconstruction">
          <div className="hive-surface-title">
            <strong>{current.surface}</strong>
            <span>{current.status}</span>
          </div>
          <div className="hive-brief">
            <h3>{brief.title}</h3>
            <dl>
              <div><dt>Do</dt><dd>{brief.action}</dd></div>
              <div><dt>Context</dt><dd>{brief.context}</dd></div>
              <div><dt>Unblocks</dt><dd>{brief.unblocks}</dd></div>
            </dl>
            {step === 1 && (
              <div className="hive-control-sample">
                <span>Take next</span><span>Answer this one</span>
                <p>Labels from the implemented Slack card. Use the numbered steps above to explore.</p>
              </div>
            )}
            {step === 2 && (
              <dl className="hive-decision-sample">
                <div><dt>Decision</dt><dd>Resolve · Defer · Cancel</dd></div>
                <div><dt>Outcome</dt><dd>Approved</dd></div>
                <div><dt>Response</dt><dd>{brief.response}</dd></div>
              </dl>
            )}
            {step >= 3 && (
              <div className="hive-return-sample">
                <p><strong>Human response</strong><br />{brief.response}</p>
                <p><strong>Return path</strong><br />Ariadne · fresh turn with the saved work packet</p>
                {step === 4 && <p><strong>Receipt</strong><br />The return delivery has reported an outcome. Verify the work separately.</p>}
              </div>
            )}
          </div>
        </div>
        <div className="hive-step-explanation">
          <h3>{current.title}</h3>
          <p>{current.explanation}</p>
          <p className="hive-caption">Step {step + 1} of {hiveStory.steps.length}</p>
          <button className="hive-advance" type="button" onClick={() => setStep((step + 1) % hiveStory.steps.length)}>
            {step === hiveStory.steps.length - 1 ? 'Restart the walkthrough' : `Next: ${hiveStory.steps[step + 1].title}`}
          </button>
        </div>
      </div>
      <noscript>
        <ol className="hive-static-steps">
          {hiveStory.steps.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.explanation}</li>)}
        </ol>
      </noscript>
    </div>
  )
}
