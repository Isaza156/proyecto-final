import React from 'react';
import Perfil from '../images/PerfilAccount.png';

class Account extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className='cover-container'>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="collapse navbar-collapse d-flex justify-content-center text-center">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link text-light mx-5 mt-2" href="/">Contáctanos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light mx-5 mt-2" href="/">Principal</a>
                                </li>
                                <h4 className='text-white mx-5'>Haceme Un <br /> Cruce</h4>
                                <li className="nav-item">
                                    <a className="nav-link text-light mx-5 mt-2" href="/">Cómo Funciona</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light mx-5 mt-2" href="/">Mi Cuenta</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className='row'>
                    <div className='col-md-6 col-sm-12 text-center'>
                        <img src={Perfil} className="img-fluid my-4" alt="Perfil" />
                        <h5>Patricia Cano</h5>
                        <small> patricia@gmail.com </small>
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>
                        <button type="button" className="btn btn-primary px-5 mt-5 mb-4">Cerrar Sesión</button>
                        <button type="button" className="btn btn-danger px-5 mb-3">Compartir</button>
                    </div>
                </div>

                <hr />

                <div className='text-center'>
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

                <div className='cover-container mt-5'>
                    <nav className="bg-dark text-white text-center py-2">
                        <h6>@2019 Haceme Un Cruce. All Rights Reserved.</h6>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Account;