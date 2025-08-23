// FUNÇÕES DE AUDIO
function click(){
    let audio = new Audio("./sounds/buttonClick.mp3");
    audio.play();
}
function perdeu(){
    let audio = new Audio("./sounds/gameOver.mp3");
    audio.play();
}
function roundWin(){
    let audio = new Audio("./sounds/roundWin.wav");
    audio.play();
}
function empate(){
    let audio = new Audio("./sounds/empate.wav");
    audio.play();
}

// FUNÇÕES DO JOGO
function jogar(){
    click();
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
    click();

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
        roundWin();
        setTimeout(function(){
            alert("Voce ganhou");   }, 300); 
        
    }else if(jogador=='TESOURA' && maquina =='PEDRA'){
        perdeu();
        setTimeout(function(){
            alert("Voce PERDEU");   }, 300); 
        
    }else if(jogador=='PAPEL' && maquina =='PEDRA'){
        roundWin();
        setTimeout(function(){
            alert("Voce ganhou");   }, 300); 
        
    }else if(jogador=='PEDRA' && maquina =='PAPEL'){
        perdeu();
        setTimeout(function(){
            alert("Voce PERDEU");   }, 300); 
       
    }else if(jogador=='TESOURA' && maquina =='PAPEL'){
        roundWin();
        setTimeout(function(){
            alert("Voce ganhou");   }, 300); 
        
    }else if(jogador=='PAPEL' && maquina =='TESOURA'){
        perdeu();
        setTimeout(function(){
            alert("Voce PERDEU");   }, 300); 
        
    }else{
        empate();
        setTimeout(function(){
            alert("EMPATE!")    }, 300); 
        
    }
}

let contador = 0;
function contadorVitoria(){
    
}

function sair(){
    click();
    document.getElementById("tela-inicial").style.display="flex"
    document.getElementById("tela-jogo").style.display="none"
}

