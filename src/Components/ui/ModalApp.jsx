import { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Backdrop, Box, Modal, Fade, Fab } from '@mui/material';
import { MainLayoutContext } from '../../Services/Context/MainLayoutContext';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: '20px 25px 20px 25px',
    borderRadius: '24px'
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#3B7D7A"
        }
    }
})

export const ModalApp = ({ children }) => {
    const { openModal, handleCloseModal } = useContext(MainLayoutContext)

    return (
        <ThemeProvider theme={theme}>
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Fab
                            onClick={ handleCloseModal }
                            style={{
                                position: 'fixed',
                                top: -20,
                                right: -20
                            }} 
                            className="box-shadow" 
                            size="medium" 
                            color="inherit" 
                            aria-label="close"
                        >
                            <CloseIcon color="primary" style={{ fontSize: '28px' }} />
                        </Fab>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
        </ThemeProvider>
    );
}
