import '../css/Work.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function WorkCard({ position }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <motion.div 
          className="position-card"
          onClick={handleClick}
        >
            <h3 className="role">{ position.role }</h3>
            <h4 className="employer">{ position.employer }</h4>
            <div className="dates">
                {position.dates.map((date, index) => (
                    <h4 className="date" key={index}>
                        {date.start_date} — {date.end_date === null ? "Present" : date.end_date} | {date.full_time ? "Full-Time" : "Part-Time"}
                    </h4>
                ))}
            </div>
            <div className="uses">
                {position.uses.map((use, index) => (
                    <img src={"/images/" + use.toLowerCase().replace(".", "").replace(" ", "_") + ".svg"} alt={use + " logo"} key={index} />
                ))}
            </div>
            <AnimatePresence>
                {isClicked && (
                    <motion.div
                    className="bullet-points"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    >
                        <ul>
                            {position.key_points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default WorkCard;