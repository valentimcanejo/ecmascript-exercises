//Questão 1

//Questão 2
//const { email, nome, idade } = usuario;

//Questão 3
const usuario = {
  nome: "Toreto",
  email: "velozesefuriososparasempre@gmail.com",
};

//const { nome: nick, email: login } = usuario;

//Questão 4

const contatos = [
  {
    nome: "Mario Antonio",
    numero: "1234-5678",
  },
  {
    nome: "Reinalda Silva",
    numero: "1234-6789",
  },
  {
    nome: "Bárbara Lopes",
    numero: "1234-5567",
  },
];

const [, segundo] = contatos;
//console.log(segundo);

//Questão 5
const profissional = {
  titulo: "Engenheiro de Software",
  departamento: "Engenharia",
};

const isEngenheiro = ({ titulo, departamento }) => {
  return titulo.indexOf("Engenheiro") > -1 && departamento === "Engenharia";
};

// console.log(isEngenheiro(profissional));
// profissional.titulo = "Marketing";
// console.log(isEngenheiro(profissional));

const corpoDocente = [
  ["Gramática", "9:00", "Sueli"],
  ["Matemática", "10:15", "Amilton"],
  ["Educação Física", "11:30", "Bruno"],
];
