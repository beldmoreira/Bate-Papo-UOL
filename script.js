let nome = null;

function escolherNome () {
  nome = prompt("Qual seu lindo nome?")
  const promessa = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants",{"name": nome})
  promessa.then(tratarSucesso); 
  promessa.catch(tratarErro);
  
}

function buscarMensagem(){
   const mensagem = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages")
   mensagem.then(
   function (resposta){
     for (let i=0; i < resposta.data.length; i++){
       criarMensagemTela(resposta.data[i])
     }
   }); 
  }

  function envio(){
   const texto = document.querySelector("#campo-de-texto").value
   enviarMensagens(texto)
  }

function enviarMensagens(text){
  const envio= axios.post("https://mock-api.driven.com.br/api/v4/uol/messages",
  {
    from:nome,
    to:"Todos",
    text:text,
    type:"message"
  })
  envio.then(buscarMensagem)
  envio.catch(window.location.reload)
}
function buscarParticipante(){
 const participantes = axios.get("https://mock-api.driven.com.br/api/v4/uol/participants")
}

function tratarSucesso(resposta) { 
  setInterval(function checarStatus(){
    axios.post("https://mock-api.driven.com.br/api/v4/uol/status", {"name": nome})
  }, 5000)
}

function tratarErro(erro) {
  const statusCode = erro.response.status;
	console.log(statusCode);
  if(statusCode == 400){
  nome = prompt("Nome já usado. Escolha outro nome")
  const promessa = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants",{"name": nome})
  promessa.then(tratarSucesso); 
  promessa.catch(tratarErro);
  }
}
function recarrega(){
  setInterval(buscarMensagem, 3000)
}
function criarMensagemTela(mensagem){
  if(mensagem.type =="private_message" && mensagem.to !== nome){
    return
  }
  const comunicacao = document.createElement("div")
  comunicacao.setAttribute("data-identifier","message");
  comunicacao.classList.add("mensagem")
  const hora = `<span class= "horario">(${mensagem.time})</span> `
  let espaco = document.querySelector(".espaco-disponivel")
  if(mensagem.type == "status"){
    comunicacao.innerHTML =`${hora}&nbsp;<span class="nome">${mensagem.from}</span>&nbsp;${mensagem.text}`
    comunicacao.classList.add("mensagem-cinza")
  }
  else if(mensagem.type == "private_message"){
    comunicacao.innerHTML =`${hora}&nbsp;<span class="nome">${mensagem.from}</span>&nbsp;reservadamente&nbsp;para&nbsp;<span class="nome">${mensagem.to}</span>:&nbsp; ${mensagem.text}`
    comunicacao.classList.add("mensagem-rosa")
  }
  else if (mensagem.type == "message"){
    comunicacao.innerHTML =`${hora}&nbsp;<span class="nome">${mensagem.from}</span>&nbsp;para&nbsp;<span class="nome"> ${mensagem.to}</span>:&nbsp; ${mensagem.text}`
    comunicacao.classList.add("mensagem-branca")
  }
  espaco.appendChild(comunicacao)
  comunicacao.scrollIntoView()
}

recarrega()
escolherNome()
buscarParticipante()