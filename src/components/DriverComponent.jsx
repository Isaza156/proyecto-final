import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/avatar2.png';
import Navbar from './NavbarComponent';

import '../styles/DriverStyle.css';

class Driver extends React.Component {
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
                                <h3>Patricia Cano</h3>
                                <h5>patriciacano@gmail.com</h5>

                            </div>
                            <div className='row m-auto text-left flex-column'>
                                <input type='text' className="text-dark text-center bg-light  border border-info rounded py-1 m-2" placeholder='Placa: AAA-000'/>
                                <input type='text' className="text-dark text-center bg-light  border border-info rounded py-1 m-2" placeholder='Color: Rojo'/>
                                <input type='text' className="text-dark text-center bg-light  border border-info rounded py-1 m-2" placeholder='Salida: Envigado'/>
                                <input type='text' className="text-dark text-center bg-light  border border-info rounded py-1 m-2" placeholder='Precio: $0'/>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>
                    <div className='row'>
                        <div className='m-auto'>
                            <Link to='/principal'>
                                <button type="button" className="btn btn-primary w-100 mb-3">Ser usuario</button>
                            </Link>
                                <button type="button" className="btn btn-danger w-100">Guardar cambios</button>
                        </div>

                    </div>
                        
                    </div>
                </div>

                <hr />
                <div className='text-center mb-5 '>
                    <h3 className='mt-4 mb-4 font-weight-bold'>Personas en espera</h3>
                    <div className='row col-12 justify-content-center m-auto'>
                        <div className='container__viajeros color__secondary col-md-4 col-sm-12'>
                            <h4>Manuel Andres</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:00a.m</small>
                            <button className="btn btn-primary m-2">aceptar</button>
                        </div>
                        <div className='container__viajeros color__secondary col-md-4 col-sm-12'>
                            <h4>Sofia Hernandez</h4>
                            <small>De Envigado hasta Ayura </small>
                            <br />
                            <small>23 Ago 2019 -7:10a.m</small>
                            <button className="btn btn-primary m-2">aceptar</button>
                        </div>
                        <div className='container__viajeros color__secondary col-md-4 col-sm-12'>
                            <h4>Yeferson Perea</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:20a.m</small>
                            <button className="btn btn-primary m-2">aceptar</button>

                        </div>
                        <div className='container__viajeros color__secondary col-md-4 col-sm-12'>
                            <h4>Yeferson Perea</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:20a.m</small>
                            <button className="btn btn-primary m-2">aceptar</button>

                        </div>

                    </div>
                    <Link to="/router">
                    <button className="btn btn-primary m-2 w-50">Comenzar viaje</button>
                    </Link>
                </div>

                        
               </div>
                    
            </React.Fragment>
        );
    }
}
export default Driver;

