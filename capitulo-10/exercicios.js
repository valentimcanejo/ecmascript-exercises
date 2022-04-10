//Questão 1

let carrinho = [
  { nome: "abacaxi", preco: "2.00" },
  { nome: "detergente", preco: "2.50" },
  { nome: "bolacha", preco: "3.80" },
];

const imprimeProduto = (nome, preco) => {
  // console.log(`Produto: ${nome} | Preço: ${preco}`);
};
carrinho.forEach((produto) => {
  imprimeProduto(produto.nome, produto.preco);
});

//Questão 2
let itens = ["abacaxi", "banana", "maçã", "laranja", "limão"];
itens.forEach((item) => {
  //console.log(item);
});

//Questão 3
//console.log(this);

//Questão 4
let palavroes = [
  "Inconstitucionalíssimo",
  "Otorrinolaringologista",
  "Pneumoultramicroscopicossilicovulcanoconiose",
  "Oftalmotorrinolaringologista",
];

const tamanho = () => {
  palavroes.map((p) => {
    console.log(p.length);
  });
};

//tamanho(); // [ 22, 22, 44, 28 ]

//Questão 5

const equipe = {
  nome: "Valentes da Glória",
  membros: ["Luciano", "Maria", "Virgínia", "Daniela"],
  imprimeNomes: function () {
    this.membros.forEach((membro) => {
      console.log(`${membro} é da equipe ${this.nome}`);
    });
  },
};

equipe.imprimeNomes();
