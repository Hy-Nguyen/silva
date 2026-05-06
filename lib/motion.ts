// Shared Framer Motion variants — import once, use everywhere.
// All transitions use an easing curve that feels "expressive but controlled".
import type { Variants } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
}

export const stagger = (delay = 0.09): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.1 } },
})

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

// For hero — immediate, above the fold
export const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

export const heroLine: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: 8 },
  show: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

// Image reveal: scale-from-slightly-larger + fade, with a clip-path wipe
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: {
    opacity: 1, scale: 1,
    transition: { duration: 1.1, ease: EASE },
  },
}

// Counter-rotate for the background image (parallax feel)
export const bgImageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.12 },
  show: {
    opacity: 1, scale: 1,
    transition: { duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}
