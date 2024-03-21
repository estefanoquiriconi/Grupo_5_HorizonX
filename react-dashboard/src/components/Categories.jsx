import React, { useEffect, useState } from 'react'
import { CategoryCard } from './CategoryCard'

export const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h5 className='m-0 font-weight-bold text-gray-800'>Categorías</h5>
      </div>
      <div className='card-body'>
        <div className='row'>
          {categories.map((category) => {
            return <CategoryCard {...category} key={category.id} />
          })}
        </div>
      </div>
    </div>
  )
}
