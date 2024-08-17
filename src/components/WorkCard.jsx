import '../css/Work.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import UseItem from './UseItem';

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
                    <UseItem use={use} key={index} />
                ))}
            </div>
            {/*<AnimatePresence>*/}
            {/*    {isClicked && (*/}
            {/*        <motion.div*/}
            {/*        className="bullet-points"*/}
            {/*        initial={{ opacity: 0, height: 0 }}*/}
            {/*        animate={{ opacity: 1, height: 'auto' }}*/}
            {/*        exit={{ opacity: 0, height: 0 }}*/}
            {/*        >*/}
            {/*            <ul>*/}
            {/*                {position.key_points.map((point, index) => (*/}
            {/*                    <li key={index}>{point}</li>*/}
            {/*                ))}*/}
            {/*            </ul>*/}
            {/*        </motion.div>*/}
            {/*    )}*/}
            {/*</AnimatePresence>*/}

            {/*<div className="down-arrow">*/}
            {/*    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={(isClicked ? "show" : "collapse")}>*/}
            {/*        <g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" id="down-arrow-stroke"/> </g>*/}
            {/*    </svg>*/}
            {/*</div>*/}
        </motion.div>
    );
}

export default WorkCard;