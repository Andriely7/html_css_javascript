const formSimples = document.querySelector("#form-simples");
const campo_input = document.querySelector("#campo-input");
const btnEnviar = document.querySelector("#btn-enviar");
const Resultado = document.querySelector("#resultado");



// Eventos de clicks q da pra usar no javascript : focus, input, change, focusin, focusout, keyup, keydown

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault()
    const campo_input_valor = campo_input.value;
    // innerHTML => Coloca informção no html
    Resultado.innerHTML = campo_input_valor
});


