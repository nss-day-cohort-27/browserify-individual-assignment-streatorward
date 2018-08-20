const createPlace = require("./places")
const APIObject = require("../dataManager")



function placesList() {
    APIObject.getPlacesArticles()
        .then(results => {
            results.forEach(places => {
                let placesComponent = createPlace(places.title, places.content, places.id);
                writePlacesToDom(placesComponent);

            })
        });
}

function writePlacesToDom(places) {
    document.querySelector("#placesList").innerHTML += places
}

module.exports = placesList

