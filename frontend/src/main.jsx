import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StoreContext } from './context/StoreContex.jsx'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
createRoot(document.getElementById('root')).render(

  
  <BrowserRouter>
    <StoreContext>
      <App />
    </StoreContext>
  </BrowserRouter>


)
