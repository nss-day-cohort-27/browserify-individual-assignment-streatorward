const createPlace = (title, content, id) => {
    return `
    <div class="box is-fluid">
        <article class="media">
            <div class="media-content">
                <div class="content">
                    <p>
                        <h1 class="title is-2">${title}</h1>
                        <br>
                        <p class="subtitle is-4">${content}</p
                    </p>
                </div>
            </div>
            <a class="button is-dark is-normal" class="delete" id=${id}>Delete Place</a>
        </article>
    </div>
    `
}


module.exports = createPlace







// <div class="box">
//     <article class="media">
//         <div class="media-content">
//             <div class="content">
//                 <p>
//                     <h1 class="title is-2">${title}</h1>
//                     <br>
//                         ${content}
//                 </p>
//             </div>
//         </div>
//         <a class="button is-dark is-normal" class="delete" id=${id}>Delete Place</a>
//     </article>
// </div>





// <div class="container">
//         <div class="notification">
//             <article class="placesEntry">
//                 <h1>
//                     <h1 class="title is-2">${title}</h1>
//                 </h1>
//                 <h5>
//                     ${content}
//                 </h5>
//                 <a class="button is-dark is-normal" class="delete" id=${id}>Delete Place</a>
//             </article>
//         </div>
//     </div>