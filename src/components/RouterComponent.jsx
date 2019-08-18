import React from 'react';
import Perfil from '../images/PerfilAccount.png';
import Navbar from './NavbarComponent';

class Router extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />

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
                        <div className='row justify-content-center'>
                            <div className='col-lg-4 col-md-4 col-sm-4 border border-dark text-center p-2 m-3 bg-danger text-white'>
                                <h5>Monica Lopez</h5>
                                <small>Envigado - Poblado </small>
                                <br />
                                <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                                <label className="custom-control-label" htmlFor="customControlValidation1">En Viaje</label>

                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 border border-dark text-center p-2 m-3 bg-danger text-white'>
                                <h5>Monica Lopez</h5>
                                <small>Envigado - Poblado </small>
                                <br />
                                <input type="checkbox" className="custom-control-input " id="customControlValidation2" required />
                                <label className="custom-control-label" htmlFor="customControlValidation2">En Viaje</label>

                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 border border-dark text-center p-2 m-3 bg-danger text-white'>
                                <h5>Monica Lopez</h5>
                                <small>Envigado - Poblado </small>
                                <br />
                                <input type="checkbox" className="custom-control-input " id="customControlValidation3" required />
                                <label className="custom-control-label" htmlFor="customControlValidation3">En Viaje</label>

                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 border border-dark text-center p-2 m-3 bg-danger text-white'>
                                <h5>Monica Lopez</h5>
                                <small>Envigado - Poblado </small>
                                <br />
                                <input type="checkbox" className="custom-control-input " id="customControlValidation4" required />
                                <label className="custom-control-label" htmlFor="customControlValidation4">En Viaje</label>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className='text-center m-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.6827442126423!2d-75.61288418590692!3d6.17321372885054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1565896568458!5m2!1ses!2sco" width="1200" height="200" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div className='d-flex justify-content-around mt-2 mb-5'>
                    <a href="#" className="btn btn-primary btn-lg active rounded-pill" role="button">Cancelar</a>
                </div>


            </React.Fragment>
        );
    }
}
export default Router;