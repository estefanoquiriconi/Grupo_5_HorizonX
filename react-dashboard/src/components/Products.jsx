import React, { useEffect, useState } from 'react'
import { Input } from './Input'
import { Link } from 'react-router-dom'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/products?page=${page}&limit=${limit}`
      )
      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }
      const data = await response.json()
      setProducts(data.data.products)
      setTotalPages(data.meta.totalPages)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [page, limit])

  const handleLimit = (e) => {
    const newLimit = e.target.value
    if (newLimit <= 0) {
      setLimit(1)
    } else {
      setLimit(newLimit)
    }
  }

  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3 d-flex justify-content-between align-items-center'>
        <h5 className='m-0 font-weight-bold text-gray-800'>Productos</h5>
        <div className='d-flex'>
          <Input type={'number'} value={limit} label='Límite' handle={handleLimit} />
        </div>
      </div>
      <div className='card-body'>
        {loading ? (
          <p className='text-center'>Cargando...</p>
        ) : error ? (
          <p className='text-center text-danger'>{error}</p>
        ) : (
          <div className='row justify-content-center'>
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
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.images[0].url}
                          alt={product.images[0].image_filename}
                          style={{ width: '50px', height: '50px' }}
                        />
                        </Link>
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
            <nav className='text-center'>
              <ul className='pagination'>
                <li className='page-item'>
                  <button
                    className='page-link'
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    Anterior
                  </button>
                </li>
                <li className='page-item'>
                  <button
                    className='page-link'
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                  >
                    Siguiente
                  </button>
                </li>
              </ul>
              <span>
                Página {page} de {totalPages}
              </span>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
