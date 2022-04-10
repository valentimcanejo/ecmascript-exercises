//Exercícios Livro

var arr = [];

function SetB() {
  this.add = function (arr, item) {
    if (arr.indexOf(item) === -1) {
      arr.push(item);
    }
  };
  this.exists = function (arr, item) {
    if (arr.indexOf(item) === -1) {
      console.log("Não existe");
    } else {
      console.log("Existe");
    }
  };
  this.remove = function (arr, item) {
    var index = arr.indexOf(item);
    arr.splice(index, 1);
  };
  this.clear = function (arr) {
    arr.splice(0, arr.length);
  };
  this.size = function (arr) {
    console.log(arr.length);
  };
}

var set = new SetB();

set.add(arr, 1);
set.add(arr, 2);
set.add(arr, 3);
set.add(arr, 4);
set.add(arr, 5);
set.add(arr, 6);

//set.add(arr, 2);
//set.exists(arr, 4);
set.remove(arr, 5);
//set.clear(arr);
//set.size(arr);

//console.log(arr);

//Questão 1

const removeDuplicatas = (numeros) => {
  var set = new Set(numeros);
  //   for (n of numeros) {
  //     set.add(n);
  //   }
  return set;
};

const removeDuplicatasB = (numeros) => {
  var set = new Set();
  for (n of numeros) {
    set.add(n);
  }
  return set;
};
//console.log(removeDuplicatas([1, 1, 2, 2, 3, 3]));
//console.log(removeDuplicatasB([1, 1, 2, 2, 3, 3]));

//Questão 3

//Ele está tentando passar um array como parâmetro no WeakSet, quando o mesmo só aceita objetos

//Questão 4
