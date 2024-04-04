import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const TopBar = () => {
  const location = useLocation()
  const [usuario, setUsuario] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users/1");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      setUsuario(data);
    } catch (error) {
      console.error(error.message)
    }
  };

  useEffect (() => {
    fetchData();
  }, []);


  return (
    <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
      {location.pathname == '/' ?
        (<h1 className='h3 mb-0 text-gray-800'>DASHBOARD</h1>) :
        (<></>)}
      <button
        id='sidebarToggleTop'
        className='btn btn-link d-md-none rounded-circle mr-3'
      >
        <i className='fa fa-bars'></i>
      </button>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item dropdown no-arrow mx-1'>
          <a className='nav-link dropdown-toggle' href='http://localhost:8080/' target='_blank' id='alertsDropdown'>
          <i class="fas fa-external-link-alt"></i>
            {/* <span className='badge badge-danger badge-counter'>3+</span> */}
          </a>
        </li>

        <li className='nav-item dropdown no-arrow mx-1'>
          <a
            className='nav-link dropdown-toggle'
            href='/'
            id='messagesDropdown'
          >
            <i className='fas fa-envelope fa-fw'></i>
            {/* <span className='badge badge-danger badge-counter'>7</span> */}
          </a>
        </li>

        <div className='topbar-divider d-none d-sm-block'></div>
        <li className='nav-item dropdown no-arrow'>
          <a className='nav-link dropdown-toggle' href='/' id='userDropdown'>
            <span className='mr-2 d-none d-lg-inline text-gray-600 small'>
              {usuario.fullName}
            </span>
            <img
              className='img-profile rounded-circle'
              src={usuario.avatar}
              alt={usuario.fullName}
              style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
            />
          </a>
        </li>
      </ul>
    </nav>
  )
}
