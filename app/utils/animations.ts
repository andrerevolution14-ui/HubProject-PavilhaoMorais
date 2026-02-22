import type { Variants, Transition } from 'framer-motion';

export type FadeProps = {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: Transition;
};

/**
 * Returns framer-motion props for a smooth fade-up entrance.
 * Fully typed to satisfy MotionProps.
 */
export function fadeUp(delay = 0): FadeProps {
    return {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
    };
}

/** Stagger container variant */
export const staggerContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
};

/** Stagger item variant */
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};
