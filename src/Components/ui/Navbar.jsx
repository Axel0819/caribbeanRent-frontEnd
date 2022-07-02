import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainLayoutContext } from '../../Services/Context/MainLayoutContext';
import { Container } from '@mui/material';
import logo from '../../Assets/Images/logo.png';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';


export const Navbar = () => {
    const { handleOpenModal } = useContext(MainLayoutContext)
    return (
        <nav className="navbar-border-bottom py-3">
            <Container>
                <div className="flex justify-content-between">
                    <img src={logo} alt="Logo Caribbean Rent" />

                    <div className="flex gap-20 align-items-center">

                        <Fab size="large" saria-label="">
                            <i class="fa fa-solid fa-magnifying-glass"></i>
                        </Fab>

                        <Fab variant="extended" size="large" aria-label="">
                            <i class="fa fa-solid fa-list pr-3"></i>
                            <i class="fa fa-solid fa-user color-icon"></i>
                        </Fab>
                    </div>
                </div>

            </Container>

            {/* <button onClick={ handleOpenModal }>Abrir modal</button> */}
        </nav>
    )
}


