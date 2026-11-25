const CHAVE_TOTAL_AVALIACOES = "totalAvaliacoes";
const NOTAS_VALIDAS = ["1", "2", "3", "4", "5"];
const NOMES_RECURSOS = {
    durabilidade: "Durabilidade",
    facilidade: "Facilidade de uso",
    desempenho: "Desempenho",
    design: "Design"
};

function lerTotalSalvo() {
    const valor = Number(localStorage.getItem(CHAVE_TOTAL_AVALIACOES));
    if (!Number.isInteger(valor) || valor < 0) {
        return 0;
    }
    return valor;
}

function parametrosObrigatoriosValidos(parametros) {
    const produto = parametros.get("produto");
    const nota = parametros.get("nota");
    const instalacao = parametros.get("instalacao");
    const lista = typeof produtos === "undefined" ? [] : produtos;
    const produtoConhecido = lista.some((item) => item.id === produto);
    const notaConhecida = NOTAS_VALIDAS.includes(nota);
    const dataConhecida = /^\d{4}-\d{2}-\d{2}$/.test(instalacao || "");

    return produtoConhecido && notaConhecida && dataConhecida;
}

function nomeDoProduto(id) {
    const lista = typeof produtos === "undefined" ? [] : produtos;
    const produto = lista.find((item) => item.id === id);
    return produto ? produto.nome : id;
}

function formatarData(dataIso) {
    const partes = dataIso.split("-");
    if (partes.length !== 3) {
        return dataIso;
    }
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function preencherResumo(parametros) {
    const produto = document.querySelector("#resumo-produto");
    const nota = document.querySelector("#resumo-nota");
    const instalacao = document.querySelector("#resumo-instalacao");
    const recursos = document.querySelector("#resumo-recursos");
    const comentario = document.querySelector("#resumo-comentario");
    const usuario = document.querySelector("#resumo-usuario");
    const nomes = parametros.getAll("recursos").map((valor) => NOMES_RECURSOS[valor] || valor);
    const textoComentario = parametros.get("comentario");
    const textoUsuario = parametros.get("usuario");

    produto.textContent = nomeDoProduto(parametros.get("produto"));
    nota.textContent = `${parametros.get("nota")} de 5`;
    instalacao.textContent = formatarData(parametros.get("instalacao"));
    recursos.textContent = nomes.length > 0 ? nomes.join(", ") : "Nenhum recurso marcado";
    comentario.textContent = textoComentario ? textoComentario : "Não informado";
    usuario.textContent = textoUsuario ? textoUsuario : "Não informado";
}

function registrarAvaliacao() {
    const parametros = new URLSearchParams(window.location.search);
    const mensagem = document.querySelector("#mensagem");
    const totalElemento = document.querySelector("#total");
    const resumo = document.querySelector("#resumo");
    let total = lerTotalSalvo();

    if (parametrosObrigatoriosValidos(parametros)) {
        total += 1;
        localStorage.setItem(CHAVE_TOTAL_AVALIACOES, String(total));
        mensagem.textContent = "Avaliação enviada. Obrigado por compartilhar sua experiência.";
        preencherResumo(parametros);
        resumo.hidden = false;
    } else {
        mensagem.textContent = "Nenhuma avaliação nova foi contada. Envie o formulário para registrar uma avaliação.";
        resumo.hidden = true;
    }

    totalElemento.textContent = String(total);
}

registrarAvaliacao();
