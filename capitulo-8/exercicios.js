//Questão 1
let arrayFuncoes = [];
for (let i = 0; i < 10; i++) {
  arrayFuncoes.push(function () {
    //console.log(i);
  });
}

arrayFuncoes.forEach(function (funcao) {
  funcao();
});

//Questão 2

const ISSO_EH_UMA_CONSTANTE = "xxxxxxx";

//Questão 3

function nomeCompleto(primeiroNome, segundoNome) {
  //Trocando const para let
  let nomeCompleto = primeiroNome;
  nomeCompleto += " " + segundoNome;

  return nomeCompleto;
}

//console.log(nomeCompleto("primeiro", "segundo"));
//Questão 4

//Questão 5

//Questão 6
const status = [
  { codigo: "OK", resposta: "Sucesso" },
  { codigo: "FAILED", resposta: "Erro" },
  { codigo: "PENDING", resposta: "Pendente" },
];
let mensagem = "";
let codigoAtual = "OK";

for (let i = 0; i < status.length; i++) {
  if (status[i].codigo === codigoAtual) {
    mensagem = status[i].resposta;
  }
}

console.log(mensagem);
