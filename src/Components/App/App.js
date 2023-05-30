import React, { useState, useEffect } from 'react';
import './App.css';
import { Main } from '../Main/Main';
import { Form } from '../Form/Form';

const App = () => {

  const [reservations, setReservations] = useState([])

  let fetchData =  async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/reservations')

      if (response.ok) {
        const json = await response.json()
        setReservations(json)
      } else {
        throw new Error(response)
      }
    } catch {
      console.error()
    }
  }

  const handleSubmit = (newRes) => {
    setReservations([...reservations, newRes])
  }

  useEffect(() => {
    fetchData()
  }, [])

    return (
      <div className="App">
        <h1 className='app-title'>  -- Turing Cafe Reservations  --  </h1>
        <div className='resy-form'>
          <Form handleSubmit={ handleSubmit }/>
        </div>
        <div className='resy-container'>
          { reservations && <Main data = { reservations} />}
        </div>
      </div>
    )
}

export default App;
