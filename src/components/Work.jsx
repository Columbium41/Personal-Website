import '../css/Work.css';

function Work({ data }) {
    return (
        <div className="work-experience w-100">
            <h2 className="section-header">Work</h2>
            <div className="positions">
                {data.map((position, index) => (
                    <div className="position-card" key={index}>
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work;