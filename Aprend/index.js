const resposta = document.querySelector("#resposta");
const inputPegunta = document.querySelector("#inputPergunta");
const button = document.querySelector("#buttonPerguntar");
const respostas = ["Sim","Não","Talvez"];



function mostrarResposta(){

    if(inputPergunta.value == ""){
        alert("Faça sua Pergunta, por favor")
        return
    }
    button.setAttribute("disabled", true);
    //Desabila o Botão
    const pergunta = "<div>" + inputPergunta.value + "</div>";
    const totalResposta = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalResposta);
    resposta.innerHTML = pergunta + respostas[numeroAleatorio];
        resposta.style.opacity = 1;
    setTimeout(function(){
        resposta.style.opacity = 0;
        button.removeAttribute("disabled");
        //habilita Novamente o Botão
    }, 3000);
}