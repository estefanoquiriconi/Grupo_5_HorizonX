import React, { useEffect, useState } from 'react'
import { StatWidget } from './StatWidget'

export const StatsSection = () => {
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalCategories, setTotalCategories] = useState(0)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async (endpoint, setData) => {
    try {
      const response = await fetch(`http://localhost:8080/${endpoint}`)
      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }
      const data = await response.json()
      setData(data.total)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData('api/users/count', setTotalUsers)
    fetchData('api/products/count', setTotalProducts)
    fetchData('api/categories/count', setTotalCategories)
  }, [])

  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h5 className='m-0 font-weight-bold text-gray-800'>Estadísticas</h5>
      </div>
      <div className='card-body'>
        {loading ? (
          <p className='text-center'>Cargando...</p>
        ) : error ? (
          <p className='text-center text-danger'>{error}</p>
        ) : (
          <>
            <div className='row'>
              <div className='col-md-4 mb-4'>
                <StatWidget
                  title='Total de usuarios'
                  quantity={totalUsers}
                  borderColor='primary'
                  icon='fa-users'
                />
              </div>
              <div className='col-md-4 mb-4'>
                <StatWidget
                  title='Total de productos'
                  quantity={totalProducts}
                  borderColor='success'
                  icon='fa-bolt'
                />
              </div>
              <div className='col-md-4 mb-4'>
                <StatWidget
                  title='Total de categorías'
                  quantity={totalCategories}
                  borderColor='warning'
                  icon='fa-star'
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
