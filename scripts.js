let nome = null;


const promessa = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants"[, data[, config]])

function escolherNome {
  let nome= prompt("Qual seu lindo nome?")

}

function enviarMensagem(){
    const mensagem = axios.post("https://mock-api.driven.com.br/api/v4/uol/messages")
    //{
	//from: "nome do usuário",
	//to: "nome do destinatário (Todos se não for um específico)",
	//text: "mensagem digitada",
	//type: "message" // ou "private_message" para o bônus
    const elementoQueQueroQueApareca = document.querySelector('.mensagem');
    elementoQueQueroQueApareca.scrollIntoView()

    setTimeout(function avisarServidor(){ alert("Hello"); }, 5000);

}


const promessa = axios.get('https://...');
promessa.then(tratarSucesso); 
promessa.catch(tratarErro);

function tratarSucesso(resposta) { 
  }

function tratarErro(erro) {
console.log("Status code: " + erro.response.status); 
console.log("Mensagem de erro: " + erro.response.data); 
}