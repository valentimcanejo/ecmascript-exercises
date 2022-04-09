//Questão 1

var ruas = [
  { nome: "Rua 1", tamanho: 2500 },
  { nome: "Rua 2", tamanho: 3400 },
  { nome: "Rua 3", tamanho: 1400 },
];

var iteradorRuas = ruas[Symbol.iterator]();

var soma = 0;
var ruas = iteradorRuas.next();
do {
  soma += ruas.value.tamanho;
  ruas = iteradorRuas.next();
} while (!ruas.done);

//console.log(soma);

//Questão 2

var nums = [{ num: "32" }, { num: "64" }, { num: "128" }];

const isListaVazia = (nums) => {
  var interador = nums[Symbol.iterator]();
  var inte = interador.next();
  do {
    if (inte.done) {
      console.log(inte.done);
    } else {
      console.log(inte.done);
    }

    inte = interador.next();
  } while (!inte.done);
};

//isListaVazia(nums);

//Questão 3

var str = "soletrando";

const soletrando = (str) => {
  var s = str[Symbol.iterator]();

  var next = s.next();
  do {
    console.log(next.value);
    next = s.next();
  } while (!next.done);
};

console.log(soletrando(str));

//Questão 4

var arr = [1, 2];

const criaIterador = (arr) => {
    next: function{

        
    }
};
