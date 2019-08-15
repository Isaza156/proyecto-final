import React from 'react';
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
                            <label className="form-check-label" for="exampleCheck1">Acepta Términos y Condiciones</label>
                        </div>
                        <div className='margin'>
                            <button type="button" className="btn btn-primary px-5 mr-3">Registrarse</button>
                            <button type="button" className="btn btn-danger px-5">Volver</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default SignIn;