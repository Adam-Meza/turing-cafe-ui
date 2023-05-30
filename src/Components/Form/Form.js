import React, { useState } from "react";

export function Form (props) {
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [number, setNumber] = useState(0)
  const [id, setId] = useState(Date.now())

  // const handleSubmit = async () => {
  //   const newRes = {
  //     id: id,
  //     date: date,
  //     name: name,
  //     time: time,
  //     number: parseFloat(number)
  //   }

  //   try {
  //     const postResponse = await fetch('http://localhost:3001/api/v1/reservations',
  //     {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json'},
  //       body: JSON.stringify(newRes)
  //     })
  //   } catch {

  //   }
  // }

  let makeResObject = () => {
    return {
      id: id,
      date: date,
      name: name,
      time: time,
      number: parseFloat(number)
    }
  }

  return (
    <section>
      <input name="name" placeholder="name" className="form-input" onChange={(event) => setName(event.target.value)}/>
      <input name="date" placeholder="date" className="form-input" onChange={(event) => setDate(event.target.value)}/>
      <input name="number" placeholder="number" className="form-input" onChange={(event) => setNumber(event.target.value)}/>
      <input name="time" placeholder="time" className="form-input" onChange={(event) => setTime(event.target.value)}/>   
      <button onClick={ () => props.handleSubmit(makeResObject())}>Make Reservation</button> 
    </section>
  )
}