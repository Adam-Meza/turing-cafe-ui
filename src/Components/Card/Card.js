import React, { useState } from "react";
import './Card.css';

export const Card = ({key, name, date, time, number}) => {
  
  return (
    <div className ="card" key = { key } id = { key }>
      <ul>
        <h2>{name}</h2>
        <h3>{date}</h3>
        <h3>{time}</h3>
        <h3>{number}</h3>
      </ul>
    </div>
  )
}