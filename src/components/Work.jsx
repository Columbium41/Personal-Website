import '../css/Work.css';
import WorkCard from './WorkCard';

function Work({ data }) {
    return (
        <div className="work-experience w-100">
            <h2 className="section-header">Work</h2>
            <div className="positions">
                {data.map((position, index) => (
                    <WorkCard position={position} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Work;