//variáveis
let num_01
let num_02
let escolha
var nome, menos, vezes, dividir

// num_01 = parseFloat(prompt('Digite o primeiro numero').replace(',', '.'))
// console.log(num_01)
// num_02 = parseFloat(prompt('Digite o segundo numero').replace(',', '.'))
// console.log(num_02)

// escolha = prompt("escolha a operação:\n Soma 1\n Subtração 2\n multiplicação 3\n divisão 4")

switch (escolha) {
    case '1':
        soma(num_01, num_02)
        break
    case '2':
        menos(num_01, num_02)
        break
    case '3':
        vezes(num_01, num_02)
        break
    case '4':
        dividir(num_01, num_02)
        break
        default:
            // window.alert(escolha + 'está opção não é valida')
}

function soma(numero_1, numero_2)
{
    mais = numero_1 + numero_2
    console.log(mais);
}

function menos(numero_1, numero_2)
{
    menos = numero_1 - numero_2
    console.log(menos);
}

function vezes(numero_1, numero_2)
{
    vezes = numero_1 * numero_2
    console.log(vezes);
}

function dividir(numero_1, numero_2)
{
    if(numero_2 == 0){
        window.alert('O segundo numero é 0 e então nao pode ser dividido')
     } else{
        dividir = numero_1 / numero_2
        console.log(dividir);
    }
}
