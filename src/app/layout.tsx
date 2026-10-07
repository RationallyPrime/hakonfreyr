import type { Metadata } from 'next'
import './globals.css'
import './sheet.css'

export const metadata: Metadata = {
  title: 'Hákon Freyr Gunnarsson — AI Engineer',
  description:
    'Portfolio of Hákon Freyr Gunnarsson, AI engineer and founder of Krates: production AI systems, back-office software designed for AI agents, and an engineering team staffed by AI agents.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/league-gothic-latin-wdth.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/barlow-condensed-latin-500.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body className="drawing-set">
        <main>{children}</main>
      </body>
    </html>
  )
}
