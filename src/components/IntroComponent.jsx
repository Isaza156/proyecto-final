import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/IntroStyle.css';

class Intro extends React.Component {
    state = {}
    render() {
        return (
            <div className='container-fluid bg-intro text-white '>
                <div className='row align-items-center'>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>
                        <h3 className='tamañoTitle marginBie'>Regístrate
                        <p className="tamañoSub">Es rápido y fácil.</p></h3>
                        
                        <Link type="button" className="btn btn-primary  border border-light w-50 mb-4" to="/signIn">Registrarse</Link>
                        
                        
                        <p>¿Ya tienes una cuenta?</p>
                        <Link type="button" className="btn btn-secondary  marginReg border border-light w-50" to="/login">Iniciar Sesión</Link>
                        
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column video-responsive '>
                        <iframe src="https://www.youtube.com/embed/14iHRpk9qvQ?start=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default Intro;