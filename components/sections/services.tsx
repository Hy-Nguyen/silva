'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/primitives'
import { getIcon } from '@/lib/icons'
import { stagger, staggerItem } from '@/lib/motion'
import FillerImage from '@/components/ui/filler-image'
import type { Archetype } from '@/config/design.config'

const VP = { once: true, margin: '-60px' }

interface ServicesProps {
    data: Archetype
    filled: boolean
}

export function Services({ data, filled }: ServicesProps) {
    const reduced = useReducedMotion()
    const [lightbox, setLightbox] = useState<{
        images: string[]
        index: number
    } | null>(null)

    const nextLb = () =>
        setLightbox((lb) =>
            lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null
        )
    const prevLb = () =>
        setLightbox((lb) =>
            lb
                ? {
                      ...lb,
                      index:
                          (lb.index - 1 + lb.images.length) % lb.images.length,
                  }
                : null
        )

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
                    style={{
                        maxWidth: 640,
                        marginBottom: 'clamp(40px, 5vw, 64px)',
                    }}
                >
                    <motion.div variants={reduced ? undefined : staggerItem}>
                        <Badge tone="primary" style={{ marginBottom: 20 }}>
                            Services
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
                        {data.sectionHeadings.services}
                    </motion.h2>
                    <motion.p
                        variants={reduced ? undefined : staggerItem}
                        style={{
                            fontFamily: 'var(--f-body)',
                            fontSize: 'clamp(14px, 1.3vw, 16px)',
                            lineHeight: 1.6,
                            color: 'var(--c-muted)',
                            marginTop: 16,
                            marginBottom: 0,
                        }}
                    >
                        {data.sectionHeadings.servicesSub}
                    </motion.p>
                </motion.div>

                {/* Service rows */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'clamp(48px, 7vw, 80px)',
                    }}
                >
                    {data.services.map((s, i) => (
                        <ServiceRow
                            key={i}
                            service={s}
                            filled={filled}
                            reduced={!!reduced}
                            onOpenLightbox={(idx) =>
                                setLightbox({
                                    images: s.images ?? [],
                                    index: idx,
                                })
                            }
                        />
                    ))}
                </div>
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
                        <LightboxMedia
                            key={lightbox.index}
                            src={`./gallery/${lightbox.images[lightbox.index]}`}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                prevLb()
                            }}
                            style={navBtnStyle('left')}
                        >
                            <ChevronLeft size={22} strokeWidth={2} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                nextLb()
                            }}
                            style={navBtnStyle('right')}
                        >
                            <ChevronRight size={22} strokeWidth={2} />
                        </button>
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

function navBtnStyle(side: 'left' | 'right'): React.CSSProperties {
    return {
        position: 'absolute',
        [side]: 16,
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
    }
}

function LightboxMedia({
    src,
    onClick,
}: {
    src: string
    onClick: React.MouseEventHandler
}) {
    const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src)
    const style: React.CSSProperties = {
        maxWidth: '100%',
        maxHeight: '82vh',
        borderRadius: 12,
        objectFit: 'contain',
    }
    return isVideo ? (
        <video src={src} autoPlay controls style={style} onClick={onClick} />
    ) : (
        <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            src={src}
            onClick={onClick}
            style={style}
        />
    )
}

