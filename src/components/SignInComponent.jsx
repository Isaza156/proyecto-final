import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignInStyle.css';

class SignIn extends React.Component {
    state = {}
    render() {
        return (
            <div className='cover-container bg-signIn'>
                <div className='d-flex justify-content-center text-center text-white'>
                    <form>
                        <div className="form-group">
                            <h2 className='my-5'>Registro</h2>
                            <input type="text" className="form-control my-4" placeholder="Nombre Completo" />
                            <input type="email" className="form-control mb-4" placeholder="Correo Electrónico" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control mb-4" placeholder="Contraseña" />
                            <input type="password" className="form-control mb-4" placeholder="Confirmar Contraseña" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">Acepta Términos y Condiciones</label>
                        </div>
                        <div className='margin'>
                            <button type="button" className="btn btn-primary px-5 mr-3">Registrarse</button>
                            <Link type="button" className="btn btn-danger px-5" to="/intro" >Volver</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default SignIn;