import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Avatar, Menu, MenuItem, ListItemIcon, Divider } from '@mui/material';
import { PersonAdd, Settings, Logout, Login } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';
import { MainLayoutContext } from '../../../Services/Context/MainLayoutContext';
import { modalEnums } from '../../../Enums/modalEnums';
import { startLogout } from '../../../Services/Store/slices/auth/actions';

const theme = createTheme({
    palette: {
        primary: {
            main: "#3B7D7A"
        }
    }
});

export const NavbarMenu = ({ anchorEl, open, handleClose }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { handleOpenModal } = useContext(MainLayoutContext);
    const { uid } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const handleLogout = () => {
        if (pathname !== '/') navigate('/');
        dispatch(startLogout());
    }

    return (
        <ThemeProvider theme={theme}>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {
                    !(!!uid) && (
                        <MenuItem onClick={() => handleOpenModal(modalEnums.login)}>
                            <ListItemIcon>
                                <Login color="primary" fontSize="small" />
                            </ListItemIcon>
                            Iniciar sesión
                        </MenuItem>
                    )
                }

                {
                    !(!!uid) && (
                        <MenuItem onClick={() => handleOpenModal(modalEnums.register)}>
                            <ListItemIcon>
                                <PersonAdd color="primary" fontSize="small" />
                            </ListItemIcon>
                            Registrarse
                        </MenuItem>
                    )
                }

                <MenuItem onClick={() => handleOpenModal(modalEnums.rommie)}>
                    <Avatar /> Buscar rommie
                </MenuItem>
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>


                <Link to="/favorites">
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Favorites
                    </MenuItem>
                </Link>
                {
                    !!uid && (
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    )
                }

            </Menu>
        </ThemeProvider>
    )
}