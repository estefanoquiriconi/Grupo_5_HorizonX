import React from 'react'
import logoHorizonx from '../assets/imagenes/logo-horizonx.png'
import { Link } from 'react-router-dom'
import { CustomLink } from './CustomLink'

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
            HORIZON
            <img className='w-25' src={logoHorizonx} alt='Digital House' />
          </div>
        </Link>

        <hr className='sidebar-divider my-0' />

        <CustomLink icon='fas fa-fw fa-tachometer-alt' text='Dashboard' to='/' />

        <hr className='sidebar-divider' />

        <div className='sidebar-heading'>Actions</div>

        <CustomLink icon='fas fa-fw fa-table' text='Productos' to='/products' />
        <CustomLink icon='fas fa-fw fa-table' text='Categorías' to='/genres' />
        <CustomLink icon='fas fa-film' text='Último Producto' to='/last' />
        <CustomLink icon='fas fa-fw fa-chart-area' text='Stats' to='/stats' />

        <hr className='sidebar-divider d-none d-md-block' />
      </ul>
    </>
  )
}
