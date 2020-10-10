// INTERPRETAÇÃO DE CÓDIGO

// 1. A função recebe um valor de 100 e multiplica pela cotação perguntada ao usuário. Retorna este valor para a variável meuDinheiro e a imprime no console.

// 2. A função recebe valores numéricos e calcula a rentabilidade conforme o tipo de investimento informado. Retorna estes valores calculados e os imprime no console. Como o tipo de investimento do segundo montante não existe no switch, a função vai retornar undefined.

// 3. Percorre o array numeros e acrescenta os números pares no array1 e os números ímpares no array2. Depois imoprime o tamanho de cada array no console.

// 4. Seleciona o maior e o menor número da array e os imprime no console.


// LÓGICA DE PROGRAMAÇÃO

// 1. 
// const pessoas = [
//     {nome: "Fulano", idade: 25, corfav: "amarelo"},
//     {nome: "Beltrano", idade: 33, corfav: "roxo"},
//     {nome: "Sicrano", idade: 47, corfav: "verde"}
// ]

// const nomes = (pessoa, idx, array) => { //Retorna o valor de nome do objeto
//     return pessoa.nome
// }
// const listaDeNomes = pessoas.map(nomes) //Mapeia a array de objetos e cria nova array somente com nomes


// const filtroCor = (pessoa) => { //Verifica se a cor favorita é amarelo e retorna true em caso afirmativo
//     if (pessoa.corfav === "amarelo") {
//         return true
//     }
// }
// const somenteAmarelo = pessoas.filter(filtroCor) //Mapeia a array de objetos, filtra somente as pessoas com a cor favorita da função acima e cria nova array


// pessoas.forEach((pessoa) => { //Altera para amarelo a cor favorita de todas as pessoas
//     pessoa.corfav = "amarelo"
// })


// 2. a)F b)F c)T d)T e)T

// 3. O código não faz a tarefa desejada. Irá ficar preso em um loop infinito pois não há um incremento no índice i. Além disso a condição do while deve ser apenas menor que a quantidade desejada.

// const quantidadePares = Number(prompt("Digite a quantidade"))
// for (i=0;i<quantidadePares;i++) {
//     console.log(i*2)3
// }

// 4. 
// const lado1 = Number(prompt("Digite o valor do lado 1"))
// const lado2 = Number(prompt("Digite o valor do lado 2"))
// const lado3 = Number(prompt("Digite o valor do lado 3"))

// function tipoTriangulo (a,b,c) {
//     if (a===b && b===c) {
//         return "Equilátero"
//     } else if (a===c || a===b || b===c) {
//         return "Isóceles"
//     } else {
//         return "Escaleno"
//     }
// }

// console.log(tipoTriangulo(lado1,lado2,lado3))

// 5
// const num1 = Number(prompt("Digite um número"))
// const num2 = Number(prompt("Digite outro número"))

// function compararNumeros(num1,num2) {
//     let diferenca
//     if(num1>num2){
//         console.log(`O número ${num1} é maior que ${num2}`)
//         diferenca=num1-num2
//         console.log("A diferença entre os números é",diferenca)
//     } else if (num2>num1) {
//         console.log(`O número ${num2} é maior que ${num1}`)
//         diferenca=num2-num1
//         console.log("A diferença entre os números é",diferenca)
//     } else {
//         console.log(`O número ${num1} é igual a ${num2}`)
//         console.log("A diferença entre os números é ZERO")
//     }
//     if (num1%num2 === 0){
//         console.log(`Os números ${num1} e ${num2} são divisíveis entre si`)
//     } else {
//         console.log(`Os números ${num1} e ${num2} NÃO são divisíveis entre si`)
//     }

// }

// compararNumeros(num1,num2)


// FUNÇÕES

// 1

// function segundosMaiorMenor (array) {
//     let maiorNum = array[0]
//     let menorNum = array[0]

//     for (let numero of array) {
//         if (numero > maiorNum) {
//             maiorNum = numero
//         }
//         if (numero < menorNum) {
//             menorNum = numero
//         }
//     }

//     const numerosFiltrado = array.filter((numero) => {
//         return (numero !== menorNum && numero !== maiorNum)
//     })

//     maiorNum = numeros[0]
//     menorNum = numeros[0]

//     for (let numero of numerosFiltrado) {
//         if (numero > maiorNum) {
//             maiorNum = numero
//         }
//         if (numero < menorNum) {
//             menorNum = numero
//         }
//     }
    
//     console.log(maiorNum)
//     console.log(menorNum)
// }

// const numeros = [25, 12, 55, 64, 121, 44, 11, 283, 31, 183, 1.1, -10, 1590]

// segundosMaiorMenor(numeros)

// 2
// let alerta = () => {
//     alert("Hello Labenu")
// }

// alerta()


// OBJETOS

// 1
// Arrays e objetos são variáveis que armazenam uma série de informações. A diferença é que objetos permitem guardar essas informações de forma categorizada.

// 2
// function criaRetangulo (lado1,lado2) {
//     console.log("A largura é", lado1)
//     console.log("A altura é", lado2)
//     console.log("O perímetro é",2*(lado1+lado2))
//     console.log("A área é",lado1*lado2)
// }

// l1=Number(prompt("Digite o valor do lado 1"))
// l2=Number(prompt("Digite o valor do lado 2"))

// const calcRetangulo = criaRetangulo(l1,l2)

// 3
// const filmesFavorito = {
//     nome: "Um Sonho de Liberdade",
//     ano: 1995,
//     diretor: "Frank Darabont",
//     ator1: "Tim Robbins",
//     ator2: "Morgan Freeman"
// }

// console.log(`Venha assistir ao filme ${filmesFavorito.nome}, de ${filmesFavorito.ano}, dirigido por ${filmesFavorito.diretor} e estrelado por ${filmesFavorito.ator1} e ${filmesFavorito.ator2}.`)

// 4
// function anonimizarPessoa(pessoa) {
//     const anonimo = {
//         ...pessoa,
//         nome: "ANÔNIMO"
//     }
//     console.log(anonimo)
// }

// const fulano = {
//     nome: "Fulano de Tal",
//     idade: 23,
//     email: "fulano@gmail.com",
//     endereco: "Rua Que Sobe e Desce, s/n"
// }

// console.log(fulano)
// anonimizarPessoa(fulano)


// FUNÇÕES DE ARRAY

// 1
