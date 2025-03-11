import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
      </ThemeProvider>
    </React.StrictMode>

  </StrictMode>,
)
