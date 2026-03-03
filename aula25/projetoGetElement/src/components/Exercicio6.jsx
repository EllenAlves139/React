function Exercicio6() {
    function calcularTotal() {
        var produto = {nome: "Fertilizante", preco: 200, impoato: 15};
        var resultado = document.getElementById("valor-total");

        var total = produto.preco + produto.imposto;
        resultado.innerText = "Total com impostos: R$ " + total;
    }

    return (
        <div
            style={{padding: "20px", border: "1px solid black", margintop: "10px"}}
            >
                <h2>Financeiro</h2>
                <button onClick={calcularTotal}>calcular fatura</button>
                <p id="valor-total"></p>
        </div>
    );
}

export default Exercicio6;