import React from "react";
import cities from citiesnight.json
import './MainContainer.css';


const renderCities = (cities) => {
return `
    <div class="card" style="width: 18rem;">
        <img src=${cities.image} class="card-img-top img-fit" alt=${cities.city}>
        <div class="card-body">
            <h5 class="card-title">${cities.city}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${cities.country}</h6>
            <a class="btn btn-primary" href="details.html" role="button">Details</a>
        </div>
    </div>
    `
// (
//     <div class="container d-flex flex-grow-1">
//     </div>
// )
}

let printEvents = (id_html, array_city) => {
    let selector = document.querySelector(`#${id_html}`)
    let templetes = array_city.map(renderCities).join('')
    selector.innerHTML = templetes
    console.log(templetes);
}
         
let captureData = () =>{
    let inputText = document.querySelector(`#name`).value
    console.log(inputText);
    let eveFiltered = cities.filter(each =>{
        return(
            each.name.toLowerCase().includes(inputText.toLowerCase()))
    })
    console.log(eveFiltered);
    printEvents(eveFiltered);
}

document.querySelector('#name').addEventListener("keyup", ()=> captureData("name", cities))
