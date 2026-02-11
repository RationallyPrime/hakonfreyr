import Link from 'next/link'
import type { Project } from '@/data/portfolio'

export function ProjectPreview({
  slug,
  techStack,
  name,
  metrics,
}: {
  slug: string
  techStack: string
  name: string
  metrics?: Project['metrics']
}) {
  const techs = techStack.split(',').map((t) => t.trim())

  return (
    <Link
      href={`/projects/${slug}`}
      className="group/preview relative flex h-full min-h-80 flex-col overflow-hidden rounded-sm bg-mist-900 transition-colors hover:bg-mist-800 dark:bg-mist-950 dark:hover:bg-mist-900"
    >
      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-1/3 border-t border-white/[0.04]" />
        <div className="absolute inset-x-0 top-2/3 border-t border-white/[0.04]" />
        <div className="absolute inset-y-0 left-1/3 border-l border-white/[0.04]" />
        <div className="absolute inset-y-0 left-2/3 border-l border-white/[0.04]" />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col justify-between p-8">
        {/* Top: project label */}
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px]/4 uppercase tracking-widest text-white/30">
            {slug}
          </span>
          <span className="font-mono text-[10px]/4 text-white/20">
            &rarr;
          </span>
        </div>

        {/* Center: project name — large serif */}
        <div className="flex flex-col gap-3 py-6">
          <h4 className="font-display text-3xl/9 tracking-tight text-white sm:text-4xl/10">
            {name}
          </h4>
          {/* Metrics row */}
          {metrics && metrics.length > 0 && (
            <div className="flex gap-6">
              {metrics.slice(0, 3).map((m) => (
                <div key={m.stat} className="flex flex-col">
                  <span className="text-sm/5 font-semibold tabular-nums text-white/80">{m.stat}</span>
                  <span className="font-mono text-[10px]/4 text-white/30">{m.text.split(' ').slice(0, 3).join(' ')}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom: tech stack pills */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {techs.map((tech) => (
              <span
                key={tech}
                className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px]/5 text-white/50 transition-colors group-hover/preview:border-white/15 group-hover/preview:text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="text-xs/5 font-medium text-white/40 transition-colors group-hover/preview:text-white/70">
            View project &rarr;
          </span>
        </div>
      </div>
    </Link>
  )
}
