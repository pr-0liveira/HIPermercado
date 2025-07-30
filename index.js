const inPesquisa = document.getElementById("inPesquisa");
const btPesquisarProdutos = document.getElementById("btPesquisarProdutos");
const btPesquisarMarca = document.getElementById("btPesquisarMarca");
const btPesquisarCategoria = document.getElementById("btPesquisarCategoria");
const outResultado = document.getElementById("outResultado");
const listaProdutos = document.getElementById("lista-produtos");
const sltPEsquisas = document.getElementById("sltPEsquisas");

btPesquisarProdutos.addEventListener("click", pesquisarProdutos);
btPesquisarMarca.addEventListener("click", pesquisarMarca);
btPesquisarCategoria.addEventListener("click", pesquisarCategoria);

sltPEsquisas.addEventListener("change", pesquisaEscolhida);

var vetCarrinho = [];

function criarElementoNoHtml(indElem){
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


}function pesquisarProdutos() {
    listaProdutos.innerHTML = "";

    for (let i = 0; i < vetDescricao.length; i++) {
        if (vetDescricao[i].toUpperCase().includes(inPesquisa.value.toUpperCase())) {

            criarElementoNoHtml(i);

        }
    }
}

function adicionarNoCarrinho(event) {
    vetCarrinho.push(Number(event.target.value));
    console.log(vetCarrinho);
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

