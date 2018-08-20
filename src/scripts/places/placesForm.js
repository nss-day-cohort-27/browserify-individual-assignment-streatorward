const placesFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#placesTitle").value = ""
            document.querySelector("#placesContent").value = ""
        }
    },
    renderPlacesForm: {
        value: () => {
            return `
                <fieldset>
                    <label for="placesTitle">Title:</label>
                    <input required type="text" id="placesTitle">
                </fieldset>

                <fieldset>
                    <label for="placesContent">Content:</label>
                    <textarea id="placesContent"></textarea>
                </fieldset>

                <button id="savePlacesButton">Save New Place</button>
            `
        }
    }

})


module.exports = placesFormManager