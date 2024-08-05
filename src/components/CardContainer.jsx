import SkillCard from "./SkillCard";
import '../css/CardContainer.css';
import { useEffect, useRef, useState } from "react";

function CardContainer({ header, cards }) {
    const [cardsPerRow, setCardsPerRow] = useState();
    const [loadingTags, setLoadingTags] = useState(true);
    const [tags, setTags] = useState();
    const [currentActive, setCurrentActive] = useState(0);
    const [currentFilter, setCurrentFilter] = useState("All");
    const tagContainer = useRef();

    useEffect(() => {
        const width = screen.width;
        if (width <= 380) {
            setCardsPerRow(3);
        }
        else if (width <= 490) {
            setCardsPerRow(4);
        }
        else if (width <= 600) {
            setCardsPerRow(5);
        }
        else {
            setCardsPerRow(6);
        }

        let allTags = new Set();
        allTags.add("All");
        cards.forEach((card) => {
            card.tags.forEach((tag) => {
                allTags.add(tag);
            })
        })
        setTags(Array.from(allTags))
        
        if (allTags.size > 1) {
            setLoadingTags(false);
        }

        
    }, [])

    return (
        <div className="skills w-100">
            <h2 className="section-header">{ header }</h2>
            { !loadingTags && tags !== undefined &&
            <div className="tags-container" ref={tagContainer}>
                {tags.map((tag, index) => (
                    <button
                        key={index} 
                        className="tag-button"
                        data-active={tag === "All"}
                        onClick={() => {
                            tagContainer.current.children[currentActive].setAttribute("data-active", false);
                            tagContainer.current.children[index].setAttribute("data-active", true);
                            setCurrentActive(index);
                            setCurrentFilter(tagContainer.current.children[index].innerText);
                        }}>
                            { tag }
                    </button>
                ))}
            </div>}
            <div className="card-container-flex">
                {/* Dynamically render each skill as a <SkillCard></SkillCard> component */}
                {cards.filter((card) => {
                    return currentFilter === "All" || card.tags.includes(currentFilter);
                }).map((card, index) => (
                    <SkillCard skill={card.name} key={index} cardNumber={index} cardsPerRow={cardsPerRow} />
                ))}
            </div>
        </div>
    )
}

export default CardContainer;