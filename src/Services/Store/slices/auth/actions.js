import Swal from 'sweetalert2';
import { login, logout, startChecking } from ".";
import { caribbeanApi } from "../../../Apis/caribbeanApi";
import { getSurnames } from '../../../Utils/getSurnames';
// import jwt from 'jsonwebtoken';

export const startLogin = (credentials) => {
    return async (dispatch) => {
        try {
            dispatch(startChecking(true));
            const { data } = await caribbeanApi.post('/auth/login', credentials);

            const user = {
                uid: data.id,
                role: data.rol
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(user));

            dispatch(login(user));
        } catch (error) {
            dispatch(startChecking(false));
            if (error.response.status === 400) {
                Swal.fire('Error', error.response.data , 'error')
            }
            console.log(error)
        }
    }
}

export const register = (infoUser) => {
    return async ( dispatch ) => {
        const { name, apellido, email, rPassword, role } = infoUser;
        const [ firstSurname, secondSurname ] = getSurnames(apellido);

        const newUser = {
            name,
            firstSurname,
            secondSurname,
            email,
            password: rPassword,
            role
        }

        try {
            // dispatch(startChecking(true));
            Swal.fire({
                title:'Registrando...',
                text: 'Espere por favor...',
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: () => Swal.showLoading()
            });

            const resp = await caribbeanApi.post('/UserCrs/register', newUser);

            Swal.close();

            if(resp.status === 200){
                dispatch(startLogin({
                    email,
                    password: rPassword
                }))
            }


        } catch (error) {
            Swal.close();
            if (error.response.status === 400) {
                Swal.fire('Error', error.response.data , 'error')
            }
            console.log(error)
        }

    }
}

export const startCheckingUser = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token');

        // si existe token
        if(!!token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch( login(user) );
        }
    }
}

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear()
        dispatch(logout())
    }
}