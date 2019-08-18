import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/NavbarStyle.css';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                    <Link className="navbar-brand justify-content-center text-center d-block d-sm-none d-none d-sm-block d-md-none d-md-none d-md-none d-lg-block d-lg-block d-lg-none d-xl-none" to="/principal">Haceme un <br></br>cruce</Link>

                    <button className="navbar-toggler collapsed " type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse justify-content-center text-center" id="navbarsExample04" >
                        <ul className="navbar-nav ">
                            <li className="nav-item mt-1 mx-2">
                                <Link className="nav-link " to="/principal">Principal </Link>
                            </li>
                            <li className="nav-item  mt-1 mx-2">
                                <a className="nav-link " href="https://api.whatsapp.com/send?phone=573122678810" target="_blank">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    <Link className="navbar-brand justify-content-center text-center d-sm-none d-md-block d-none d-sm-block d-md-none d-lg-block d-none d-lg-block d-xl-none d-none d-xl-block disabled" to="/principal">Haceme un <br></br>cruce</Link>

                    <div className="navbar-collapse collapse justify-content-center text-center" id="navbarsExample04">
                        <ul className="navbar-nav">
                            <li className="nav-item mt-1 mx-2">
                                <a className="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">
                                    Cómo funciona
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">

                                                <div className="modal-body">
                                                    <h2 className="text-danger">Reproduce el video</h2>
                                                    <div className='m-3 py-3'>
                                                        <iframe src="" width='100%' height='300' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    </div>
                                                    <button type="button" className="btn btn-secondary w-50 rounded-pill" data-dismiss="modal">Cerrar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item mt-1 mx-2 dropdown ">
                                <a className="nav-link " href="#" id='dropdownMenu' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mi cuenta</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                                    <div className='text-center'>
                                        <h5 className='p-2 w-100'>Patricia Cano</h5>
                                    </div>
                                    <hr />
                                    <Link to='/account'>
                                        <div className='text-center'>
                                            <i className="fas fa-user text-center"></i>
                                            <button type="button" className="btn btn-outline-light rounded-pill text-dark mx-2"> <strong> Mi perfil </strong></button>
                                        </div>
                                    </Link>

                                    <hr />
                                    <Link to='/intro'>
                                        <div className='text-center p-2'>
                                            <button type="button" className="btn btn-primary rounded-pill w-100 ">Cerrar sesión</button>
                                        </div>
                                    </Link>

                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
