import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GameRunning.css'
const GameRunning = () => {

    return (
        <div className="containerGameRunning">
            <Link to={"/games"}><button className="btn-link text-regular">Volver</button></Link>
        </div>
    );
}

export default GameRunning;