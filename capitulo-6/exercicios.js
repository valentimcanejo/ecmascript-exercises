//Questão 1

var produtos = new Map();
produtos.set("Arroz", 7.1);
produtos.set("Feijão", 2.3);
produtos.set("Macarrão", 4.7);
produtos.set("Refrigerante", 3.0);

const possuiProduto = (produtos, produtoDesejado) => {
  if (produtos.has(produtoDesejado)) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//possuiProduto(produtos, "Macarrão");

//Questão 2

var caixa = new Map();

caixa.set("Arroz", 7.1);
caixa.set("Feijão", 2.3);
caixa.set("Macarrão", 4.7);
caixa.set("Refrigerante", 3.0);

var fretes = new Map();

fretes.set("São Paulo", 10.1);
fretes.set("Rio de Janeiro", 12.3);
fretes.set("Brasília", 14.7);
fretes.set("Outros", 13);

var resultado = 0;

const calculaValorTotalDaCompra = (produtos, cidade, caixa, fretes) => {
  for (var produto of produtos) {
    resultado += caixa.get(produto);
  }

  if (fretes.has(cidade)) {
    resultado += fretes.get(cidade);
  }

  console.log(resultado);
  //   for (var valor of caixa.values()) {
  //     for (var frete of fretes.values()) {
  //     }
  //   }
};

//calculaValorTotalDaCompra(["Arroz"], "São Paulo", caixa, fretes);

//Questão 5

var amigos = new Map();

amigos.set("João Silva", 23, "masculino");
amigos.set("Luisa Pimenta", 18, "feminino");
amigos.set("Julio Marinho", 52, "masculino");
amigos.set("Marcela Mel", 23, "feminino");

const deletaAmigos = (amigos, exAmigos) => {
  for (var ex of exAmigos) {
    if (amigos.has(ex)) {
      amigos.delete(ex);
      console.log(ex + " foi deletado!");
    } else {
      console.log(ex + " não é seu amigo");
    }
  }
  console.log(amigos);
};

deletaAmigos(amigos, ["Julio Marinho", "Marcela Mel"]);
