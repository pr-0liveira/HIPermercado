const inPesquisa = document.getElementById("inPesquisa");
const btPesquisarProdutos = document.getElementById("btPesquisarProdutos");
const btPesquisarMarca = document.getElementById("btPesquisarMarca");
const btPesquisarCategoria = document.getElementById("btPesquisarCategoria");
const outResultado = document.getElementById("outResultado");
const listaProdutos = document.getElementById("lista-produtos");
const sltPEsquisas = document.getElementById("sltPEsquisas");
const btMostrarCarrinho = document.getElementById("btMostrarCarrinho");
const btPesquisarPorPreco = document.getElementById("btPesquisarPorPreco");
const inValorMinimo = document.getElementById("inValorMinimo");
const inValorMaximo = document.getElementById("inValorMaximo");
const btProdutosBaratos = document.getElementById("btProdutosBaratos");
const sltMenorValor = document.getElementById("sltMenorValor");

//gerando a lista de produtos
for (let i = 0; i < vetDescricao.length; i++) {
    let produto = document.createElement('div');
    produto.className = "produto";
    var infoProduto = document.createElement('h4');
    infoProduto.innerHTML = "Produto: " + vetDescricao[i] +
        "<br>Categoria: " + vetCategoria[i] +
        "<br>Marca: " + vetMarca[i] +
        "<br>Unidade de Medida: " + vetUnidMed[i] +
        "<br>Preço: R$" + vetPreco[i];
    var btAddCarrinho = document.createElement('button');
    btAddCarrinho.textContent = "Adicionar ao Carrinho";
    btAddCarrinho.value = i;
    produto.appendChild(infoProduto);
    produto.appendChild(btAddCarrinho);
    listaProdutos.appendChild(produto);
    btAddCarrinho.addEventListener("click", adicionarNoCarrinho);
}

//adiciona produtos no carrinho
var vetCarrinho = [];
function adicionarNoCarrinho(event) {
    vetCarrinho.push(Number(event.target.value));
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
        let produto = document.createElement('div');
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

var vetCarrinho = [];

function pesquisarProdutos() {
    listaProdutos.innerHTML = "";

    for (let i = 0; i < vetDescricao.length; i++) {
        if (vetDescricao[i].toUpperCase().includes(inPesquisa.value.toUpperCase())) {

            criarElementoNoHtml(i);

        }
    }
}

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
            inPesquisa.style.display = "block"
            btPesquisarCategoria.style.display = "none";
            btPesquisarMarca.style.display = "none";
            btPesquisarProdutos.style.display = "block";

            break;
        case "marca":
            inPesquisa.style.display = "block"
            btPesquisarCategoria.style.display = "none";
            btPesquisarProdutos.style.display = "none";
            btPesquisarMarca.style.display = "block";
            break;
        case "categoria":
            inPesquisa.style.display = "block"
            btPesquisarMarca.style.display = "none";
            btPesquisarProdutos.style.display = "none";
            btPesquisarCategoria.style.display = "block";
            break;
        case "preco":
            inPesquisa.style.display = "none"
            btPesquisarMarca.style.display = "none";
            btPesquisarProdutos.style.display = "none";
            btPesquisarCategoria.style.display = "none";
            inValorMinimo.style.display = "inline-block";
            inValorMaximo.style.display = "inline-block";
            btPesquisarPorPreco.style.display = "block";
            break;
        default:
            btPesquisarCategoria.style.display = "none";
            btPesquisarMarca.style.display = "none";
            btPesquisarProdutos.style.display = "none";
            inValorMinimo.style.display = "none";
            inValorMaximo.style.display = "none";
            btPesquisarPorPreco.style.display = "none";
    }
}
//funcionalidade pesquisar por preço
btPesquisarPorPreco.addEventListener("click", pesquisarPorPreco)

function pesquisarPorPreco() {

    listaProdutos.innerHTML = "";

    for (let i = 0; i < vetDescricao.length; i++) {
        if (vetPreco[i] < inValorMaximo.value && vetPreco[i] > inValorMinimo.value) {
            criarElementoNoHtml(i);
        }
    }

}

//desafio
sltMenorValor.addEventListener("change", mostrarProdutoMaisBarato)
function mostrarProdutoMaisBarato() {
    const categoriaEscolhida = sltMenorValor.value
    switch (categoriaEscolhida) {
        case ("mercearia"):
            var vetPrecosMercearia = []
            for (let i = 0; i < vetCategoria.length; i++) {
                if (vetCategoria[i].includes('Mercearia')) {
                    vetPrecosMercearia.push(vetPreco[i])
                }
            }
            for (let i = 0; i < vetPrecosMercearia.length; i++) {
                let menorValor = Number.MAX_VALUE
                if (vetPrecosMercearia[i] < menorValor) {
                    listaProdutos.innerHTML = ""
                    criarElementoNoHtml(i)
                }
            }
            break;
        case ("higiene"):
            let menorValor = Number.MAX_VALUE
            var indMenorValor = -1

            for (let i = 60; i < vetCategoria.length; i++) {
                if (vetCategoria[i].includes('Produtos de Higiene e Limpeza')) {
                    if (vetPreco[i] < menorValor) {
                        menorValor = vetPreco[i]
                        indMenorValor = i
                    }
                }
            }

            listaProdutos.innerHTML = ""
            criarElementoNoHtml(indMenorValor)

            break;
        case ("hortiFruti"):
            let menorValorhorti = Number.MAX_VALUE
            var indMenorValor = -1

            for (let i = 60; i < vetCategoria.length; i++) {
                if (vetCategoria[i].includes('Hortifrutigranjeiros')) {
                    if (vetPreco[i] < menorValorhorti) {
                        menorValorhorti = vetPreco[i]
                        indMenorValor = i
                    }
                }
            }

            listaProdutos.innerHTML = ""
            criarElementoNoHtml(indMenorValor)
            break;
        case ("carnes"):
            let menorValorcarne = Number.MAX_VALUE
            var indMenorValor = -1

            for (let i = 60; i < vetCategoria.length; i++) {
                if (vetCategoria[i].includes('Carnes ( Aves, Bovino e Suíno)')) {
                    if (vetPreco[i] < menorValorcarne) {
                        menorValorcarne = vetPreco[i]
                        indMenorValor = i
                    }
                }
            }

            listaProdutos.innerHTML = ""
            criarElementoNoHtml(indMenorValor)




    }

}





