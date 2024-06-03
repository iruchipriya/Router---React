import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId, 'productId');

  return (
    <div>
      <h3>Product Detail for Product ID: {productId}</h3>
    </div>
  );
}

export default ProductDetail;
