const ul = document.getElementById("movielist");
const url = "http://localhost:3000/movies";
const movieCards = 10;

/* fetch functions */

for(i=0; i< movieCards; i++) {
    let id = randomId(40); // la variable doit correspondre au max id en base
    console.log("l'array dans id : ", id);
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
function randomIdArray() {  
  fetchList("movie_title")
    .then(function(list) {
        let idArray = [];
        while(idArray.length < movieCards){
            let randomnumber = Math.floor(Math.random()*list.length) + 1;
            if(idArray.indexOf(randomnumber) > -1) continue;
            idArray[idArray.length] = randomnumber;
        }
        console.log("random id Array :", idArray);
        return idArray;
    })
};

randomIdArray().then(function(idArray) {console.log("random id Array :", idArray)});
*/