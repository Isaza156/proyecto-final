import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Perfil from '../images/avatar2.png';
=======
import Perfil from '../images/avatar.png';
>>>>>>> eb4a096a13ba3b7f209dbeaeb04789b384846c88
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
<<<<<<< HEAD
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
=======
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
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>

                        <Link to='/service'>
                            <button type="button" className="btn btn-danger px-5 mt-5 mb-4 rounded-pill">Guardar Cambios</button>
                        </Link>
                        <Link to='/principal'>
                            <button type="button" className="btn btn-primary px-5 mb-4 rounded-pill">Ser Pasajero</button>
                        </Link>

                    </div>

>>>>>>> eb4a096a13ba3b7f209dbeaeb04789b384846c88
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

<<<<<<< HEAD
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
=======
                <div className='text-center mb-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.6827442126423!2d-75.61288418590692!3d6.17321372885054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1565896568458!5m2!1ses!2sco" width="95%" height="220" frameBorder="0" allowFullScreen></iframe>
                </div>



>>>>>>> eb4a096a13ba3b7f209dbeaeb04789b384846c88

                        
               </div>
                    
            </React.Fragment>
        );
    }
}
export default Driver;

