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
                            Streator's Fvorite Places
                        </h1>
                    </div>
                </div>
            </section>
                <fieldset>
                    <label for="placesTitle">Title:</label>
                        <div class="field">
                            <div class="control">
                                <input id="placesTitle" class="input is-medium" type="text" placeholder="Location Name">
                            </div>
                        </div>
                </fieldset>

                <fieldset>
                    <label for="placesContent">Content:</label>
                        <div class="field">
                            <div class="control">
                                <textarea id="placesContent" class="textarea is-medium" type="text" placeholder="Medium textarea"></textarea>
                            </div>
                        </div>
                </fieldset>

                <a class="button is-dark is-normal" id="savePlacesButton">Save New Place</a>
            `
        }
    }

})


module.exports = placesFormManager




