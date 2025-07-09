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
        if (vetDescricao[i].toUpperCase().includes(inPesquisa.value.toUpperCase())){


            vetProdutosPesquisados.push(vetDescricao[i])
            vetMarcaProdutosPesquisados.push(vetMarca[i])
            vetCategoriaProdutosPesquisados.push(vetCategoria[i])
            vetUnidProdutosPesquisados.push(vetUnidMed[i])
            vetPreçoProdutosPesquisados.push(vetPreco[i])
        }
    }

}