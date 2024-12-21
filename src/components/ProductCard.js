import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onEdit, onDelete }) => {
  console.log(product)
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <div className="card-buttons">
        <button onClick={() => onEdit(product)}>Editar</button>
        <button onClick={() => onDelete && onDelete(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCard;

