const imagensPorPagina = {
    "Duna.html": [
        "../images/Dune_001.jpg",
        "../images/Dune_002.jpg",
        "../images/Dune_003.jpg",
        "../images/Dune_004.jpg"
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
        imagem.src = "../images/Dune_2021.jpg";
    } else {
        atualizarImg();
    }
}

function retornarImg() {
    if (indiceAtual === 0) {
        imagem.src = "../images/Dune_2021.jpg";
    } else {
        indiceAtual = (indiceAtual - 1 + imagens.length + 1) % (imagens.length + 1);
        if (indiceAtual === imagens.length) {
            imagem.src = "../images/Dune_2021.jpg";
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
