import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const { name, email, password1, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (password1 !== password2) {
            return Swal.fire({
                icon: 'info',
                title: 'Advertencia',
                text: 'Las contraseñas deben de ser iguales',
            });
        }

        dispatch(startRegister(name, email, password1))
    }


    return (
        <div className="register-container">
            <div className="col-md-6 col-lg-3">

                <div className="card card-register mb-3">
                    <div className="card-header bg-white">
                        <h3 className="text-center mb-0">Crea tu cuenta</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
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
                                    onChange={handleInputChange}
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
                                    onChange={handleInputChange}
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
                                    onChange={handleInputChange}
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
                                    onChange={handleInputChange}
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
