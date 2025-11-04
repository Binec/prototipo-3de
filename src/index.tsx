import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OnePagerSite from './App.tsx';  // ← Cambia esta línea

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <OnePagerSite />  {/* ← Y cambia esto también */}
  </React.StrictMode>
);