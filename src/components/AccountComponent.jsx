import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/avatar2.png';
import Navbar from './NavbarComponent';

class Account extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div>
                <div className='row col-12 m-auto' id='confirmar'>
                    <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>
                        <div className='row col-12 m-auto'>
                            <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>
                                <img src={Perfil} className="img-fluid m-auto" alt="Perfil" />
                            </div>
                            <div className='m-auto'>
                                <h1 className="mb-3 font-weight-bold">Patricia Cano</h1>
                                <h5 className="text-dark" >patriciacano@gmail.com</h5>
                                
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 col-xs-12 text-center m-auto'>

                        <div className="row">
                            <div className='m-auto'>
                            <Link to='/driver'>
                                <button type="button" className="btn btn-primary w-100 mb-3">Ser conductor</button>
                            </Link>
                                <button type="button" className="btn btn-danger w-100">Compartir</button>
                            </div>
                        </div>

                       
                    </div>
                </div>

                <hr />

                <div className='text-center mb-5 '>
                    <h3 className='mt-4 mb-4 font-weight-bold'>Historial de viajes</h3>
                    <div className='row col-12 justify-content-center m-auto'>
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Jose Perez</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>23 Ago 2019 -7:00a.m</small>
                        </div>
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Jose Perez</h4>
                            <small>De Envigado hasta Ayura </small>
                            <br />
                            <small>24 Ago 2019 -7:10a.m</small>
                        </div>
                        <div className='container__viajeros color__secondary col-md-3 col-sm-12'>
                            <h4>Jose Perez</h4>
                            <small>De Envigado hasta Poblado </small>
                            <br />
                            <small>25 Ago 2019 -7:20a.m</small>
                        </div>

                    </div>
                </div>
                </div>
               
            </React.Fragment>
        );
    }
}

export default Account;

