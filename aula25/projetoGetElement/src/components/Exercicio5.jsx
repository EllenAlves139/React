function Exercicio5() {
    function saudarCliente() {
        let nomeDigitado = document.getElementById("nome-cliente").value;
        let saudacao = document.getElementById("mensagem-saudacao");
        saudacao.innerText = `Olá, ${nomeDigitado}!`;
       
    }

  return (
    <div>
        <h2>Saudação ao Cliente</h2>
        <input type="text" id="nome-cliente" placeholder="Digite seu nome" />
        <button onClick={saudarCliente}>Saudar</button>
        <div
         id="mensagem-saudacao">
           Boa Vindas
        </div>
    </div>
  )
}

export default Exercicio5;
