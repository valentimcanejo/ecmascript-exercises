//Questão 1

//Questão 2

const criaMacaroca = (arr) => {
  let str = "";
  for (let a of arr) {
    str += a;
  }
  return str;
};

//console.log(criaMacaroca(["a", "b", "c", "d"]));

//Questão 3

const montaEnderecoCompleto = (rua, cidade, numero, cep) => {
  return `Cidade - ${cidade}, Rua - ${rua}, Número - ${numero}, CEP - ${cep}`;
};

//console.log(montaEnderecoCompleto("Vila Isabel", "Parnamirim", 65, "12345-67"));

//Questão 4

let nome = "usuário";

//console.log(`Bem-Vindo ${nome}!`);

//Questão 5

const soma = (a, b) => {
  return `${a} + ${b} = ${a + b}`;
};

console.log(soma(1, 2));
