import React from 'react';
import Logo from '../images/ImageSplash.png';
import '../styles/SplashStyle.css';

class Splash extends React.Component {
    state = {}
    render() {
        return (
            <div className='cover-container text-center bg-splash text-white d-flex align-items-center justify-content-center flex-column'>
                <img src={Logo} className="img-fluid marginImg" alt="Logo" />
                <h1>Haceme Un Cruce <br /> <h6 className='d-flex justify-content-end marginVer mr-2'> versión 1.0 </h6>  </h1>
            </div>
        );
    }
}
export default Splash;