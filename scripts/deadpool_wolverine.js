const imagensPorPagina = {
    "DeadpoolWolverine.html": [
        "../images/dw2.jpeg",
        "../images/dw3.jpg",
        "../images/dw4.jpg",
        "../images/dw5.jpg"
    ]    
};

let indiceAtual = 0;
const imagem = document.getElementById("imagem");
const paginaAtual = window.location.pathname.split("/").pop();
const imagens = imagensPorPagina[paginaAtual] || [];

function atualizarImg() {
    if (imagens.length > 0) {
        imagem.src = imagens[indiceAtual];
    }
}

function proximaImg() {
    indiceAtual = (indiceAtual + 1) % (imagens.length + 1);
    if (indiceAtual === imagens.length) {
        imagem.src = "../images/deadpool-wolverine.png";
    } else {
        atualizarImg();
    }
}

function retornarImg() {
    if (indiceAtual === 0) {
        imagem.src = "../images/deadpool-wolverine.png";
    } else {
        indiceAtual = (indiceAtual - 1 + imagens.length + 1) % (imagens.length + 1);
        if (indiceAtual === imagens.length) {
            imagem.src = "../images/deadpool-wolverine.png";
        } else {
            atualizarImg();
        }
    }
}

let imagemAlterada = false;

function iniciarNavegacao() {
    if (!imagemAlterada && imagens.length > 0) {
        imagemAlterada = true;
        atualizarImg();
    }
}

document.getElementById("anterior").addEventListener("click", iniciarNavegacao);
document.getElementById("proximo").addEventListener("click", iniciarNavegacao);

document.getElementById("anterior").addEventListener("click", retornarImg);
document.getElementById("proximo").addEventListener("click", proximaImg);
