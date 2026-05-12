'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/primitives'
import { stagger, staggerItem } from '@/lib/motion'
import type { Archetype } from '@/config/design.config'
import FillerImage from '../ui/filler-image'

const VP = { once: true, margin: '-60px' }

interface GalleryProps {
    data: Archetype
    filled: boolean
}

export function Gallery({ data, filled }: GalleryProps) {
    const [lightbox, setLightbox] = useState<number | null>(null)
    const reduced = useReducedMotion()

    const next = () =>
        setLightbox((p) =>
            p !== null ? (p + 1) % data.images.gallery.length : null
        )
    const prev = () =>
        setLightbox((p) =>
            p !== null
                ? (p - 1 + data.images.gallery.length) %
                  data.images.gallery.length
                : null
        )

    return (
        <section
            id="gallery"
            style={{
                background: 'var(--c-surface-2)',
                padding: 'clamp(72px, 8vw, 120px) clamp(24px, 5vw, 64px)',
            }}
        >
            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        gap: 24,
                        marginBottom: 'clamp(32px, 5vw, 56px)',
                        flexWrap: 'wrap',
                    }}
                >
                    <motion.div
                        variants={reduced ? undefined : stagger()}
                        initial="hidden"
                        whileInView="show"
                        viewport={VP}
                    >
                        <motion.div
                            variants={reduced ? undefined : staggerItem}
                        >
                            <Badge tone="primary" style={{ marginBottom: 20 }}>
                                Gallery
                            </Badge>
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
                            {data.sectionHeadings.gallery}
                        </motion.h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* <Button variant="ghost" size="md" iconRight={ArrowRight}>See all</Button> */}
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    variants={reduced ? undefined : stagger(0.06)}
                    initial="hidden"
                    whileInView="show"
                    viewport={VP}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 'clamp(10px, 1.5vw, 16px)',
                    }}
                    className="gallery-grid"
                >
                    {data.galleryCaptions.map((cap, i) => (
                        <GalleryItem
                            key={i}
                            index={i}
                            caption={cap}
                            filled={filled}
                            src={`./gallery/${data.images.gallery[i]}`}
                            ratio={'1/1'}
                            onClick={() => filled && setLightbox(i)}
                            reduced={!!reduced}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setLightbox(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(10, 9, 8, 0.94)',
                            zIndex: 999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 24,
                        }}
                    >
                        {/* Image */}
                        <motion.img
                            key={lightbox}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            src={`./gallery/${data.images.gallery[lightbox]}`}
                            alt={data.galleryCaptions[lightbox]}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '82vh',
                                borderRadius: 12,
                                objectFit: 'contain',
                            }}
                        />
                        {/* Caption */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 28,
                                left: 0,
                                right: 0,
                                textAlign: 'center',
                                color: 'rgba(255,255,255,0.75)',
                                fontFamily: 'var(--f-body)',
                                fontSize: 13,
                            }}
                        >
                            {data.galleryCaptions[lightbox]} · click outside to
                            close
                        </div>
                        {/* Nav arrows */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                prev()
                            }}
                            style={{
                                position: 'absolute',
                                left: 16,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                appearance: 'none',
                                border: 'none',
                                background: 'rgba(255,255,255,0.12)',
                                color: '#fff',
                                width: 44,
                                height: 44,
                                borderRadius: 8,
                                display: 'grid',
                                placeItems: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <ChevronLeft size={22} strokeWidth={2} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                next()
                            }}
                            style={{
                                position: 'absolute',
                                right: 16,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                appearance: 'none',
                                border: 'none',
                                background: 'rgba(255,255,255,0.12)',
                                color: '#fff',
                                width: 44,
                                height: 44,
                                borderRadius: 8,
                                display: 'grid',
                                placeItems: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <ChevronRight size={22} strokeWidth={2} />
                        </button>
                        {/* Close */}
                        <button
                            onClick={() => setLightbox(null)}
                            style={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                appearance: 'none',
                                border: 'none',
                                background: 'rgba(255,255,255,0.12)',
                                color: '#fff',
                                width: 44,
                                height: 44,
                                borderRadius: 8,
                                display: 'grid',
                                placeItems: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <X size={20} strokeWidth={2} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

function GalleryItem({
    index,
    caption,
    filled,
    src,
    ratio,
    onClick,
    reduced,
}: {
    index: number
    caption: string
    filled: boolean
    src: string
    ratio: string
    onClick: () => void
    reduced: boolean
}) {
    const [hover, setHover] = useState(false)

    return (
        <motion.div
            variants={reduced ? undefined : staggerItem}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--r-md)',
                cursor: filled ? 'zoom-in' : 'default',
                aspectRatio: ratio,
            }}
        >
            {filled ? (
                <motion.div
                    animate={{ scale: hover ? 1.05 : 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        willChange: 'transform',
                    }}
                />
            ) : (
                <FillerImage index={index} />
            )}

            {/* Hover caption overlay */}
            {filled && (
                <motion.div
                    animate={{ opacity: hover ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55))',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: 14,
                        pointerEvents: 'none',
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'var(--f-body)',
                            fontSize: 16,
                            fontWeight: 800,
                            color: 'white',
                            letterSpacing: '-0.005em',
                        }}
                    >
                        {caption}
                    </span>
                </motion.div>
            )}
        </motion.div>
    )
}
