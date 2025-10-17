const Nome = document.querySelector("#nome");
const Email = document.querySelector("#email");
const Telefone = document.querySelector("#telefone");
const Nascimento = document.querySelector("#nascimento");
const btnSalvar = document.querySelector("#btn-salvar");
const Resultado = document.querySelector("#resultado");

const NomeValor = Nome.value;
const EmailValor = Email.value;
const TelefoneValor = Telefone.value;
const NascimentoValor = Nascimento.value;

btnSalvar.addEventListener("click", (e) => {
  e.preventDefault();

  const dados = {
    nome: Nome.value,
    email: Email.value,
    telefone: Telefone.value,
    nascimento: Nascimento.value,
  };

if (!Nome.value || !Email.value || !Telefone.value || !Nascimento.value) {
  return console.log("Campos não podem ser vazios!")
}

// as duas barras em pé ="||" representa ou/or

  console.log(dados);
});

Nome.addEventListener("input", (e) => {});

Email.addEventListener("input", (e) => {});

Telefone.addEventListener("input", (e) => {});
