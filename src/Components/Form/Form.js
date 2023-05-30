import React, { useState } from "react";

export const Form = () => {
  const []

  return (
    <section>
      <input name="name" placeholder="name" class="form-input" onChange={() => setName(value)}/>
      <input name="date" placeholder="date" class="form-input" onChange={() => setDate(value)}/>
      <input name="number" placeholder="number" class="form-input" onChange={() => setNumber(value)}/>
      <input name="time" placeholder="time" class="form-input" onChange={() => setTime(value)}/>

    </section>
  )
}