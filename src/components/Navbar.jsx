import React from 'react'

export default function Navbar() {
  const links = [
    { href: '#work', label: 'Work' },
    { href: '#framework', label: 'Framework' },
    { href: '#principles', label: 'Principles' },
    { href: '#contact', label: 'Apply' },
  ]

  const onClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 py-4">
        <div className="flex items-center justify-between rounded-full bg-[#101010]/60 backdrop-blur border border-white/5 px-4 py-2">
          <div className="text-[#FAFAFA] tracking-tight font-semibold">Design Lab</div>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => onClick(e, l.href)}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={(e) => onClick(e, '#contact')}
            className="text-sm bg-[#2C5F4D] text-white px-4 py-2 rounded-md hover:-translate-y-0.5 transition-transform"
          >
            Start
          </a>
        </div>
      </div>
    </header>
  )
}
