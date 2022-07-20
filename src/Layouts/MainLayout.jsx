import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material'
import { Navbar } from '../Components/ui/Navbar';
import { MainLayoutContext } from '../Services/Context/MainLayoutContext';
import { ModalApp } from '../Components/ui/ModalApp';
import { Register } from '../Components/Auth';
import { Footer } from '../Components/ui/Footer';
import { Login } from '../Components/Auth/Login/Login';
import { modalEnums } from '../Enums/modalEnums';
import { RoomiePostModal } from '../Components/RoomiePostModal/RoomiePostModal';

export const MainLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState(-1);
  
  const handleOpenModal = (num) => {
    setOpenModal(true);
    setTypeModal(num);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
    setTypeModal(-1);
  }

  return (
    <MainLayoutContext.Provider value={{
      openModal,
      handleOpenModal,
      handleCloseModal
    }}>
      <Navbar />

      <Container className="my-7">
        <Outlet />
      </Container>
      {/* Footer */}
      <Footer />

      {
        openModal &&
        <ModalApp>
          <Box sx={{ width: '450px' }}>
            { typeModal === modalEnums.login && <Login /> }
            { typeModal === modalEnums.register && <Register /> }
          </Box>
          
          { typeModal === modalEnums.filter && <h1>Mostrando modal de filtrado</h1> }
          { typeModal === modalEnums.rommie && <RoomiePostModal /> }
        </ModalApp>
      }

    </MainLayoutContext.Provider>
  )
}
