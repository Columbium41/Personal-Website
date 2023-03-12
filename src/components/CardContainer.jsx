import SkillCard from "./SkillCard";
import '../css/CardContainer.css';
import { useEffect, useState } from "react";

function CardContainer({ header, cards }) {
    const [cardsPerRow, setCardsPerRow] = useState();

    useEffect(() => {
        const width = screen.width;
        if (width <= 340) {
            setCardsPerRow(2);
        }
        else if (width <= 445) {
            setCardsPerRow(3);
        }
        else if (width <= 550) {
            setCardsPerRow(4);
        }
        else if (width >= 3000) {
            setCardsPerRow(6);
        }
        else {
            setCardsPerRow(5);
        }
    }, [])

    return (
        <div className="skills w-100" >
            <h2 className="section-header">{ header }</h2>
            <div className="card-container-flex">
                {/* Dynamically render each skill as a <SkillCard></SkillCard> component */}
                {cards.map((skill, index) => (
                    <SkillCard skill={skill} key={index} cardNumber={index} cardsPerRow={cardsPerRow} />
                ))}
            </div>
        </div>
    )
}

export default CardContainer;