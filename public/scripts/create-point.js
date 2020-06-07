function populateUFs() { /*Função que busca os estados na api do IBGE e insere no select*/ 
    const ufSelect = document.querySelector("select[name=uf]") /*Armazena o name do select em uma variável*/
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(res=>res.json()).then(states=>{
        for (const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}
populateUFs()

function getCities(event) {/*Função que busca as cidades de acordo com a UF na api do IBGE*/
    const citysSelector = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    const ufValue = event.target.value/*Adiciona o valor da UF selecionada em uma variável para deixar a url dinâmica*/
    stateInput.value = event.target.options[event.target.selectedIndex].text/*Armazena o nome da uf em um input escondido*/

    /*Limpa e bloqueia o campo */
    citysSelector.innerHTML = `<option>Selecione a cidade</option>`
    citysSelector.disabled = true 

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    fetch(url).then(res=>res.json()).then(cities=>{
        for (const city of cities) {
            citysSelector.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citysSelector.disabled = false /*Habilita o select de cidade quando selecionada uma UF*/
    })
}
/*Observa e avisa quando o evento de mudança ocorre no select da uf*/
document.querySelector("select[name=uf]").addEventListener("change", getCities)

// Itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    //adicionar ou remover uma classe com javascript
    const itemLi = event.target
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    console.log('ITEM ID: ', itemId)

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId //Isso retornará true ou false
        return itemFound
    })

    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item =>{
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems

    }else{
        selectedItems.push(itemId)
    }

    console.log('selectedItems: ', selectedItems)

    collectedItems.value = selectedItems

}
    

