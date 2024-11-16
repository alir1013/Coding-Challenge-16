//Task 2:Create the App Component

import { useState } from 'react';
import ProductList from './ProductList.jsx'; 
import AddProductForm from './AddProductForm.jsx'; 
import './App.css';


//Defining a default list of products as an array of objects 
function App() {
  const [products] = useState([
    { id: 1, name: 'Macbook', price: 2100, description: 'A 14-cpu laptop, high speed, great performance' },
    { id: 2, name: 'Iphone', price: 1500, description: 'Fast charging, high speed, great performance' },
    { id: 3, name: 'Ipad', price: 800, description: 'Small and durable, high speed, great performance' },

  ]);
//Rendering the ProductList and AddProductForm components inside the App component
  return (
   <div>
    <h2>Product DashBoard</h2>
    <ProductList products={products} />
    <AddProductForm />
   </div>
  );
}

export default App
