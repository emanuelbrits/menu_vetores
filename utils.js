import prompt from 'prompt-sync'
const input = prompt()


export function pedir_numero(msg){

    let numero = Number(input(msg))

    while(isNaN(numero)){
        console.log('Por favor, digite um número: ')
        numero = Number(input(': '))
    }

    return numero
}

export function pedir_numero_positivo(){
    
    let numero = Number(input('Digite um número postivo: '))

    while(numero < 0 || isNaN(numero)){
        console.log('Por favor, digite um número positivo: ')
        numero = Number(input(': '))
    }

    return numero
}


export function pedir_numero_negativo(){
    
    let numero = Number(input('Digite um número negativo: '))

    while(numero > 0 || isNaN(numero)){
        console.log('Por favor, digite um número negativo: ')
        numero = Number(input(': '))
    }

    return numero
}

export function pedir_numero_na_faixa(valor1, valor2){

    let numero = Number(input('Digite um número na faixa: '))

    while(numero > valor2 || numero < valor1){
        console.log('Por favor, digite um número na faixa:')
        numero = Number(input(': '))
    }

    return numero
}