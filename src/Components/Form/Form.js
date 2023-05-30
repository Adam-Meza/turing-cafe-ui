import React, { useState } from "react";

export function Form (props) {
  const [error, setError] = useState('')
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

  const checkData = () => {
    const dateRegEx = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/
    const timeRegEx = /^(0?[1-9]|1[0-2]):([0-5][0-9]) [ap]m$/
    const numberRegEx = /^(0?\d|4[0-9]|50)$/

    return (
      dateRegEx.test(date) ?
      numberRegEx.test(number) ?
      timeRegEx.test(time) :
      true : false 
    )
  }

  let makeResObject = () => {
    if (checkData()) {
      return {
        id: id,
        date: date,
        name: name,
        time: time,
        number: parseFloat(number)
      }
    } else {
      setError('check your inputs!')
    }
  }

  return (
    <section className='form'>
      { error && <h3>{error}</h3>}
      <input id="name" name="name" placeholder="name" className="form-input" onChange={(event) => setName(event.target.value)}/>
      <input id="date" name="date" placeholder="date" className="form-input" onChange={(event) => setDate(event.target.value)}/>
      <input id="number" name="number" placeholder="number" className="form-input" onChange={(event) => setNumber(event.target.value)}/>
      <input id="time" name="time" placeholder="time" className="form-input" onChange={(event) => setTime(event.target.value)}/>   
      <button onClick={ () => props.handleSubmit(makeResObject())}>Make Reservation</button> 
    </section>
  )
}