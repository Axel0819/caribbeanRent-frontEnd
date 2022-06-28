import { Outlet } from 'react-router-dom';
import { Navbar } from '../Components/ui/Navbar';
import { Container } from '@mui/material'

export const MainLayout = () => {
  return (
    <>
        <Navbar />

        <Container>
            <Outlet />
        </Container>

        {/* Footer */}
    </>
  )
}
