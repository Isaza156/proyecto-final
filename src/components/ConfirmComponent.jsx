import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/avatar.png';
import Navbar from './NavbarComponent';

import '../styles/ConfirmStyle.css';

class Confirm extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <div className='row col-12 m-auto' id='confirmar'>
                        <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>
                            <div className='row col-12 m-auto'>
                                <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>
                                    <img src={Perfil} className="img-fluid m-auto" alt="Perfil" />
                                </div>
                                <div className='m-auto text-left flex-column'>
                                    <h1 className="mb-3 font-weight-bold">Jose Perez</h1>
                                    <h5 className="text-dark" ><strong>Placa:</strong>  AAA-000</h5>
                                    <h5 className="text-danger" ><strong>Color: Rojo</strong>  </h5>
                                    <h5 className="text-dark" ><strong>Tiempo:</strong> 20 Min</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>

                            <div className="row">
                                <div className='m-auto text-left d-flex'>
                                    <h5 className="text-center mt-5 mr-2"><strong> Costo del viaje: </strong></h5>
                                    <h5 className="text-success mt-5 mb-4"><strong>$2.000 PESOS</strong></h5>
                                </div>
                            </div>

                            <Link to='/tracing'>
                                <button type="button" className="btn btn-primary px-5 m-auto rounded-pill">Confirmar</button>
                            </Link>

                        </div>
                    </div>

                    <hr />

                    <div className='text-center mb-5 '>
                        <h3 className='mt-4 mb-4 font-weight-bold'>Acompañantes de viaje</h3>
                        <div className='row col-12 justify-content-center m-auto'>
                            <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                                <h4>Manuel Andres</h4>
                                <small>De Envigado hasta Poblado </small>
                                <br />
                                <small>23 Ago 2019 -7:00a.m</small>
                            </div>
                            <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                                <h4>Sofia Hernandez</h4>
                                <small>De Envigado hasta Ayura </small>
                                <br />
                                <small>23 Ago 2019 -7:10a.m</small>
                            </div>
                            <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                                <h4>Yeferson Perea</h4>
                                <small>De Envigado hasta Poblado </small>
                                <br />
                                <small>23 Ago 2019 -7:20a.m</small>
                            </div>

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default Confirm;