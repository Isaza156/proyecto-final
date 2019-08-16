import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginStyle.css';

class Login extends React.Component {
    state = {}
    render() {
        return (
            <div className='cover-container bg-login'>
                <div className='d-flex justify-content-center text-center text-white '>
                    <form className='marginform'>
                        <div className="form-group">
                            <h2 className='my-5'>Inicio Sesión</h2>
                            <input type="email" className="form-control mb-4" placeholder="Correo Electrónico" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control mb-4" placeholder="Contraseña" />
                        </div>
                        <div className='margin'>
                            <button type="button" className="btn btn-primary px-5 mr-3">Iniciar Sesión</button>
                            <Link type="button" className="btn btn-danger px-5" to="/intro">Volver</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;