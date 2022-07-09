import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material'
import { Navbar } from '../Components/ui/Navbar';
import { MainLayoutContext } from '../Services/Context/MainLayoutContext';
import { ModalApp } from '../Components/ui/ModalApp';
import { Register } from '../Components/Auth';
import { Footer } from '../Components/ui/Footer';
import { Login } from '../Components/Auth/Login/Login';

export const MainLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState(-1); // 1 login , 2 register
  const handleOpenModal = (num) => {
    setOpenModal(true);
    setTypeModal(num);
  };
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
          {/* <Register /> */}
          {
            typeModal === 1 ? <Login /> : <Register />  
          }
          
        </ModalApp>
      }



    </MainLayoutContext.Provider>
  )
}
