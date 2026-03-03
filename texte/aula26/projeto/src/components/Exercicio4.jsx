import React from 'react'
import '../CSS/Atividade4.css'

function Exercicio4() {
    function destacarAtraso() {
        let caixa = document.getElementById("Mensagem-atraso");
        caixa.style.color = "red";
        caixa.style.fontWeight = "bold";
        caixa.innerText = "Atraso Destacado!";
        caixa.style.border = "2px solid red";
    }
  return (
    <div className='card'>
        <h2>Cobrança</h2>
        <div id='Mensagem-atraso' style={{ marginTop: "20px", marginBottom: "20px", padding: "10px", border: "1px solid" }}>
            Status: Normal 
        </div>
        <button onClick={destacarAtraso}>Destacar Atraso</button>
      
    </div>
  )
}

export default Exercicio4;