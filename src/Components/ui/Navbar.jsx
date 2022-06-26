import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <div>Navbar</div>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


