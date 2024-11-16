//Task 3:Create the ProductList Component

import React from 'react';
import ProductItem from './ProductItem';  

function ProductList({ products }) {
    return (
        <div>

            <h3>List of Products Available:</h3>

           {/*Using the map() function to render a ProductItem component for each product.*/}

            {products.map(product => (

                /*Passing each product’s data and a unique key to ProductItem*/
               /* Task 5:Implement Keys in the ProductList Component*/
                <ProductItem key={product.id} product={product} /> 
            ))}

        </div>
    );
}

export default ProductList;


