import { useState } from "react";
import '../css/UseItem.css';

export default function UseItem({ use }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="use-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={"/images/" + encodeURIComponent(use.toLowerCase().replaceAll(".", "").replaceAll(" ", "_")) + ".svg"} 
                alt={use + " logo"} 
            />
            { isHovered && (
                <div className="use-item-overlay">
                    { decodeURIComponent(use) }
                </div>
            ) }
        </div>
    )
}