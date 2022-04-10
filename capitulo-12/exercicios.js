//Questão 1
function mostraNome(nome) {
  console.log(`Meu nome é: ${nome}`);
}

//mostraNome(); // undefined

//Questão 2
function soma(a = 0, b = 0) {
  return a + b;
}
//console.log(soma());

//Questão 3
function imprimeNomeCompleto(nome, sobrenome = "", nomeDoMeio = "") {
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
}

//imprimeNomeCompleto("João");

//Questão 4

const v = "valor 1";
function funcao(x = v) {
  const v = "valor 2";
  console.log(x);
}

//funcao(); //valor 1

//Questão 5
function subtrair(a = 0, b = 0) {
  return a - b;
}

console.log(subtrair());
