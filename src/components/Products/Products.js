import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();
    console.log('products', products);
    return (
        <div>
            
            <h1>{products.length}</h1>
        </div>
    );
};

export default Products;