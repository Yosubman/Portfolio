import '../Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div>
                <h2>
                    Portfolio
                </h2>
            </div>
            <div >
                <ul className="nav-links">
                    <li><NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? "#86461a" : "black",
                        textDecoration: "none"
                    })}>Home</NavLink></li>
                    <li><NavLink to="/skill" style={({ isActive }) => ({
                        color: isActive ? "#86461a" : "black",
                        textDecoration: "none"
                    })}>Skill</NavLink></li>
                    <li><NavLink to="/contact" style={({ isActive }) => ({
                        color: isActive ? "#86461a" : "black",
                        textDecoration: "none"
                    })}>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;