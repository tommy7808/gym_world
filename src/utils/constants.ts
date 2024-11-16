export enum HeaderStyle {
    h1 = 'leading-[150%] font-semibold text-mobile-h1 sm:text-tablet-h1 lg:text-desktop-h1',
    h2 = 'leading-[150%] font-semibold text-mobile-h2 sm:text-tablet-h2 lg:text-desktop-h2',
    h3 = 'leading-[150%] font-semibold text-mobile-h3 sm:text-tablet-h3 lg:text-desktop-h3',
    h4 = 'leading-[150%] font-semibold text-mobile-h4 sm:text-tablet-h4 lg:text-desktop-h4',
}

export enum ParagraphStyle {
    p1 = 'leading-[190%] md:leading-[150%] text-mobile-p1 sm:text-tablet-p1 lg:text-desktop-p1',
    p2 = 'leading-[190%] md:leading-[150%] text-mobile-p2 sm:text-tablet-p2 lg:text-desktop-p2',
    p3 = 'leading-[190%] md:leading-[150%] text-mobile-p3 sm:text-tablet-p3 lg:text-desktop-p3',
}

export enum HeadingSize {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
}

export enum ParagraphSize {
    p1 = 'p1',
    p2 = 'p2',
    p3 = 'p3',
}

/**
 * An object containing props that will animate an element with a slide up
 * animation initially and a slide down animation when it disappears.
 */
export const slideVariants = {
    initial: { y: '100%', opacity: 0 },
    whileInView: { y: '0%', opacity: 1 },
    exit: { y: '100%', opacity: 0 },
    transition: { duration: 0.4, ease: 'easeInOut' }
}