import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { createRoot } from 'react-dom/client'; // importar createRoot desde "react-dom/client"
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './firebase/config'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
