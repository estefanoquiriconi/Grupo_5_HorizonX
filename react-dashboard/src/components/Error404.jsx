import React from 'react'
import imagen from '../assets/imagenes/error404.jpg'

export const Error404 = () => {
  return (
    <div className='w-100 '>
      <img className='w-100' src={imagen} alt='Error 404' />
    </div>
  )
}
