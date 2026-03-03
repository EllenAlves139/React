import React from 'react'
import '../CSS/Atividade5.css'

function Exercicio5() {
    function saudarCliente() {
        let nomeDigtado = document.getElementById("Nome-cliente").value;
        let mensagem = document .getElementById("Mensagem-saudacao");
        mensagem.innerText = `Olá, ${nomeDigtado}!`;
    }
  return (
    <div className='card5'>
      <h2>Saudação ao cliente</h2>
      <input type="text" id="Nome-cliente" placeholder="Digite seu nome"/>
      <button onClick={saudarCliente}>Saudar</button>
      <div id="Mensagem-saudacao">
            {/* A mensagem de saudação será exibida aqui */}
            Boas Vindas
      </div>
    </div>
  )
}

export default Exercicio5;