import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/PerfilAccount.png';
import Navbar from './NavbarComponent';

class Account extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className='row'>
                    <div className='col-md-6 col-sm-12 text-center'>
                        <img src={Perfil} className="img-fluid my-4" alt="Perfil" />
                        <h5>Patricia Cano</h5>
                        <small> patricia@gmail.com </small>
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>
                        <Link to='/intro'>
                        <button type="button" className="btn btn-primary px-5 mt-5 mb-4">Cerrar Sesión</button>
                        </Link>
                       
                        <button type="button" className="btn btn-danger px-5 mb-3">Compartir</button>
                    </div>
                </div>

                <hr />

                <div className='text-center mb-5'>
                    <h3 className='my-5'>Historial de Viajes</h3>
                    <div className='row justify-content-center'>
                        <div className='border border-dark text-center px-2 m-2 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>23 Ago 2019</small>
                        </div>
                        <div className='border border-dark text-center px-2 m-2 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>24 Ago 2019</small>
                        </div>
                        <div className='border border-dark text-center px-2 m-2 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>25 Ago 2019</small>
                        </div>
                        <div className='border border-dark text-center px-2 m-2 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>26 Ago 2019</small>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Account;