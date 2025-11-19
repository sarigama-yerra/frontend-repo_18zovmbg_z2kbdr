import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">© Design Lab — Psychology in Motion</div>
        <div className="flex items-center gap-4 text-white/60 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
