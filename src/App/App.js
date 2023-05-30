import React, { useState, useEffect } from 'react';
import './App.css';
import { Main } from '../Main/Main';

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

  useEffect(() => {
    fetchData()
  }, [])

    return (
      <div className="App">
        <h1 className='app-title'>  -- Turing Cafe Reservations  --  </h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          { reservations && <Main data = { reservations} />}
        </div>
      </div>
    )
}

export default App;
