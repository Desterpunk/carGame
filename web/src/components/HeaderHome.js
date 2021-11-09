import React from 'react'; 
import car from '../img/horse.png';

import '../styles/HeaderHome.css'

const HeaderHome = () => {

    return (
        <header className="containerHeader" id="containerHeader">
            <div className="textHeader">
                <p className="icon">
                    <img src={car} className="icon" alt="car"></img>
                </p>
                <h1 className="title">
                    Carrera en SofkaU<br></br>¡Entra Ya!<br></br>
                    <span className="title-orange-neon text-regular">Diviertete y Apuesta al mejor Caballo</span>
                </h1>
                <br/>
                <p className="description">
                    Recuerda<br></br>
                    Siempre jugar con moderación. <br></br>
    
                </p>
                <br/>
                <a href="/game" className="btn-link text-regular">Start</a>
            </div>
	    </header>
    );
}

export default HeaderHome;