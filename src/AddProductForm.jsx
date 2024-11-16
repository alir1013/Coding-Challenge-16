//Task 6:Create the AddProductForm Component

import React, { useState } from 'react';

function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const submitButton = (event) => {
    event.preventDefault();
   
    console.log(name, price, description);
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={submitButton}>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Product Name"/>
      <input type="text" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Product Price"/>
      <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Product Description"/>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;


