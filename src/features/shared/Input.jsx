import React from 'react'

export const Input = ({ name, value, setValue}) => (
    <div style={{ marginBottom: '10px'}}>
      <label htmlFor={name}>{name}</label><br/>
      <input type="text" name={name} value={value} onChange={(event) => setValue(event.target.value)} />
  </div>
)