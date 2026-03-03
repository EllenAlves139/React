import React from 'react'

function Exercicio4() {
    function destacarAtrasos() {
        let caixa = document.getElementById("mensagem-atraso");
        caixa.style.color = "red";
        caixa.innerText = "Pagamento Atrasado!";
        caixa.style.border = "4px solid red";
    }

  return (
    <div>
        <h2>Cobrança</h2>
        <div id='mensagem-atraso' style={{marginBottom: '20px', padding: '10px', border: '2px solid red', color: 'green'}}>
            Status: Normal
        </div>
      <button onClick={destacarAtrasos}>Destacar Atraso</button>
    </div>
  );
}

export default Exercicio4;
