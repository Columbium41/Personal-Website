import { motion } from 'framer-motion';

const animation = {
    initial: { opacity: 0, x: "-25vw" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "25vw" },
}

function AnimatedPage({ children, className }) {
    return (
        <motion.div 
          className={className}
          variants={animation} 
          initial="initial" 
          animate="animate" 
          exit="exit" t
          transition={{ duration: 0.4 }} 
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage;