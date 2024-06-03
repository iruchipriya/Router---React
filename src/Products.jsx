import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const Products = () => {
  return (
    <div>
      <h2>Products Page</h2>
      <p>This is the Products page.</p>

      <nav>
        <Link to="list"> Products List</Link>
      </nav>

      <Routes>
        {/* GIVE RELATIVE PATHS HERE */}
        <Route path="list" element={<ProductList />} />
        <Route path="list/detail/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default Products;
