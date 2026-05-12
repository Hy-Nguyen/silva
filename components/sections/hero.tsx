'use client'

import { useRef } from 'react'
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
} from 'framer-motion'
import { Button } from '@/components/ui/button'
import { getIcon } from '@/lib/icons'
import { heroContainer, heroLine, bgImageReveal } from '@/lib/motion'
import type { Archetype } from '@/config/design.config'
import { MapIcon } from 'lucide-react'
import Image from 'next/image'
import MenuImage from '@/public/hero/mariscos-menu.jpg'
interface HeroProps {
    data: Archetype
    filled: boolean
}

export function Hero({ data, filled }: HeroProps) {
    const ref = useRef<HTMLElement>(null)
    const reduced = useReducedMotion()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    // Parallax: bg moves up at 30% rate of scroll
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    // Foreground content drifts up slowly
    const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

    const HeroIcon = getIcon(data.hero.ctaIcon)

    return (
        <section
            ref={ref}
            id="hero"
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--c-bg)',
            }}
            className="flex min-h-dvh flex-col items-center justify-center md:gap-2 lg:flex-row"
        >
            {/* Background layer with parallax */}
            <motion.div
                variants={reduced ? undefined : bgImageReveal}
                initial="hidden"
                animate="show"
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    y: reduced ? 0 : bgY,
                    willChange: 'transform',
                }}
            >
                {filled ? (
                    <>
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${data.images.hero})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        {/* Gradient overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                    'linear-gradient(180deg, color-mix(in srgb, var(--c-bg) 20%, transparent) 0%, var(--c-bg) 100%)',
                            }}
                        />
                    </>
                ) : (
                    <>
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'var(--c-surface-2)',
                                backgroundImage:
                                    'repeating-linear-gradient(135deg, transparent, transparent 22px, color-mix(in srgb, var(--c-border), transparent 50%) 22px, color-mix(in srgb, var(--c-border), transparent 50%) 23px)',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 16,
                                left: 16,
                                padding: '4px 10px',
                                background: 'var(--c-bg)',
                                border: '1px dashed var(--c-border)',
                                borderRadius: 'var(--r-sm)',
                                fontFamily: 'var(--f-body)',
                                fontSize: 10,
                                color: 'var(--c-muted)',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Hero image · 16:9
                        </div>
                    </>
                )}
            </motion.div>

            {/* Foreground content */}
            <motion.div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: 1280,
                    margin: '0 auto',
                    // padding: "120px 64px 140px",
                    minHeight: 640,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    y: reduced ? 0 : fgY,
                }}
                className="hero-content lg:max-w-5xl"
            >
                <motion.div
                    variants={reduced ? undefined : heroContainer}
                    initial="hidden"
                    animate="show"
                    className="md:w-2/3"
                >
                    {/* Eyebrow */}
                    <motion.div
                        variants={reduced ? undefined : heroLine}
                        style={{
                            display: 'inline-block',
                            fontFamily: 'var(--f-body)',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            color: 'var(--c-primary)',
                            marginBottom: 16,
                        }}
                    >
                        {data.hero.eyebrow}
                    </motion.div>

                    {/* Headline — each word in its own overflow-hidden container for the wipe effect */}
                    <div
                        style={
                            {
                                fontFamily: 'var(--f-display)',
                                fontWeight: 500,
                                fontSize: 'clamp(38px, 5.5vw, 68px)',
                                lineHeight: 1.02,
                                letterSpacing: '-0.02em',
                                color: 'var(--c-fg)',
                                margin: 0,
                                textWrap: 'balance',
                            } as React.CSSProperties
                        }
                    >
                        {data.hero.headline.split(' ').map((word, i) => (
                            <span
                                key={i}
                                style={{
                                    display: 'inline-block',
                                    overflow: 'hidden',
                                    marginRight: '0.25em',
                                }}
                            >
                                <motion.span
                                    variants={reduced ? undefined : heroLine}
                                    style={{ display: 'inline-block' }}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </div>

                    {/* Sub */}
                    <motion.p
                        variants={reduced ? undefined : heroLine}
                        style={{
                            fontFamily: 'var(--f-body)',
                            fontSize: 'clamp(16px, 1.5vw, 19px)',
                            lineHeight: 1.55,
                            color: 'var(--c-muted)',
                            marginTop: 20,
                            marginBottom: 32,
                            maxWidth: 540,
                        }}
                    >
                        {data.hero.sub}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={reduced ? undefined : heroLine}
                        style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}
                    >
                        <a href="#gallery">
                            <Button variant="primary" size="lg" icon={HeroIcon}>
                                {data.hero.cta}
                            </Button>
                        </a>

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=2732+W+Glendale+Ave,+Phoenix,+AZ+85051"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="secondary"
                                size="lg"
                                icon={MapIcon}
                            >
                                Find Us Here
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                variants={reduced ? undefined : heroContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 1.2,
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: 1280,
                    display: 'flex',
                    flexDirection: 'column',
                    y: reduced ? 0 : fgY,
                }}
                className="group w-full px-4 lg:min-h-160 lg:w-2/5 lg:pr-10"
            >
                <Image
                    src={MenuImage}
                    alt="Mariscos Silva Hero"
                    className="z-1 mr-16 w-full rounded-md pt-16 transition-transform duration-200 will-change-transform md:group-hover:scale-105 lg:min-w-[500px] lg:pt-0"
                />
            </motion.div>
        </section>
    )
}
