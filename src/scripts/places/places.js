const createPlace = (title, content, id) => {
    return `
    <div class="container">
        <article class="notification">
            <div class="column is-half is-gapless is-0" class="media-content">
                <div class="column is-half">
                    <p>
                        <h1 class="title is-2">${title}</h1>
                        <br>
                        <p class="subtitle is-5">${content}</p
                    </p>
                </div>
            </div>
            <a class="button is-dark is-normal" class="delete" id=${id}>Delete Place</a>
        </article>
    </div>
    `
}


module.exports = createPlace



