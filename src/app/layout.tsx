import { ButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import {
  FooterLink,
  FooterWithLinksAndSocialIcons,
  SocialLink,
} from '@/components/sections/footer-with-links-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndLeftAlignedLinks,
} from '@/components/sections/navbar-with-logo-actions-and-left-aligned-links'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hákon Freyr Gunnarsson — Backend Engineer',
  description:
    'Portfolio of Hákon Freyr Gunnarsson. Systems-oriented backend engineer building enterprise infrastructure across Go, Python, and TypeScript.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavbarWithLogoActionsAndLeftAlignedLinks
          id="navbar"
          logo={
            <NavbarLogo href="/">
              <span className="font-display text-xl tracking-tight text-mist-950 dark:text-white">
                Hákon Freyr
              </span>
            </NavbarLogo>
          }
          links={
            <>
              <NavbarLink href="#projects">Projects</NavbarLink>
              <NavbarLink href="#experience">Experience</NavbarLink>
              <NavbarLink href="#skills">Skills</NavbarLink>
              <NavbarLink href="#contact">Contact</NavbarLink>
            </>
          }
          actions={
            <ButtonLink href="https://github.com/RationallyPrime" target="_blank">
              <GitHubIcon />
              GitHub
            </ButtonLink>
          }
        />

        <Main>{children}</Main>

        <FooterWithLinksAndSocialIcons
          id="footer"
          links={
            <>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </>
          }
          socialLinks={
            <SocialLink href="https://github.com/RationallyPrime" name="GitHub">
              <GitHubIcon />
            </SocialLink>
          }
          fineprint={<p>&copy; 2026 Hákon Freyr Gunnarsson</p>}
        />
      </body>
    </html>
  )
}
