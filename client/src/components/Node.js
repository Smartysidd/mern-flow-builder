
import React from 'react';
import { Handle } from 'react-flow-renderer';

const ProductNode = ({ data }) => {
  return (
    <div style={nodeStyle}>
      <Handle type="source" position="right" id="a" style={handleStyle} />
      <div style={nodeContentStyle}>
        <img src={data.image} alt={data.label} style={{ ...nodeImageStyle, width: '120px', height: '120px' }} /> {/* Increased size */}
        <div>{data.label}</div>
        <div>${data.price}</div>
      </div>
      <Handle type="target" position="left" id="b" style={handleStyle} />
    </div>
  );
};

const nodeStyle = {
  border: '2px solid #6c757d',
  padding: '15px',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const nodeContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const nodeImageStyle = { // Base style
  borderRadius: '5px',
  marginBottom: '10px',
  objectFit: 'cover',
};

const handleStyle = {
  background: '#007bff',
  borderRadius: '10px',
  width: '12px',
  height: '12px',
};

export default ProductNode;