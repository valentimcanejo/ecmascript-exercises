//Questão 1
const spread = ["e", "c", "m", "a", "s", "c", "r", "i", "p", "t"];
//console.log(...spread);

//Questão 2

//Questão 3

const contaQuantidadeVogaisNaoAcentuadas = (...palavras) => {
  const vogais = ["a", "e", "i", "o", "u"];

  return palavras.reduce((soma, p) => {
    for (let v of p) {
      if (vogais.indexOf(v.toLowerCase()) !== -1) {
        soma++;
      }
    }
    return soma;
  }, 0);
};

console.log(
  contaQuantidadeVogaisNaoAcentuadas(
    "romulo",
    "valentim",
    "rodrigues",
    "canejo"
  )
);

//Questão 4
var argumentos = [1, 2, 3];
//console.log(...argumentos);

//Questão 5

const equipeMarketing = ["Joana", "Marcela", "Bruna"];
const equipeComercial = ["Talita", "Luisa", "Vitória"];

const timeCompleto = [...equipeMarketing, ...equipeComercial];

//console.log(timeCompleto);
