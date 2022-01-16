import { useNavigate } from "react-router-dom";

const BugTableHeader = () => {
    return (
        <li>
            <span className="short-desc">Description</span>
            <span>Reporter</span>
            <span>Date</span>
            <span className="status">Status</span>
            <span>Assigned To</span>
            <span>Severity</span>
        </li>
    )
}


const BugTableRow = ({ bug }) => {

    let statusClass = "";
    switch (bug.status) {
        case "open":
            statusClass = "status-open";
            break;
        case "closed":
            statusClass = "status-closed";
            break;
        case "in-progress":
            statusClass = "status-in-progress";
            break;
        default:
            throw "status type not supported";
    }

    const navigate = useNavigate();

    return (
        <li className="bug-list-item" onClick={(e) => navigate(`/bugs/${bug._id}`)}>
            <span className="short-desc">{bug.short}</span>
            <span>{bug.reporter}</span>
            <span>{bug.date}</span>
            <span className={`status ${statusClass}`}>{bug.status}</span>
            <span>{bug.assignedTo}</span>
            <span>{bug.severity}</span>
        </li>
    )
}

export { BugTableHeader, BugTableRow }
export default BugTableRow
