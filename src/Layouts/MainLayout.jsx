import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material'
import { Navbar } from '../Components/ui/Navbar';
import { MainLayoutContext } from '../Services/Context/MainLayoutContext';
import { ModalApp } from '../Components/ui/ModalApp';
import { Register } from '../Components/Register';
import { Footer } from '../Components/ui/Footer';

export const MainLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
          <Register />
        </ModalApp>
      }



    </MainLayoutContext.Provider>
  )
}
