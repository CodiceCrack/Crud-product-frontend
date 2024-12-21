import React, { useState, useEffect, useRef } from 'react';

const ProductForm = ({ onSubmit, initialData }) => {
  // Define el estado con valores predeterminados seguros
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [price, setPrice] = useState(initialData?.price || '');
  const formRef = useRef(null)

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setPrice(initialData.price);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset()
    onSubmit({ name, description, price });
    };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">{initialData ? 'Editar' : 'Agregar'} Producto</button>
    </form>
  );
};

export default ProductForm;


