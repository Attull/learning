import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Objectv from './Hooks/useState/Objectv';
import Lstorage from './Hooks/useState/Lstorage';
import Value from './Hooks/useState/Value';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Value />  */}
   <App />
   {/* <Lstorage /> */}
  </React.StrictMode>
);
