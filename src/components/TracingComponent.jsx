import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/avatar.png';
import Navbar from './NavbarComponent';

import '../styles/TracingStyle.css';

class Tracing extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                <div className='row col-12 m-auto'>
                <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>
                                <img src={Perfil} className="img-fluid mx-auto w-50" alt="Perfil" />
                            </div>
                            <div className='m-auto text-left flex-column'>
                                <h2 className="mb-3 font-weight-bold">Jose Perez</h2>
                                <h6 className="text-dark" ><strong>Placa:</strong>  AAA-000</h6>
                                <h6 className="text-danger" ><strong>Color: Rojo</strong>  </h6>
                                <h6 className="text-dark" ><strong>Tiempo:</strong> 20 Min</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 col-xs-12 text-center mx-auto'>
                    <div className='row mx-auto'>
                        <div className='container__viajeros color__secondary col-md-4 col-sm-12'>
                            <h5>Manuel Andres</h5>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:00a.m</small>
                        </div>
                        <div className='container__viajeros color__secondary col-md-4 col-sm-12'>
                            <h5>Sofia Hernandez</h5>
                            <small>De Envigado hasta Ayura </small>
                            <br />
                            <small>23 Ago 2019 -7:10a.m</small>
                        </div>
                        <div className='container__viajeros color__secondary col-md-4 col-sm-12'>
                            <h5>Yeferson Perea</h5>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:20a.m</small>
                        </div>
                        <div className='container__viajeros color__secondary col-md-4 col-sm-12'>
                            <h5>Patricia Cano</h5>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:30a.m</small>
                        </div>

                    </div>
                        
                    </div>
                </div>

                <hr />

                <div className='text-center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.6827442126423!2d-75.61288418590692!3d6.17321372885054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1565896568458!5m2!1ses!2sco" width="95%" height="220" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div className='d-flex justify-content-around mt-3 mb-5'>

                    <Link to='/principal'>
                    <button className="btn btn-primary rounded-pill mb-2" role="button">Cancelar</button>
                    </Link>
                    
                    <button className="btn btn-danger rounded-pill mb-2" data-toggle="tooltip" data-placement="top" title="Llegué" role="button"><i className="fas fa-bell"></i> </button>
                    
                </div>
                </div>

            </React.Fragment>
        );
    }
}
export default Tracing;