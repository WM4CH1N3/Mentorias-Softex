function calcular(){

    let textoTempo = document.getElementById("infoTempo");
    let textoValor = document.getElementById("infoValor");
    let textoTotal = document.getElementById("infoTotal");
    let horas = Number(prompt("Qual foi o tempo de uso em horas?"));
    let minutos = Number(prompt("Qual foi o tempo de uso em minutos?"));
    let tempo = (horas*60)+minutos;
    let valor = Number(prompt("Qual custo do uso do equipamento a cada 15 minutos?"));
    let intervalo = parseInt((tempo/15));
    let resto = tempo%15;
    if(resto>0){
        intervalo++
    }
    let total = intervalo*valor;

   // alert("hor: "+horas+"\nmin: "+minutos+"\ntemp: "+tempo+"\nvalor: "+valor.toFixed(2)+"\nvalorTotal: "+total.toFixed(2))
    
    textoTempo.innerHTML = tempo+"min";
    textoValor.innerHTML = "R$ "+valor;
    textoTotal.innerHTML = "R$ "+total;
    document.getElementById("container-principal").style.display = "none";
    document.getElementById("container-secundario").style.display = "flex";

}

function resetar(){
    
    document.getElementById("container-principal").style.display = "flex";
    document.getElementById("container-secundario").style.display = "none";
}