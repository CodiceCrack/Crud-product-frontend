// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({onEdit,onDelete,products}) => {
  
return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
