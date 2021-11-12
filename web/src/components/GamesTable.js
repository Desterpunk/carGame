import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {  deleteGame, setGame } from '../actions/gameActions';
import { deletePlayer } from '../actions/playerActions';

import '../styles/GamesTable.css'

const GamesTable = ({dispatch,loading,hasErrors,games,players}) => {

    
    

    const handleInciar = (game) => {
        dispatch(setGame(game.game.id));
    }


    const handleDelete = (index) => {
        dispatch(deleteGame(index))
        dispatch(deletePlayer(index))
    }


    const renderGames = () => {


        if (loading) return <tr><td>Loading games...</td></tr>
        if (hasErrors) return <tr><td>Loading games...</td></tr>


        return games.map((game,index) => 
            <tr key={Math.random()}>
                <td>{game.game.id}</td>
                <td>{players.length}</td>
                <td>{game.game.distance}</td>
                <td> <button onClick={() => handleInciar(game)} className="ButtonRun"><Link to={"/players"}>Iniciar</Link></button> </td>
                <td><button onClick={() => handleDelete(index)} className="ButtonDelete">Eliminar</button></td>
            </tr>
        )
    }

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
                    {renderGames()}
                </tbody>
            </table>
            <br/>
        </div>
    );
}

const mapStateToProps = state => ({
    loading: state.game.loading,
    redirect: state.game.redirect,
    hasErrors: state.game.hasErrors,
    games: state.game.games,
    players: state.player.players,
    currentGame: state.game.currentGame,
})


export default connect(mapStateToProps)(GamesTable);