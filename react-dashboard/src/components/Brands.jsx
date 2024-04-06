/* import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Brands = () => {
    const [brand, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/brands')
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

    return (
        <div className='container text-center'>
        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <h5 className='m-0 font-weight-bold text-gray-800'>
              Marcas
            </h5>
          </div>
          <div className='card-body'>
            {loading ? (
              <p className='text-center'>Cargando...</p>
              ) : error ? (
                <p className='text-center text-danger'>{error}</p>
                ) : (
              <>
                <h5 className="text-center">
                <strong>
                  {product.brand.name} {brand.name}
                </strong>
              </h5>
              </>
            )}
          </div>
        </div>
            </div>
      )
    }*/
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Brands = () => {
    const [lastBrand, setLastBrand] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getLastBrand = async () => {
        try {
            const lastBrand = await Brand.findOne({
                order: [['id', 'DESC']]
            });

            if (!lastBrand) {
                throw new Error('No se encontró ninguna marca.');
            }

            setLastBrand(lastBrand);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getLastBrand();
    }, []);

    return (
        <div className='container text-center'>
            <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                    <h5 className='m-0 font-weight-bold text-gray-800'>
                        Marcas
                    </h5>
                </div>
                <div className='card-body'>
                    {loading ? (
                        <p className='text-center'>Cargando...</p>
                    ) : error ? (
                        <p className='text-center text-danger'>{error}</p>
                    ) : (
                        <>
                            <h5 className="text-center">
                                <strong>
                                    {lastBrand.name}
                                </strong>
                            </h5>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
