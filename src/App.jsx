import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { Background, Controls, Handle, Position, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import 'reactflow/dist/style.css';

// 1. IMPORT KATEX ENGINE AND STYLES
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

import { getGraphData } from './data';

// 2. A SMART UTILITY TO AUTOMATICALLY SEPARATE TEXT FROM MATH BETWEEN $ SIGNS
const RenderMathText = ({ text }) => {
  if (!text) return null;
  if (React.isValidElement(text) || typeof text !== 'string') return text;
  
  const parts = text.split(/(\$[^\$]+\$)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          return <InlineMath key={index} math={part.slice(1, -1)} />;
        }
        return part;
      })}
    </>
  );
};

const MathRelationalNode = ({ data }) => {
  return (
    <div className={`relational-node ${data.isDarkMode ? 'dark-mode-node' : ''}`}>
      <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
      <div className="relational-node-header">
        {data.title || 'Concept'}
      </div>
      <div className="relational-node-body" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.4' }}>
        <RenderMathText text={data.content} />
      </div>
      <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
    </div>
  );
};

const nodeTypes = { mathNode: MathRelationalNode };

export default function App() {
  const [currentScene, setCurrentScene] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  
  const [selectedDef, setSelectedDef] = useState(null);

  useEffect(() => {
    const allData = getGraphData(isDarkMode);
    const sceneData = allData[currentScene];
    
    if (sceneData) {
      const updatedNodes = sceneData.nodes.map(node => ({
        ...node,
        data: { ...node.data, isDarkMode }
      }));
      setNodes(updatedNodes);
      setEdges(sceneData.edges || []);
    }
  }, [currentScene, isDarkMode]);

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  const onNodeClick = useCallback((event, node) => {
    // 1. IF IT HAS A DESTINATION, NAVIGATE THERE
    if (node.data && node.data.navigateTo) {
      setCurrentScene(node.data.navigateTo);
    } 
    // 2. IF IT HAS NO DESTINATION BUT HAS CONTENT, SHOW THE CARD
    else if (node.data && (node.data.content || node.data.description)) {
      setSelectedDef(node.data);
    }
  }, []);

  const closePopup = () => setSelectedDef(null);

  // --- STYLING OBJECTS FOR THE CARDS ---
  
  // Light Mode Index Card
  const lightIndexCardStyle = {
    backgroundColor: '#fdfdfd',
    color: '#222',
    padding: '40px 30px 30px 60px',
    borderRadius: '4px',
    maxWidth: '500px',
    width: '90%',
    minHeight: '300px',
    boxShadow: '2px 4px 15px rgba(0,0,0,0.2)',
    backgroundImage: `
      linear-gradient(90deg, transparent 40px, #ff4757 40px, #ff4757 42px, transparent 42px),
      repeating-linear-gradient(180deg, transparent, transparent 28px, #a0d5ff 28px, #a0d5ff 29px)
    `,
    fontFamily: 'Georgia, serif',
    position: 'relative',
    textAlign: 'left'
  };

  // Dark Mode Index Card (Dark grayish-blue with red margin and white lines)
  const darkIndexCardStyle = {
    backgroundColor: '#2c3545',
    color: '#ffffff',
    padding: '40px 30px 30px 60px', // Heavy left padding for the red margin
    borderRadius: '4px',
    maxWidth: '500px',
    width: '90%',
    minHeight: '300px',
    boxShadow: '2px 4px 20px rgba(0,0,0,0.6)',
    backgroundImage: `
      linear-gradient(90deg, transparent 40px, #ff4757 40px, #ff4757 42px, transparent 42px),
      repeating-linear-gradient(180deg, transparent, transparent 28px, rgba(255, 255, 255, 0.15) 28px, rgba(255, 255, 255, 0.15) 29px)
    `,
    fontFamily: 'Georgia, serif',
    position: 'relative',
    textAlign: 'left'
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* INJECTED CSS FIX FOR REACT FLOW CONTROLS IN DARK MODE */}
      <style>
        {`
          .dark-controls .react-flow__controls-button {
            background-color: #1e1e1e !important;
            border-bottom: 1px solid #333 !important;
          }
          .dark-controls .react-flow__controls-button svg {
            fill: #f8f8f8 !important;
          }
          .dark-controls .react-flow__controls-button:hover {
            background-color: #333 !important;
          }
        `}
      </style>

      {/* HEADER */}
      <header style={{
        padding: '15px 20px',
        textAlign: 'center',
        backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
        borderBottom: `2px solid ${isDarkMode ? '#333' : '#ddd'}`,
        color: isDarkMode ? '#ffffff' : '#121212',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 10,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        
        {/* BACK BUTTON */}
        {currentScene !== 'home' && (
          <button 
            onClick={() => setCurrentScene('home')}
            style={{
              position: 'absolute',
              left: '20px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: isDarkMode ? '#333' : '#e0e0e0',
              color: isDarkMode ? '#fff' : '#000',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            🏠 Back
          </button>
        )}

        <h1 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '2rem' }}>
          Analysis I: Rudin Cheat Sheet
        </h1>
        
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            position: 'absolute',
            right: '20px',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: isDarkMode ? '#333' : '#e0e0e0',
            color: isDarkMode ? '#fff' : '#000',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* REACT FLOW CANVAS */}
      <div style={{ flexGrow: 1, position: 'relative' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick} 
          nodeTypes={nodeTypes}
          fitView 
          minZoom={0.1}
        >
          <Background color={isDarkMode ? '#555' : '#ccc'} gap={20} size={1.5} />
          <Controls className={isDarkMode ? 'dark-controls' : ''} />
        </ReactFlow>

        {/* WATERMARK */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '5px',
          fontSize: '0.8rem', // Roughly 1/3 of the 2rem title
          fontWeight: 500,
          fontFamily: 'Georgia, serif',
          color: isDarkMode ? '#ffffff' : '#121212',
          opacity: 0.5,
          pointerEvents: 'none', // Prevents it from blocking clicks on the canvas
          zIndex: 9
        }}>
          By: Bianca Zullo
        </div>
      </div>

      {/* POPUP OVERLAY */}
      {selectedDef && (
        <div 
          onClick={closePopup}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(3px)'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={isDarkMode ? darkIndexCardStyle : lightIndexCardStyle}
          >
            <button 
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '5px',
                right: '15px',
                background: 'transparent',
                border: 'none',
                fontSize: '28px',
                fontWeight: 'bold',
                color: isDarkMode ? '#ccc' : '#888',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            <h3 style={{ 
              marginTop: 0, 
              fontSize: '22px', 
              borderBottom: isDarkMode ? '1px dashed #555' : '1px dashed #ccc',
              paddingBottom: '10px',
              textTransform: 'capitalize'
            }}>
              {selectedDef.title}
            </h3>
            
            <div style={{ 
              margin: '20px 0', 
              fontSize: '18px', 
              lineHeight: '1.6'
            }}>
              <RenderMathText text={selectedDef.description || selectedDef.content} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}