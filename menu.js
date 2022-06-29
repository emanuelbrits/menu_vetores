import prompt from 'prompt-sync'
import { pedir_numero} from './utils.js'
const input = prompt()
import {maior_menor, media_dos_valores, soma_dos_valores, criar_vetor_automatico, criar_vetor_manual, mostrar_menu, negativos, positivos, atualizar_valores} from "./vetor_funcionalidade.js"
import { adicionar_valor, editar_item_por_posicao, remover_por_posicao, remover_valor_exato } from './vetor_utils.js'

function main(){

    let tamanho
    let pergunta
    let vetor

    mostrar_menu()
    
    let opcao = pedir_numero('Opção: ')

    console.clear()

    while(opcao !== 0){

        if(opcao === 1){
            
            tamanho = pedir_numero('Tamanho: ')
            pergunta = input("Preencher automaticamente: (S/N) ")
            if(pergunta === 'S') {
                vetor = criar_vetor_automatico(tamanho)
            }else if (pergunta === 'N') {
                vetor = criar_vetor_manual(tamanho)
            }

            console.clear()
        }else if(opcao === 2){
            console.log(vetor)
        }else if(opcao === 3){
            vetor.fill(pedir_numero('Digite um valor padrão: '))
        }else if(opcao === 4){
            console.log(`O vetor tem ${tamanho} valores`)
        }else if(opcao === 5){
            maior_menor(vetor)
        }else if(opcao === 6){
            media_dos_valores(vetor)
        }else if(opcao === 7){
            soma_dos_valores(vetor)
        }else if(opcao === 8){
            positivos(vetor)
        }else if(opcao === 9){
            negativos(vetor)
        }else if(opcao === 10){
            atualizar_valores(vetor)
        }else if(opcao === 11){
            adicionar_valor(vetor)
        }else if(opcao === 12){
            vetor = remover_valor_exato(vetor)
        }else if(opcao === 13){
            vetor = remover_por_posicao(vetor)
        }else if(opcao === 14){
            vetor = editar_item_por_posicao(vetor)
        }

        mostrar_menu()
        opcao = pedir_numero('Opção: ')
        console.clear()
    }
}

main()