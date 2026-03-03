import React from 'react'
import '../CSS/Atividade1.css'


function Exercicio1() {
    function atualizarStatus() {
        {
     let etiqueta = document.getElementById('status-entrega');
     etiqueta.innerHTML = 'Pedido entregue';
        etiqueta.style.color = 'green';
        }
    }

  return (
    <div className="card">
      <h2>Controle de Entregas</h2>
      <p id="status-entrega">Aguardando entrega...</p>
      <button onClick={atualizarStatus}>Atualizar Status</button>
    </div>
  );
}

export default Exercicio1;