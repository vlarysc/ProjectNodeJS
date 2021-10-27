const chalk = require("chalk");
const fs = require("fs");

function tratarErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivo no caminho"));
}
function pegarArquivo(caminhoDoArquivo) {
  const ecoding = "utf8";
  fs.promises
    .readFile(caminhoDoArquivo, ecoding)
    .then((texto) => chalk.yellow(console.log(texto)))
    .catch((err) => tratarErro(err));
}
/* function pegarArquivo(caminhoDoArquivo) {
  const ecoding = "utf8";

  fs.readFile(caminhoDoArquivo, ecoding, (erro, texto) => {
    if (erro) {
      tratarErro(erro);
    }
    console.log(chalk.green(texto));
  });
} */

pegarArquivo("./arquivos/texto1.md");

/* 
const paragrafo = "Texto retornado por uma função";

function texto(string) {
  return string;
}

console.log(texto(paragrafo));
 */
