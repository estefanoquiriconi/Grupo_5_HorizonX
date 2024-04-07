import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export const Colors = () => {
  const [colors, setColors] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  const getColors = async () => {
    try {
        const fColors = await fetch('http://localhost:8080/api/colors')
        if (!colors) {
            throw new Error('No se encontró ningun color');
        }
        const dColors = await fColors.json()
        const colors = dColors.data
        setColors(colors);
    } catch (error){
        setError(error.message);
    } finally {
        setLoading(false);
    }
  }
  useEffect(() => {
    getColors();
  }, []);

  return (
    <div className='container text-center'>
      <div className='card shadow mb-4'>
         <div className='card-header py-3'>
            <h5 className='m-0 font-weight-bold text-gray-800'>Colores</h5>
            <Link className='btn btn-primary' to='/color/create'>Nuevo</Link>
         </div>
           <div className='card-body'> 
              {loading ? (
              <p className='text-center'>Cargando...</p>
              ) : error ? (
              <p className='text-center text-danger'>{error}</p>
              ) : (
               <>
               {color.map((color, i) => {
                  return (<h5 className="text-center" key={i}>
                    <strong>
                      {color.name}
                    </strong>
                 {i+1<color.length ? <hr/> : null}
                </h5>)
             })}
            </>
            )}
          </div>
      </div>
    </div>
)
}