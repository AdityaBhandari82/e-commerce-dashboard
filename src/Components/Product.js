import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import Header from './Header';

const ProductCard = () => {
  const products = [
    {
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4.5,
      reviews: 131,
      image: "https://via.placeholder.com/150", // Replace with actual product image URL
    },
    {
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4.5,
      reviews: 131,
      image: "https://via.placeholder.com/150", // Replace with actual product image URL
    },
    {
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4.5,
      reviews: 131,
      image: "https://via.placeholder.com/150", // Replace with actual product image URL
    },
  ];

  return (
    <div className="d-flex">
    <Sidebar />
    <div className="container my-4">
    <Header/>
    <div className="m-4" >
      <h2>Product</h2>
    </div>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            
            <div className="card shadow-sm">
              <div className="position-relative">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <button className="btn btn-light position-absolute top-0 end-0 m-2">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-bold text-primary">{product.price}</p>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="text-warning me-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`bi ${
                          i < Math.floor(product.rating)
                            ? "bi-star-fill"
                            : "bi-star"
                        }`}
                      ></i>
                    ))}
                  </span>
                  <span className="text-muted">({product.reviews})</span>
                </div>
                <button className="btn btn-outline-primary mt-3">
                  Edit Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
