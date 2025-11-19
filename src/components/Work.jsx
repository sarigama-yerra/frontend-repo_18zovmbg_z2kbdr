import React from 'react'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'B2B SaaS — Pricing Reframe',
    result: '127% conversion lift',
    summary:
      'Shifted anchor bias using sequenced value priming, contrast, and delayed price reveal.',
  },
  {
    title: 'Luxury E‑commerce — PDP Attention Flow',
    result: '+34% add‑to‑cart',
    summary:
      'Engineered eye-path with asymmetric hierarchy, micro-delays, and active choice design.',
  },
  {
    title: 'Fintech — Onboarding Friction Sculpting',
    result: '−41% drop‑off',
    summary:
      'Removed invisible blockers via progressive disclosure and perceived-effort illusions.',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <h2 className="text-[32px] md:text-[40px] font-['Playfair_Display',serif] text-white tracking-tight">
            Demonstrated Transformations
          </h2>
          <p className="text-white/60 mt-2 max-w-2xl">
            We provoke emotion first, then guide cognition. A selection of recent interventions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6"
            >
              <div className="text-xs font-['Space_Mono',monospace] text-[#2C5F4D] tracking-widest">{c.result}</div>
              <div className="mt-2 text-lg text-white font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-white/70">{c.summary}</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2C5F4D]/0 group-hover:to-[#2C5F4D]/10 transition-colors" />
              <div className="pointer-events-none absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 0 1px rgba(44,95,77,0.5) inset' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
