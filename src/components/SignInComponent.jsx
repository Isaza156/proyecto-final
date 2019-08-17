import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignInStyle.css';

class SignIn extends React.Component {
    state = {}
    render() {
        return (
            <div className='cover-container bg-signIn'>
                <div className='d-flex justify-content-center text-center text-white'>
                    <form className="marginform text-dark bg-light">
                        <div className="form-group ">
                            <h1 className='my-4'>Registro</h1>
                            <input type="text" className="form-control my-3" placeholder="Nombre completo" />
                            <input type="email" className="form-control mb-3" placeholder="Correo electrónico" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control mb-3" placeholder="Contraseña" />
                            <input type="password" className="form-control mb-3" placeholder="Confirmar contraseña" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label ">Acepta términos y condiciones</label>
                        </div>
                        <div className='margin mb-5'>
                            <Link type="button" className="btn btn-primary px-5 mb-3 w-75" to="/principal">Registrarse</Link>
                            <Link type="button" className="btn btn-secondary px-5  w-75" to="/intro" >Volver</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default SignIn;