export const validarFormulario = (evento) => {
  evento.preventDefault();
  var endereco = 'c2170b1d-e384-40de-';
  const formulario = document.querySelector("[data-form]")
  endereco += '8005-e72b3d0b0f10';
  
  const dados = {
    name: formulario.nome.value,
    email: formulario.email.value,
    subject: formulario.assunto.value,
    honeypot: '',
    message: formulario.mensagem.value,
    replyTo: '@',
    accessKey: endereco
  }
  const resposta = enviarEmail(dados);
  if(resposta){
    const sucesso = document.querySelector('[data-enviar]')
    sucesso.classList.toggle('btn-enviar')
    sucesso.value = "Email enviado!"
    setTimeout(()=>{
      sucesso.classList.toggle('btn-enviar')
      sucesso.value = "Enviar Mensagem"

    },2000);
  }

}

async function enviarEmail(dados) {
  const response = await fetch('https://api.staticforms.xyz/submit', {
    method: 'POST',
    body: JSON.stringify(dados),
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await response.json();
  return data.success
}

