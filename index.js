const inPesquisar = document.getElementById ("inPesquisar")
const btPesquisar = document.getElementById ("btPesquisar")
const outResultado = document.getElementById ("outResultado")


btPesquisar.addEventListener("click", pesquisarElementos)

var vetResultado = []
function pesquisarElementos(){
for (let i = 0; i < vetDescricao.length; i++){
    if(vetDescricao[i].toUpperCase().includes(inPesquisar.value.toUpperCase())){
        vetResultado.push(vetDescricao[i])
    }
}
}