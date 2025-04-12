import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div style={productListStyle}>
      <h3>Products</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map(product => (
          <li
            key={product.id}
            style={productItemStyle}
            onClick={() => onProductSelect(product)}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ ...productImageStyle, width: '80px', height: '80px' }} // Increased size
            />
            <span>{product.title} - ${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const productListStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  marginBottom: '20px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const productItemStyle = {
  cursor: 'pointer',
  padding: '10px',
  borderBottom: '1px solid #eee',
  display: 'flex',
  alignItems: 'center',
};

const productImageStyle = { // Base style
  marginRight: '10px',
  borderRadius: '5px',
  objectFit: 'cover',
};

export default ProductList;