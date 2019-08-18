import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/PerfilAccount.png';
import Navbar from './NavbarComponent';

class Confirm extends React.Component {
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
                            <div className='my-4'>
                                <a className="nav-link disabled text-dark" href="/"><strong>Placa:</strong>  AAA-000</a>
                                <a className="nav-link disabled text-danger" href="/"><strong>Color: Rojo</strong>  </a>
                                <a className="nav-link disabled text-dark" href="/"><strong>Tiempo:</strong> 20 Min</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>
                        <div className="form-group row">
                            <label htmlFor="inputText" className="col-md-6 col-sm-12 col-form-label text-center mt-4"><strong>Costo del Viaje</strong> </label>
                            <div className="col-md-6 col-sm-12">
                                <a className="nav-link disabled text-success mt-4" href="/"><strong>$2.000</strong></a>
                            </div>
                        </div>
                        <Link to='/tracing'>
                        <button type="button" className="btn btn-primary px-5 mb-3 mt-2">Confirmar</button>
                        </Link>
                        
                    </div>
                </div>

                <hr />

                <div className='text-center mb-5'>
                    <h3 className='mt-4'>Acompañantes de Viaje</h3>
                    <div className='row justify-content-center'>
                        <div className='border border-dark text-center p-1 m-1 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>23 Ago 2019</small>
                        </div>
                        <div className='border border-dark text-center p-1 m-1 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>24 Ago 2019</small>
                        </div>
                        <div className='border border-dark text-center p-1 m-1 bg-danger text-white'>
                            <h5>Jose Perez</h5>
                            <small>Envigado - Poblado </small>
                            <br />
                            <small>25 Ago 2019</small>
                        </div>

                    </div>
                </div>


            </React.Fragment>
        );
    }
}
export default Confirm;