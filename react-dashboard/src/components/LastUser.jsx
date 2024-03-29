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
        <h5 className='m-0 font-weight-bold text-gray-800'>
          Último usuario creado
        </h5>
      </div>
      <div className='card-body'>
        {loading ? (
          <p className='text-center'>Obteniendo datos...</p>
        ) : error ? (
          <p className='text-center text-danger'>{error}</p>
        ) : (
          <div className='d-flex flex-column text-center'>
            <div className='d-flex flex-column'>
              <p className='mb-1'>
                <strong>Nombre completo:</strong> {usuario.fullName}
              </p>
              <p className='mb-1'>
                <strong>Email:</strong> {usuario.email}
              </p>
              <p>
                <strong>Rol:</strong> {usuario.role.name}
              </p>
            </div>
            <div className='text-center'>
              <img
                className='mt-4 mb-4 avatar'
                src={usuario.url}
                alt={usuario.avatar}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
