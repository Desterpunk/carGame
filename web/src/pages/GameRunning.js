import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/GameRunning.css'
const GameRunning = ({dispatch, games, players,currentGame}) => {
    
    useEffect(() => {
        if(currentGame !== null){
            let names = []
            let horseColors = []
            let distance = null
            let country = ""
            let place = ""
            let prueba = {}
            players.map((player) => {
                if(player.player.game === currentGame.index){
                    names.push(player.player.name) 
                    horseColors.push(player.player.horseColors)
                    distance = player.player.distance
                    country = player.player.country
                    place = player.player.place
                }  
                return null 
            })
            Object.assign(prueba,{
                nicknames : names,
                horseColors : horseColors,
                distance : distance,
                country : country,
                place : place,
            })
            console.log(names)
            console.log(prueba)

            
        }

    }, [dispatch,currentGame,players])


    return (
        <div className="containerGameRunning">
            <Link to={"/players"}><button className="btn-link text-regular">Volver</button></Link>

        </div>
    );
}

const mapStateToProps = state => ({
    games: state.game.games,
    players: state.player.players,
    currentGame: state.game.currentGame
})  

export default connect(mapStateToProps)(GameRunning);