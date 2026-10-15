import { CoverSheet } from '@/components/sheet/cover-sheet'
import { DrawIn } from '@/components/sheet/draw-in'
import {
  ConceptStudioSheet,
  ContactBlock,
  ExperienceSheet,
  FilmsSheet,
  KratesSheet,
  WeaveSheet,
} from '@/components/sheet/sheets'

export default function Page() {
  return (
    <>
      <CoverSheet />
      <KratesSheet />
      <WeaveSheet />
      <FilmsSheet />
      <ConceptStudioSheet />
      <ExperienceSheet />
      <ContactBlock />
      <DrawIn />
    </>
  )
}
