/**
 * A function that returns a <div></div> element containing a card with a skill and its corresponding icon 
 * 
 * @param {String} skill The skill to render into a card format
 * 
 * @returns A <div></div> element containing a card with a skill and its corresponding icon 
 */
function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            {/* Skill Icon */}
            <img 
            src={"/Personal-Website/images/" + skill.toLowerCase().replace(".", "") + ".svg"} 
            alt={skill + " logo"}
            className="icon" />

            {/* Skill name */}
            <p>{skill}</p>
        </div>
    )
}

export default SkillCard;
