import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BG from './Strore.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BG>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </BG>
  ,
)
