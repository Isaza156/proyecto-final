import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/PerfilAccount.png';
import Navbar from './NavbarComponent';

class Service extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className='row' id='confirmar'>
                    <div className='col-md-6 col-sm-12 text-center'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12 text-center'>
                                <img src={Perfil} className="img-fluid mt-4 mb-4" alt="Perfil" />
                                <h5>Jose Perez</h5>
                            </div>
                            <div className='my-4 col-md-6 col-sm-12'>
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Placa: AAA-000' />
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Color: Rojo' />
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Salida: Envigado' />
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Precio: $0' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>
                        <Link to='/router'>
                        <button type="button" className="btn btn-danger px-5 mt-5 mb-4">Ir al viaje</button>
                        </Link>
                        
                        <Link to='/driver'>
                            <button type="button" className="btn btn-primary px-5  mb-4">Cancelar</button>
                        </Link>
                    </div>

                </div>

                <hr />

                <div className='d-flex flex-column align-items-center mb-5'>
                <h3 className=''>Personas en Espera</h3>
                        <div className='row justify-content-center'>
                            <div className='col-lg-4 col-md-4 col-sm-4 border border-dark text-center p-2 m-3 bg-danger text-white'>
                                <h5>Monica Lopez</h5>
                                <small>Envigado - Poblado </small>
                                <br />
                                <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                                <label className="custom-control-label" htmlFor="customControlValidation1">Confirmar</label>

                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 border border-dark text-center p-2 m-3 bg-danger text-white'>
                                <h5>Monica Lopez</h5>
                                <small>Envigado - Poblado </small>
                                <br />
                                <input type="checkbox" className="custom-control-input " id="customControlValidation2" required />
                                <label className="custom-control-label" htmlFor="customControlValidation2">Confirmar</label>

                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 border border-dark text-center p-2 m-3 bg-danger text-white'>
                                <h5>Monica Lopez</h5>
                                <small>Envigado - Poblado </small>
                                <br />
                                <input type="checkbox" className="custom-control-input " id="customControlValidation3" required />
                                <label className="custom-control-label" htmlFor="customControlValidation3">Confirmar</label>

                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 border border-dark text-center p-2 m-3 bg-danger text-white'>
                                <h5>Monica Lopez</h5>
                                <small>Envigado - Poblado </small>
                                <br />
                                <input type="checkbox" className="custom-control-input " id="customControlValidation4" required />
                                <label className="custom-control-label" htmlFor="customControlValidation4">Confirmar</label>
                            </div>
                        </div>
                    </div>



            </React.Fragment>
        );
    }
}
export default Service;