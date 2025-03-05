import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>

  </StrictMode>,
)
