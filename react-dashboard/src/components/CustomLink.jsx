import React from 'react'
import { Link } from 'react-router-dom'

export const CustomLink = ({ icon, text, to }) => {
  return (
    <li className='nav-item'>
      <Link className='nav-link' to={to}>
        <i className={icon}></i>
        <span>{text}</span>
      </Link>
    </li>
  )
}
