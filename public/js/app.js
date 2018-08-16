

/* ===============================
            FETCH
=============================== */
const ul = document.getElementById("movielist");
const url = "http://localhost:3000/randommovies";
const numberOfMovie = 8;

/* fetch functions */


fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let movieCard = data;
        return movieCard.map(function(movie) {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        img.src = movie.movie_cover; 
        span.innerHTML = `De ${movie.director}`;
        append(li, img);
        append(li, span);
        append(ul, li);
        })
    })
    .catch(error => console.log("There is an error", error))


/*
for(i=0; i<numberOfMovie; i++) {
    let id = randomId(200); // la variable doit correspondre au max id en base
    let url = "http://localhost:3000/randommovies"+"/"+id;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let movieCard = data;
            console.log(data);
            return movieCard.map(function(movie) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = movie.movie_cover; 
            span.innerHTML = `De ${movie.director}`;
            append(li, img);
            append(li, span);
            append(ul, li);
            })
        })
        .catch(error => console.log("There is an error", error))
}
*/

/* helper functions */
function createNode(element) {
        return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function randomId(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

