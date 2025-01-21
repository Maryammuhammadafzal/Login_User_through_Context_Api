import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from "./Context/context.jsx"

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
