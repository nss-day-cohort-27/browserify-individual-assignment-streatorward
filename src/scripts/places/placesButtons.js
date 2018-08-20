// const APIObject = require("../dataManager")
// const placesFormManager = require("./placesForm")
// const placesList = require("./places")
// const $ = require("jquery")

// const placesButtons = function () {
//     document.querySelector("#placesContainer").addEventListener("click", evt => {
//         if (evt.target.classList.contains("savePlacesButton")) {
//             let newPlaces = {
//                 title: document.querySelector("#placesTitle").value,
//                 content: document.querySelector("#placesContent").value,
//                 picture: document.querySelector("#placesPicture").value,
//             }
//             APIObject.savePlaces(newPlaces);
//             alert("New place posted!")
//             placesFormManager.clearPlacesForm();
//         }
//         else if (evt.target.classList.contains("postPlaces")) {
//             $("placesContainer").empty();
//             document.querySelector("#placesContainer").innerHTML = placesFormManager.renderPlacesForm();
//         }
//         else if (evt.target.classList.contains("backToPlacesButton")) {
//             $("#placesContainer").empty();
//             APIObject.getPlacesArticles.then((places) => {
//                 placesList(places);
//             })
//         }
//         else if (evt.target.classList.contains("deletePlaces")) {
//             let id = parseInt(evt.target.id.split("--")[1])
//             APIObject.deletePlacesEntry(id).then(() => {
//                 $("#placesContainer").empty();
//                 APIObject.getPlacesArticles.then((places) => {
//                     placesList(places);
//                 })
//             })
//         }
//     })
// }

// module.exports = placesButtons