import React from 'react'
import '../CSS/Atividade2.css'

function Exercicio2() {
  // Função que será executada ao clicar no botão
  function processarDados() {
    // Formato Json para representar os dados de uma fatura (dados compactos e estruturados)

    // Cria um objeto chamado fatura com os dados da fatura
    let fatura = {
      cliente: "João Silva",
      valor: 250.75,
      Vencimento: "2024-07-15",
    };
    // Concatenar a string com os dados do JSON
    // innerHTML permite usar <br> para quebrar linhas e formatar a exibição
    let display = document.getElementById("fatura-display");
    display.innerHTML =
      "Cliente: " +
      fatura.cliente +
      "<br>" +
      "Valor: R$ " +
      fatura.valor +
      "<br>" +
      "Vencimento: " +
      fatura.Vencimento;
  }
  return (
    <div className="card">
      <h2>Processando de Fatura</h2>
      <h2>Resultado Financeiro</h2>

      <div id="detalhes-fatura">
        <button onClick={processarDados}>Processar Fatura</button>
      </div>
      <div
        id="fatura-display"
        style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}
      ></div>
    </div>
  );
}

export default Exercicio2;