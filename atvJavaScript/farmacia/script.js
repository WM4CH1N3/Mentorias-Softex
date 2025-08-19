function adicionar(id){
    let qtd= parseInt(prompt("Quantas unidades desse medicamento\ndeseja adcionar ao carrinho?"));
    let texto = document.getElementById("itens-adicionados");
    let descricao = document.getElementById("nomeProduto"+id).innerHTML;
    let valor = parseFloat(document.getElementById("valorProduto"+id).innerText.replace(",", "."));
    //let valorDesconto = valor.toFixed(2);
    let total= document.getElementById("itens-total");
    let soma = (valor*qtd);

    
    if(qtd<1){
        alert("ação inválida")
    }else{
        texto.innerHTML +="<strong>Produto:</strong> "+descricao+" &emsp;<strong>Valor Unitário:</strong> R$"+valor+
        " <br><strong>Quantidade: </strong>"+qtd+" &emsp;<strong>Valor de compra:</strong> R$ "+(soma)+
        " &emsp;<strong>Valor com desconto:</strong> R$ "+(soma).toFixed(0)+"<br><br>"
        total.innerHTML="Valor total: "+ soma
    }

}

function carrinho(){
    document.getElementById("popup-carrinho").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popup-carrinho").style.display = "none";
}