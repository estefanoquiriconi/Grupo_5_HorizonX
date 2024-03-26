import React, { useEffect, useState } from 'react'

export const LastProductCard = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/products/last')
      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }
      const data = await response.json()
      setProduct(data)
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
        <h5 className='m-0 font-weight-bold text-gray-800'>
          Último producto agregado
        </h5>
      </div>
      <div className='card-body'>
        {loading ? (
          <p className='text-center'>Cargando...</p>
        ) : error ? (
          <p className='text-center text-danger'>{error}</p>
        ) : (
          <>
            {product.name}
            <div className='text-center'>
              <img
                className='img-fluid px-3 px-sm-4 mt-3 mb-4'
                style={{ width: '30rem' }}
                src={product.images[0].url}
                alt={product.images[0].image_filename}
              />
            </div>
            <p>{product.description}</p>
            <a
              className='btn btn-primary'
              target='_blank'
              rel='nofollow'
              href='/'
            >
              Ver producto
            </a>
          </>
        )}
      </div>
    </div>
  )
}
