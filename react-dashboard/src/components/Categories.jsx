import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryCard } from './CategoryCard'

export const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [notification, _setNotification] = useState('')

  const getCategories = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/categories')
      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }
      const data = await response.json()
      setCategories(data.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const setNotification = (message) => {
    _setNotification(message)
    setTimeout(() => {
      _setNotification('')
    }, 2000)
  }

  const onDelete = (categoryId) => {
    if (!window.confirm('Estás seguro?')) {
      return
    }
    fetch(`http://localhost:8080/api/categories/${categoryId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          setNotification('No se pudo eliminar!')
        } else {
          setNotification('Categoría eliminada')
          getCategories()
        }
      })
      .catch((error) => setError(error.message))
  }

  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3 d-flex justify-content-between align-items-center'>
        <h5 className='m-0 font-weight-bold text-gray-800'>Categorías</h5>
        <Link className='btn btn-primary' to='/category/create'>
          Nueva
        </Link>
      </div>
      <div className='card-body'>
        {loading ? (
          <p className='text-center'>Cargando...</p>
        ) : error ? (
          <p className='text-center  text-danger'>{error}</p>
        ) : (
          <div className='row'>
            {categories.map((category) => {
              return (
                <CategoryCard
                  {...category}
                  key={category.id}
                  onDelete={onDelete}
                />
              )
            })}
          </div>
        )}
      </div>
      {notification && <div className='notification'>{notification}</div>}
    </div>
  )
}
