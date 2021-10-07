import {getRandomInt} from './random.js'
var numerado=1;
const createCardNode = ()=>{
    const carta = document.createElement("article")
    carta.className = "payment-card"
    carta.id="card"+numerado;
    numerado=numerado+parseInt(1);
    const hero = document.createElement("img")
    hero.className = "payment-card-hero"
    hero.src = "./images/illustration-hero.svg"
    const titulo = document.createElement("h1")
    titulo.className = "main-h1"
    const textTitulo = document.createTextNode('Order Summary')
    titulo.appendChild(textTitulo)
    const parrafo = document.createElement("p")
    parrafo.className = "main-p"
    const textParrafo = document.createTextNode('You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!')
    parrafo.appendChild(textParrafo)
    
    const plan = document.createElement("section")
    plan.className= "plan"
    const logo = document.createElement("div")
    const logoMusica = document.createElement("img")
    logoMusica.src = "./images/icon-music.svg"
    logo.appendChild(logoMusica)
    const tipo = document.createElement("div")
    tipo.className = "plan_type-plan"
    const anualPlan = document.createElement("span")
    const textPlan = document.createTextNode('Annual Plan')
    anualPlan.appendChild(textPlan)
    const year = document.createElement("span")
    const textYear = document.createTextNode('$59.99/year')
    year.appendChild(textYear)
    tipo.appendChild(anualPlan)
    tipo.appendChild(year)
    const change = document.createElement("div")
    const changeLink = document.createElement("a")
    changeLink.href= "/"
    const changeText = document.createTextNode('Change')
    changeLink.appendChild(changeText)
    change.appendChild(changeLink)
    plan.appendChild(logo)
    plan.appendChild(tipo)
    plan.appendChild(change)

    

    carta.appendChild(hero)
    carta.appendChild(titulo)
    carta.appendChild(parrafo)
    carta.appendChild(plan)
    return carta
}
const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector("#button1") 
const removeCardButton = document.querySelector("#button2") 
const addCard=()=>{
    mountNode.appendChild(createCardNode())
}
const removeCard=()=>{
    if (numerado>1) {
        numerado=numerado-parseInt(1);
        var carta = document.getElementById("card"+numerado);
        mountNode.removeChild(carta)
    }    
}
addCardButton.addEventListener('click', addCard)
removeCardButton.addEventListener('click', removeCard)