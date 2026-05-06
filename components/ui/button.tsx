'use client'

import { useState, type ReactNode, type CSSProperties } from 'react'
type IconComponent = React.ComponentType<{ size?: number; strokeWidth?: number }>

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  icon?: IconComponent
  iconRight?: IconComponent
  full?: boolean
  onClick?: () => void
  style?: CSSProperties
  type?: 'button' | 'submit' | 'reset'
  href?: string
}

const SIZES = {
  sm: { h: 36, px: 14, fs: 13, gap: 6, ic: 14 },
  md: { h: 44, px: 18, fs: 14, gap: 8, ic: 16 },
  lg: { h: 52, px: 22, fs: 15, gap: 10, ic: 18 },
}

const VARIANTS = {
  primary: {
    bg: 'var(--c-primary)',
    fg: 'var(--c-primary-fg)',
    bd: 'transparent',
    hbg: 'color-mix(in srgb, var(--c-primary), #000 10%)',
  },
  secondary: {
    bg: 'var(--c-surface)',
    fg: 'var(--c-fg)',
    bd: 'var(--c-border)',
    hbg: 'var(--c-surface-2)',
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--c-fg)',
    bd: 'transparent',
    hbg: 'var(--c-surface-2)',
  },
  accent: {
    bg: 'var(--c-accent)',
    fg: 'var(--c-accent-fg)',
    bd: 'transparent',
    hbg: 'color-mix(in srgb, var(--c-accent), #000 10%)',
  },
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  full,
  onClick,
  style,
  type = 'button',
  href,
}: ButtonProps) {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const sz = SIZES[size]
  const v = VARIANTS[variant]

  const baseStyle: CSSProperties = {
    appearance: 'none',
    border: `1px solid ${v.bd}`,
    cursor: 'pointer',
    background: hover ? v.hbg : v.bg,
    color: v.fg,
    height: sz.h,
    padding: `0 ${sz.px}px`,
    gap: sz.gap,
    fontFamily: 'var(--f-body)',
    fontSize: sz.fs,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    borderRadius: 'var(--r-md)',
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    transform: active ? 'translateY(1px)' : 'none',
    transition: 'background 0.14s, transform 0.08s',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...style,
  }

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false) },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  }

  if (href) {
    return (
      <a href={href} style={baseStyle} {...handlers}>
        {Icon && <Icon size={sz.ic} strokeWidth={2} />}
        <span>{children}</span>
        {IconRight && <IconRight size={sz.ic} strokeWidth={2} />}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} style={baseStyle} {...handlers}>
      {Icon && <Icon size={sz.ic} strokeWidth={2} />}
      <span>{children}</span>
      {IconRight && <IconRight size={sz.ic} strokeWidth={2} />}
    </button>
  )
}
