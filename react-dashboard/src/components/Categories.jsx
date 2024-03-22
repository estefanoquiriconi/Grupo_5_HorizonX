import React, { useEffect, useState } from 'react'
import { CategoryCard } from './CategoryCard'

export const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
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
    fetchData()
  }, [])

  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h5 className='m-0 font-weight-bold text-gray-800'>Categorías</h5>
      </div>
      <div className='card-body'>
        {loading ? (
          <p className='text-center'>Cargando...</p>
        ) : error ? (
          <p className='text-center  text-danger'>{error}</p>
        ) : (
          <div className='row'>
            {categories.map((category) => {
              return <CategoryCard {...category} key={category.id} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}
