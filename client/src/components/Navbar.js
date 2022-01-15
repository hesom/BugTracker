import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-toolbar">
            <div>
                <Link to="/">Dashboard</Link>
            </div>
            <div>
                <Link to="/add">Add</Link>
            </div>
            <div>
                <a href="#">Forum</a>
            </div>
            <div>
                <a href="#">About</a>
            </div>
        </nav>
    )
}

export default Navbar
