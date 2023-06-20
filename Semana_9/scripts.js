

// enriquecendo o array
meus_objetos.forEach(
    (elemento) => {
        elemento.caminho = `Parte${elemento.valor}.png`;
    }
);

// referência
const body = document.getElementsByTagName('body')[0];

// criando elementos tag
const div_cartoes = document.createElement('div');
div_cartoes.id = 'div_cartoes';

const input_busca = document.createElement('input');
input_busca.type = 'text';

const div_detalhe = document.createElement('div');
div_detalhe.id = 'detalhe'


body.appendChild(input_busca);
body.appendChild(div_cartoes);
body.appendChild(div_detalhe);


const manipula_click = (evento) => {
    const clicada = evento.target;
    criar_cartao(clicada, div_detalhe);
}

const criar_cartao = (entrada, alvo) => {

    const container = document.createElement('div');
    const imagem = document.createElement('img');
    const legenda = document.createElement('h5');

    imagem.src = entrada.src;
    imagem.style.width = '150px';

    legenda.innerHTML = entrada.alt;

    container.style.textAlign = 'center';
    container.style.width = 'fit-content';
    container.style.border = '1px black solid';
    container.style.margin = '0 auto';

    container.appendChild(imagem);
    container.appendChild(legenda);

    // estamos apagando o conteúdo para sempre que clicarmos, ele apagar o conteúdo anterior para não ficar replicando
    alvo.innerHTML = '';

    alvo.appendChild(container);

}


// funcao monta imagem
const monta_imagem = (vetor, alvo) => {

    alvo.innerHTML = '';

    for (const objeto of vetor) {
        const img = document.createElement('img');
        img.src = `imagens/${objeto.caminho}`;
        img.alt = objeto.decricao;
        img.onclick = manipula_click;
        img.onmouseover = (e) => {e.target.style.width = '150px'};
        img.onmouseleave = (e) => {e.target.style.width = '100px'};
        img.width = 500;
        alvo.appendChild(img);
    }
}

monta_imagem(meus_objetos, div_cartoes);

input_busca.onchange = (evento) => {
    const valor = evento.target.value;
    const novo_vetor = meus_objetos.filter( (e) => e.descricao.includes(valor));
    monta_imagem(novo_vetor, div_cartoes);

}

// executar o filtro apenas quando a string de busca for maior que 2
// ignorar maiúsculas e minúsculas