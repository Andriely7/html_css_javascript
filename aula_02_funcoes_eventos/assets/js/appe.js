const Nome = document.querySelector("#name");
const Email = document.querySelector("#email");
const Telefone = document.querySelector("#telefone");
const Nascimento = document.querySelector("#nascimento");
const btnSalvar = document.querySelector("#btn-salvar");
const Resultado = document.querySelector("#resultado");

const NomeValor = Nome.value
const EmailValor = Email.value
const TelefoneValor = Telefone.value
const NascimentoValor = Nascimento.value

btnSalvar.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(NomeValor);
    console.log(EmailValor);
    console.log(TelefoneValor);
    console.log(NascimentoValor);
});

Nome .addEventListener("input" = {

});

Email .addEventListener("input" = {

});

Telefone .addEventListener("input" = {

});