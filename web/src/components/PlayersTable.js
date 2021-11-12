import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteIndividualPlayer, setPlayer } from '../actions/playerActions';

import '../styles/GamesTable.css'
import EditModal from './EditModal';
import { SelectColor } from './SelectColor';

const PlayersTable = ({dispatch,players,loading,hasErrors,currentGame,currentPlayer}) => {
    const [openModal, setOpenModal] = useState(false)
    const [currentPlayers, setCurrentPlayers] = useState([])


    useEffect(() => {
        if(currentGame !== null){
            setCurrentPlayers(players.filter((player) => player.player.game  === currentGame.index))
        }

    }, [dispatch,currentGame,players])


    const handleButton = (index) => {
        dispatch(setPlayer(index))
        setOpenModal(true);
    }

    const handleDelete = (index) => {
        dispatch(deleteIndividualPlayer(index))
    }
    

    const renderPlayers = () => {


        if (loading) return <tr><td>Loading games...</td></tr>
        if (hasErrors) return <tr><td>Loading games...</td></tr>

        return currentPlayers.map((player,index) => 
            <tr key={Math.random()}>
                <td>{player.player.id}</td>
                <td>{player.player.name}</td>
                <td>{player.player.game}</td>
                <td><button className="ButtonRun" onClick={() => {handleButton(player.player.id)}}>Nombrar</button></td>
                <td><button onClick={() => handleDelete(index)} className="ButtonDelete">Eliminar</button></td>
                <td><SelectColor index={player.player.id} dispatch={dispatch}></SelectColor></td>
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
                        <td className="tittleTable">Eliminar</td>
                        <td className="tittleTable">Color</td>
                    </tr>
                </thead>
                <tbody>

                    {renderPlayers()}
                
                </tbody>
                
            </table>

                <Link to="/gamerunning" className="btn-link text-regular" onClick={() => {}}>Play</Link>
            <br/>

            
        </div>
        )}
            {openModal && <EditModal dispatch={dispatch} currentPlayer={currentGame} setOpenModal={setOpenModal}/>}
        </>
    );
}

const mapStateToProps = state => ({
    loading: state.player.loading,
    redirect: state.player.redirect,
    hasErrors: state.player.hasErrors,
    games: state.game.games,
    players: state.player.players,
    currentGame: state.game.currentGame,
    currentPlayer: state.player.currentPlayer
})



export default connect(mapStateToProps)(PlayersTable);