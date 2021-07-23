import React from 'react'
import './auth.css';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return (
        <div className="login-container">
            <div class="col-md-6 col-lg-3">
                <div class="card card-login">
                    <div className="card-header bg-white">
                        <h3 className="text-center mb-0">Iniciar sesión</h3>
                    </div>
                    <div className="card-body">
                        <form>
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
                                />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                </div>
                                <input
                                    type="password"
                                    name="password1"
                                    className="form-control"
                                    placeholder="Contraseña"
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