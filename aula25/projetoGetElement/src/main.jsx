import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Exercicio1 from './components/Exercicio1.jsx'
import Exercicio2 from './components/Exercicio2.jsx'
import Exercicio3 from './components/Exercicio3.jsx'
import Exercicio4 from './components/Exercicio4.jsx'
import Exercicio5 from './components/Exercicio5.jsx'
import Exercicio6 from './components/Exercicio6.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <Exercicio1 />
      <Exercicio2 />
      <Exercicio3 />
      <Exercicio4 />
      <Exercicio5 />
      <Exercicio6 />
  </StrictMode>,
)
