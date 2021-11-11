import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import '../styles/GamesTable.css'
import EditModal from './EditModal';

const PlayersTable = ({dispatch,players,loading,hasErrors,currentGame}) => {
    const [openModal, setOpenModal] = useState(false)
    const [currentPlayers, setCurrentPlayers] = useState([])

    useEffect(() => {
        if(currentGame !== null){
            setCurrentPlayers(players.filter((player) => player.player.game - 1 === currentGame.index))
        }
    }, [dispatch,currentGame,players])

    const renderPlayers = () => {


        if (loading) return <tr><td>Loading games...</td></tr>
        if (hasErrors) return <tr><td>Loading games...</td></tr>

        return currentPlayers.map((player,index) => 
            <tr key={Math.random()}>
                <td>{index}</td>
                <td>{player.player.name}</td>
                <td>{player.player.game}</td>
                <td><button className="ButtonDelete">Nombrar</button></td>
            </tr>
        )
        
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