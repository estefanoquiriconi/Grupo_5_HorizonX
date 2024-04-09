import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const CategoryCard = ({ id, name, productCount, onDelete }) => {
  const location = useLocation()
  return (
    <>
      <div className='col-lg-6 mb-4'>
        <div className='card bg-info text-white shadow'>
          <div className='card-body d-flex justify-content-between align-items-center'>
            <span>{name}</span>
            
            {location.pathname != '/' ? (
              <div>
                <Link
                  to={`/category/edit/${id}`}
                  className='btn btn-outline-light mr-2'
                >
                  Editar
                </Link>
                <button className='btn btn-outline-light' onClick={() => onDelete(id)}>
                  Eliminar
                </button>
              </div>
            ) : <span className=' align-self-end '>{productCount}</span>}
          </div>
        </div>
      </div>
    </>
  )
}
