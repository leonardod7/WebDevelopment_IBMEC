
// Criando uma função para percorrer nossas divs
function altera_divs() {
    const divs = document.querySelectorAll(".minhas_div") // acessando divs
    for (const div of divs) {
        div.style.backgroundColor = 'blue';
        div.style.height = '5em';
        div.style.border = 'solid black 2px';
    }
}

// window.onload = () => {
//     document.getElementById('meu_span').innerText = 7;
//     altera_divs()
// }
// só acontece depois que o documento estiver existindo. Carrega o script primeiro, depois carrega a pagina toda, depois toda o script

// para não precisarmos colocar o window.onload, pois demora mais, colocamos dentro do script o defer:
// <script type= "text/javascript" src="script.js" defer></script>
// Agora rodamos normalmente o código abaixo


const contador = () => {
    const valor = parseInt(document.getElementById('meu_span').innerText);
    document.getElementById('meu_span').innerText = valor + 1;
}
// outro jeito de escrever função. Arrow function
contador()

document.getElementById('meu_span').innerText = 7;
altera_divs();
document.getElementById('meu_botao').onclick = contador;


// atribuindo cor de cada div
for (const e of divs) {
    e.style.backgroundColor = 'yellow'
}

document.querySelectorAll()