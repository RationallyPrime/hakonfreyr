'use client'

import { useEffect, useRef, useState } from 'react'

const explorerPath = '/projects/residual-modeling/explorer/'

export function ValuationExplorer() {
  const frame = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(640)

  useEffect(() => {
    function resize(event: MessageEvent) {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return
      const message = event.data
      if (
        message?.type === 'residual-modeling:resize' &&
        typeof message.height === 'number' &&
        Number.isFinite(message.height) &&
        message.height > 0
      ) {
        setHeight(Math.ceil(message.height))
      }
    }
    window.addEventListener('message', resize)
    return () => window.removeEventListener('message', resize)
  }, [])

  return (
    <div className="valuation-explorer">
      <p className="sheet-links">
        <a href={explorerPath}>Open the full valuation tool</a>
      </p>
      <iframe
        ref={frame}
        src={`${explorerPath}?embedded=1`}
        title="Residual Modeling live valuation explorer"
        className="valuation-explorer-frame"
        style={{ height }}
        loading="lazy"
        onLoad={() => {
          frame.current?.contentWindow?.postMessage(
            { type: 'residual-modeling:request-resize' },
            window.location.origin,
          )
        }}
      />
    </div>
  )
}
