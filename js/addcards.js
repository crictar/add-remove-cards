import {getRandomInt} from './random.js'
var numerado=1;
const createCardNode = ()=>{
    const imagen = document.createElement("img")
    // debugger
    imagen.src=`https://source.unsplash.com/random/${getRandomInt()}` 
    const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"
    const parrafo = document.createElement("p")
    parrafo.className = "description"
    const text = document.createTextNode('Carta N°'+numerado)
    parrafo.appendChild(text)
    const card = document.createElement("div")
    card.className="card";
    card.id="card"+numerado;
    numerado=numerado+parseInt(1);
    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(parrafo)

    return card
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