const placesFormManager = require("./places/placesForm")
const APIObject = require("./dataManager")
const placesList = require("./places/placesEntry")
const $ = require("jquery")

document.querySelector("#placesContainer").innerHTML = placesFormManager.renderPlacesForm()

const listPlaces = () => {
    APIObject.getPlacesArticles()
        .then((allPlaces) => {document.querySelector("#placesList").innerHTML = "", placesList(allPlaces) }
        )
}

listPlaces()

document.querySelector("#placesList").addEventListener("click", evt => {
    if (evt.target.classList.contains("#deletePlaces")) {
        const id = parseInt(evt.target.id.split("--")[1])
        APIObject.deletePlacesEntry(id).then(listPlaces())
    }
})

document.querySelector("#savePlacesButton").addEventListener("click", () => {

    const newPlace = {
        title: document.querySelector("#placesTitle").value,
        content: document.querySelector("#placesContent").value,
    }

    APIObject.savePlaces(newPlace)
        .then(() => {
            placesFormManager.clearForm(),
            document.querySelector("#placesList").innerHTML = "",
            listPlaces()
        })
})

$("body").click(() => {
    if (event.target.className === "delete") {
        event.target.parentElement.remove();
        APIObject.deletePlacesEntry(event.target.id)
    }
})




















