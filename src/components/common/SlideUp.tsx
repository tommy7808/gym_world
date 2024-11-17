import { motion } from 'framer-motion';

interface SlideUpProps {
    animationState: boolean;
    duration?: number;
    delay: number;
    children: React.ReactNode;
}
/** A wrapper component that will animate its children to slide up and fade in */
export function SlideUp({ animationState, duration = 0.5, delay, children }: SlideUpProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            animate={{
                opacity: animationState ? 0 : 1,
                y: animationState ? 50 : 0,
            }}
            transition={{
                duration,
                delay,
            }}>
            {children}
        </motion.div>
    );
}
