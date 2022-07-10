import { useContext } from 'react';
import { Avatar, Menu, MenuItem, ListItemIcon, Divider } from '@mui/material';
import { PersonAdd, Settings, Logout, Login } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';
import { MainLayoutContext } from '../../../Services/Context/MainLayoutContext';
import { modalEnums } from '../../../Enums/modalEnums';

const theme = createTheme({
    palette: {
        primary: {
            main: "#3B7D7A"
        }
    }
});

export const NavbarMenu = ({ anchorEl, open, handleClose }) => {
    const { handleOpenModal } = useContext(MainLayoutContext)

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
                <MenuItem onClick={() => handleOpenModal(modalEnums.login) }>
                    <ListItemIcon>
                        <Login color="primary" fontSize="small" />
                    </ListItemIcon>
                    Iniciar sesión
                </MenuItem>
                <MenuItem onClick={() => handleOpenModal(modalEnums.register) }>
                    <ListItemIcon>
                        <PersonAdd color="primary" fontSize="small" />
                    </ListItemIcon>
                    Registrarse
                </MenuItem>
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
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </ThemeProvider>
    )
}