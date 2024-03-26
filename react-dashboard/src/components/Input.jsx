import React from 'react'

export const Input = ({ type, value, label, handle }) => {
  return (
    <div className='input-group input-group-sm mb-3 m-1 '>
      <div className='input-group-prepend'>
        <span className='input-group-text' id='inputGroup-sizing-sm'>
          {label}
        </span>
      </div>
      <input
        type={type}
        className='form-control'
        value={value}
        onChange={handle}
      />
    </div>
  )
}
