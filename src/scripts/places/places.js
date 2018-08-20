const createPlace = (title, content, id) => {
    return `
    <article class="placesEntry">
        <h2>
            <h2>${title}</h2>
        </h2>
        <h5>
            ${content}
        </h5>
        <button class="delete" id=${id}>Delete Place</span></button>
    </article>
    `
}


module.exports = createPlace
