'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Badge, Stars, Avatar } from '@/components/ui/primitives'
import { stagger, staggerItem } from '@/lib/motion'
import type { Archetype } from "@/config/design.config";

const VP = { once: true, margin: '-60px' }

interface TestimonialsProps {
  data: Archetype
  filled: boolean
}

export function Testimonials({ data, filled }: TestimonialsProps) {
  const reduced = useReducedMotion()

  return (
    <section
      style={{ padding: 'clamp(72px, 8vw, 120px) clamp(24px, 5vw, 64px)', maxWidth: 1280, margin: '0 auto' }}
    >
      {/* Header */}
      <motion.div
        variants={reduced ? undefined : stagger()}
        initial="hidden"
        whileInView="show"
        viewport={VP}
        style={{ maxWidth: 640, marginBottom: 'clamp(32px, 5vw, 48px)' }}
      >
        <motion.div variants={reduced ? undefined : staggerItem}>
          <Badge tone="primary" style={{ marginBottom: 20 }}>What guests say</Badge>
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
          {data.sectionHeadings.testimonials}
        </motion.h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={reduced ? undefined : stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VP}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(14px, 2vw, 20px)',
        }}
      >
        {data.testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} filled={filled} src={data.images.testimonialAvatar} reduced={!!reduced} />
        ))}
      </motion.div>
    </section>
  )
}

function TestimonialCard({ testimonial: t, filled, src, reduced }: { testimonial: Archetype['testimonials'][0]; filled: boolean; src: string; reduced: boolean }) {
  return (
    <motion.div
      variants={reduced ? undefined : staggerItem}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-lg)',
        padding: 'clamp(24px, 2.5vw, 28px)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.18s',
      }}
    >
      <Stars rating={t.rating} size={14} />

      <Quote size={28} strokeWidth={1.5} style={{ color: 'var(--c-primary)', opacity: 0.35, marginTop: 16 }} />

      <p
        style={{
          fontFamily: 'var(--f-display)',
          fontWeight: 400,
          fontSize: 18,
          lineHeight: 1.45,
          letterSpacing: '-0.005em',
          color: 'var(--c-fg)',
          margin: '12px 0 24px',
          flex: 1,
        }}
      >
        "{t.quote}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Avatar src={src} filled={filled} />
        <div>
          <div style={{ fontFamily: 'var(--f-body)', fontSize: 14, fontWeight: 600, color: 'var(--c-fg)' }}>{t.name}</div>
          <div style={{ fontFamily: 'var(--f-body)', fontSize: 12, color: 'var(--c-muted)' }}>{t.meta}</div>
        </div>
      </div>
    </motion.div>
  )
}
