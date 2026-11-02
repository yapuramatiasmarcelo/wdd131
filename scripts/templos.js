const botaoMenu = document.querySelector("#menu");
const navegacao = document.querySelector("#navegacao");

botaoMenu.addEventListener("click", () => {
    const menuAberto = navegacao.classList.toggle("open");
    botaoMenu.classList.toggle("open");
    botaoMenu.setAttribute("aria-expanded", String(menuAberto));
    botaoMenu.setAttribute("aria-label", menuAberto ? "Fechar menu" : "Abrir menu");
});

const elementoAno = document.getElementById("anoatual");
const elementoModificacao = document.getElementById("ultimaModificacao");

elementoAno.textContent = new Date().getFullYear();
elementoModificacao.textContent = `Última Modificação: ${document.lastModified}`;
