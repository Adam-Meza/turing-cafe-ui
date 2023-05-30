import React, { useState } from "react";
import './Card.css';

export const Card = ({key, name, date, time, number}) => {
  
  return (
    <div className ="card" key = { key } id = { key }>
      <ul>
        <h2>{name}</h2>
        <span>{date}</span>
        <span>{time}</span>
        <span>{number}</span>
      </ul>
    </div>
  )
}