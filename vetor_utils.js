import prompt from 'prompt-sync'
import { pedir_numero } from './utils.js'
const input = prompt()

export function Multiplicar_vetor(vetor){

    let valor = pedir_numero('Multiplicar por: ')

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = vetor[i] * valor
    }

    console.log(vetor)
}


export function Elevar_vetor(vetor){
    
    let valor = pedir_numero('Elevar por: ')

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number((vetor[i] ** valor).toFixed(1))
    }

    console.log(vetor)
}

export function Substituir_valores_negativos(vetor){

    let minimo = pedir_numero('Valor mínimo: ')
    let maximo = pedir_numero('Valor máximo: ')

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            vetor[i] = Number((Math.random() * (maximo - minimo) + minimo).toFixed(1))
        }
    }

    console.log(vetor)
}

export function Inverter_valores(vetor){

    vetor = vetor.reverse()

    console.log(vetor)
}

export function Embaralhar_vetor(vetor){
    vetor.sort(()=> Math.random() - 0.5)

    console.log(vetor)
}


export function adicionar_valor(vetor){

    const valor = pedir_numero('Adicionar o valor: ')

    vetor.push(valor)

    console.log(vetor)
}

export function remover_valor_exato(vetor){

    const valor = pedir_numero('Remover o valor: ')

    const novo_vetor = []

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] !== valor){
            novo_vetor.push(vetor[i])
        }
    }

    console.log(novo_vetor)

    return novo_vetor
}

export function remover_por_posicao(vetor){

    const posicao = pedir_numero('Remover o valor na posição: ')

    const novo_vetor = []

    for(let i = 0; i < vetor.length; i++){
        if(i !== posicao - 1){
            novo_vetor.push(vetor[i])
        }
    }

    console.log(novo_vetor)

    return novo_vetor
}

export function editar_item_por_posicao(vetor){

    const valor = pedir_numero('Adicionar o valor: ')
    const posicao = pedir_numero('Na posição: ')

    const novo_vetor = []

    for(let i = 0; i < vetor.length; i++){
        if(i !== posicao - 1){
            novo_vetor.push(vetor[i])
        }else{
            novo_vetor.push(valor)
        }
    }

    console.log(novo_vetor)

    return novo_vetor
}