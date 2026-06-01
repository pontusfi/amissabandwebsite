import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteConfig from '../content/siteConfig'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Music', href: '/#discography' },
  { label: 'Shows', href: '/#shows' },
  { label: 'Videos', href: '/#videos' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Merch', href: '/#merch' },
  { label: 'Contact', href: '/#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      setMenuOpen(false)
      const id = href.slice(2)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#080808] border-b border-site-border'
            : 'bg-gradient-to-b from-[#080808]/70 to-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-2xl tracking-widest2 text-accent-bright hover:text-white transition-colors"
          >
            {siteConfig.bandName}
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger — always sits above the overlay at z-50 */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-accent-bright transition-transform duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-accent-bright transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-accent-bright transition-transform duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu — full-screen solid overlay, sits below the header bar (z-40) */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-4xl tracking-widest2 text-accent-bright hover:text-white transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
