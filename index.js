const inPesquisar = document.getElementById ("inPesquisar")
const btPesquisar = document.getElementById ("btPesquisar")
const outResultado = document.getElementById ("outResultado")

//gerando a lista de produtos
var teste = document.getElementById("teste");
for(let i = 0; i < vetDescricao.length; i++){
    var produto = document.createElement('div');
    var infoProduto = document.createElement('h4');
    infoProduto.innerHTML = "Produto: " + vetDescricao[i] +
                            "<br>Categoria: " + vetCategoria[i] +
                            "<br>Marca: " + vetMarca[i] +
                            "<br>Unidade de Medida: " + vetUnidMed[i] +
                            "<br>Preço: R$" + vetPreco[i];
    var btAddCarrinho = document.createElement('button');
    btAddCarrinho.textContent = "Adicionar ao Carrinho";
    produto.appendChild(infoProduto);
    produto.appendChild(btAddCarrinho);
    document.body.insertBefore(produto, teste);
}

btPesquisar.addEventListener("click", pesquisarElementos)

var vetResultado = []
function pesquisarElementos(){
for (let i = 0; i < vetDescricao.length; i++){
    if(vetDescricao[i].toUpperCase().includes(inPesquisar.value.toUpperCase())){
        vetResultado.push(vetDescricao[i])
    }
}
}