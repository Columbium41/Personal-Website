import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const hoverVariants = {
    y: "-0.5ch"
}

/**
 * A function that returns a <div></div> element containing a card with a skill and its corresponding icon 
 * 
 * @param {String} skill The skill to render into a card format
 * 
 * @returns A <div></div> element containing a card with a skill and its corresponding icon 
 */
function SkillCard({ skill, cardNumber, cardsPerRow }) {
    const showVariants = {
        visible: { 
            opacity: 1, 
            y: "0ch", 
            transition: { 
                duration: 0.5,
                delay: (cardNumber % cardsPerRow) * 0.1
            }, 
        },
        hidden: { 
            opacity: 0, 
            y: "-3ch" 
        }
    }

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView])

    return (
        <motion.div 
          ref={ref}
          className="skill-card" 
          variants={showVariants} 
          initial="hidden"
          animate={controls}
          whileHover={hoverVariants}
        >
            {/* Skill Icon */}
            <img 
              src={"/images/" + skill.toLowerCase().replace(".", "").replace(" ", "_") + ".svg"} 
              alt={skill + " logo"}
              className="icon" 
            />

            {/* Skill name */}
            <p>{skill}</p>
        </motion.div>
    )
}

export default SkillCard;
