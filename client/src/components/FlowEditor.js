import React, { useState, useCallback,useEffect } from 'react';
import ReactFlow, { addEdge, useNodesState, useEdgesState, Controls } from 'react-flow-renderer';
import ProductNode from './Node';

const nodeTypes = {
  productNode: ProductNode,
};

const FlowEditor = ({ selectedProduct }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange, addEdge] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  useEffect(() => {
    if (selectedProduct) {
      setNodes((nds) => [
        ...nds,
        {
          id: selectedProduct.id.toString(),
          type: 'productNode',
          position: { x: 100 + nds.length * 150, y: 100 },
          data: {
            label: selectedProduct.title,
            price: selectedProduct.price,
            image: selectedProduct.images[0],
          },
        },
      ]);
    }
  }, [selectedProduct, setNodes]);

  const onRemoveEdge = useCallback(
    (edge) => {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    },
    [setEdges]
  );

  const onRemoveNode = useCallback(
    (node) => {
      setNodes((nds) => nds.filter((n) => n.id !== node.id));
      setEdges((eds) => eds.filter((e) => e.source !== node.id && e.target !== node.id));
    },
    [setNodes, setEdges]
  );

  const onElementsRemove = useCallback(
    (elementsToRemove) => {
      elementsToRemove.forEach((element) => {
        if (element.id.startsWith('reactflow__edge')) {
          onRemoveEdge(element);
        } else {
          onRemoveNode(element);
        }
      });
    },
    [onRemoveEdge, onRemoveNode]
  );

  return (
    <div style={flowEditorStyle}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onElementsRemove={onElementsRemove}
        deleteKeyCode={46} // 'Delete' key
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

const flowEditorStyle = {
  border: '2px dashed #007bff',
  height: '500px',
  width: '100%',
  marginTop: '20px',
  borderRadius: '8px',
  backgroundColor: '#f0f8ff',
};

export default FlowEditor;