
// Referências
const minha_div = document.getElementById('colorida');
const input_cor = document.querySelector('body>input[type=color]'); // Podemos pegar o elemento pelo atributo do elemento, sendo bem específico
const div_cartoes = document.getElementById('cartoes');


// dados
const meu_array = [1,2,3,4,'casa'];
const meus_objetos = [
    {
        nome: 'Parte1',
        valor: 1,
        descricao: 'Imagem 1'
    },

    {
        nome: 'Parte2',
        valor: 2,
        descricao: 'Imagem 2'
    },

    {
        nome: 'Parte3',
        valor: 3,
        descricao: 'Imagem 3'
    }

]



// Estilo
minha_div.style.height = '1em';
minha_div.style.backgroundColor = 'black';


// Evento - Estamos criando a função
function muda_cor() {
    minha_div.style.backgroundColor = input_cor.value;
}

// Estamos executando a função
input_cor.onchange = muda_cor;


// percorrendo vetores

let contador = 0;
while (contador <meu_array.length) {
    console.log('while', meu_array[contador]);
    contador = contador +1;
}

// for simples
for (let i = 0; i < meu_array.length; i = i +1) {
    console.log('for simples', meu_array[i]);
}


// for específico para array

meu_array.forEach(
    (elemento, indice) => {
        console.log('forEach', elemento, indice)
    }
)

// outro for
for (const minha_var of meu_array) {
    console.log('for of', minha_var)
}

// map - criando uma arraow function
const novo = meu_array.map(
    (elemento) => {
        return elemento +1;
    }
)

// ou podemos usar:
const novo2 = meu_array.map(
    function (elemento) {
        return elemento + 1;
    }
)

// manipulando o array
meus_objetos.forEach(
    (elemento) => {
        elemento.imagem = 'Parte'+elemento.valor+'.png';
    }
)

// manipulando o dom
for (const objeto of meus_objetos) {
    const img = document.createElement('img');
    img.src = `imagens/${objeto.imagem}`;
    div_cartoes.appendChild(img);
}





