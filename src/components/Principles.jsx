import React from 'react'

const principles = [
  {
    title: 'Emotion before Thought',
    desc: 'Interfaces should make you feel something first. We encode affect in motion, spacing, and materiality.',
  },
  {
    title: 'Friction is a Tool',
    desc: 'We remove the wrong kind and add the right kind. Micro-friction increases commitment when placed with intent.',
  },
  {
    title: 'Perception is the Product',
    desc: 'People buy what they believe about the future. We design those beliefs ethically and measurably.',
  },
]

export default function Principles() {
  return (
    <section id="principles" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-3 gap-10">
          {principles.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 p-6 bg-white/[0.03]">
              <div className="text-white text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
