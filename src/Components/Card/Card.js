import React, { useState } from "react";

export const Card = ({key, name, date, time, number}) => {
  
  return (
    <div key = { key }>
      <ul>
        <h2>{name}</h2>
        <span>{date}</span>
        <span>{time}</span>
        <span>{number}</span>
      </ul>
    </div>
  )
}