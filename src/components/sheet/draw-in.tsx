'use client'

import { useEffect } from 'react'

// Marks each sheet as drawn when it scrolls into view, so its dimension lines
// draw themselves in. Without JavaScript every sheet renders fully drawn.
export function DrawIn() {
  useEffect(() => {
    const sheets = document.querySelectorAll<HTMLElement>('.sheet')
    document.documentElement.dataset.drawIn = ''
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-drawn', '')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -25% 0px' },
    )
    sheets.forEach((sheet) => observer.observe(sheet))
    return () => observer.disconnect()
  }, [])
  return null
}
