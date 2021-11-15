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
   }); 
  }

function enviarMensagens(text){
  const envio= axios.post("https://mock-api.driven.com.br/api/v4/uol/messages",
  {
    from:nome,
    to:"Todos",
    text:text,
    type:"message"
  })
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

escolherNome()
buscarParticipante()