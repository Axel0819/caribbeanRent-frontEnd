import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';
import { Dashboard as MainLayoutAdmin } from '../Layouts/MainLayoutAdmin';
import { PrivateRoute } from './PrivateRoute';
import { routes } from './routes';
import { startCheckingUser } from '../Services/Store/slices/auth/actions';
import { LoadAuth } from '../Components/Loaders/LoadAuth';
import { usersEnums } from '../Enums/usersEnums';
import { PublicRoute } from './PublicRoute';
import { HomePage } from '../Pages';
import { Profile } from '../Pages/Profile';

export const AppRoutes = () => {
    const { checking } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startCheckingUser());
    }, [dispatch])


    if (checking) {
        return <LoadAuth />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />

                    <Route path="profile" element={
                        <PrivateRoute typeUser={usersEnums.arrendante} typeUser2={usersEnums.arrendatario}>
                            <Profile />
                        </PrivateRoute>
                    } />

                    {
                        routes.publics.map(({ id, path, Component }) => (
                            <Route key={id} path={path} element={
                                <PublicRoute>
                                    <Component />
                                </PublicRoute>
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
                    {
                        routes.privates.arrendatario.map(({ id, path, Component }) => (
                            <Route key={id} path={path} element={
                                <PrivateRoute typeUser={usersEnums.arrendatario}>
                                    <Component />
                                </PrivateRoute>
                            } />
                        ))
                    }
                </Route>

                <Route path="admin/*" element={
                    <Routes>
                        {/* <Route index element={<h1>Login</h1>} /> */}

                        <Route path="dashboard" element={<MainLayoutAdmin />}>
                            {
                                routes.privates.admin.map(({ id, path, Component }) => (
                                    <Route key={id} path={path} element={
                                        <PrivateRoute typeUser={usersEnums.admin}>
                                            <Component />
                                        </PrivateRoute>
                                    } />
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