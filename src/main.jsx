import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
         <Home></Home>
  </StrictMode>,
)
