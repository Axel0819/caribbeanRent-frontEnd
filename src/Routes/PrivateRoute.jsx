import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children, typeUser, typeUser2=-1 }) => {
    const { uid, role } = useSelector(state => state.auth);
    const logged = uid !== 0;
    const roleUser = typeUser === role || typeUser2 === role;

    return (logged && roleUser)
        ? children
        : <Navigate to="/" />
}

PrivateRoute.propTypes = {
    typeUser: PropTypes.number.isRequired
}