import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/avatar.png';
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
                                <img src={Perfil} className="img-fluid mt-3 " alt="Perfil" />
                            </div>
                            <div className='my-5 col-md-6 col-sm-12'>
                                <h3>Jose Perez</h3>
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Placa: AAA-000' />
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Color: Rojo' />
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Salida: Envigado' />
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Precio: $0' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center mt-5'>

                        <Link to='/router'>
                            <button type="button" className="btn btn-danger px-5 mt-5 mb-4 rounded-pill">Ir al Viaje</button>
                        </Link>
                        <Link to='/driver'>
                            <button type="button" className="btn btn-primary px-5 mb-4 rounded-pill">Cancelar</button>
                        </Link>

                    </div>

                </div>
                <hr />

                <div className='text-center mb-5 '>
                    <h3 className='mt-4 mb-4 font-weight-bold'>Personas en espera</h3>
                    <div className='row col-12 justify-content-center m-auto'>
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Manuel Andres</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:00a.m</small>     
                            <br/>
                            <input type="checkbox" className="custom-control-input " id="customControlValidation1" required />
                                <label className="custom-control-label mt-2" htmlFor="customControlValidation1">Confirmar</label>                       
                        </div>
                        
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Sofia Hernandez</h4>
                            <small>De Envigado hasta Ayura </small>
                            <br />
                            <small>23 Ago 2019 -7:10a.m</small>
                            <br/>
                            <input type="checkbox" className="custom-control-input " id="customControlValidation2" required />
                                <label className="custom-control-label mt-2" htmlFor="customControlValidation2">Confirmar</label>   
                        </div>
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Yeferson Perea</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:20a.m</small>
                            <br/>
                            <input type="checkbox" className="custom-control-input " id="customControlValidation3" required />
                                <label className="custom-control-label mt-2" htmlFor="customControlValidation3">Confirmar</label>   
                        </div>
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Patricia Cano</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:20a.m</small>
                            <br/>
                            <input type="checkbox" className="custom-control-input " id="customControlValidation4" required />
                                <label className="custom-control-label mt-2" htmlFor="customControlValidation4">Confirmar</label>   
                        </div>
                    </div>
                </div>



            </React.Fragment>
        );
    }
}
export default Service;