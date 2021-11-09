import React, {useState} from "react";

import '../styles/GameForm.css'

const GameForm = () => {
    const [numPlayers, setNumPlayers] =useState([]);
    const [longitud, setLongitud] =useState([]);

    console.log(numPlayers, longitud);
    return (
        <>
        <form className="containerFormGame">
            <h2 className="title">Crear Juego</h2>
            <div className="containerCreatePlayer">
                <input
                    type="number"
                    name="name"
                    required
                    placeholder="¿ Cuál es la cantidad de jugadores ?"
                    className="inputGame"
                    onChange={(event) => {
                        setNumPlayers({ numPlayers: event.target.value })
                    }} >
                </input>
                <input
                    type="number"
                    name="name"
                    required
                    placeholder="¿ Cuál es la longitud de la pista ?"
                    className="inputGame" 
                    onChange={(event) => {
                        setLongitud({ longitud: event.target.value })
                    }}>
                </input>
                <br/>
                <br/>
                <button type="submit" className="btn-link text-regular">Crear</button>
            </div>
        </form>
        </>
    );
}
export default GameForm;