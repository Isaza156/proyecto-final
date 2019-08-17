import React from 'react';
import '../styles/PrincipalStyle.css';

class Principal extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
               
                <div className='row m-0'>
                    <div className='col-12 bg-pri py-4 mb-3 mt-4 text-center text-muted'>
                        <h3>Lugar de partida</h3>
                        <input type="search" name="search" className='border border-info rounded' />
                        <button type="button" className="btn btn-danger mx-2 rounded-pill px-3">Buscar</button>
                    </div>
                    <div className='col-12 bg-pri py-4 my-4 text-center text-muted'>
                        <h3>Lugar de Llegada</h3>
                        <input type="search" name="search" className='border border-info rounded' />
                        <button type="button" className="btn btn-danger mx-2 rounded-pill px-3">Buscar</button>
                    </div>
                    <div className='col-12 bg-pri py-2 my-2 text-center text-muted'>
                        <h3>Falta poco para terminar</h3>
                        <button type="button" className="btn btn-primary mt-3 rounded-pill px-3">Fecha de Partida</button>
                    </div>
                </div>
              
            </React.Fragment>
        );
    }
}
export default Principal;