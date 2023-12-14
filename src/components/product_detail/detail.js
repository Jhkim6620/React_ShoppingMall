import React from 'react';
import './detail.module.css';

const Detail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Detail;
