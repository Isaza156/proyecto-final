import React, { Component } from 'react'

import '../styles/NavbarStyle.css';

class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                <a className="navbar-brand justify-content-center text-center d-block d-sm-none d-none d-sm-block d-md-none d-md-none d-md-none d-lg-block d-lg-block d-lg-none d-xl-none" href="#">Haceme un <br></br>cruce</a>

                <button className="navbar-toggler collapsed " type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse justify-content-center text-center" id="navbarsExample04" >
                    <ul className="navbar-nav ">
                        <li className="nav-item mt-1">
                            <a className="nav-link " href="#">Principal </a>
                        </li>
                        <li className="nav-item  mt-1">
                            <a className="nav-link " href="#">Contacto</a>
                        </li> 
                    </ul>
                </div>

                 <a className="navbar-brand justify-content-center text-center d-sm-none d-md-block d-none d-sm-block d-md-none d-lg-block d-none d-lg-block d-xl-none d-none d-xl-block " href="#">Haceme un <br></br>cruce</a>

                <div className="navbar-collapse collapse justify-content-center text-center" id="navbarsExample04">
                    <ul className="navbar-nav">
                        <li className="nav-item mt-1">
                            <a className="nav-link" href="#">Como funciona</a>
                        </li>
                        <li className="nav-item mt-1">
                            <a className="nav-link" href="#">Como mi cuenta</a>
                        </li>
                    </ul>
                 </div>
                </nav>
            </div>
        )
    }
}

export default NavbarComponent;
