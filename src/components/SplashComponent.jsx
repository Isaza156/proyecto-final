import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/ImageSplash.png';
import '../styles/SplashStyle.css';

class Splash extends React.Component {
    state = {}
    render() {
        return (
            <div className='cover-container text-center bg-splash text-white d-flex align-items-center justify-content-center flex-column'>
       
               
              <Link to="/intro">
              <img src={Logo} className="img-fluid marginImg" alt="Logo" />
              </Link>
             

                <h1>Haceme un cruce
                    <br />
                    <h6 className='d-flex justify-content-end marginVer mr-1'> Versión 1.0 </h6>
                </h1>

            </div>
        );
    }
}
export default Splash;

//  <Link type="button" className="btn btn-primary" to="/intro">Primary</Link>