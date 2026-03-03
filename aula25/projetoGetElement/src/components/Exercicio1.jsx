function Exercicio1() {
    function atualizarStatus() {
 {
    let etiqueta = document.getElementById("status-estrega"); 
    etiqueta.innerHTML = "Pedido entregue";
    etiqueta.style.color = "green";
 }
  }
  return (
    <div style ={{ padding: "20px", border: "1px solid #ccc"}}>
        <h2> Controle de enetrega</h2>
        <p id="status-estrega">Aguardando entrega...</p>
        
        <button onClick={atualizarStatus}>Atualizar Status</button>
    </div>
  );

}

export default Exercicio1;
        