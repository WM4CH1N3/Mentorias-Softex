function adicionar(id){

    document.getElementById("botao"+id).style.display="none";
    document.getElementById("qtd"+id).ariaValueText ="1";
    document.getElementById("qtdContainer"+id).style.display="inline";
}

function confirmarQuantidade(id){
    document.getElementById("botao"+id).style.display="inline";
    document.getElementById("qtdContainer"+id).style.display="none"
}

function carrinho(){
    if(document.getElementById("popup-carrinho").style.display == "none"){
        document.getElementById("popup-carrinho").style.display = "flex"
    }else{
        document.getElementById("popup-carrinho").style.display = "none"
    }
}

function fecharPopup() {
    document.getElementById("popup-carrinho").style.display = "none";
}