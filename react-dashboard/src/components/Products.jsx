import React, { useEffect, useState } from 'react'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/products')
      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }
      const data = await response.json()
      setProducts(data.data.products)
      console.log(data.data.products)
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
        <h5 className='m-0 font-weight-bold text-gray-800'>Productos</h5>
      </div>
      <div className='card-body'>
        {loading ? (
          <p className='text-center'>Cargando...</p>
        ) : error ? (
          <p className='text-center text-danger'>{error}</p>
        ) : (
          <div className='row'>
            <table className='table'>
              <thead>
                <tr className='text-gray-700'>
                  <th scope='col'>#</th>
                  <th scope='col'>Imagen</th>
                  <th scope='col'>Marca</th>
                  <th scope='col'>Nombre</th>
                  <th scope='col'>Color</th>
                  <th scope='col'>Precio</th>
                  <th scope='col'>Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  return (
                    <tr key={index}>
                      <th scope='row'>{index + 1}</th>
                      <td>
                        <img
                          src={product.images[0].url}
                          alt={product.images[0].image_filename}
                          style={{ width: '50px', height: '50px' }}
                        />
                      </td>
                      <td>{product.brand.name}</td>
                      <td>{product.name}</td>
                      <td>{product.color.name}</td>
                      <td>${product.price}</td>
                      <td>{product.stock_quantity}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
