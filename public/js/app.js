

/* ===============================
            FETCH
=============================== */

const randomMovie = document.querySelector(".randommovie");


function fetchData(url){
    return fetch(url)
        .then(checkStatus)
        .then(respond => respond.json())
        .catch(error => console.log("There is an error", error))
}

/* fetch functions */

fetchData("routerandom")
    .then(data => generateMovieCard(data.message))

/* helper functions */
function checkStatus (response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function generateMovieCard(data){
    const html = "
        <img src="'${dir}'"> </img>
    ";
    randomMovie.innerhtml = html;
}