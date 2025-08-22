function adicionar(id){

    document.getElementById("botao"+id).style.display="none";
    document.getElementById("qtd"+id).value ="1";
    document.getElementById("qtdContainer"+id).style.display="inline";

}

let totalSoma=0;
function confirmarQuantidade(id){
    document.getElementById("botao"+id).style.display="inline";
    document.getElementById("qtdContainer"+id).style.display="none";

    let qtd = parseInt(document.getElementById("qtd"+id).value);
    let valor = parseFloat(document.getElementById("preco"+id).innerHTML);
    let descricao = document.getElementById("nome-produto"+id).innerText;
    let valorCompra = (qtd*valor);
    let valorDesconto = (valorCompra/2);
    let texto = document.getElementById("itens-adicionados");
    let total= document.getElementById("itens-total");

    if(qtd>=3){
        //alert("QTD: "+qtd+"\nDescrição: "+descricao+"\nvalor = "+valorDesconto.toFixed(2));
        texto.innerHTML +="QTD: "+qtd+"<br>Descrição: "+descricao+"<br>valor = "+valorDesconto.toFixed(2)+"<br><br>"
        totalSoma+=valorDesconto;
        total.innerHTML="Valor total: "+ totalSoma.toFixed(2);
    }else{
        //alert("QTD: "+qtd+"\nDescrição: "+descricao+"\nvalor = "+valorCompra.toFixed(2));
        texto.innerHTML +="QTD: "+qtd+"<br>Descrição: "+descricao+"<br>valor = "+valorCompra.toFixed(2)+"<br><br>"
        totalSoma+=valorCompra;
        total.innerHTML="Valor total: "+ totalSoma.toFixed(2);
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