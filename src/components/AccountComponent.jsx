import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/avatar2.jpg';
import Navbar from './NavbarComponent';

class Account extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className='row'>
                    <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>
                        <div className='row col-12 m-auto'>
                            <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>
                                <img src={Perfil} className="img-fluid m-auto" alt="Perfil" />
                            </div>
                            <div className='m-auto text-left flex-column'>
                                <h1 className="mb-3 font-weight-bold">Patricia Cano</h1>
                                <h5 className="text-dark" ><strong>Edad:</strong> 25 Años</h5>
                                <h5 className="text-dark" ><strong>Identificación: 1234</strong>  </h5>
                                <h5 className="text-dark" ><strong>Email:</strong> jose@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>                        
                        <button type="button" className="btn btn-danger px-5 mt-5 mb-3 rounded-pill">Compartir</button>
                        <Link to='/driver'>
                            <button type="button" className="btn btn-primary px-5 mb-4 rounded-pill">Ser Conductor</button>
                        </Link>
                    </div>
                </div>

                <hr />

                <div className='text-center mb-5 '>
                    <h3 className='mt-4 mb-4 font-weight-bold'>Historial de Viajes</h3>
                    <div className='row col-12 justify-content-center m-auto'>
                    <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Patricia Cano</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:20a.m</small> 
                        </div>
                        
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Patricia Cano</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:20a.m</small>
                        </div>
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Patricia Cano</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:20a.m</small>
                        </div>
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Patricia Cano</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:20a.m</small>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Account;