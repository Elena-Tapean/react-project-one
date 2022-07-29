import { Link } from 'react-router-dom';
import './css/nav-bar.scss';

export const NavBar = function () {
    return (
        <header className='nav-bar'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/resume/elena'>Resume</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}
