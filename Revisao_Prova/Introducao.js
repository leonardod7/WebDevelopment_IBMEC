// ***************************************************************************************************************************************

// Utilizamos duas barras para definirmos comentários em uma linha

/*
Para comentários de duas ou mais linhas
 */

// Definindo uma entrada de dados com o uso do: prompt
// Importante lembrar que o comando prompt cria variáveis do tipo string, exceto se houver uma função de conversão de dados como o Number()
const nome = prompt("Qual é o seu nome?")

// Mostrando mensagem de alerta com uma variável declarada utilizando o sinal de adição
alert("Olá" + nome)

// Mostrando mensagem de alerta com uma variável declarada crases ` ` e ${}
alert(`Nossa segunda opção ${nome}`)

// Mostrando saída de resultado com console.log
console.log(nome)

// ***************************************************************************************************************************************
/*  Tipos de Dados e conversões de tipos */

// Operações envolvendo strings e números

const a = "20"
const b = a * 2
const c = a / 2
const d = a - 2
const e = a + 2
alert("e:" + e)

// Observe que a constante a definida está como do tipo string. Nas operações de multiplicação, divisão e subtração
// a linguagem converte esse texto em número e o valor retornado está de acordo com o esperado. Contudo, quando realizamos
// a adição, o valor de retorno é diferente do padrão, pois a linguagem concatena (+) o texto com o número, algo semelhante
// ao que foi feitono exemplo alert("Olá" + nome). Podemos ao invés disso declarar essa variável a como valor ou fazer a conversão
// dessa string para número

// Opções para converção
Number() // Converte em número
parseInt() // Converte em um número inteiro
parseFloat() // Converte em um float
toString() // Converte número em uma string

const e = Number(e) + 2 // Observe que estamos convertendo o código que antes estava escrito com um valor de string const e = a + 2

// Em JavaScript não é obrigatório definir o tipo de variável na sua declaração. Ela assume um tipo no momento da atribuição de valor à variável

// Tipos de Variáveis

const fruta = "Banana"
const preco = 3.50
const levar = true
let novoValor // tipo não definido, não atribuímos nenhuma informação para essa variável
console.log(typeof fruta)
console.log(typeof preco)
console.log(typeof levar)
console.log(typeof novoValor)


// A declaração de uma variável/constante com const exige uma atribuição de valor - que se manterá fixo durante o programa ou blco de código onde foi
// declarada.

// Verificando se o tipo da variável é do tipo number, inteiro ou decimal
console.log(Number.isInteger(12)) // true
console.log(Number.isInteger(3.50)) // false

// Exercício 1) : Calculando o dobro de um número

const num = prompt("Informe o número:")
const dobro = num * 2
alert(`O resultado é ${dobro}`)

// Observe que como estamos fazendo uma operação de multiplicação, não precisamos converter o valor de num para uma variável do tipo Number
// Contudo, se quisermos calcular o dobro de um número de uma operação de adição, devemos adaptar: const num = Number(prompt("Informe o número:"))

// Exercício 2) : Calculando o soma de dois número

const num1 = Number(prompt("Informe seu número:"))
const num2 = Number(prompt("Informe seu número:"))
const soma = num1 + num2
alert(`a soma é ${soma}`)

// Exercício 2) : Elaborar um programa que lei o valor de um Jantar e calcule e informa a taxa do garçom (10%)

const taxa = 0.10
const jantar = Number(prompt("Informe o valor do jantar:"))
const taxaGarcom = jantar * taxa
const totalPagar = jantar + taxaGarcom
alert(`Taxa do garçom é de : ${taxaGarcom.toFixed(2)}\nTotal R$: ${totalPagar.toFixed(2)}`)

// Método to.Fixed() serve para apresentar o número de casas decimais (semelhante ao round no python)
// o \n serve para fazer a quebra de linha


// Exercício 3) : Calculando a duração de horas de uma viagem

const dias = Number(prompt("Quanto dias?"))
const horas = Number(prompt("Quantas horas:"))
const total = horas + (dias * 24)
alert(`o Total de horas foi de: ${total}`)


// Exercício 4) : Calcule um programa que recebe um número e calcule os seus vizinhos (número anterior e posterior)

const num = Number(prompt("Digite o seu número"))
const vizInferior = num - 1
const vizPosterior = num + 1
alert(`o Vizinho anterior ao número ${num} é: ${vizInferior}` )
alert(`o Vizinho posterior ao número ${num} é: ${vizPosterior}` )

// Exercício 5) : Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la por ela
const valor = parseFloat(prompt("Informe o valor da conta:"))
const clientes = Number(prompt("Informe a quantidade de clientes que irá dividir a conta:"))
const total = valor / clientes
alert(`O Valor da conta por pessoa foi de: ${total}. O valor foi dividido por ${clientes} clientes`)


// Funções matemáticas
const valorAbsoluto = Math.abs(-3) // Retorna o valor absoluto de um número, ou seja, se o valor for negativo ele será convertido para positivo
const próximovalorInteiro = Math.ceil(4.2) // Arredonda o valor para cima. Dessa forma ele aredonda o valor para o próximo número inteiro
const valorInteiro = Math.floor(7.9) // Arredonda o valor para baixo, retornando a parte inteira do número
const valorElevado = Math.pow(3, 2) // retorna a base elevada ao expoente
const aleatorio = Math.random() // Retorna um valor aleatório de 0 até 1
const arredondar = Math.round(2.7) // arredonda o valor para o inteiro mais próximo
const raiz = Math.sqrt(16) // Retorna a raiz quadrada


