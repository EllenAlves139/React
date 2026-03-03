function Exercicio6() {
  function calcularTotal() {
    var produto = { nome: "Fertilizante", preco: 200, imposto: 15 };
    var resultado = document.getElementById("valor-total");

    var total = produto.preco + produto.imposto;
    resultado.innerText = "Total com Impostos: R$ " + total;
  }

  return (
    <div
          >
      <h2>Financeiro </h2>
      <button onClick={calcularTotal}>Calcular Fatura</button>
      <p id="valor-total"></p>
    </div>
  );
}

export default Exercicio6;
