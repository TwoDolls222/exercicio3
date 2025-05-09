class Animal {
    constructor(patas, olhos) {
        this.patas = patas;
        this.olhos = olhos;
    }
}

// Subclasse Cachorro
class Cachorro extends Animal {
    constructor(patas, olhos, raca, cor) {
        super(patas, olhos);
        this.raca = raca;
        this.cor = cor;
    }

    descricao() {
        return `Raça: ${this.raca} | Cor: ${this.cor} | Patas: ${this.patas} | Olhos: ${this.olhos}`;
    }
}
const racas = {
    "Labrador": {
        patas: 4,
        olhos: 2,
        cores: ["Amarelo", "Chocolate", "Preto"],
        descricao: "O Labrador é amigável, inteligente e muito leal.",
        imagem: "file:///C:/Users/Jhonatan/Desktop/curso/presencial/ex3/pt4/imgs/labrador-tudo-sobre-a-raca-768x576.jpg"
    },
    "Poodle": {
        patas: 4,
        olhos: 2,
        cores: ["Branco", "Preto", "Cinza"],
        descricao: "O Poodle é elegante, inteligente e muito treinável.",
        imagem: "file:///C:/Users/Jhonatan/Desktop/curso/presencial/ex3/pt4/imgs/istockphoto-490849353-612x612.jpg"
    },
    "Pastor Alemão": {
        patas: 4,
        olhos: 2,
        cores: ["Preto e Marrom", "Preto", "Cinza"],
        descricao: "O Pastor Alemão é corajoso, confiante e protetor.",
        imagem: "file:///C:/Users/Jhonatan/Desktop/curso/presencial/ex3/pt4/imgs/images.jpg"
    },
    "Bulldog": {
        patas: 4,
        olhos: 2,
        cores: ["Branco", "Marrom", "Tigrado"],
        descricao: "O Bulldog é gentil, calmo e um excelente companheiro.",
        imagem: "file:///C:/Users/Jhonatan/Desktop/curso/presencial/ex3/pt4/imgs/english-bulldog-5422018_1280.jpg"
    }
};
const racaSelect = document.createElement('select');
const corSelect = document.createElement('select');
const botao = document.createElement('button');
const info = document.createElement('div');
const imagem = document.createElement('img');
racaSelect.innerHTML = `<option disabled selected>Escolha a raça</option>`;
for (let raca in racas) {
    let opt = document.createElement('option');
    opt.value = raca;
    opt.textContent = raca;
    racaSelect.appendChild(opt);
}
racaSelect.addEventListener('change', () => {
    corSelect.innerHTML = `<option disabled selected>Escolha a cor</option>`;
    const cores = racas[racaSelect.value].cores;
    cores.forEach(cor => {
        let opt = document.createElement('option');
        opt.value = cor;
        opt.textContent = cor;
        corSelect.appendChild(opt);
    });
});
botao.textContent = "Criar Cachorro";
botao.onclick = () => {
    const raca = racaSelect.value;
    const cor = corSelect.value;

    if (!raca || !cor) {
        alert("Selecione uma raça e uma cor.");
        return;
    }

    const dados = racas[raca];
    const novoCachorro = new Cachorro(dados.patas, dados.olhos, raca, cor);

    info.innerHTML = `
      <div class="info">
        <h3>${raca}</h3>
        <p>${dados.descricao}</p>
        <p>${novoCachorro.descricao()}</p>
      </div>
    `;
    imagem.src = dados.imagem;
    imagem.alt = `Imagem de um ${raca}`;
};
document.body.appendChild(racaSelect);
document.body.appendChild(corSelect);
document.body.appendChild(botao);
document.body.appendChild(info);
document.body.appendChild(imagem);