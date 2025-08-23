function truncar(valor, casas) {
    let fator = Math.pow(10, casas);
    return Math.floor(valor * fator) / fator;
}

let totalSoma=0;
function adicionar(id){
    let qtd= parseInt(prompt("Quantas unidades desse medicamento\ndeseja adcionar ao carrinho?"));
    let texto = document.getElementById("itens-adicionados");
    let descricao = document.getElementById("nomeProduto"+id).innerHTML;
    let valor = parseFloat(document.getElementById("valorProduto"+id).innerText.replace(",", "."));
    //let valorDesconto = valor.toFixed(2);
    let total= document.getElementById("itens-total");
    let soma = (valor*qtd);
    let somaDesconto = truncar(soma,0);
 
    if(qtd<1){
        alert("ação inválida")
    }else if(qtd==1){
        texto.innerHTML +="<strong>Produto:</strong> "+descricao+" &emsp;<strong>Valor Unitário:</strong> R$"+valor+
        " <br><strong>Quantidade: </strong>"+qtd+" &emsp;<strong>Valor de compra:</strong> R$ "+truncar(soma,2)+
        " &emsp;<strong>Valor com desconto:</strong> R$ "+(soma)+"<br><br>"
        totalSoma+=soma;
        total.innerHTML="Valor total: "+ truncar(totalSoma,2)
    }else if(qtd>1){
        texto.innerHTML +="<strong>Produto:</strong> "+descricao+" &emsp;<strong>Valor Unitário:</strong> R$"+valor+
        " <br><strong>Quantidade: </strong>"+qtd+" &emsp;<strong>Valor de compra:</strong> R$ "+truncar(soma,2)+
        " &emsp;<strong>Valor com desconto:</strong> R$ "+somaDesconto+"<br><br>"
        totalSoma+=somaDesconto;
        total.innerHTML="<strong>Valor total: R$</strong>"+ truncar(totalSoma,2) 
    }

}

function carrinho(){
    if(document.getElementById("popup-carrinho").style.display == "none"){
        document.getElementById("popup-carrinho").style.display = "flex"
    }else{
        document.getElementById("popup-carrinho").style.display = "none"
    }
}

function cancelarCompra() {
    document.getElementById("popup-carrinho").style.display = "none";
    let texto = document.getElementById("itens-adicionados");
    texto.innerHTML = "";
    let total= document.getElementById("itens-total");
    total.innerHTML = "";
}

function confirmarCompra(){
    document.getElementById("popup-carrinho").style.display = "none";
    alert("Compra Finalizada, voce deve pagar: R$ "+totalSoma.toFixed(2))
}