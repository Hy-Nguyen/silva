'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from '@/components/ui/primitives'
import { getIcon } from '@/lib/icons'
import { stagger, staggerItem, fadeUp } from '@/lib/motion'
import type { Archetype } from "@/config/design.config";

const VP = { once: true, margin: '-60px' }

interface ServicesProps {
  data: Archetype
}

export function Services({ data }: ServicesProps) {
  const reduced = useReducedMotion()

  return (
    <section
      id="services"
      style={{
        background: 'var(--c-surface-2)',
        padding: 'clamp(72px, 8vw, 120px) clamp(24px, 5vw, 64px)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          variants={reduced ? undefined : stagger()}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          style={{ maxWidth: 640, marginBottom: 'clamp(40px, 5vw, 64px)' }}
        >
          <motion.div variants={reduced ? undefined : staggerItem}>
            <Badge tone="primary" style={{ marginBottom: 20 }}>Services</Badge>
          </motion.div>
          <motion.h2
            variants={reduced ? undefined : staggerItem}
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
            {data.sectionHeadings.services}
          </motion.h2>
          <motion.p
            variants={reduced ? undefined : staggerItem}
            style={{ fontFamily: 'var(--f-body)', fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.6, color: 'var(--c-muted)', marginTop: 16 }}
          >
            {data.sectionHeadings.servicesSub}
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={reduced ? undefined : stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(14px, 2vw, 20px)',
          }}
        >
          {data.services.map((s, i) => (
            <ServiceCard key={i} service={s} reduced={!!reduced} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service: s, reduced }: { service: Archetype['services'][0]; reduced: boolean }) {
  const [hover, setHover] = useState(false)
  const Icon = getIcon(s.icon)

  return (
    <motion.div
      variants={reduced ? undefined : staggerItem}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--c-surface)',
        border: `1px solid ${hover ? 'color-mix(in srgb, var(--c-primary), transparent 60%)' : 'var(--c-border)'}`,
        borderRadius: 'var(--r-lg)',
        padding: 'clamp(24px, 2.5vw, 32px)',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transition: 'border-color 0.18s, box-shadow 0.18s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Icon chip */}
      <motion.div
        whileHover={reduced ? undefined : { rotate: -6, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--r-md)',
          background: 'color-mix(in srgb, var(--c-primary) 14%, transparent)',
          color: 'var(--c-primary)',
          display: 'grid',
          placeItems: 'center',
          marginBottom: 20,
          flexShrink: 0,
        }}
      >
        <Icon size={20} strokeWidth={1.8} />
      </motion.div>

      {/* Title + price */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
        <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 20, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--c-fg)', margin: 0 }}>
          {s.title}
        </h3>
        {s.price && (
          <span style={{ fontFamily: 'var(--f-body)', fontSize: 13, fontWeight: 600, color: 'var(--c-primary)', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
            {s.price}
          </span>
        )}
      </div>

      <p style={{ fontFamily: 'var(--f-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--c-muted)', margin: 0, flex: 1 }}>
        {s.desc}
      </p>
    </motion.div>
  )
}
