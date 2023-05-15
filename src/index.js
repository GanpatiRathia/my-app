import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Content from './Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Content/>
  </React.StrictMode>
);