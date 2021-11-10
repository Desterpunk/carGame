import React from 'react';
import GameForm from '../components/GameForm';


const Game = ({dispatch}) => {

    return (
        <div className="containerGame">
            <GameForm dispatch={dispatch}/>
        </div>
    );
}

export default Game;