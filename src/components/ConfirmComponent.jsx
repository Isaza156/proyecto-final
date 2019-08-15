import React from 'react';
import Perfil from '../images/PerfilAccount.png';

class Confirm extends React.Component {
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
                        <div className='row'>
                            <div className='col-md-6 col-sm-12 text-center'>
                                <img src={Perfil} className="img-fluid mt-4 mb-4" alt="Perfil" />
                                <h5>Jose Perez</h5>
                            </div>
                            <div className='my-4'>
                                <a className="nav-link disabled text-dark" href="/"><strong>Placa:</strong>  AAA-000</a>
                                <a className="nav-link disabled text-danger" href="/"><strong>Color: Rojo</strong>  </a>
                                <a className="nav-link disabled text-dark" href="/"><strong>Tiempo:</strong> 20 Min</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>
                        <div class="form-group row">
                            <label for="inputText" className="col-md-6 col-sm-12 col-form-label text-center mt-4"><strong>Costo del Viaje</strong> </label>
                            <div className="col-md-6 col-sm-12">
                                <a className="nav-link disabled text-success mt-4" href="/"><strong>$2.000</strong></a>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary px-5 mb-3 mt-2">Confirmar</button>
                    </div>
                </div>

                <hr />

                <div className='text-center'>
                    <h3 className='my-5'>Acompañantes de Viaje</h3>
                    <div className='row justify-content-center'>
                        <div className='border border-dark text-center px-2 m-3 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>23 Ago 2019</small>
                        </div>
                        <div className='border border-dark text-center px-2 m-3 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>24 Ago 2019</small>
                        </div>
                        <div className='border border-dark text-center px-2 m-3 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>25 Ago 2019</small>
                        </div>
                        <div className='border border-dark text-center px-2 m-3 bg-danger text-white'>
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
export default Confirm;