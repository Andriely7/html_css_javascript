const Nome = document.querySelector("#nome");
const Email = document.querySelector("#email");
const Telefone = document.querySelector("#telefone");
const Nascimento = document.querySelector("#nascimento");
const btnSalvar = document.querySelector("#btn-salvar");
const Resultado = document.querySelector("#resultado");

const db_dados = localStorage.getItem("Clientes") ? JSON.parse(localStorage.getItem("Clientes")) : [];
// []=representa uma array

const NomeValor = Nome.value;
const EmailValor = Email.value;
const TelefoneValor = Telefone.value;
const NascimentoValor = Nascimento.value;

btnSalvar.addEventListener("click", (e) => {
  e.preventDefault();
  if (!Nome.value || !Email.value || !Telefone.value || !Nascimento.value) {
    return console.log("Campos não podem ser vazios!")
  }
  if (Nome.value.length < 3) {
    return console.log("Nome precisa ter no minimo 5 caracteristicas");
  }

  const dados = {
    nome: Nome.value,
    email: Email.value,
    telefone: Telefone.value,
    nascimento: Nascimento.value,
  };


// as duas barras em pé ="||" representa ou/or

  db_dados.push(dados);
  localStorage.setItem("Clientes", JSON.stringify(db_dados))

  Nome.value = "";
  Email.value = "";
  Telefone.valu = "";
  Nascimento.valu = "";
});

Nome.addEventListener("input", (e) => {
  if (Nome.value.length < 3) {
    return console.log("Nome precisa ter no minimo 5 caracteristicas");
  }
});

Email.addEventListener("input", (e) => {});

Telefone.addEventListener("input", (e) => {});




