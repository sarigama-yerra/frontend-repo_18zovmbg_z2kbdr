import React from 'react'
import Background from './components/Background'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Framework from './components/Framework'
import Principles from './components/Principles'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] text-white">
      <Background />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Work />
        <Framework />
        <Principles />
        <Contact />
        <Footer />
      </main>

      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 160px rgba(0,0,0,0.6)'}} />
    </div>
  )
}

export default App
