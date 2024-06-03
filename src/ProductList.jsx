import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = [
    { id: 1, name: 'product 1' },
    { id: 2, name: 'product 2' },
    { id: 3, name: 'product 3' },
  ];
  return (
    <div>
      <h2>Product List Page</h2>
      <p>Welcome to the ProductList page!</p>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`detail/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
