import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * A function that returns a <div></div> element containing a card with a skill and its corresponding icon 
 * 
 * @param {String} skill The skill to render into a card format
 * 
 * @returns A <div></div> element containing a card with a skill and its corresponding icon 
 */
function SkillCard({ skill, cardNumber, cardsPerRow }) {
    const cardVariants = {
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
        },
        default: {
            y: "0ch"
        },
        hover: {
            y: "-0.5ch",
            transition: {
                ease: "easeIn",
                duration: 0.05
            }
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
          variants={cardVariants} 
          initial={inView ? "default" : "hidden"}
          animate={controls}
          whileHover="hover"
        >
            {/* Skill Icon */}
            <img 
              src={"/images/" + encodeURIComponent(skill.toLowerCase().replaceAll(".", "").replaceAll(" ", "_")) + ".svg"}
              alt={skill + " logo"}
              className="icon" 
            />

            {/* Skill name */}
            <p>{decodeURIComponent(skill)}</p>
        </motion.div>
    )
}

export default SkillCard;
