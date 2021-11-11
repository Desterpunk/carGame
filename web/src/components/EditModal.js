import React, { useState } from "react";
import { connect } from "react-redux";
import { updatePlayer } from "../actions/playerActions";

import '../styles/EditModal.css'

function EditModal({dispatch, currentPlayer, setOpenModal,players,currentGame }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePlayer({
      id: currentPlayer.index,
      name: name,
    }))
    setOpenModal(false)

  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <form onSubmit={handleSubmit}>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Ingresa el nombre del jugador</h1>
        </div>
        <br/>
        <div className="containerCreatePlayer">
                <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    placeholder="Nombre del jugador"
                    className="inputGame"
                    onChange={(event) => {
                        setName(event.target.value)
                    }} >
                </input>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button type="submit">Continue</button>
        </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentPlayer: state.player.currentPlayer,
  players: state.player.players,
  game: state.game.currentGame
})

export default connect(mapStateToProps)(EditModal);