const inPesquisa = document.getElementById("inPesquisa");
const btPesquisarProdutos = document.getElementById("btPesquisarProdutos");
const btPesquisarMarca = document.getElementById("btPesquisarMarca");
const btPesquisarCategoria = document.getElementById("btPesquisarCategoria");
const listaProdutos = document.getElementById("lista-produtos");
const sltPEsquisas = document.getElementById("sltPEsquisas");
const btMostrarCarrinho = document.getElementById("btMostrarCarrinho");
const outValorTotalCar = document.getElementById("outValorTotalCar");
const btPesquisarPorPreco = document.getElementById("btPesquisarPorPreco");
const inValorMinimo = document.getElementById("inValorMinimo");
const inValorMaximo = document.getElementById("inValorMaximo");
const sltMenorValor = document.getElementById("sltMenorValor");

//gerando a lista de produtos
for (let i = 0; i < vetDescricao.length; i++) {
    criarElementoNoHtml(i);
}

//adiciona produtos no carrinho
var vetCarrinho = [];
var valorTotal = 0;
function adicionarNoCarrinho(event)  {
    vetCarrinho.push(Number(event.target.value));
    valorTotal += vetPreco[event.target.value];
    outValorTotalCar.innerHTML = "Valor total:<br>R$" + valorTotal.toFixed(2);
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
        for  (let i = 0; i < vetCarrinho.length; i++)  {
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
    var imgProduto = document.createElement('img');
    imgProduto.className = "imagem-produto";
    if(vetDescricao[indElem].includes("Achocolatado")){
        imgProduto.src = "imagens/achocolatado.png";
    } else if(vetDescricao[indElem].includes("Açúcar") || vetDescricao[indElem].includes("Sal")){
        imgProduto.src = "imagens/acucar.png";
    } else if(vetDescricao[indElem].includes("Arroz")){
        imgProduto.src = "imagens/arroz.png";
    } else if(vetDescricao[indElem].includes("Café") || vetDescricao[indElem].includes("Pão")){
        imgProduto.src = "imagens/cafe.png";
    } else if(vetDescricao[indElem].includes("Ervilha")){
        imgProduto.src = "imagens/ervilha.jpeg";
    } else if(vetDescricao[indElem].includes("Tomate")){
        imgProduto.src = "imagens/tomate.jpeg";
    } else if(vetDescricao[indElem].includes("Farinha")){
        imgProduto.src = "imagens/trigo.jpeg";
    } else if(vetDescricao[indElem].includes("Feijão") || vetDescricao[indElem].includes("Lã")){
        imgProduto.src = "imagens/feijao.png";
    } else if(vetDescricao[indElem].includes("Leite")){
        imgProduto.src = "imagens/leite.jpg";
    } else if(vetDescricao[indElem].includes("Macarrão") || vetDescricao[indElem].includes("Alface")){
        imgProduto.src = "imagens/macarrao.jpg";
    } else if(vetDescricao[indElem].includes("Alho") || vetDescricao[indElem].includes("Desinfetante")){
        imgProduto.src = "imagens/Alho.jpeg";
    } else if(vetDescricao[indElem].includes("Amaciante") || vetDescricao[indElem].includes("Água")){
        imgProduto.src = "imagens/amaciante.jpeg";
    } else if(vetDescricao[indElem].includes("Margarina") || vetDescricao[indElem].includes("Detergente")){
        imgProduto.src = "imagens/margarina.jpg";
    } else if(vetDescricao[indElem].includes("Milho") || vetDescricao[indElem].includes("Banana")){
        imgProduto.src = "imagens/banana.jpeg";
    } else if(vetDescricao[indElem].includes("Óleo") || vetDescricao[indElem].includes("Vinagre")){
        imgProduto.src = "imagens/vinagre.jpeg";
    } else if(vetDescricao[indElem].includes("Sardinha") || vetDescricao[indElem].includes("Sabão")){
        imgProduto.src = "imagens/sardinha.jpeg";
    } else if(vetDescricao[indElem].includes("Tempero") || vetDescricao[indElem].includes("Cebolinha")){
        imgProduto.src = "imagens/cebolinha.jpeg";
    } else if(vetDescricao[indElem].includes("Absorvente") || vetDescricao[indElem].includes("Sabonete")){
        imgProduto.src = "imagens/sabonete.jpeg";
    } else if(vetDescricao[indElem].includes("Creme") || vetDescricao[indElem].includes("Limão")){
        imgProduto.src = "imagens/limao.jpeg";
    } else if(vetDescricao[indElem].includes("Papel")){
        imgProduto.src = "imagens/papel-higienico.jpeg";
    } else if(vetDescricao[indElem].includes("Batata")){
        imgProduto.src = "imagens/batata.jpeg";
    } else if(vetDescricao[indElem].includes("Cebola")){
        imgProduto.src = "imagens/cebola.jpeg";
    } else if(vetDescricao[indElem].includes("Cenoura")){
        imgProduto.src = "imagens/cenoura.jpeg";
    } else if(vetDescricao[indElem].includes("Pepino")){
        imgProduto.src = "imagens/pepino.jpeg";
    } else if(vetDescricao[indElem].includes("Ovos")){
        imgProduto.src = "imagens/ovos.jpeg";
    } else if(vetCategoria[indElem].includes("Carnes")){
        imgProduto.src = "imagens/carne.jpeg";
    }
    var btAddCarrinho = document.createElement('button');
    btAddCarrinho.textContent = "Adicionar ao Carrinho";
    btAddCarrinho.value = indElem;
    produto.appendChild(imgProduto);
    produto.appendChild(infoProduto);
    produto.appendChild(btAddCarrinho);
    listaProdutos.appendChild(produto);
    btAddCarrinho.addEventListener("click", adicionarNoCarrinho);
}
function pesquisarProdutos() {
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
btPesquisarPorPreco.addEventListener("click", pesquisarPorPreco);

function pesquisarPorPreco() {

    listaProdutos.innerHTML = "";

    for (let i = 0; i < vetDescricao.length; i++) {
        if (vetPreco[i] < inValorMaximo.value && vetPreco[i] > inValorMinimo.value) {
            criarElementoNoHtml(i);
        }
    }

}

//desafio
sltMenorValor.addEventListener("change", mostrarProdutoMaisBarato);
function mostrarProdutoMaisBarato() {
    const categoriaEscolhida = sltMenorValor.value;
    switch (categoriaEscolhida) {
        case ("mercearia"):
            var vetPrecosMercearia = []
            for (let i = 0; i < vetCategoria.length; i++) {
                if (vetCategoria[i].includes('Mercearia')) {
                    vetPrecosMercearia.push(vetPreco[i])
                }
            }
            for (let i = 0; i < vetPrecosMercearia.length; i++) {
                let menorValor = Number.MAX_VALUE;
                if (vetPrecosMercearia[i] < menorValor) {
                    listaProdutos.innerHTML = "";
                    criarElementoNoHtml(i);
                }
            }
            break;
        case ("higiene"):
            let menorValor = Number.MAX_VALUE;
            var indMenorValor = -1;

            for (let i = 60; i < vetCategoria.length; i++) {
                if (vetCategoria[i].includes('Produtos de Higiene e Limpeza')) {
                    if (vetPreco[i] < menorValor) {
                        menorValor = vetPreco[i];
                        indMenorValor = i;
                    }
                }
            }

            listaProdutos.innerHTML = "";
            criarElementoNoHtml(indMenorValor);

            break;
        case ("hortiFruti"):
            let menorValorhorti = Number.MAX_VALUE;
            var indMenorValor = -1;

            for (let i = 60; i < vetCategoria.length; i++) {
                if (vetCategoria[i].includes('Hortifrutigranjeiros')) {
                    if (vetPreco[i] < menorValorhorti) {
                        menorValorhorti = vetPreco[i];
                        indMenorValor = i;
                    }
                }
            }

            listaProdutos.innerHTML = "";
            criarElementoNoHtml(indMenorValor);
            break;
        case ("carnes"):
            let menorValorcarne = Number.MAX_VALUE;
            var indMenorValor = -1;

            for (let i = 60; i < vetCategoria.length; i++) {
                if (vetCategoria[i].includes('Carnes ( Aves, Bovino e Suíno)')) {
                    if (vetPreco[i] < menorValorcarne) {
                        menorValorcarne = vetPreco[i];
                        indMenorValor = i;
                    }
                }
            }
            listaProdutos.innerHTML = "";
            criarElementoNoHtml(indMenorValor);
    }
}