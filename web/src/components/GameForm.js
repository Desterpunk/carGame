import React, {useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createGame } from "../actions/gameActions";
import { createPlayer } from "../actions/playerActions";

import '../styles/GameForm.css'

const GameForm = ({dispatch,games,players}) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(createGame({
            id: games.length+1,
            numPlayers : numPlayers,
            distance : distance
        }))

        for (let i = 0; i < numPlayers; i++) {
                dispatch(createPlayer({
                    id: players.length+i,
                    name: "username",
                    game: games.length+1,
                }))
        }

        setNumPlayers("");
        setDistance("");
    }


    const [numPlayers, setNumPlayers] =useState("");
    const [distance, setDistance] =useState("");

    return (
        <>
        <form className="containerFormGame" onSubmit={handleSubmit}>
            <h2 className="title">Crear Juego</h2>
            <div className="containerCreatePlayer">
                <input
                    type="number"
                    name="name"
                    value={numPlayers}
                    required
                    placeholder="¿ Cuál es la cantidad de jugadores ?"
                    className="inputGame"
                    onChange={(event) => {
                        setNumPlayers(event.target.value)
                    }} >
                </input>
                <input
                    type="number"
                    name="name"
                    required
                    value={distance}
                    placeholder="¿ Cuál es la longitud de la pista ?"
                    className="inputGame" 
                    onChange={(event) => {
                        setDistance(event.target.value)
                    }}>
                </input>
                <br/><br/>
                <button type="submit" className="btn-link text-regular" >Crear</button>
                <br/><br/>
                <Link to={"/games"}><button className="btn-link text-regular">Juegos</button></Link>
            </div>
        </form>
        </>
    );
}

const mapStateToProps = state => ({
    loading: state.game.loading,
    redirect: state.game.redirect,
    hasErrors: state.game.hasErrors,
    games: state.game.games,
    players: state.player.players
})  

export default connect(mapStateToProps)(GameForm);