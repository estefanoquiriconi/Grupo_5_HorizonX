import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos del producto");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!product) {
    return <p>No se encontró el producto.</p>;
  }

  return (
    <div className="container text-center">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5>
            <strong>
              {product.brand.name} {product.name}
            </strong>
          </h5>
        </div>
        <div className="card-body">
          {loading ? (
            <p className="text-center">Cargando...</p>
          ) : error ? (
            <p className="text-center text-danger">{error}</p>
          ) : (
            <>
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "30rem" }}
                  src={product.images[0].url}
                  alt={product.images[0].image_filename}
                />
              </div>
              <em className="text-center">{product.description}</em>
              <br />
              <br />
              <p className="text-center">Color: {product.color.name}</p>
              <p className="text-center">En stock: {product.stock_quantity}</p>
              
              <h3 className="text-center">
                <strong>$ {product.price}</strong>
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
