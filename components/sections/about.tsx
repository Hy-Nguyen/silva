'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Badge, ImageSlot } from '@/components/ui/primitives'
import { getIcon } from '@/lib/icons'
import { stagger, staggerItem, slideLeft, slideRight, fadeUp } from '@/lib/motion'
import type { Archetype } from "@/config/design.config";

const VP = { once: true, margin: '-80px' }

interface AboutProps {
  data: Archetype
  filled: boolean
}

export function About({ data, filled }: AboutProps) {
  const reduced = useReducedMotion()

  return (
    <section
      id="about"
      style={{ padding: 'clamp(72px, 8vw, 120px) clamp(24px, 5vw, 64px)', maxWidth: 1280, margin: '0 auto' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >
        {/* Text column */}
        <motion.div
          variants={reduced ? undefined : stagger()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
        >
          <motion.div variants={reduced ? undefined : staggerItem}>
            <Badge tone="primary" style={{ marginBottom: 20 }}>About us</Badge>
          </motion.div>

          <motion.h2
            variants={reduced ? undefined : slideLeft}
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 500,
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--c-fg)',
              margin: 0,
            }}
          >
            {data.about.title}
          </motion.h2>

          <motion.p
            variants={reduced ? undefined : staggerItem}
            style={{
              fontFamily: 'var(--f-body)',
              fontSize: 'clamp(15px, 1.4vw, 17px)',
              lineHeight: 1.65,
              color: 'var(--c-muted)',
              marginTop: 24,
            }}
          >
            {data.about.body}
          </motion.p>

          {/* Trust badges */}
          <motion.div
            variants={reduced ? undefined : stagger(0.12)}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              marginTop: 32,
              paddingTop: 32,
              borderTop: '1px solid var(--c-border)',
            }}
          >
            {data.about.badges.map((b, i) => {
              const Icon = getIcon(b.icon)
              return (
                <motion.div
                  key={i}
                  variants={reduced ? undefined : staggerItem}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 14px',
                    background: 'var(--c-surface)',
                    border: '1px solid var(--c-border)',
                    borderRadius: 'var(--r-pill)',
                    fontFamily: 'var(--f-body)',
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--c-fg)',
                  }}
                >
                  <Icon size={15} strokeWidth={1.8} style={{ color: 'var(--c-primary)' }} />
                  {b.text}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Image column */}
        <motion.div
          variants={reduced ? undefined : slideRight}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          style={{ overflow: 'hidden', borderRadius: 'var(--r-md)' }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ImageSlot
              label="About image · portrait"
              ratio="4/5"
              filled={filled}
              src={data.images.about}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
