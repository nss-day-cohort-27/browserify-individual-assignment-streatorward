const APIObject = {}

APIObject.savePlaces = (places) => {
    return fetch("http://localhost:8088/places", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(places)
    })
        .then(response => response.json())
}

APIObject.deletePlacesEntry = (ID) => {
    return fetch(`http://localhost:8088/places/${ID}`, {
        method: "DELETE"
    }).then(response => response.json())
}

APIObject.getPlacesArticles = () => {
    return fetch("http://localhost:8088/places")
        .then(response => response.json())
}

module.exports = APIObject
