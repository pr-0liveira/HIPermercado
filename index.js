const inPesquisar = document.getElementById ("inPesquisar")
const btPesquisar = document.getElementById ("btPesquisar")
const outResultado = document.getElementById ("outResultado")
const btMostrarCarrinho = document.getElementById("btMostrarCarrinho")
const listaProdutos = document.getElementById("lista-produtos");
const carrinho = document.getElementById("carrinho");

//gerando a lista de produtos
for(let i = 0; i < vetDescricao.length; i++){
    
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

//adiciona produtos no carrinho
var vetCarrinho = [];
function adicionarNoCarrinho(event){
    vetCarrinho.push(Number(event.target.value));
    console.log(vetCarrinho);
}

//mostra os produtos do carrinho
btMostrarCarrinho.addEventListener("click", mostrarCarrinho)
function mostrarCarrinho(){
    carrinho.innerHTML = "";
for(let i = 0; i < vetCarrinho.length; i++){
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

btPesquisar.addEventListener("click", pesquisarElementos)

var vetResultado = []
function pesquisarElementos(){
for (let i = 0; i < vetDescricao.length; i++){
    if(vetDescricao[i].toUpperCase().includes(inPesquisar.value.toUpperCase())){
        vetResultado.push(vetDescricao[i])
    }
}
}