import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditCategory = () => {
  const { id } = useParams()
  const [nameCategory, setNameCategory] = useState({})

  const getCategory = () => {
    fetch(`http://localhost:8080/api/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNameCategory(data.name)
      })
  }

  useEffect(() => {
    getCategory()
  }, [])

  const onUpdate = () => {
    fetch(`http://localhost:8080/api/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nameCategory.toLowerCase() }),
    })
      .then(() => alert('Actualizado'))
      .catch((error) => console.error(error))
  }

  return (
    <div className='card-body'>
      <h2>Editar Categoría</h2>
      <div className='form-group'>
        <label htmlFor='categoryName'>Nombre de la Categoría:</label>
        <input
          type='text'
          className='form-control'
          id='categoryName'
          value={nameCategory}
          onChange={(e) => setNameCategory(e.target.value)}
        />
      </div>
      <button onClick={onUpdate} className='btn btn-dark'>
        Guardar
      </button>
    </div>
  )
}

export default EditCategory