/*
Operadores Relacionais, utilizados nas estruturas condicionais
 */

// define uma condicao simples
// if (condicao) {
//     comandos
// }

// // define uma condição de if..else
// if (condicao) {
//     comandos V
// } else {
//     comandos F
// }
//
// // Defini múltiplas condicoes
// if (condicao 1) {
//     comando 1
// } else if (condicao 2) {
//     comando 2
// } else {
//     comando 3
// }

/*
Operadores lógios - Definição de mais de uma condição em um programa.
 */

// !    Not. Indica negação. Inverte o resultado de uma comparação
// &&   And. Indica conjunção. Retorna verdadeiro quando todas as comparações forem verdadeiras
// ||   Or. Indica disjunção. Retorna verdadeiro se, no mínimo, uma das condições definidas for verdadeira

// A verdade da negação é representada pelo símbolo (!). Ela pode ser aplicada a apenas uma proposição
// A negação é o mais simples dos operadores relacionais. Ela inverte o resultado (verdadeiro ou falso). Equivale ao sinal de diferente (!=) quando puder
// ser aplicada
// Ex.: if (!cor == "Azul) { ........} se cor não for igual a azul
// Ex.: if (cor != "Azul) { ........} se cor for diferente de azul
const cor = "Azul"
const ano = 2012

if (!cor == "Azul") {
    console.log("Verdadeiro")
} else (console.log("Falso"))

if (cor != "Azul") {
    console.log("Verdadeiro")
} else (console.log("Falso"))

if (cor != "Vermelho" && ano != 2013) {
    console.log("Verdadeiro")
} else (console.log("Falso"))

if (cor == "Cinza" && ano < 2013) {
    console.log("Verdadeiro")
} else (console.log("Falso"))

if (cor == "Cinza" && ano < 2013) {
    console.log("Verdadeiro")
} else (console.log("Falso"))

if (ano >= 2012 && ano <= 2017) {
    console.log("Verdadeiro")
} else (console.log("Falso"))

if (cor != "Azul" && cor != "Vermelho") {
    console.log("Verdadeiro")
} else (console.log("Falso"))

// já a disjunção (||) reflete uma noção de que pelo menos uma das condições deve ser verdadeira.

if (cor == "Azul" || ano == 2017) {
    console.log("Verdadeiro")
} else (console.log("Falso"))

if (cor == "Azul" || cor == "Branco") {
    console.log("Verdadeiro")
} else (console.log("Falso"))

if ((cor == "Azul" || cor == "Branco") && ano == 2017) {
    console.log("Verdadeiro")
} else (console.log("Falso"))

if (cor == "Azul" && ( ano == 2016 || ano == 2017)) {
    console.log("Verdadeiro")
} else (console.log("Falso"))


/*
let - A declaração de uma variável com let no lugar de const, permite que utilizemos ela em todo o programa. Como a variável peso
está dentro do if, ela só existe dentro desse bloco. E como precisamos dela fora do if, é necessário primeiro declarar a variável
que após a declaração terá o seu conteúdo alterado dentro do if e utilizado no contexto do programa principal.
 */

const masculino = true
const altura = 1.90

let peso // declara a variável peso
if (masculino == true) {
    peso = 22 * Math.pow(altura, 2)
} else {
    peso = 21 * Math.pow(altura, 2)
}

// O seguinte trecho de código também poderia ser utilizado netste programa:

if (masculino == true) {
    const peso = 22 * Math.pow(altura, 2)
} else {
    const peso = 21 * Math.pow(altura, 2)
}





/*
Operadores ternário - Realiza uma atribuição para uma variável com base em uma condição. A condição deve ser inserida após o sinal de atribuição. O primeiro valor
após a "?" é atribuído caso a condição seja verdadeira. O segundo, após os ":", caso a condição seja falsa
 */

const categoria = idade >= 18 ? "Adulto" : "Juvenil"

// A condição acima equivale à seguinte estrutura if... else
let categoria
if (idade >= 18) {
    categoria = "Adulto"
} else {
    categoria = "Juvenil"
}

/*
Switch Case - Ele é útil quando tivermos várias alternativas definidas a partir do conteúdo de uma variável. O comando switch inicia pela definição da variável que escolhe a condição a ser executada.
Os comandos devem ser finalizados por break. Nesse exemplo, o valor da taxa de entrega para os bairros "Fragata"e "Três Vendas"é o mesmo, entao eles devem ser colocados um abaixo do outro.
Caso o conteúo do bairro seja diferente, ele usará como default o valor passado
 */

// Vamos a um exmplo:
const bairro = prompt("Bairro de entrega: ")
let txaEntrega

switch (bairro) {
    case "Centro":
        txaEntrega = 7.00
        break
    case "Fragata":
    case "Três Vendas":
        txaEntrega = 5.00
        break
    case "Laranjal":
        txaEntrega = 8.00
        break
    default:
        txaEntrega = 6.00
}

/*

 */