function ServiceRow({
    service: s,
    filled,
    reduced,
    onOpenLightbox,
}: {
    service: Archetype['services'][0]
    filled: boolean
    reduced: boolean
    onOpenLightbox: (idx: number) => void
}) {
    const Icon = getIcon(s.icon)
    const images = s.images ?? []

    return (
        <motion.div
            variants={reduced ? undefined : stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="flex w-full flex-col items-start gap-24 lg:flex-row-reverse lg:odd:flex-row"
        >
            {/* Text side */}
            <motion.div
                variants={reduced ? undefined : staggerItem}
                className="service-text w-full lg:w-1/2"
            >
                <div className="flex w-fit flex-row items-center gap-4">
                    <div
                        style={{
                            width: 44,
                            height: 44,
                            borderRadius: 'var(--r-md)',
                            background:
                                'color-mix(in srgb, var(--c-primary) 14%, transparent)',
                            color: 'var(--c-primary)',
                            display: 'grid',
                            placeItems: 'center',
                            marginBottom: 16,
                            flexShrink: 0,
                        }}
                    >
                        <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3
                        style={{
                            fontFamily: 'var(--f-display)',
                            fontWeight: 600,
                            fontSize: 'clamp(20px, 2vw, 26px)',
                            lineHeight: 1.2,
                            letterSpacing: '-0.01em',
                            color: 'var(--c-fg)',
                            margin: '0 0 8px',
                        }}
                    >
                        {s.title}
                    </h3>
                </div>
                <p
                    style={{
                        fontFamily: 'var(--f-body)',
                        fontSize: 'clamp(14px, 1.2vw, 15px)',
                        lineHeight: 1.6,
                        color: 'var(--c-muted)',
                        margin: 0,
                    }}
                >
                    {s.desc}
                </p>
                {s.price && (
                    <span
                        style={{
                            display: 'inline-block',
                            marginTop: 14,
                            fontFamily: 'var(--f-body)',
                            fontSize: 13,
                            fontWeight: 600,
                            color: 'var(--c-primary)',
                            fontVariantNumeric: 'tabular-nums',
                        }}
                    >
                        {s.price}
                    </span>
                )}
            </motion.div>

            {/* Media side */}
            <motion.div
                variants={reduced ? undefined : staggerItem}
                className="service-media w-full lg:w-1/2"
            >
                {filled && images.length > 0 ? (
                    <ServiceMediaGallery
                        images={images}
                        reduced={reduced}
                        onOpenLightbox={onOpenLightbox}
                    />
                ) : (
                    <div>
                        <div
                            style={{
                                aspectRatio: '16/9',
                                borderRadius: 'var(--r-lg)',
                                overflow: 'hidden',
                                marginBottom: 8,
                            }}
                        >
                            <FillerImage index={0} />
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: 8,
                            }}
                        >
                            {[1, 2, 3, 4].map((j) => (
                                <div
                                    key={j}
                                    style={{
                                        aspectRatio: '1/1',
                                        borderRadius: 'var(--r-md)',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <FillerImage index={j} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    )
}

function ServiceMediaGallery({
    images,
    reduced,
    onOpenLightbox,
}: {
    images: string[]
    reduced: boolean
    onOpenLightbox: (idx: number) => void
}) {
    const [active, setActive] = useState(0)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current)
        if (images.length <= 1) return
        timerRef.current = setInterval(() => {
            setActive((prev) => (prev + 1) % images.length)
        }, 3500)
    }, [images.length])

    useEffect(() => {
        startTimer()
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [startTimer])

    const goTo = (idx: number) => {
        setActive(idx)
        startTimer()
    }

    const isVideo = (name: string) => /\.(mp4|webm|ogg|mov)$/i.test(name)
    const thumbCount = Math.min(images.length, 4)

    return (
        <div className="flex w-full flex-col justify-center gap-2">
            {/* Main display */}
            <div
                onClick={() => onOpenLightbox(active)}
                style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    borderRadius: 'var(--r-lg)',
                    overflow: 'hidden',
                    cursor: 'zoom-in',
                    marginBottom: 8,
                    background: 'var(--c-border)',
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        {isVideo(images[active]) ? (
                            <video
                                src={`./videos/${images[active]}`}
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        ) : (
                            <div
                                style={{
                                    backgroundImage: `url(./gallery/${images[active]})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                className="aspect-square w-full"
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${thumbCount}, 1fr)`,
                    gap: 8,
                }}
                className="w-1/2 translate-x-1/2"
            >
                {images.slice(0, 4).map((img, i) => {
                    const isActive = i === active
                    return (
                        <motion.div
                            key={i}
                            onClick={() => goTo(i)}
                            whileHover={reduced ? undefined : { scale: 1.04 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: 'var(--r-md)',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                outline: isActive
                                    ? '2.5px solid var(--c-primary)'
                                    : '2.5px solid transparent',
                                outlineOffset: 2,
                                transition: 'outline-color 0.15s',
                            }}
                        >
                            {isVideo(img) ? (
                                <video
                                    src={`./gallery/${img}`}
                                    muted
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        pointerEvents: 'none',
                                        opacity: isActive ? 1 : 0.6,
                                        transition: 'opacity 0.15s',
                                    }}
                                />
                            ) : (
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(./gallery/${img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        opacity: isActive ? 1 : 0.6,
                                        transition: 'opacity 0.15s',
                                    }}
                                />
                            )}
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
