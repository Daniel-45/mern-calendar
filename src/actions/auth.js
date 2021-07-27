import Swal from 'sweetalert2';
import { types } from '../types/types';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const response = await fetchWithoutToken('auth', { email, password }, 'POST');
        const body = await response.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error de autenticación',
                text: body.message,
            })
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
});

export const startRegister = (name, email, password) => {
    return async (dispatch) => {
        const response = await fetchWithoutToken('auth/register', { name, email, password }, 'POST');
        const body = await response.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error de autenticación',
                text: body.message,
            });
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        const response = await fetchWithToken('auth/renew');
        const body = await response.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({ type: types.authLogout });

