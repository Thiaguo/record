const resposta = document.querySelector("#resposta");
const button = document.querySelector("#buttonRodar");
const lados = [1,2,3,4,5,6];

function rodarDado(){
    button.setAttribute("disabled", true);
    const totalLados = lados.length;
    const numeroAleatorio = Math.ceil(Math.random() * totalLados);
    resposta.innerHTML = numeroAleatorio;
    resposta.style.opacity = 1;
    setTimeout(function(){
        resposta.style.opacity = 0;
        button.removeAttribute("disabled");
    }, 1000);
}