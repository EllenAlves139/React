function Exercicio2() {
    function processarDados() {
        //simução de JSON
        let fatura = {
            cliente: "João silva",
            valor: 250.75,
            vencimento: "2024-07-15",
    };

  //concatena a string com os dados do JSON
    let display = document.getElementById("detalhes-fatura");
    display.innerHTML =
      "Cliente: " +
      fatura.cliente +
      "<br>" +
      "Valor: R$ " +
      fatura.valor +
      "<br>" +
      "Vencimento: " +
      fatura.vencimento;
}
    return (
       <div>
        
            <h2>Processamento de fatura</h2>
            <h2> Resultado Financeiro</h2>

            <div id="detalhes-fatura">
                <button onClick={processarDados}>Processar Dados</button>
            </div>
            </div>
    );
}

export default Exercicio2;