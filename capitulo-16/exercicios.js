//Questão 1
function VideoGame(marca, nControles, tipoMidia) {
  this.marca = marca;
  this.nControles = nControles;
  this.tipoMidia = tipoMidia;
}

const playstation = new VideoGame("sony", "2", "dvd");
//console.log(playstation);

//Questão 2
class Playstation extends VideoGame {
  constructor(nEntradasUSB, voltagem, adicionais) {
    super(nEntradasUSB, voltagem, adicionais);
  }
}
const play = new Playstation(2, 20, "none");

//console.log(play);

//Questão 3
class Porta {
  toctoc() {
    console.log("Quem é?");
  }
}
const p = new Porta();
//p.toctoc();
//Questão 4
//Problema de escopo, a classe foi declarada depois da criação do objeto

//Questão 5
const Computador = class {};
