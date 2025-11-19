import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    // Simulate async submit
    setTimeout(() => setSent(true), 600)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="mb-6">
            <h3 className="text-white text-2xl md:text-3xl font-['Playfair_Display',serif]">Work With The Lab</h3>
            <p className="text-white/60 mt-2 max-w-2xl">We accept a limited number of partners each quarter. Tell us about your challenge.</p>
          </div>

          {!sent ? (
            <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Name" className="bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40" />
              <input required type="email" placeholder="Email" className="bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40" />
              <input placeholder="Company" className="md:col-span-2 bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40" />
              <textarea required placeholder="What outcome are you targeting?" rows={4} className="md:col-span-2 bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40" />
              <button className="md:col-span-2 mt-2 bg-[#2C5F4D] text-white px-6 py-3 rounded-md hover:-translate-y-0.5 transition-all">Apply for a Slot</button>
            </form>
          ) : (
            <div className="text-center py-10">
              <div className="text-white text-xl">Application received.</div>
              <div className="text-white/60">Well get back within 48 hours.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
