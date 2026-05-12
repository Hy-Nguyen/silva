'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Clock, Phone, Mail, MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { stagger, staggerItem, slideLeft, slideRight } from '@/lib/motion'
import type { Archetype } from '@/config/design.config'
import { Instagram } from '../icons/instagram'
import { TikTok } from '../icons/tiktok'

const VP = { once: true, margin: '-60px' }

interface HoursContactProps {
    data: Archetype
}

export function HoursContact({ data }: HoursContactProps) {
    const reduced = useReducedMotion()

    return (
        <section
            id="hours"
            style={{
                background: 'var(--c-fg)',
                color: 'var(--c-bg)',
                padding: 'clamp(72px, 8vw, 120px) clamp(24px, 5vw, 64px)',
            }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: 'clamp(40px, 5vw, 64px)',
                }}
            >
                {/* Hours */}
                <motion.div
                    variants={reduced ? undefined : stagger(0.06)}
                    initial="hidden"
                    whileInView="show"
                    viewport={VP}
                >
                    <motion.div
                        variants={reduced ? undefined : staggerItem}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            fontFamily: 'var(--f-body)',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--c-accent)',
                            marginBottom: 20,
                        }}
                    >
                        <Clock size={14} strokeWidth={2} /> Hours
                    </motion.div>

                    <motion.h2
                        variants={reduced ? undefined : staggerItem}
                        style={{
                            fontFamily: 'var(--f-display)',
                            fontWeight: 500,
                            fontSize: 'clamp(28px, 3vw, 36px)',
                            letterSpacing: '-0.02em',
                            margin: 0,
                            marginBottom: 24,
                        }}
                    >
                        {data.sectionHeadings.hours}
                    </motion.h2>

                    <motion.table
                        variants={reduced ? undefined : stagger(0.04)}
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontFamily: 'var(--f-body)',
                        }}
                    >
                        <tbody>
                            {data.hours.map(([day, h], i) => {
                                const closed = h
                                    .toLowerCase()
                                    .includes('closed')
                                return (
                                    <motion.tr
                                        key={i}
                                        variants={
                                            reduced ? undefined : staggerItem
                                        }
                                        style={{
                                            borderBottom:
                                                '1px solid color-mix(in srgb, var(--c-bg), transparent 88%)',
                                        }}
                                    >
                                        <td
                                            style={{
                                                padding: '10px 0',
                                                fontSize: 14,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {day}
                                        </td>
                                        <td
                                            style={{
                                                padding: '10px 0',
                                                fontSize: 14,
                                                textAlign: 'right',
                                                color: closed
                                                    ? 'color-mix(in srgb, var(--c-bg), transparent 50%)'
                                                    : 'var(--c-bg)',
                                                fontVariantNumeric:
                                                    'tabular-nums',
                                            }}
                                        >
                                            {h}
                                        </td>
                                    </motion.tr>
                                )
                            })}
                        </tbody>
                    </motion.table>
                </motion.div>

                {/* Contact */}
                <motion.div
                    id="contact"
                    variants={reduced ? undefined : stagger(0.08)}
                    initial="hidden"
                    whileInView="show"
                    viewport={VP}
                >
                    <motion.div
                        variants={reduced ? undefined : staggerItem}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            fontFamily: 'var(--f-body)',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--c-accent)',
                            marginBottom: 20,
                        }}
                    >
                        <Phone size={14} strokeWidth={2} /> Contact
                    </motion.div>

                    <motion.h2
                        variants={reduced ? undefined : staggerItem}
                        style={{
                            fontFamily: 'var(--f-display)',
                            fontWeight: 500,
                            fontSize: 'clamp(28px, 3vw, 36px)',
                            letterSpacing: '-0.02em',
                            margin: 0,
                            marginBottom: 24,
                        }}
                    >
                        {data.sectionHeadings.contact}
                    </motion.h2>

                    <motion.div
                        variants={reduced ? undefined : stagger(0.1)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 18,
                        }}
                    >
                        {[
                            {
                                icon: Phone,
                                label: 'Phone',
                                value: data.contact.phone,
                                href: `tel:${data.contact.phone}`,
                            },
                            // { icon: Mail, label: 'Email', value: data.contact.email, href: `mailto:${data.contact.email}` },
                        ].map(({ icon: Icon, label, value, href }) => (
                            <motion.a
                                key={label}
                                variants={reduced ? undefined : staggerItem}
                                href={href}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14,
                                    color: 'var(--c-bg)',
                                    textDecoration: 'none',
                                }}
                            >
                                <ContactChip Icon={Icon} />
                                <div>
                                    <div
                                        style={{
                                            fontSize: 11,
                                            opacity: 0.55,
                                            fontFamily: 'var(--f-body)',
                                        }}
                                    >
                                        {label}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--f-display)',
                                            fontSize: 18,
                                            fontWeight: 500,
                                        }}
                                    >
                                        {value}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                        <motion.div
                            variants={reduced ? undefined : staggerItem}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                            }}
                        >
                            <ContactChip Icon={MapPin} />
                            <div>
                                <div
                                    style={{
                                        fontSize: 11,
                                        opacity: 0.55,
                                        fontFamily: 'var(--f-body)',
                                    }}
                                >
                                    Address
                                </div>
                                <div
                                    style={{
                                        fontFamily: 'var(--f-display)',
                                        fontSize: 16,
                                        fontWeight: 500,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {data.contact.address}
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex w-full flex-row items-center justify-evenly">
                            <motion.a
                                href={
                                    'https://www.instagram.com/silvamariscosaz/'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={reduced ? undefined : staggerItem}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14,
                                }}
                                className="flex size-10 items-center justify-center rounded-md bg-transparent p-1 transition-colors hover:bg-(--c-muted)"
                            >
                                <Instagram width={32} />
                            </motion.a>
                            <motion.a
                                href={
                                    'https://www.tiktok.com/@mariscos.silvaaa'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={reduced ? undefined : staggerItem}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14,
                                }}
                                className="flex size-10 items-center justify-center rounded-md bg-transparent p-2 transition-colors hover:bg-(--c-muted)"
                            >
                                <TikTok color="white" fill="white" width={24} />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Map */}
                <motion.div
                    variants={reduced ? undefined : slideRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={VP}
                >
                    <div
                        style={{
                            aspectRatio: '4/3',
                            borderRadius: 'var(--r-md)',
                            overflow: 'hidden',
                            position: 'relative',
                            background:
                                'color-mix(in srgb, var(--c-bg), transparent 88%)',
                            border: '1px solid color-mix(in srgb, var(--c-bg), transparent 80%)',
                        }}
                    >
                        <MapMock />
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 12,
                                left: 12,
                                right: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 8,
                                padding: 12,
                                background: 'var(--c-bg)',
                                color: 'var(--c-fg)',
                                borderRadius: 'var(--r-sm)',
                                boxShadow: 'var(--shadow-md)',
                            }}
                        >
                            <div style={{ minWidth: 0 }}>
                                <div
                                    style={{
                                        fontFamily: 'var(--f-display)',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {data.name}
                                </div>
                                <div
                                    style={{
                                        fontFamily: 'var(--f-body)',
                                        fontSize: 11,
                                        color: 'var(--c-muted)',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {data.contact.address}
                                </div>
                            </div>
                            <Button
                                variant="primary"
                                size="sm"
                                icon={Navigation}
                            >
                                Directions
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function ContactChip({
    Icon,
}: {
    Icon: React.ComponentType<{ size: number; strokeWidth: number }>
}) {
    return (
        <div
            style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--r-md)',
                background: 'color-mix(in srgb, var(--c-bg), transparent 90%)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
            }}
        >
            <Icon size={16} strokeWidth={1.8} />
        </div>
    )
}

function MapMock() {
    return (
        <svg
            viewBox="0 0 400 300"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            style={{
                display: 'block',
                background: 'color-mix(in srgb, var(--c-bg), transparent 90%)',
            }}
        >
            <defs>
                <pattern
                    id="map-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="color-mix(in srgb, var(--c-bg), transparent 78%)"
                        strokeWidth="0.5"
                    />
                </pattern>
            </defs>
            <rect width="400" height="300" fill="url(#map-grid)" />
            {/* Roads */}
            <path
                d="M0,180 Q120,140 200,160 T400,150"
                fill="none"
                stroke="color-mix(in srgb, var(--c-bg), transparent 65%)"
                strokeWidth="14"
                strokeLinecap="round"
            />
            <path
                d="M0,180 Q120,140 200,160 T400,150"
                fill="none"
                stroke="color-mix(in srgb, var(--c-bg), transparent 80%)"
                strokeWidth="2"
                strokeDasharray="2 4"
            />
            <path
                d="M180,0 L210,300"
                stroke="color-mix(in srgb, var(--c-bg), transparent 70%)"
                strokeWidth="10"
                strokeLinecap="round"
            />
            <path
                d="M70,0 L80,300"
                stroke="color-mix(in srgb, var(--c-bg), transparent 78%)"
                strokeWidth="6"
            />
            <path
                d="M320,0 L340,300"
                stroke="color-mix(in srgb, var(--c-bg), transparent 78%)"
                strokeWidth="6"
            />
            {/* Blocks */}
            <rect
                x="40"
                y="40"
                width="80"
                height="60"
                rx="4"
                fill="color-mix(in srgb, var(--c-bg), transparent 82%)"
            />
            <rect
                x="220"
                y="40"
                width="100"
                height="50"
                rx="4"
                fill="color-mix(in srgb, var(--c-bg), transparent 82%)"
            />
            <rect
                x="240"
                y="220"
                width="60"
                height="60"
                rx="4"
                fill="color-mix(in srgb, var(--c-bg), transparent 82%)"
            />
            {/* Pin */}
            <g transform="translate(195, 145)">
                <circle
                    r="22"
                    fill="color-mix(in srgb, var(--c-primary), transparent 70%)"
                />
                <circle r="14" fill="var(--c-primary)" />
                <circle r="5" fill="var(--c-primary-fg)" />
            </g>
        </svg>
    )
}
