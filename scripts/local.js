/* Valores estáticos, iguais aos exibidos na seção Clima */

const temperatura = 8;
const velocidadeVento = 12;

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + 0.6215 * temperatura - 11.37 * velocidadeVento ** 0.16 + 0.3965 * temperatura * velocidadeVento ** 0.16;
}

/* Só calcula com até 10 °C e vento acima de 4,8 km/h */

const elementoSensacao = document.getElementById("sensacao");

if (elementoSensacao) {
    if (temperatura <= 10 && velocidadeVento > 4.8) {
        const sensacao = calcularSensacaoTermica(temperatura, velocidadeVento);
        elementoSensacao.textContent = `${sensacao.toFixed(1).replace(".", ",")} °C`;
    } else {
        elementoSensacao.textContent = "N/A";
    }
}

/* Ano atual e data da última modificação */

const elementoAno = document.getElementById("anoatual");
const elementoModificacao = document.getElementById("ultimaModificacao");

if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}

if (elementoModificacao) {
    elementoModificacao.textContent = `Última modificação: ${document.lastModified}`;
}
