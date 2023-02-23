import { motion } from 'framer-motion';

const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25 }
}

function AnimatedPage({ children, className }) {
    return (
        <motion.div variants={animation} initial="initial" animate="animate" exit="exit" transition="transition" className={className}>
            {children}
        </motion.div>
    )
}

export default AnimatedPage;