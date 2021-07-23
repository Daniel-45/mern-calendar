import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div className="register-container">
            <div className="col-md-6 col-lg-3">

                <div className="card card-register mb-3">
                    <div className="card-header bg-white">
                        <h3 className="text-center mb-0">Crea tu cuenta</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Nombre"
                                />
                            </div>
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
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                </div>
                                <input
                                    type="password"
                                    name="password2"
                                    className="form-control"
                                    placeholder="Repita la contraseña"
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block mt-3"
                                >
                                    Crear cuenta
                                </button>
                            </div>
                        </form>
                        <div>
                            <span className="mr-2">¿Ya tienes cuenta?</span>
                            <Link to="/login">Iniciar sesión</Link>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
