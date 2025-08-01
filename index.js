const inPesquisa = document.getElementById("inPesquisa");
const btPesquisarProdutos = document.getElementById("btPesquisarProdutos");
const btPesquisarMarca = document.getElementById("btPesquisarMarca");
const btPesquisarCategoria = document.getElementById("btPesquisarCategoria");
const outResultado = document.getElementById("outResultado");
const listaProdutos = document.getElementById("lista-produtos");
const sltPEsquisas = document.getElementById("sltPEsquisas");
const btMostrarCarrinho = document.getElementById("btMostrarCarrinho");
const outValorTotalCar = document.getElementById("outValorTotalCar");

//gerando a lista de produtos
for (let i = 0; i < vetDescricao.length; i++) {
    criarElementoNoHtml(i);
}

//adiciona produtos no carrinho e mostra o valor total
var vetCarrinho = [];
var valorTotal = 0;
function adicionarNoCarrinho(event) {
    vetCarrinho.push(Number(event.target.value));
    valorTotal += vetPreco[event.target.value];
    outValorTotalCar.innerHTML = "Valor total:<br>R$" + valorTotal.toFixed(2);
    console.log(vetCarrinho);
    console.log(valorTotal);
}

//mostra/esconde os produtos do carrinho
btMostrarCarrinho.addEventListener("click", mostrarCarrinho);
function mostrarCarrinho() {
    carrinho.innerHTML = "";
    if (listaProdutos.style.display == "") {
        listaProdutos.style.display = "none";
        carrinho.style.display = "block";
    } else {
        listaProdutos.style.display = "";
        carrinho.style.display = "none";
    }
    for (let i = 0; i < vetCarrinho.length; i++) {
        var produto = document.createElement('div');
        produto.className = "produto";
        var infoProduto = document.createElement('h4');
        infoProduto.innerHTML = "Produto: " + vetDescricao[vetCarrinho[i]] +
                                "<br>Categoria: " + vetCategoria[vetCarrinho[i]] +
                                "<br>Marca: " + vetMarca[vetCarrinho[i]] +
                                "<br>Unidade de Medida: " + vetUnidMed[vetCarrinho[i]] +
                                "<br>Preço: R$" + vetPreco[vetCarrinho[i]];
        produto.appendChild(infoProduto);
        carrinho.appendChild(produto);
    }
}

btPesquisarProdutos.addEventListener("click", pesquisarProdutos);
btPesquisarMarca.addEventListener("click", pesquisarMarca);
btPesquisarCategoria.addEventListener("click", pesquisarCategoria);

sltPEsquisas.addEventListener("change", pesquisaEscolhida);

//function que cria os elementos no html
function criarElementoNoHtml(indElem) {
    var produto = document.createElement('div');
    produto.className = "produto";
    var infoProduto = document.createElement('h4');
    infoProduto.innerHTML = "Produto: " + vetDescricao[indElem] +
                            "<br>Categoria: " + vetCategoria[indElem] +
                            "<br>Marca: " + vetMarca[indElem] +
                            "<br>Unidade de Medida: " + vetUnidMed[indElem] +
                            "<br>Preço: R$" + vetPreco[indElem];
    var btAddCarrinho = document.createElement('button');
    btAddCarrinho.textContent = "Adicionar ao Carrinho";
    btAddCarrinho.value = indElem;
    produto.appendChild(infoProduto);
    produto.appendChild(btAddCarrinho);
    listaProdutos.appendChild(produto);
    btAddCarrinho.addEventListener("click", adicionarNoCarrinho);


} function pesquisarProdutos() {
    listaProdutos.innerHTML = "";

    for (let i = 0; i < vetDescricao.length; i++) {
        if (vetDescricao[i].toUpperCase().includes(inPesquisa.value.toUpperCase())) {

            criarElementoNoHtml(i);

        }
    }
}

function pesquisarMarca() {

    listaProdutos.innerHTML = "";

    for (let i = 0; i < vetDescricao.length; i++) {
        if (vetMarca[i].toUpperCase().includes(inPesquisa.value.toUpperCase())) {

            criarElementoNoHtml(i);

        }
    }

}

function pesquisarCategoria() {

    listaProdutos.innerHTML = "";

    for (let i = 0; i < vetDescricao.length; i++) {
        if (vetCategoria[i].toUpperCase().includes(inPesquisa.value.toUpperCase())) {

            criarElementoNoHtml(i);


        }
    }

}

function pesquisaEscolhida() {
    var tipoDePesquisa = sltPEsquisas.value;

    switch (tipoDePesquisa) {

        case "produtos":

            btPesquisarCategoria.style.display = "none";
            btPesquisarMarca.style.display = "none";

            btPesquisarProdutos.style.display = "block";

            break;
        case "marca":
            btPesquisarCategoria.style.display = "none";
            btPesquisarProdutos.style.display = "none";

            btPesquisarMarca.style.display = "block";
            break;
        case "categoria":
            btPesquisarMarca.style.display = "none";
            btPesquisarProdutos.style.display = "none";

            btPesquisarCategoria.style.display = "block";
            break;
        default:

            btPesquisarCategoria.style.display = "none";
            btPesquisarMarca.style.display = "none";
            btPesquisarProdutos.style.display = "none";

    }
}