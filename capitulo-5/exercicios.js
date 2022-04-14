//Questão 1

var arr = [1, 2, 3, 4];
var soma = 0;

const somaFaturamento = (arr) => {
  for (var a of arr) {
    soma += a;
  }
  console.log(soma);
};

//somaFaturamento(arr);

//Questão 2

//O objeto deveria ser recebido dentro de um Array

//Questão 3

var Casa = {
  metrosQuadrados: 4000,
  altura: 3000,
  nQuartos: 4,
  nBanheiros: 2,

  //...
};

const house = (casa) => {
  for (var atributo in casa) {
    console.log(atributo);
  }
};

//house(Casa);

//Questão 4

const percorreRuasA = (arr, str) => {
  for (var a of arr) {
    if (a === str) {
      break;
    }
    console.log(a);
  }
};

//percorreRuasA(["Rua 1", "Rua 2", "Rua 3"], "Rua 2");

//Questão 5

const percorreRuasB = (arr, str) => {
  for (var a of arr) {
    if (a === str) {
      continue;
    }
    console.log(a);
  }
};

percorreRuasB(["Rua 1", "Rua 2", "Rua 3"], "Rua 2");
