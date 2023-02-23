import { motion } from 'framer-motion';

const animation = {
    initial: { opacity: 0, y: "5vh" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "5vh" },
}

function AnimatedPage({ children, className }) {
    return (
        <motion.div 
          className={className}
          variants={animation} 
          initial="initial" 
          animate="animate" 
          exit="exit" t
          transition={{ duration: 0.5, ease: "easeIn" }} 
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage;