import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainLayoutContext } from '../../Services/Context/MainLayoutContext';
import { Container } from '@mui/material';
import logo from '../../Assets/Images/logo.png';

export const Navbar = () => {
    const { handleOpenModal } = useContext(MainLayoutContext)
    return (
        <nav className="navbar-border-bottom py-3">
            <Container>
                <div className="flex justify-content-between">
                    <img src={logo} alt="Logo Caribbean Rent" />

                    <div className="flex gap-20">
                        <button>Buscar</button>
                        <button>Menu</button>
                    </div>
                </div>

            </Container>

            {/* <button onClick={ handleOpenModal }>Abrir modal</button> */}
        </nav>
    )
}


