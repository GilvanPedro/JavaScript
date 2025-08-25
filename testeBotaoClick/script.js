function mostrarMensagem(){
    window.alert('Botão clicado');
}

function abrirGuia(){
    window.open("https://classroom.google.com/c/Nzc5NzY4MzM3NTM0");
}

function mudarCor(){
    botao.style.backgroundColor = 'gray';
    botao.style.color = 'white';
}

const botao = document.querySelector(".btn");

botao.addEventListener("click", mostrarMensagem);
botao.addEventListener("click", mudarCor);
botao.addEventListener("click", abrirGuia);
