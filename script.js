let menu = document.getElementById("sub-menu");
let produto1 = document.getElementById("produto1");
let produto2 = document.getElementById("produto2");
let produto3 = document.getElementById("produto3");
let produto4 = document.getElementById("produto4");
let produto5 = document.getElementById("produto5");
let produto6 = document.getElementById("produto6");
let produto7 = document.getElementById("produto7");
let produto8 = document.getElementById("produto8");
let subproduto = document.getElementById("produto-sub")
    let total = document.getElementById("total");
    let quant = document.getElementById("quantidade");
    let valor = document.getElementsByClassName("valor");
let precoItem = '';
  let quantidade = 0;

function submenu(ProdutoId, idDoElementoPreco) {
    menu.style.display = "flex";
    let titulo = document.getElementById(ProdutoId).textContent;
    let elementoPreco = document.getElementById(idDoElementoPreco);
    subproduto.textContent = titulo;
    precoItem = elementoPreco.textContent.replace("R$", "").replace(",", ".");
 
}

function fecharSubmenu() {
    menu.style.display = "none";
    total.textContent = "";
    quant.value = "";
}

function somaQuantidade() {
    quantidade = quant.value
    let Preco = Number(precoItem);
    let quantidadeAtual = Number(quantidade);
    let totalSoma = Preco * quantidadeAtual;
    total.textContent = `Total: R$ ${totalSoma.toFixed(2)}` ;
    
 
}