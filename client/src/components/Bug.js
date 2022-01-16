import { useParams } from "react-router-dom"

const Bug = ({ bugs }) => {

    const params = useParams();
    const bug = bugs.find((bug) => bug._id == params.bugId)

    return (
        <div className="bug-long">
            <div className="short">
                <em>Title: </em><span>{bug.short}</span>
            </div>
            <div className="reporter">
                <em>Reporter: </em><span>{bug.reporter}</span>
            </div>
            <div className="date">
                <em>Date: </em><span>{bug.date}</span>
            </div>
            <div className="status">
                <em>Status: </em><span>{bug.status}</span>
            </div>
            <div className="assigned-to">
                <em>Assigned To: </em><span>{bug.assignedTo}</span>
            </div>
            <div className="description">
                <em>Description: </em><p>{bug.description}</p>
            </div>
        </div>
    )
}

export default Bug
