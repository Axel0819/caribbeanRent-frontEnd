import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainLayoutContext } from '../../Services/Context/MainLayoutContext';

export const Navbar = () => {
    const { handleOpenModal } = useContext(MainLayoutContext)
    return (
        <nav style={{gap: '50px'}} className="flex">
            <div>Navbar</div>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                        Home
                    </NavLink>
                </li>
            </ul>

            <button onClick={ handleOpenModal }>Abrir modal</button>
        </nav>
    )
}


