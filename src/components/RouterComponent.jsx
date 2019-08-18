import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/avatar.png';
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


                    <div className='col-md-6 col-sm-12 col-xs-12 text-center mt-5 '>
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

                <div className='d-flex justify-content-around mt-2 mb-5'>
                    <Link to='/service'>
                        <button type="button" className="btn btn-primary px-5 mb-4 rounded-pill">Cancelar</button>
                    </Link>

                </div>


            </React.Fragment>
        );
    }
}
export default Router;