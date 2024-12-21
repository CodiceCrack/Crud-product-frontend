import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './index.css';
import { api } from './instance';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    console.log(product)
    api.post("/products",product)
    .then(data => {alert(data.data.message)
      obtenerProducto()
    })
  };

  const editProduct = (updatedProduct) => {
    const {id}=editingProduct
    const {...data}=updatedProduct
    api.put("/products/"+id,data)
    .then(data => {alert(data.data.message)
      obtenerProducto()
    })
  };

  const deleteProduct = (id) => {
    api.delete("/products/" + id)
      .then(data => {
        console.log(data)
        obtenerProducto()
        alert(data.data.message)
      })
  };

  const obtenerProducto=()=>{
    fetch('http://localhost:3000/products')
    .then((res) => res.json())
    .then((data) => {
      setProducts(data)
      console.log(data)
    })
    .catch((error) => console.error('Error al obtener productos:', error));
  }

  useEffect(() => {
    obtenerProducto()
  }, []);

  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      <ProductForm onSubmit={editingProduct ? editProduct : addProduct} initialData={editingProduct} />
      <ProductList products={products} onEdit={setEditingProduct} onDelete={deleteProduct} />
    </div>
  );
};

export default App;
