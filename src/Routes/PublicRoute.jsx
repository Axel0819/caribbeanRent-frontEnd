import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersEnums } from '../Enums/usersEnums';

// Se utiliza cuando el usuario esta logueado y queremos que no vaya a una determinada ruta
// Sugerencias de uso por ahora:
//  Login
//  Register
export const PublicRoute = ({ children }) => {

    const { uid, role } = useSelector(state => state.auth);
    const logged = uid !== 0;
    const roleUser = role !== usersEnums.admin; 

    return (!logged || roleUser)
        ? children
        : <Navigate to="/" />
}