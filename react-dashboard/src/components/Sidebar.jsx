import React from 'react'
import logoDh from '../assets/imagenes/logo-DH.png'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <>
      <ul
        className='navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        <Link
          className='sidebar-brand d-flex align-items-center justify-content-center'
          to='/'
        >
          <div className='sidebar-brand-icon'>
            <img className='w-100' src={logoDh} alt='Digital House' />
          </div>
        </Link>

        <hr className='sidebar-divider my-0' />

        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            <i className='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className='sidebar-divider' />

        <div className='sidebar-heading'>Actions</div>

        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/genres'>
            <i className='fas fa-fw fa-table'></i>
            <span>Categorías</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-link' to='/last'>
            <i className="fas fa-film"></i>
            <span>Last Movie</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/stats'>
            <i className='fas fa-fw fa-chart-area'></i>
            <span>Stats</span>
          </Link>
        </li>
        <hr className='sidebar-divider d-none d-md-block' />
      </ul>
    </>
  )
}
