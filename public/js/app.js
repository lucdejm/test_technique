

/* ===============================
            FETCH
=============================== */
const ul = document.getElementById("movielist");
const url = "http://localhost:3000/randommovies";

/* fetch functions */
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let movies = data;
        return movies.map(function(movie) { 
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


/* helper functions */
function createNode(element) {
        return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}