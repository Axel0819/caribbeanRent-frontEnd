import { Container, Fab } from '@mui/material';
import logo from '../../Assets/Images/logo.png';

export const Navbar = () => {
    return (
        <nav className="navbar-border-bottom py-3">
            <Container>
                <div className="flex justify-content-between">
                    <img width={185} src={logo} alt="Logo Caribbean Rent" />

                    <div className="flex gap-30 align-items-center">

                        <Fab size="medium">
                            <i className="fa fa-solid fa-magnifying-glass"></i>
                        </Fab>

                        <Fab variant="extended" size="medium" className="py-4">
                            <i className="fa fa-solid fa-list pr-3"></i>
                            <i className="fa fa-solid fa-user color-icon"></i>
                        </Fab>
                    </div>
                </div>

            </Container>
        </nav>
    )
}