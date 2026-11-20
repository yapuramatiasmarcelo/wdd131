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

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Curitiba Brasil",
        localizacao: "Curitiba, Paraná, Brasil",
        consagracao: "2008, 1 de junho",
        area: 27850,
        urlDaImagem: "https://www.churchofjesuschrist.org/imgs/600979467c5e3fb65a6cc793d53ad313e73e569d/full/%2C500/0/default"
    },
    {
        nomeDoTemplo: "Salta Argentina",
        localizacao: "Salta, Argentina",
        consagracao: "2024, 16 de junho",
        area: 27111,
        urlDaImagem: "https://www.churchofjesuschrist.org/imgs/8e15bd7acc3011ee8ba6eeeeac1e21a99d31a47f/pct%3A0%2C7.8%2C100%2C84.4/%211024%2C576/0/default"
    },
    {
        nomeDoTemplo: "São Paulo Brasil",
        localizacao: "São Paulo, São Paulo, Brasil",
        consagracao: "1978, 30 de outubro",
        area: 55000,
        urlDaImagem: "https://www.churchofjesuschrist.org/imgs/e2ed87c928912468fe3882ef21c7851b6b9bb0ac/full/800%2C/0/default"
    },
    {
        nomeDoTemplo: "Santos Brasil",
        localizacao: "Santos, São Paulo, Brasil",
        consagracao: "Ainda não consagrado",
        area: 23000,
        urlDaImagem: "https://newsroom.churchofjesuschrist.org/media/960x720/2024-11-19-Santos-Exterior-01.jpg"
    },
    {
        nomeDoTemplo: "Córdoba Argentina",
        localizacao: "Córdoba, Argentina",
        consagracao: "2015, 17 de maio",
        area: 34369,
        urlDaImagem: "https://www.churchofjesuschrist.org/imgs/ba875c23c4b564d1b633cfe2521b1a4252fee3b7/full/800%2C/0/default"
    }
];

const galeriaTemplos = document.querySelector("#galeria-templos");

function criarCartoesTemplos(listaTemplos) {
    galeriaTemplos.replaceChildren();

    listaTemplos.forEach((templo) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao-templo");

        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = templo.nomeDoTemplo;
        imagem.loading = "lazy";

        const nome = document.createElement("h2");
        nome.textContent = templo.nomeDoTemplo;

        const localizacao = document.createElement("p");
        localizacao.textContent = `Localização: ${templo.localizacao}`;

        const consagracao = document.createElement("p");
        consagracao.textContent = templo.consagracao === "Ainda não consagrado"
            ? `Consagração: ${templo.consagracao}`
            : `Consagrado: ${templo.consagracao}`;

        const area = document.createElement("p");
        area.textContent = templo.consagracao === "Ainda não consagrado"
            ? `Área prevista: ${templo.area.toLocaleString("pt-BR")} pés quadrados`
            : `Área: ${templo.area.toLocaleString("pt-BR")} pés quadrados`;

        cartao.append(imagem, nome, localizacao, consagracao, area);
        galeriaTemplos.appendChild(cartao);
    });
}

const linkAntigo = navegacao.querySelectorAll("a")[1];

linkAntigo.addEventListener("click", (evento) => {
    evento.preventDefault();

    const templosAntigos = templos.filter((templo) => {
        const correspondenciaAno = templo.consagracao.match(/^(\d{4})/);
        return correspondenciaAno !== null && Number(correspondenciaAno[1]) < 1900;
    });

    criarCartoesTemplos(templosAntigos);
    console.log(`Cartões antigos exibidos: ${galeriaTemplos.querySelectorAll(".cartao-templo").length}`);
});

const linkPaginaInicial = navegacao.querySelectorAll("a")[0];

linkPaginaInicial.addEventListener("click", (evento) => {
    evento.preventDefault();
    criarCartoesTemplos(templos);
    console.log(`Cartões exibidos: ${galeriaTemplos.querySelectorAll(".cartao-templo").length}`);
});

const linkNovo = navegacao.querySelectorAll("a")[2];

linkNovo.addEventListener("click", (evento) => {
    evento.preventDefault();

    const templosNovos = templos.filter((templo) => {
        const correspondenciaAno = templo.consagracao.match(/^(\d{4})/);
        return correspondenciaAno !== null && Number(correspondenciaAno[1]) > 2000;
    });

    criarCartoesTemplos(templosNovos);
    console.log(`Cartões novos exibidos: ${galeriaTemplos.querySelectorAll(".cartao-templo").length}`);
});

const linkGrande = navegacao.querySelectorAll("a")[3];

linkGrande.addEventListener("click", (evento) => {
    evento.preventDefault();

    const templosGrandes = templos.filter((templo) => templo.area > 90000);

    criarCartoesTemplos(templosGrandes);
    console.log(`Cartões grandes exibidos: ${galeriaTemplos.querySelectorAll(".cartao-templo").length}`);
});

const linkPequeno = navegacao.querySelectorAll("a")[4];

linkPequeno.addEventListener("click", (evento) => {
    evento.preventDefault();

    const templosPequenos = templos.filter((templo) => templo.area < 10000);

    criarCartoesTemplos(templosPequenos);
    console.log(`Cartões pequenos exibidos: ${galeriaTemplos.querySelectorAll(".cartao-templo").length}`);
});

criarCartoesTemplos(templos);
console.log(`Cartões exibidos: ${galeriaTemplos.querySelectorAll(".cartao-templo").length}`);
