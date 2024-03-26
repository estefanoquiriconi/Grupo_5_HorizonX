import React, { useEffect, useState } from "react";

export const LastUser = () => {
  const [usuario, setUsuario] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users/last");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      setUsuario(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3 d-flex justify-content-between align-items-center'>
        <h5 className='m-0 font-weight-bold text-gray-800'>Ultimo usuario creado</h5>
      </div>
      <div className='card-body'>
        {loading ? (
          <p className='text-center'>Obteniendo data...</p>
        ) : error ? (
          <p className='text-center text-danger'>{error}</p>
        ) : (
          <div className='row justify-content-center'>
            <>
            {usuario.fullName}
            <div className='text-center'>
              <img
                className='img-fluid px-3 px-sm-4 mt-3 mb-4'
                style={{ width: '30rem' }}
                src={usuario.url}
                alt={usuario.avatar}
              />
            </div>
            <p>{usuario.role.name}</p>
            </>
          </div>
        )}
      </div>
    </div>
  );
};
