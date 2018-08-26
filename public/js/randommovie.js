const ul = document.getElementById("movielist");
const url = "http://localhost:3000/movies";
const movieCards = 8;

/* fetch functions */

/*
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
*/

for(i=0; i<movieCards; i++) {
    let id = randomId(200); // la variable doit correspondre au max id en base
    console.log(id);
    let urlMovie = "http://localhost:3000/movies/"+id;
    fetch(urlMovie)
        .then(function(response) { return response.json(); })
        .then(function(data) {
        let movieCard = data;
        console.log("type de donné de movieCard : ", typeof movieCard);
        let li = createNode("li"),
            figure = createNode("figure"),
            img = createNode("img"),
            figcaption = createNode("figcaption")
        img.src = movieCard.movie_cover;
        console.log("source img: ", img.src);
        figcaption.innerHTML = "De " + movieCard.director;
        append(li, figure);
        append(figure, img);
        append(figure, figcaption);
        append(ul, li);           
        })
        .catch(error => console.log("There is an error", error))
}


/* helper functions */
function createNode(element) {
        return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function randomId(numberOfMovies) {
    return Math.floor(Math.random() * numberOfMovies);
}





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