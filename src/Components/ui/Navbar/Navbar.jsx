import { useState } from 'react';
import { Container, Fab } from '@mui/material';
import { NavbarMenu } from './NavbarMenu';
import logo from '../../../Assets/Images/logo.png';

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <nav className="navbar-border-bottom py-3">
            <Container>
                <div className="flex justify-content-between">
                    <img width={185} src={logo} alt="Logo Caribbean Rent" />

                    <div className="flex gap-30 align-items-center">

                        <Fab size="medium">
                            <i className="fa fa-solid fa-magnifying-glass"></i>
                        </Fab>

                        <Fab
                            variant="extended"
                            size="medium"
                            className="py-4"
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleOpenMenu}
                        >
                            <i className="fa fa-solid fa-list pr-3"></i>
                            <i className="fa fa-solid fa-user color-icon"></i>
                        </Fab>

                        <NavbarMenu 
                            anchorEl={ anchorEl }
                            handleClose={ handleClose }
                            open={ open }
                        />
                        
                    </div>
                </div>

            </Container>
        </nav>
    )
}