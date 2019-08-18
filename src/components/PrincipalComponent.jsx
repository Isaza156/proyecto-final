import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PrincipalStyle.css';
import Navbar from './NavbarComponent';


class Principal extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className= 'mt-2 pb-5' id='principal'>
                    <div className='col-12 bg-pri py-3 text-center text-muted'>
                        <h4>Lugar de partida</h4>
                        <input type="search" name="search" placeholder=" Cll00 #00a 00, Medellín" className='txtField border border-info rounded' />
                        <button type="button" className="btn btn-secondary mt-2 mx-2 rounded-pill px-3 btnPrincipal ">Buscar</button>
                    </div>
                    <div className='col-12 bg-pri py-3 my-2 text-center text-muted'>
                        <h4>Lugar de llegada</h4>
                        <input type="search" name="search" placeholder=" Cra00 #00a 00, Envigado" className=' txtField border border-info rounded ' />
                        <button type="button" className="btn btn-secondary mt-2 mx-2 rounded-pill px-3 btnPrincipal">Buscar</button>
                    </div>
                    <div className='col-12 h-auto bg__pri py-3 text-center text-muted'>
                        <h4>Fecha y hora de salida</h4>

                        <form>
                            <input type='date' className='txtField my-1 border border-info rounded' />
                            <input type='time' list="listalimitestiempo" className='txtField mx-1 border border-info rounded'/>
                            <datalist id="listalimitestiempo">

                                <option value="05:00" />

                                <option value="06:00" />

                                <option value="07:00" />

                                <option value="08:00" />

                                <option value="09:00" />

                                <option value="10:00" />

                                <option value="11:00" />

                                <option value="12:00" />

                            </datalist>

                        </form>
                            <Link to='confirm'>
                            <button type="button" className="btn btn-primary mt-2 rounded-pill px-3 btnPrincipal" >Confirmar</button>
                            </Link>
                        

                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default Principal;