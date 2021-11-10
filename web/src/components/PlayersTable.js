import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import '../styles/GamesTable.css'
import EditModal from './EditModal';

const PlayersTable = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
        {openModal === false && (
            <div className="text-center ">
            <h1 className="GamesTittle">Jugadores Creados</h1>
            <br/>
            
            <Link to={"/games"}><button className="btn-link text-regular">Volver</button></Link>
            <table>
                <thead>
                    <tr>
                        <td className="tittleTable">#</td>
                        <td className="tittleTable">Nombre</td>
                        <td className="tittleTable">Juego</td>
                        <td className="tittleTable">Nombrar</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>player</td>
                        <td>idgame</td>
                        <td><button className="ButtonDelete" onClick={() => {setOpenModal(true)}}>Editar</button></td>
                        
                    </tr>
                    
                </tbody>
                
            </table>

                <a href="/gamerunning" className="btn-link text-regular">Play</a>
            <br/>

            
        </div>
        )}
            {openModal && <EditModal setOpenModal={setOpenModal}/>}
        </>
    );
}
export default PlayersTable;