import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Section } from '../elements/section'

export function TimelineItem({
  role,
  company,
  period,
  description,
  highlights,
  isLast,
}: {
  role: string
  company: string
  period: string
  description: string
  highlights?: string[]
  isLast?: boolean
}) {
  return (
    <div className="group relative grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
      <div className="flex flex-col items-center">
        <div className="mt-2.5 size-2.5 rounded-full bg-mist-950 dark:bg-mist-300" />
        {!isLast && <div className="w-px flex-1 bg-mist-950/10 dark:bg-white/10" />}
      </div>
      <div className={clsx('pb-10', isLast && 'pb-0')}>
        <p className="text-sm/7 text-mist-500">{period}</p>
        <h3 className="text-base/7 font-semibold text-mist-950 dark:text-white">{role}</h3>
        <p className="text-sm/7 font-medium text-mist-700 dark:text-mist-400">{company}</p>
        <p className="mt-2 text-sm/7 text-mist-700 dark:text-mist-400">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm/7 text-mist-700 dark:text-mist-400">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export function ExperienceTimeline({ children, ...props }: ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <div className="max-w-2xl">{children}</div>
    </Section>
  )
}
