import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/IntroStyle.css';

class Intro extends React.Component {
    state = {}
    render() {
        return (
            <div className='bg-intro'>
                <div className='row align-items-center text-center h-100'>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center text-center'>
                        <h3 className='tamañoTitle marginBie'>Regístrate
                        <p className="tamañoSub">Es rápido y fácil.</p></h3>

                        <Link type="button" className="btn btn-primary border border-light w-50 mb-4 mt-5 rounded-pill" to="/signIn">Registrarse</Link>


                        <p>¿Ya tienes una cuenta?</p>
                        <Link type="button" className="btn btn-secondary border border-light w-50 rounded-pill" to="/login">Iniciar Sesión</Link>

                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column video-responsive text-center my-5'>
                        <iframe src="https://www.youtube.com/embed/9_TxDum4voI?start=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default Intro;

// https://www.youtube.com/embed/14iHRpk9qvQ?start=0

// https://www.youtube.com/watch?v=9_TxDum4voI