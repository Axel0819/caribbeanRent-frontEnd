import { Outlet } from 'react-router-dom';
import { Navbar } from '../Components/ui/Navbar';

export const MainLayout = () => {
  return (
    <>
        <Navbar />

        <div>
            <Outlet />
        </div>

        {/* Footer */}
    </>
  )
}
