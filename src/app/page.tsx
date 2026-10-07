import { CoverSheet } from '@/components/sheet/cover-sheet'
import { DrawIn } from '@/components/sheet/draw-in'
import { ContactBlock, ExperienceSheet, FilmsSheet, KratesSheet, WeaveSheet } from '@/components/sheet/sheets'

export default function Page() {
  return (
    <>
      <CoverSheet />
      <KratesSheet />
      <WeaveSheet />
      <FilmsSheet />
      <ExperienceSheet />
      <ContactBlock />
      <DrawIn />
    </>
  )
}
