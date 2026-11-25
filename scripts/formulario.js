function adicionarOpcoesDeProduto(select, lista) {
    lista.forEach((produto) => {
        const opcao = document.createElement("option");
        opcao.value = produto.id;
        opcao.textContent = produto.nome;
        select.append(opcao);
    });
}

const selectProduto = document.querySelector("#produto");

if (selectProduto && typeof produtos !== "undefined") {
    adicionarOpcoesDeProduto(selectProduto, produtos);
}
