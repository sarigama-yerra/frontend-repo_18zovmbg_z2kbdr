import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    k: '01',
    title: 'Attention Engineering',
    desc: 'We choreograph salience using asymmetry, motion thresholds, novelty dosing, and controlled contrast.',
  },
  {
    k: '02',
    title: 'Emotion Sequencing',
    desc: 'Priming and affective forecasting shape felt meaning. We pace arousal to maintain approach motivation.',
  },
  {
    k: '03',
    title: 'Action Architecture',
    desc: 'Choice sets, progress illusions, and perceived effort reductions make clicks feel inevitable.',
  },
]

export default function Framework() {
  return (
    <section id="framework" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="mb-12">
          <h2 className="text-[32px] md:text-[40px] font-['Playfair_Display',serif] text-white tracking-tight">
            The Framework
          </h2>
          <p className="text-white/60 mt-2 max-w-2xl">
            A lab-tested sequence to convert attention into action without blunt force tactics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-xl border border-white/10 p-6 bg-[#121212]/80"
            >
              <div className="text-[#2C5F4D] font-['Space_Mono',monospace] text-sm">{s.k}</div>
              <div className="mt-2 text-xl text-white font-semibold">{s.title}</div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
