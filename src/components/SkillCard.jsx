function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            <img 
            src={"/Personal-Website/images/" + skill.toLowerCase().replace(".", "") + ".svg"} 
            alt={skill + " logo"}
            className="icon" />
            <p>{skill}</p>
        </div>
    )
}

export default SkillCard;
