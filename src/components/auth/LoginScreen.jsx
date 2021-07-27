import React from 'react'
import './auth.css';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(email, password));
    }

    return (
        <div className="login-container">
            <div className="col-md-6 col-lg-3">
                <div className="card card-login">
                    <div className="card-header bg-white">
                        <h3 className="text-center mb-0">Iniciar sesión</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="nombre@gmail.com"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block mt-3"
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                        <div>
                            <span className="mr-2">¿No tienes cuenta?</span>
                            <Link to="/register">Crear cuenta</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}