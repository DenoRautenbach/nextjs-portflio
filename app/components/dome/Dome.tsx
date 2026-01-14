import React from 'react';
import DomeGallery from './DomeGallery';

export default function App() {
  return (
    <div className="sticky inset-0 overflow-hidden">
      <div 
        className="" 
        style={{ 
          width: '150vw', 
          height: '100vh',
          margin: 0,
          padding: 0
        }}
      >
        <DomeGallery />
      </div>
    </div>
  );
}