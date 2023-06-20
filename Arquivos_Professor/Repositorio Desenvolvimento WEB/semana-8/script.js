// referências
const minha_div = document.getElementById('colorida');
const input_cor = document.querySelector('body > input[type=color]');
const div_cartoes = document.getElementById('cartoes');

// dados
const meu_array = [1,2,3,4,'casa'];
const meus_objetos = [
    {
        nome: 'um',
        valor: 1,
        descri: 'Imagem do número com fundo vermelho.'
    },
    {
        nome: 'dois',
        valor: 2,
        descri: 'Imagem do número 2 versão com uma visão em diagonal.'
    },
    {
        nome: 'três',
        valor: 3,
        descri: 'Imagem do número 3 desenhada com linha preta.'
    },
    
    
];

// estilo
minha_div.style.height = '1em';
minha_div.style.backgroundColor = 'black';

// evento
function muda_cor(e){
    minha_div.style.backgroundColor = e.target.value;  
}

input_cor.onchange = muda_cor;

// percorrendo vetores

let contador = 0;
while (contador < meu_array.length){
    console.log('while', meu_array[contador]);
    contador++;
}

for (let i = 0; i < meu_array.length; i++){
    console.log('for simplão:', meu_array[i]);
}

meu_array.forEach(
    (ele, indice) => {
        console.log('forEach:', ele, indice);
    }
);

for (const minha_var of meu_array){
    console.log('for of:', minha_var);
}

const novo = meu_array.map(
    function (elemento){
        return elemento + 1;
    }
)

console.log(novo);


// manipulando o array
meus_objetos.forEach(
    (ele) => {
        ele.imagem = 'numero_' + ele.valor + '.jpg';
    }
);

// manipulando o DOM
for (const obj of meus_objetos){
    const img = document.createElement('img');
    img.src = `imagens/${obj.imagem}`;
    img.width = 100;
    div_cartoes.appendChild(img);
}