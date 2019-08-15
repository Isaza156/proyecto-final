import React from 'react';
import '../styles/IntroStyle.css';

class Intro extends React.Component {
    state = {}
    render() {
        return (
            <div className='cover-container bg-intro text-white '>
                <div className='row align-items-center mr-0'>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>
                        <h3 className='tamañoTitle marginBie'>Regístrate
                        <p className = "tamañoSub">Es rápido y fácil.</p></h3>
                        
                        <button type="button" className="btn btn-primary px-5 border border-light w-50 mb-4">Registrarse</button>
                        <p>¿Ya tienes una cuenta?</p>
                        <button type="button" className="btn btn-secondary px-5 marginReg border border-light w-50">Iniciar Sesión</button>  
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column video-responsive'>
                        <iframe src="https://www.youtube.com/embed/14iHRpk9qvQ?start=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default Intro;