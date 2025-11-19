import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

// Background layer: Spline cover + animated gradient mesh + subtle grain
export default function Background() {
  const { scrollYProgress } = useScroll()

  // Scroll-linked transforms to create depth separation
  const splineScale = useTransform(scrollYProgress, [0, 1], [1, 0.7])
  const splineTranslateY = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Organic gradient mesh behind the 3D scene */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 80% at 70% 50%, rgba(44,95,77,0.25) 0%, rgba(26,26,26,0.6) 55%, rgba(26,26,26,1) 100%), radial-gradient(40% 60% at 90% 30%, rgba(44,95,77,0.18) 0%, rgba(26,26,26,0) 100%)',
          filter: 'saturate(110%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '2% 1%', '-2% -1%', '0% 0%'],
        }}
        transition={{ duration: 45, ease: 'linear', repeat: Infinity }}
      />

      {/* Subtle grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '3px 3px',
        }}
      />

      {/* Spline 3D Cover - fills the scene, subtly transformed on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: splineScale, y: splineTranslateY }}
      >
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Right bias mask to emphasize right-side coverage (60%) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.6) 25%, rgba(26,26,26,0.25) 45%, rgba(26,26,26,0.08) 60%, rgba(26,26,26,0) 75%)',
        }}
      />
    </div>
  )
}
