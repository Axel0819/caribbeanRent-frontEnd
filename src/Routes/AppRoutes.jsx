import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';
import { Dashboard as MainLayoutAdmin } from '../Layouts/MainLayoutAdmin';
import { routes, routesAdmin } from './routes';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {
                        routes.map(({ id, path, Component }) => (
                            <Route key={id} path={path} element={<Component />} />
                        ))
                    }
                </Route>

                <Route path="admin/*" element={
                    <Routes>
                        <Route index element={<h1>Login</h1>} />

                        <Route path="dashboard" element={<MainLayoutAdmin />}>
                            {
                                routesAdmin.map(({ id, path, Component }) => (
                                    <Route key={id} path={path} element={<Component />} />
                                ))
                            }
                        </Route>
                    </Routes>
                }>
                </Route>


            </Routes>
        </BrowserRouter>
    )
}