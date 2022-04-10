//Questão 1

function calculaPrecoTotal(...precos) {
  return precos.reduce((total, preco) => {
    return total + preco;
  }, 0);
}

//console.log(calculaPrecoTotal(1, 2, 3, 4, 5));

//Questão 2
function todosSaoMaioresQue(numero, ...numeros) {
  const bool = numeros.some((a) => {
    return numero < a;
  });

  return bool;
}

//console.log(todosSaoMaioresQue(2, 3, 4, 5, 6, 7));

//Questão 3
function anunciaBolasSorteadas(...bolas) {
  for (var i = 0; i < bolas.length; i++) {
    console.log("A bola escolhida foi: " + bolas[i]);
  }
}

//anunciaBolasSorteadas(1, 2, 3);

//Questão 4

//O código não irá funcionar pois você só pode passar como parâmetro um operador Rest, no caso do aluno ele tentou usar dois, resultando em erro

//Questão 5

//O objeto arguments é um parâmetro padrão que possui um número infinito de elementos
