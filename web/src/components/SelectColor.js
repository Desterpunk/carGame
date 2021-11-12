import React, { useState } from 'react';
import { updateColorPlayer } from '../actions/playerActions';
import '../styles/NavBar.css'

import '../styles/SelectColor.css'

export const SelectColor = ({index, dispatch}) => {

    const [color, setColor] = useState("")

    const handleChange = (event) => {
        event.preventDefault()
        setColor(event.target.value)
    }

    if(color !== ""){
        dispatch(updateColorPlayer({
            id: index,
            color: color,
          }))
    }


  return (
    <>
        <div className="caja" onChange={handleChange}>
            <select className="select">
                <option value="">Select color: </option>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="purple">purple</option>
                <option value="pink">pink</option>
            </select>
        </div>
    </>
  );
}