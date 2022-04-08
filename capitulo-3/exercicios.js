// Questão 1

var numeros = [0, 1, 2, 3, 4, 5];

const fn = () => {
  numeros.forEach((n) => {
    if (n % 2 == 0) {
      console.log(n + " é par");
    } else {
      console.log(n + " é ímpar");
    }
  });
};

//fn();

// Questão 2

var numeros2 = [1, 2, 3, 4, 5];

const fn2 = () => {
  numeros2.map((n) => console.log(n * 2));
};

//fn2();

// Questão 3

let arr1 = ["oi", "tudo", "bem?"];
let arrCaps = [];

const caps = () => {
  arr1.map((a) => arrCaps.push(a.toUpperCase()));
  console.log(arrCaps);
};

//caps();

// Questão 4

//Questão 5

//Questão 6

var alunos = [
  { nome: "Diogo", media: 5.5 },
  { nome: "Julia", media: 9.5 },
  { nome: "Roberto", media: 1.5 },
  { nome: "Tiago", media: 6.0 },
];

var newArrQ5 = [];

const aprovados = (ar, nota) => {
  ar.filter((a) => {
    if (a.media >= nota) {
      newArrQ5.push(a);
    }
  });
};
//aprovados(alunos, 6);

//console.log(newArrQ5);

//Questão 7

var lista = [
  { nome: "Tânia", sobrenome: "Cardoso", idade: 65 },
  { nome: "Emilly", sobrenome: "Barbosa", idade: 46 },
  { nome: "Vitória", sobrenome: "Costa", idade: 83 },
  { nome: "Erick", sobrenome: "Ferreira", idade: 16 },
];

const buscar = (propriedade, valor, lista) => {
  return lista.find((l) => {
    return l[propriedade] === valor;
  });
};

//console.log(buscar("nome", "Tânia", lista));

//Questão 8

var dimensoes = [
  { altura: 10, comprimento: 20 },
  { altura: 2, comprimento: 4 },
  { altura: 1, comprimento: 1 },
  { altura: 50, comprimento: 50 },
];

const calculaAreaTotal = () => {
  return dimensoes.reduce((soma, d) => {
    return soma + d.altura * d.comprimento;
  }, 0);
};

//console.log(calculaAreaTotal());

//Questão 9

var arrQ9 = [4, 9, 16, 25, 36];

const calculaRaizesQuadradas = () => {
  return arrQ9.reduce((a9, a) => {
    a9.push(Math.sqrt(a));
    return a9;
  }, []);
};

//console.log(calculaRaizesQuadradas());

//Questão 11

var obj = { altura: 10, comprimento: 20 };

const clonaObjeto = (obj) => {
  var props = Object.getOwnPropertyNames(obj);
  var newObj = new Object();
  props.forEach((n) => {
    newObj[n] = obj[n];
  });

  return newObj;
};

//console.log(clonaObjeto(obj));

//Questão 12

var produtos = [
  { nome: "Cereal", preco: "10", dataValidade: "05/02/2016" },
  { nome: "Suco de Abacaxi", preco: "12", dataValidade: "01/01/2017" },
  { nome: "Torta de frango", preco: "25", dataValidade: "07/07/2017" },
];
