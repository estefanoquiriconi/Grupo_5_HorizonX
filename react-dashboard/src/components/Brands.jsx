import React, { useEffect, useState } from 'react';

export const Brands = () => {
    const [brands, setBrands] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getBrands = async () => {
        try {
            const fetchBrands = await fetch('http://localhost:8080/api/brands')
            const dataBrands = await fetchBrands.json()
            const brands = dataBrands.data

            if (!brands) {
                throw new Error('No se encontró ninguna marca.');
            }

            setBrands(brands);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBrands();
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
                            {brands.map((brand, i) => {
                            return (<h5 className="text-center" key={i}>
                                <strong>
                                    {brand.name}
                                </strong> 
                                {i+1<brands.length ? <hr/> : null}
                            </h5>)
                        })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
