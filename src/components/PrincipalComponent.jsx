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

                <div className='row m-0' id='principal'>
                    <div className='col-12 bg-pri py-3 mt-4 mb-3 text-center text-muted'>
                        <h3>Lugar de partida</h3>
                        <input type="search" name="search" className='border border-info rounded' />
                        <button type="button" className="btn btn-danger mx-2 rounded-pill px-3">Buscar</button>
                    </div>
                    <div className='col-12 bg-pri py-3 my-3 text-center text-muted'>
                        <h3>Lugar de Llegada</h3>
                        <input type="search" name="search" className='border border-info rounded' />
                        <button type="button" className="btn btn-danger mx-2 rounded-pill px-3">Buscar</button>
                    </div>
                    <div className='col-12 bg-pri py-2 mt-3 mb-5 text-center text-muted '>
                        <h3>Fecha y Hora de Salida</h3>

                        <form>
                            <input type='date' className='my-1' />
                            <input type='time' list="listalimitestiempo" className='mx-1'/>
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
                            <button type="button" className="btn btn-primary mt-3 rounded-pill px-3" >Confirmar</button>
                            </Link>
                        

                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default Principal;