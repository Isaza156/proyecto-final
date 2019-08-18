import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../images/PerfilAccount.png';
import Navbar from './NavbarComponent';

class Driver extends React.Component {
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
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Placa: AAA-000'/>
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Color: Rojo'/>
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Salida: Envigado'/>
                                <input type='text' className="text-dark text-center bg-light my-2" placeholder='Precio: $0'/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>
                    <Link to='/principal'>
                        <button type="button" className="btn btn-primary px-5 mt-5 mb-4">Ser Pasajero</button>
                        </Link>
                        <Link to='/service'>
                        <button type="button" className="btn btn-danger px-5 mb-4">Guardar Cambios</button>     
                        </Link>
                                     
                    </div>
                    
                </div>

                <hr />

                <div className='text-center mb-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.6827442126423!2d-75.61288418590692!3d6.17321372885054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1565896568458!5m2!1ses!2sco" width="1200" height="200" frameBorder="0" allowFullScreen></iframe>
                </div>

                
                

            </React.Fragment>
        );
    }
}
export default Driver;