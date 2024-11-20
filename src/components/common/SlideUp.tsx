import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface SlideUpProps {
    animationState: boolean;
    duration?: number;
    delay: number;
    children: React.ReactNode;
    styles?: string;
}

/** A wrapper component that will animate its children to slide up and fade in */
export const SlideUp = forwardRef<HTMLDivElement, SlideUpProps>(
    ({ animationState, duration = 0.5, delay, children, styles }: SlideUpProps, ref) => {
        return (
            <motion.div
                ref={ref}
                className={styles}
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: animationState ? 1 : 0,
                    y: animationState ? 0 : 50,
                }}
                transition={{
                    duration,
                    delay,
                    type: 'spring',
                }}>
                {children}
            </motion.div>
        );
    }
);
