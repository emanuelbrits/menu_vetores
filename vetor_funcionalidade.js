import prompt from 'prompt-sync'
const input = prompt()
import { pedir_numero, pedir_numero_na_faixa } from './utils.js'
import { Elevar_vetor, Embaralhar_vetor, Inverter_valores, Multiplicar_vetor, Substituir_valores_negativos } from './vetor_utils.js'
export {pedir_numero, pedir_numero_na_faixa} from "./utils.js"

export function positivos(vetor) {

    let qtd_positivos = 0
    let positivos = []

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > 0){
            positivos.push(vetor[i])
            qtd_positivos++
        }
    }

    console.log(positivos)
    if(qtd_positivos > 1){
        console.log(`O vetor possui ${qtd_positivos} valores positivos.`)
    }else{
        console.log(`O vetor possui ${qtd_positivos} valor positivo`)
    }
}


export function negativos(vetor) {

    let qtd_negativos = 0
    let negativos = []

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            negativos.push(vetor[i])
            qtd_negativos++
        }
    }

    console.log(negativos)
    if(qtd_negativos > 1){
        console.log(`O vetor possui ${qtd_negativos} valores negativos.`)
    }else{
        console.log(`O vetor possui ${qtd_negativos} valor negativo`)
    }
}


export function maior_menor(vetor){

    let maior = vetor[0]
    let menor = vetor[0]
    let posicao_maior 
    let posicao_menor

    for (let i = 0; i < vetor.length; i++) {

        if(vetor[i] > maior){
            maior = vetor[i]
            posicao_maior = i+1
        }

        if(vetor[i] < menor){
            menor = vetor[i]
            posicao_menor = i+1
        }
        
    }

    console.log(vetor)
    console.log(`O maior é ${maior} na posição ${posicao_maior}`)
    console.log(`O menor é ${menor} na posição ${posicao_menor}`)
}


export function media_dos_valores(vetor) {

    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    const media = soma / vetor.length

    console.log(vetor)
    console.log(`Média dos valores: ${media.toFixed(1)}`)
}


export function soma_dos_valores(vetor){

    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    console.log(vetor)
    console.log(`Soma dos valores: ${soma.toFixed(1)}`)
}


export function criar_vetor_automatico(tamanho) {

    let vetor = new Array(tamanho)

    let minimo = pedir_numero('Valor mínimo: ')
    let maximo = pedir_numero('Valor máximo: ')

    for(let i = 0; i < tamanho; i++){
        vetor[i] = Number((Math.random() * (maximo - minimo) + minimo).toFixed(1))
    }

    return vetor
}


export function criar_vetor_manual(tamanho) {

    let vetor = new Array(tamanho)

    let minimo = pedir_numero('Valor mínimo: ')
    let maximo = pedir_numero('Valor máximo: ')

    for(let i = 0; i < tamanho; i++){
        vetor[i] = pedir_numero_na_faixa(minimo, maximo)
    }

    return vetor
}

export function atualizar_valores(vetor){

    let opcoes = "1 - Multiplicar"
    opcoes +="\n2 - Elevar" 
    opcoes +="\n3 - Reduzir a uma fração" 
    opcoes +="\n4 - Substituir valores negativos por outro número" 
    opcoes +="\n5 - Inverter vetor" 
    opcoes +="\n6 - Embaralhar vetor"
    opcoes +="\n0 - Retornar-"

    console.log(opcoes)

    let escolha = pedir_numero("Opção: ")

    if(escolha === 1){
        Multiplicar_vetor(vetor)
    }else if(escolha === 2){
        Elevar_vetor(vetor)
    }else if(escolha === 4){
        Substituir_valores_negativos(vetor)
    }else if(escolha === 5){
        Inverter_valores(vetor)
    }else if(escolha === 6){
        Embaralhar_vetor(vetor)
    }
}


export function mostrar_menu(){

    let menu = "-----MENU PARA VETOR-----"

    menu += "\n1 -Criar Vetor-"
    menu += "\n2 -Mostrar Vetor-"
    menu += "\n3 -Valor padrão a um vetor-"
    menu += "\n4 -Mostrar tamanho do vetor-"
    menu += "\n5 -Mostrar maior e menor e suas posições-"
    menu += "\n6 -Média do vetor-"
    menu += "\n7 -Soma do vetor-"
    menu += "\n8 -Números positivos e quantidade-"
    menu += "\n9 -Números negativos e quantidade-"
    menu += "\n10 -Atualizar valores-"
    menu += "\n11 -Adicionar valor-"
    menu += "\n12 -Remover item por valor exato-"
    menu += "\n13 -Remover item por posição-"
    menu += "\n14 -Editar item por posição-"
    menu += "\n0 -Sair-"

    console.log(menu)
}