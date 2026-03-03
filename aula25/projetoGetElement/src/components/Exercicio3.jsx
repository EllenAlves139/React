function Exercicio3() {
  function mostrarInsumo() {
    //simulação de entrega API
    let animal = {
      nome: "Gatinho😺",
      foto: "https://placecats.com/neo/300/200",
      Estoque: "Disponível",
    };
    //busca o elemento
    let titulo = document.getElementById("nome-insumo");
    let imagem = document.getElementById("foto-insumo");

    //Apicar os dados do JSON nos elementos
    titulo.innerText = animal.nome;
    imagem.src = animal.foto;
  }

  return (
    <div>
      <h2>Resultado Estoque</h2>
      <button onClick={mostrarInsumo}>Detalhes Insumo</button>
      <h3 id="nome-insumo"></h3>
      <img id="foto-insumo" alt="Foto do Insumo" />
    </div>
  );
}

export default Exercicio3;
