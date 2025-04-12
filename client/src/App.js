import React, { useState } from 'react';
import ProductList from './components/ProductList';
import FlowEditor from './components/FlowEditor';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App" style={appStyle}>
      <h1 style={headingStyle}>Interactive Flow Builder</h1>
      <ProductList onProductSelect={handleProductSelect} />
      <h2 style={sectionHeadingStyle}>Flow Area</h2>
      <FlowEditor selectedProduct={selectedProduct} />
    </div>
  );
}

const appStyle = {
  fontFamily: 'sans-serif',
  padding: '30px',
  backgroundColor: '#e0f7fa',
  minHeight: '100vh',
};

const headingStyle = {
  color: '#007bff',
  textAlign: 'center',
  marginBottom: '20px',
};

const sectionHeadingStyle = {
  color: '#28a745',
  marginTop: '30px',
  marginBottom: '15px',
};

export default App;