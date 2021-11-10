import React, { useState } from "react";

import '../styles/EditModal.css'

function EditModal({ setOpenModal }) {
  const [name, setName] =useState([]);

  const handleContinue = () => {
    console.log(name)

  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <form>
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
                    placeholder="Nombre del jugador"
                    className="inputGame"
                    onChange={(event) => {
                        setName({ name: event.target.value })
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
          <button type="submit" onClick={handleContinue}>Continue</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;