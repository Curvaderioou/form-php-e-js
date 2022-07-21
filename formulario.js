const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; margin-top: 40px; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 48 horas úteis.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; margin-top: 40px; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: atendimento@despachanterapido.com.br</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
