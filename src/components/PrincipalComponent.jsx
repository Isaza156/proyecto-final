import React from 'react';
import '../styles/PrincipalStyle.css';

class Principal extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className='cover-container'>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="collapse navbar-collapse d-flex justify-content-center text-center">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link text-light mx-5 mt-2" href="/">Contáctanos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light mx-5 mt-2" href="/">Principal</a>
                                </li>
                                <h4 className='text-white mx-5'>Haceme Un <br /> Cruce</h4>
                                <li className="nav-item">
                                    <a className="nav-link text-light mx-5 mt-2" href="/">Cómo Funciona</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light mx-5 mt-2" href="/">Mi Cuenta</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='row m-0'>
                    <div className='col-12 bg-pri py-4 mb-3 mt-4 text-center text-muted'>
                        <h3>Lugar de partida</h3>
                        <input type="search" name="search" className='border border-info rounded' />
                        <button type="button" className="btn btn-danger mx-2 rounded-pill px-3">Buscar</button>
                    </div>
                    <div className='col-12 bg-pri py-4 my-4 text-center text-muted'>
                        <h3>Lugar de Llegada</h3>
                        <input type="search" name="search" className='border border-info rounded' />
                        <button type="button" className="btn btn-danger mx-2 rounded-pill px-3">Buscar</button>
                    </div>
                    <div className='col-12 bg-pri py-2 my-2 text-center text-muted'>
                        <h3>Falta poco para terminar</h3>
                        <button type="button" className="btn btn-primary mt-3 rounded-pill px-3">Fecha de Partida</button>
                    </div>
                </div>
                <div className='cover-container mt-3'>
                    <nav className="bg-dark text-white text-center py-3">
                        <h6>@2019 Haceme Un Cruce. All Rights Reserved.</h6>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}
export default Principal;