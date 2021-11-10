import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/GamesTable.css'

const GamesTable = () => {

    return (
        <div className="text-center ">
            <h1 className="GamesTittle">Juegos creados y listos para arrancar</h1>
            <br/>
            <Link to={"/game"}><button className="btn-link text-regular">Volver</button></Link>
            <table>
                <thead>
                    <tr>
                        <td className="tittleTable">#</td>
                        <td className="tittleTable">Número de jugadores</td>
                        <td className="tittleTable">Kilómetros del recorrido</td>
                        <td className="tittleTable">Iniciar</td>
                        <td className="tittleTable">Eliminar</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>player</td>
                        <td>km</td>
                        <td> <Link to={"/players"}> <button className="ButtonRun">Iniciar</button> </Link> </td>
                        <td><button className="ButtonDelete">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
            <br/>
        </div>
    );
}
export default GamesTable;