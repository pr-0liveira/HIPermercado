const inPesquisa = document.getElementById("inPesquisa")
const btPesquisar = document.getElementById("btPesquisar")
const outResultado = document.getElementById("outResultado")
const sltFormadePesquisa = document.getElementById("sltFormadePesquisa")


btPesquisar.addEventListener("click", pesquisarElementos)

switch ()

function pesquisarElementos() {
    var vetProdutosPesquisados = []
    for (let i = 0; i < vetDescricao.length; i++) {
        if (vetDescricao[i].toUpperCase().includes(inPesquisa.value.toUpperCase())) {
            vetProdutosPesquisados.push(vetDescricao[i])
        }
    }
    outResultado.innerHTML = `O produtos disponíveis são: <br> ${vetProdutosPesquisados.join("<br>")} `
}