const translate = require("translate");
const fs = require("fs");

// Configura para usar o Google (grátis) e traduzir para Português
translate.engine = "google";
translate.from = "en";

async function traduzirArquivo(nomeArquivo) {
  try {
    const conteudo = fs.readFileSync(nomeArquivo, "utf8");
    console.log(`Traduzindo ${nomeArquivo}... aguarde.`);
    
    const traduzido = await translate(conteudo, "pt");
    
    fs.writeFileSync(`traduzido_${nomeArquivo}`, traduzido);
    console.log(`Pronto! Arquivo salvo como: traduzido_${nomeArquivo}`);
  } catch (erro) {
    console.error("Erro ao traduzir:", erro);
  }
}

// Pega o nome do arquivo que você digitar no terminal
const arquivoAlvo = process.argv[2];
if (arquivoAlvo) {
  traduzirArquivo(arquivoAlvo);
} else {
  console.log("Digite o nome do arquivo. Ex: node tradutor.js README.md");
}