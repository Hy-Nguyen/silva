'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Share2, AtSign, Link2 } from 'lucide-react'
import { Logo } from '@/components/ui/primitives'
import { getIcon } from '@/lib/icons'
import { stagger, staggerItem } from '@/lib/motion'
import type { Archetype, LogoKind } from '@/config/design.config'

const VP = { once: true, margin: '-40px' }

const FOOTER_COLS = [
    { title: 'Visit', items: ['Services', 'Gallery', 'About', 'Hours'] },
    { title: 'Connect', items: ['Phone', 'Directions', 'Book online'] },
    { title: 'Legal', items: ['Privacy', 'Terms', 'Accessibility'] },
]

interface FooterProps {
    data: Archetype
    logoKind: LogoKind
}

export function Footer({ data, logoKind }: FooterProps) {
    const reduced = useReducedMotion()
    const Mark = getIcon(data.logoMark)

    return (
        <footer
            style={{
                padding:
                    'clamp(48px, 6vw, 64px) clamp(24px, 5vw, 64px) clamp(32px, 4vw, 40px)',
                background: 'var(--c-bg)',
                borderTop: '1px solid var(--c-border)',
            }}
        >
            <motion.div
                variants={reduced ? undefined : stagger(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={VP}
                style={{ maxWidth: 1280, margin: '0 auto' }}
            >
                <motion.div
                    variants={reduced ? undefined : stagger(0.06)}
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                        gap: 'clamp(32px, 4vw, 48px)',
                        paddingBottom: 40,
                        borderBottom: '1px solid var(--c-border)',
                    }}
                >
                    {/* Brand col */}
                    <motion.div
                        variants={reduced ? undefined : staggerItem}
                        style={{ gridColumn: 'span 1' }}
                    >
                        <Logo
                            kind={logoKind}
                            name={data.name}
                            mark={Mark}
                            size={20}
                        />
                        <p
                            style={{
                                fontFamily: 'var(--f-body)',
                                fontSize: 14,
                                lineHeight: 1.6,
                                color: 'var(--c-muted)',
                                marginTop: 16,
                                maxWidth: 320,
                            }}
                        >
                            {data.tagline}. {data.contact.address}.
                        </p>
                    </motion.div>

                    {FOOTER_COLS.map((col) => (
                        <motion.div
                            key={col.title}
                            variants={reduced ? undefined : staggerItem}
                        >
                            <div
                                style={{
                                    fontFamily: 'var(--f-body)',
                                    fontSize: 11,
                                    fontWeight: 600,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'var(--c-muted)',
                                    marginBottom: 16,
                                }}
                            >
                                {col.title}
                            </div>
                            <ul
                                style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                }}
                            >
                                {col.items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            style={{
                                                fontFamily: 'var(--f-body)',
                                                fontSize: 14,
                                                color: 'var(--c-fg)',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={reduced ? undefined : staggerItem}
                    style={{
                        paddingTop: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 16,
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        style={{
                            fontFamily: 'var(--f-body)',
                            fontSize: 12,
                            color: 'var(--c-muted)',
                        }}
                    >
                        © 2026 {data.name}. All rights reserved.
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                        {[Share2, AtSign, Link2].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 'var(--r-md)',
                                    border: '1px solid var(--c-border)',
                                    background: 'var(--c-surface)',
                                    display: 'grid',
                                    placeItems: 'center',
                                    color: 'var(--c-fg)',
                                    textDecoration: 'none',
                                }}
                            >
                                <Icon size={15} strokeWidth={1.6} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}
