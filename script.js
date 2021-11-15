let nome = null;

//const promessa = axios.get("https://...")
//promessa.then(tratarSucesso); 
//promessa.catch(tratarErro);

function escolherNome () {
  nome = prompt("Qual seu lindo nome?")
  const promessa = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants",{"name": nome})
  promessa.then(tratarSucesso); 
  promessa.catch(tratarErro);

}



//function enviarMensagem(){
  //  const mensagem = axios.post("https://mock-api.driven.com.br/api/v4/uol/messages")
    //{
	//from: "nome do usuário",
	//to: "nome do destinatário (Todos se não for um específico)",
	//text: "mensagem digitada",
	//type: "message" // ou "private_message" para o bônus

  //Fazer com que um elemento apareça na tela//
  //  const elementoQueQueroQueApareca = document.querySelector('.mensagem');
   // elementoQueQueroQueApareca.scrollIntoView()

   //setTimeout(function avisarServidor(){ alert("Hello"); }, 3000);



function tratarSucesso(resposta) { 
  console.log("Voltou a resposta");
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