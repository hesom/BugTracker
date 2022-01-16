import { useParams } from "react-router-dom"

const Bug = ({ bugs }) => {

    const params = useParams();

    const bug = bugs.find((bug) => bug.id === params.bugId)

    return (
        <div class="bug-long">
            <div class="short">
                <emph>Title: </emph><span>{bug.short}</span>
            </div>
            <div class="reporter">
                <emph>Reporter: </emph><span>{bug.reporter}</span>
            </div>
            <div class="date">
                <emph>Date: </emph><span>{bug.date}</span>
            </div>
            <div class="status">
                <emph>Status: </emph><span>{bug.status}</span>
            </div>
            <div class="assigned-to">
                <emph>Assigned To: </emph><span>{bug.assignedTo}</span>
            </div>
            <div class="description">
                <emph>Description: </emph><p>{bug.description}</p>
            </div>
        </div>
    )
}

export default Bug
