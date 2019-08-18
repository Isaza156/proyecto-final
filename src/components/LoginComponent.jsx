import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginStyle.css';

class Login extends React.Component {
    state = {}
    render() {
        return (
            <div className='bg-login'>
                <div className='d-flex align-items-center text-center '>
                    <form className='marginform text-dark bg-light'>
                        <div className="form-group">
                            <h1 className='my-5'>Inicio Sesión</h1>
                            <input type="email" className="form-control mb-4" placeholder="Correo electrónico" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control mb-4" placeholder="Contraseña" />
                        </div>
                        <div className='margin'>
                        <Link type="button" className="btn btn-primary px-5 w-75 mb-4" to ="/principal">Iniciar sesión</Link>
                        <p> ¿No tienes cuenta?</p>
                        <Link type="button" className="btn btn-secondary px-5 w-75" to="/intro">Volver</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;