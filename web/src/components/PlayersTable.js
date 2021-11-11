import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { createPlayer } from '../actions/playerActions';

import '../styles/GamesTable.css'
import EditModal from './EditModal';

const PlayersTable = ({dispatch,games,currentGame, players,loading,hasErrors}) => {
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        const actualPlayers = [];

        if(currentGame !== null) {
            const actualGame = games[currentGame.index]

            for (let i = 0; i < actualGame.game.numPlayers; i++) {
                actualPlayers.push({
                    id: i,
                    name: "username",
                    actualGame: currentGame.index
                })
            }

            dispatch(createPlayer(actualPlayers))
        }
    },[dispatch, currentGame,games])

    const renderPlayers = () => {


        if (loading) return <tr><td>Loading games...</td></tr>
        if (hasErrors) return <tr><td>Loading games...</td></tr>

        if(players.player !== undefined){
        return players.player.map((player,index) => 
            <tr key={Math.random()}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.actualGame + 1}</td>
                <td><button className="ButtonDelete">Nombrar</button></td>
            </tr>
        )
        }
    }

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

                    {renderPlayers()}
                
                    
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

const mapStateToProps = state => ({
    loading: state.player.loading,
    redirect: state.player.redirect,
    hasErrors: state.player.hasErrors,
    games: state.game.games,
    players: state.player.players,
    currentGame: state.game.currentGame
})



export default connect(mapStateToProps)(PlayersTable);