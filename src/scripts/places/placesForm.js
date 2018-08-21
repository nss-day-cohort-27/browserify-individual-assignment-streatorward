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
            <section class="hero is-dark is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Streator's Favorite Places
                        </h1>
                    </div>
                </div>
            </section>
                <fieldset>
                    <label class="title is-2" for="placesTitle">Title:</label>
                            <div class="column is-half">
                                <input id="placesTitle" class="input is-medium" type="text" placeholder="Location Name">
                            </div>
                        </div>
                </fieldset>

                <fieldset>
                    <label class="title is-2" for="placesContent">Content:</label>
                            <div class="column is-half">
                                <textarea id="placesContent" class="textarea is-medium" type="text" placeholder="All About the Place!"></textarea>
                            </div>
                        </div>
                </fieldset>

                <a class="button is-dark is-normal" id="savePlacesButton">Save New Place</a>
            `
        }
    }

})


module.exports = placesFormManager




