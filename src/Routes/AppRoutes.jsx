import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';
import { Dashboard as MainLayoutAdmin } from '../Layouts/MainLayoutAdmin';
import { PrivateRoute } from './PrivateRoute';
import { routes, routesAdmin } from './routes';
import { startCheckingUser } from '../Services/Store/slices/auth/actions';
import { LoadAuth } from '../Components/Loaders/LoadAuth';
import { usersEnums } from '../Enums/usersEnums';

export const AppRoutes = () => {
    const { checking } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startCheckingUser());
    }, [dispatch])

    if(checking){
        return <LoadAuth />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {
                        routes.publics.map(({ id, path, Component }) => (
                            <Route key={id} path={path} element={
                                <Component />
                            } />
                        ))
                    }
                    {
                        routes.privates.arrendante.map(({ id, path, Component }) => (
                            <Route key={id} path={path} element={
                                <PrivateRoute typeUser={usersEnums.arrendante}>
                                    <Component />
                                </PrivateRoute>
                            } />
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