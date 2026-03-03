import { StrictMode, useState } from 'react'
import './App.css'
import Exercicio1 from './components/Exercicio1'
import Exercicio2 from './components/Exercicio2'
import Exercicio3 from './components/Exercicio3'
import Exercicio4 from './components/Exercicio4'
import Exercicio5 from './components/Exercicio5'
import Exercicio6 from './components/Exercicio6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StrictMode>
      <Exercicio1 />
      <Exercicio2 />
      <Exercicio3 />
      <Exercicio4 />
      <Exercicio5 />
      <Exercicio6 />
    </StrictMode>
  )
}

export default App