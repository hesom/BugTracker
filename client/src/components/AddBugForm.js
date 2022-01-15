import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

const AddBugForm = ({ addBug }) => {

    const [title, setTitle] = useState("")
    const [reporter, setReporter] = useState("")
    const [date, setDate] = useState("")
    const [status, setStatus] = useState("open")
    const [assigned, setAssigned] = useState("unassigned")
    const [severity, setSeverity] = useState("low")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({
        title: "",
        reporter: "",
        date: "",
        assigned: "",
    })

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setErrors({
            title: title === '' ? "error" : '',
            reporter: reporter === '' ? "error" : '',
            date: date === '' ? "error" : '',
            assigned: assigned === '' ? "error" : '',
        })

        if(title === '' || reporter === '' || date === '' || assigned === ''){
            return;
        }

        const newBug = {
            short: title,
            reporter: reporter,
            date: date,
            status: status,
            assignedTo: assigned,
            severity: severity,
            description: description,
        }

        addBug(newBug);

        navigate("/")
    }

    return (
        <form className="bug-form" onSubmit={handleSubmit}>
            <div className="bug-form-container">
                <div className="bug-form-input">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className={errors.title}/>
                    <label htmlFor="reporter">Reporter: </label>
                    <input type="text" name='reporter' id='reporter' value={reporter} onChange={(e) => setReporter(e.target.value)} className={errors.reporter}/>
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" id='date' value={date} onChange={(e) => setDate(e.target.value)} className={errors.date}/>
                    <label htmlFor="status">Status: </label>
                    <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="open">Open</option>
                        <option value="in-progress">In Progress</option>
                        <option value="closed">Closed</option>
                    </select>
                    <label htmlFor="assigned-to">Assigned To: </label>
                    <input type="text" name="assigned-to" id="assigned-to" value={assigned} onChange={(e) => setAssigned(e.target.value)} className={errors.assigned}/>
                    <label htmlFor="severity">Severity</label>
                    <select name="severity" id="severity" value={severity} onChange={(e) => setSeverity(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}

AddBugForm.propTypes = {
    addBug: PropTypes.func,
}

export default AddBugForm
