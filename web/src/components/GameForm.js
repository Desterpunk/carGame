import React, {useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createGame } from "../actions/gameActions";

import '../styles/GameForm.css'

const GameForm = ({dispatch}) => {


    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(createGame({
            id: "",
            numPlayers : numPlayers,
            distance : distance
        }))

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
})  

export default connect(mapStateToProps)(GameForm);