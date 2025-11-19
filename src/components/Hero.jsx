import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const lines = [
  'We Engineer',
  'Attention,',
  'Emotion,',
  'Action.',
]

export default function Hero() {
  const [tickerIndex, setTickerIndex] = useState(0)
  const tickers = useMemo(
    () => [
      'Currently accepting 3 clients this quarter',
      '127% average conversion lift',
      '50+ brands transformed',
    ],
    []
  )

  useEffect(() => {
    const id = setInterval(() => {
      setTickerIndex((i) => (i + 1) % tickers.length)
    }, 2600)
    return () => clearInterval(id)
  }, [tickers])

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Left content column */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="w-[45%] min-w-[280px] max-w-xl pt-24 pb-28">
          <div className="select-none">
            {lines.map((t, i) => (
              <motion.h1
                key={t}
                initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ delay: 0.2 + i * 0.8, duration: 0.9, ease: 'easeOut' }}
                className="text-[56px] md:text-[64px] leading-[1.1] tracking-[-0.02em] text-[#FAFAFA] font-[600] font-['Playfair_Display',serif]"
              >
                {t}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + lines.length * 0.8 + 1.2, duration: 0.6 }}
            className="mt-6 text-[18px] leading-[1.6] text-[#999999] max-w-[60ch]"
          >
            Psychology-driven design for brands that demand measurable results.
          </motion.p>

          {/* Data ticker */}
          <div className="mt-10 h-6 overflow-hidden">
            <motion.div
              key={tickerIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.45 }}
              className="font-['Space_Mono',monospace] text-[14px] text-[#2C5F4D]"
            >
              {tickers[tickerIndex]}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + lines.length * 0.8 + 1.2 + 0.6, duration: 0.5 }}
            className="mt-14 inline-flex items-center gap-2 bg-[#2C5F4D] text-white text-[16px] font-medium px-9 py-4 rounded-[4px] shadow-[0_8px_24px_rgba(44,95,77,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            Explore The Framework
            <span aria-hidden>→</span>
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}

function ScrollIndicator() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const to = setTimeout(() => setHidden(true), 3000)
    const onScroll = () => setHidden(true)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(to)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 transition-opacity duration-500 ${hidden ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-px h-[60px] bg-[#2C5F4D]/90" />
        <div className="w-2 h-2 rounded-full bg-[#2C5F4D] animate-pulse" />
        <div className="text-xs tracking-wide text-[#2C5F4D]/80">Scroll to see psychology in action</div>
      </div>
    </div>
  )
}
