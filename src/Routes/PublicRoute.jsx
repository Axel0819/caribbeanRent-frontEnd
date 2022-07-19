import { Navigate } from 'react-router-dom';

// Se utiliza cuando el usuario esta logueado y queremos que no vaya a una determinada ruta
// Sugerencias de uso por ahora:
//  Login
//  Register

export const PublicRoute = ({ children }) => {

    // const { logged } = useContext( AuthContext );
    const logged = true;
    
    // const lastPath = pathname + search;
    // localStorage.setItem('lastPath', lastPath );
    

    return (!logged)
        ? children
        : <Navigate to="/" />
}