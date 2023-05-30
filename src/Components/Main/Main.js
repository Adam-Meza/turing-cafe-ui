import React from "react";
import { Card } from "../Card/Card";

export const Main = ({ data }) => {

  let reservations = data.map(res => {
    const {id, date, name, time, number} = res
    return < Card
    key = { id }
    date = { date }
    name = { name }
    time = { time }
    numer = { number }
    />
})


  return ( 
  <main>
    { reservations }
  </main>
  
  )
}