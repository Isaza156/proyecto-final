import React from 'react';
import '../styles/IntroStyle.css';

class Intro extends React.Component {
    state = {}
    render() {
        return (
            <div className='cover-container bg-intro text-white '>
                <div className='row align-items-center mr-0'>
                    <div className='col-md-6 col-sm-12 d-flex flex-column align-items-center'>
                        <h2 className='tamaño marginBie'>Bienvenido</h2>
                        <button type="button" className="btn btn-danger px-5 mb-3">Iniciar Sesión</button>
                        <button type="button" className="btn btn-primary px-5 marginReg">Registrarse</button>
                    </div>
                    <div className='col-md-6 col-sm-12 video-responsive mt-5'>
                        <iframe src="https://www.youtube.com/embed/14iHRpk9qvQ?start=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default Intro;