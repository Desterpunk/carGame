import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {  deleteGame, setGame } from '../actions/gameActions';

import '../styles/GamesTable.css'

const GamesTable = ({dispatch,loading,hasErrors,games}) => {

    const [totalPlayers, settotalPlayers] = useState(0)

    const handleInciar = (index) => {
        dispatch(setGame(index));
    }



    useEffect(() => {
        var total = 0;
        games.map((game) => {
            total += parseInt(game.game.numPlayers);
        })

        settotalPlayers(total)
    }, [dispatch,games])

    console.log(totalPlayers)


    const renderGames = () => {


        if (loading) return <tr><td>Loading games...</td></tr>
        if (hasErrors) return <tr><td>Loading games...</td></tr>


        return games.map((game,index) => 
            <tr key={Math.random()}>
                <td>{game.game.id}</td>
                <td>{game.game.numPlayers}</td>
                <td>{game.game.distance}</td>
                <td> <button onClick={() => handleInciar(index)} className="ButtonRun"><Link to={"/players"}>Iniciar</Link></button> </td>
                <td><button onClick={() => dispatch(deleteGame(index))} className="ButtonDelete">Eliminar</button></td>
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
    currentGame: state.game.currentGame,
})


export default connect(mapStateToProps)(GamesTable);