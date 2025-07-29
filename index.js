const inPesquisa = document.getElementById("inPesquisa")
const btPesquisar = document.getElementById("btPesquisar")
const outResultado = document.getElementById("outResultado")
const tbPesquisa = document.getElementById("tbPsquisa")


btPesquisar.addEventListener("click", pesquisarElementos)


function pesquisarElementos() {
    var vetProdutosPesquisados = []
    var vetMarcaProdutosPesquisados = []
    var vetCategoriaProdutosPesquisados = []
    var vetUnidProdutosPesquisados = []
    var vetPreçoProdutosPesquisados = []
    console.log(vetCategoriaProdutosPesquisados)

    for (let i = 0; i < vetDescricao.length; i++) {
        if (vetDescricao[i].toUpperCase().includes(inPesquisa.value.toUpperCase())) {

            vetProdutosPesquisados.push(vetDescricao[i])
            vetMarcaProdutosPesquisados.push(vetMarca[i])
            vetCategoriaProdutosPesquisados.push(vetCategoria[i])
            vetUnidProdutosPesquisados.push(vetUnidMed[i])
            vetPreçoProdutosPesquisados.push(vetPreco[i])
            for (let i = 0; i < vetDescricao.length; i++) {
                var listaProdutos = document.getElementById("lista-produtos");
                var produto = document.createElement('div');
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

            var vetCarrinho = [];
            function adicionarNoCarrinho(event) {
                vetCarrinho.push(Number(event.target.value));
                console.log(vetCarrinho);
            }


        }
    }

}

