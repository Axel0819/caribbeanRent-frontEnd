import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';
import { routes } from './routes';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    {
                        routes.map(({  id, path, Component }) => (
                            <Route key={id} path={path} element={< Component />} />
                        ))
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}