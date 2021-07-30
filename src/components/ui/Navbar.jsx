import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const { name } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div className="navbar navbar-light bg-light mb-4">
            <span className="navbar-brand">{name}</span>
            <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
            >
                <i className="fas fa-power-off"></i>
            </button>
        </div>
    )
}
