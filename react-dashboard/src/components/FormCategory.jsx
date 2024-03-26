import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Input } from './Input'

export const FormCategory = () => {
  const { id } = useParams()
  const [category, setCategory] = useState({
    id: null,
    name: '',
  })
  const [notification, _setNotification] = useState('')

  const getCategory = () => {
    fetch(`http://localhost:8080/api/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data)
      })
  }

  useEffect(() => {
    if (id) {
      getCategory()
    }
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault()

    if (category.name.trim().length < 3) {
      setNotification('Debes ingresar como mínimo 3 caracteres')
      return
    }

    try {
      const response = await (category.id
        ? fetch(`http://localhost:8080/api/categories/${category.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: category.name }),
          })
        : fetch('http://localhost:8080/api/categories', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: category.name }),
          }))

      if (!response.ok) {
        throw new Error('Error al crear o actualizar una categoría')
      }

      const message = category.id ? 'Categoría Actualizada' : 'Categoría creada'
      setNotification(message)
    } catch (error) {
      setNotification(error.message)
    }
  }

  const setNotification = (message) => {
    _setNotification(message)
    setTimeout(() => {
      _setNotification('')
    }, 2000)
  }

  const hanldeChange = (event) => {
    setCategory({
      ...category,
      name: event.target.value.toLowerCase(),
    })
  }

  return (
    <>
      {category.id && (
        <h1 className='mb-4'> Actualizar Categoría: {category.name}</h1>
      )}
      {!category.id && <h1 className='mb-4'>Nueva Categoría</h1>}
      <div className='row'>
        <div className='col-md-6'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <Input
                type='text'
                value={category.name}
                label='Nombre'
                handle={hanldeChange}
              />
            </div>
            <button className='btn btn-primary'>Guardar</button>
          </form>
        </div>
      </div>
      {notification && <div className='notification'>{notification}</div>}
    </>
  )
}
