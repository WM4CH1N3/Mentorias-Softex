// FUNÇÕES DE AUDIO
function click(){
    
}

// FUNÇÕES DO JOGO
function jogar(){
    document.getElementById("tela-inicial").style.display="none"
    document.getElementById("tela-jogo").style.display="flex"
}

function randomizar(){
    let escolha = Math.floor(Math.random() * 3) + 1;

    if(escolha==1){
        escolhaMaquina = 'PEDRA'
        document.getElementById("maquinaMao").src = "./imagens/hand-pedra-b.png" 
    }else if(escolha==2){
        escolhaMaquina = 'PAPEL'
        document.getElementById("maquinaMao").src = "./imagens/hand-papel-b.png"
    }else if(escolha==3){
        escolhaMaquina = 'TESOURA'
        document.getElementById("maquinaMao").src = "./imagens/hand-tesoura-b.png"
    }
  
}

let escolhaJogador = '';
let escolhaMaquina = '';
function escolher(mao){

    let escolha = document.getElementById("botao-" + mao).value;
    document.getElementById("minhaMao").src = "./imagens/"+escolha;

    escolhaJogador = document.getElementById("botao-" + mao).innerText;

    document.querySelectorAll(".botao").forEach(btn => {
    btn.style.pointerEvents = "none";
    });

    randomizar();
    // alert("Você escolheu: " + escolha);
    
    setTimeout(function(){
        comparar()
        document.querySelectorAll(".botao").forEach(btn => {
        btn.style.pointerEvents = "auto";
        });
    }, 800);    
    
}

function comparar(){
    let jogador = escolhaJogador;
    let maquina = escolhaMaquina;

    if(jogador=='PEDRA' && maquina =='TESOURA'){
        alert("Voce ganhou");
    }else if(jogador=='TESOURA' && maquina =='PEDRA'){
        alert("Voce PERDEU");
    }else if(jogador=='PAPEL' && maquina =='PEDRA'){
        alert("Voce ganhou");
    }else if(jogador=='PEDRA' && maquina =='PAPEL'){
        alert("Voce PERDEU");
    }else if(jogador=='TESOURA' && maquina =='PAPEL'){
        alert("Voce ganhou");
    }else if(jogador=='PAPEL' && maquina =='TESOURA'){
        alert("Voce PERDEU");
    }else{
        alert("EMPATE!")
    }
}

let contador = 0;
function contadorVitoria(){
    
}

function sair(){
    document.getElementById("tela-inicial").style.display="flex"
    document.getElementById("tela-jogo").style.display="none"
}

