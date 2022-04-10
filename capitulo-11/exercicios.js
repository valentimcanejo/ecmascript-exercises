//Questão 1
const modelo = "Mercedes-Benz Monobloco O-371 RSL";
const ano = 1993;
const capacidade = 50;

const busao = {
  modelo: modelo,
  ano: ano,
  capacidade: capacidade,
  acelerar() {
    console.log("vrum vrum");
  },
};

//busao.acelerar();

//Questão 2
const dimensoes = (comprimento, alturaInicial) => {
  const altura = (alturaInicial * 9) / 16;
  return { comprimento, altura };
};

//console.log(dimensoes(10, 10));

//Questão 3
const pessoa = {
  nome: "Goku",
  equipe: "Guerreiro Z",
  seApresentar() {
    console.log(`Oi, eu sou o ${this.nome}!`);
  },
};
//pessoa.seApresentar();

//Questão 4

let map = new Map();
map.set(22);
map.set(23);
map.set(24);
map.set(25);

const criaObjetoComCaracteristicas = (caracteristicas) => {
  let obj = {};
  let i = 0;
  for (let c of caracteristicas.keys()) {
    obj[c] = caracteristicas.get(c);
  }
  return obj;
};

console.log(criaObjetoComCaracteristicas(map));
