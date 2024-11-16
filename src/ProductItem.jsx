//Task 4:Create the ProductItem Component

import React from 'react';

// receives a product's data and displays its details
function ProductItem({ product }) {

// Rendering each product’s information 
    return (
        <div className="item">

            <h3>{product.name}</h3>  
            <p> Product Price: ${product.price}</p>  
            <p>Product Description: {product.description}</p> 

        </div>
    );
}

export default ProductItem;
