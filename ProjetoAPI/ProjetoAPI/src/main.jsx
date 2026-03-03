import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import APIexec1 from './Components/APIexeci1.jsx'
import Consultaendereco from './Components/Consutaendereco.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <APIexec1 />
    <Consultaendereco />
  </StrictMode>,
)
