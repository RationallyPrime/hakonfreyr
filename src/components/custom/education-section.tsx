import type { ComponentProps } from 'react'
import { Section } from '../elements/section'

export function EducationCard({
  degree,
  school,
  period,
  focus,
}: {
  degree: string
  school: string
  period: string
  focus: string
}) {
  return (
    <div className="rounded-xl bg-mist-950/2.5 p-6 dark:bg-white/5">
      <div className="text-base/7 font-semibold text-mist-950 dark:text-white">{degree}</div>
      <p className="text-sm/7 text-mist-700 dark:text-mist-400">
        {school} &middot; {period}
      </p>
      <p className="mt-2 text-sm/7 text-mist-500">{focus}</p>
    </div>
  )
}

export function EducationSection({ children, ...props }: ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">{children}</div>
    </Section>
  )
}
