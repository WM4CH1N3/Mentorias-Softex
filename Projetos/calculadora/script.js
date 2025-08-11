let display = document.getElementById("display");

let input ="" 
let operador =""

function inputnumero(valor){
    input += valor
    display.textContent = input
}

function inputNull(){
    display.textContent= 0
}

function inputOperador(valor){
    if(input==="" && input !==",") return
    input += valor
    display.textContent = input
}