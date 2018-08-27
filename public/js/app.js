
/* ---- fetch list ---- */

const urlData = "http://localhost:3000/movies";


function fetchList (type) {
    return fetch(urlData)
        .then(function(response) { return response.json(); })
        .then(function(data) {
            let list = [];
            //console.log("data = ", data);
            //console.log("type de data: ", typeof data);
            for(i=0; i < data.length; i++) {
                list.push(data[i][type]);
            }; 
            //console.log("la liste de directeur = ", list);
            return list;
        })
        .catch(error => console.log("There is an error", error))
};

fetchList("movie_title").then(function(list) {console.log("liste de réalisateurs :", list)});



/* ---- searchahead (twitter plugin) ---- */


var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};



//const moviesTitleList = ["love", "shape"];
function moviesTitleList () {  
  fetchList("movie_title")
    .then(function(list) { 
      $('#the-basics .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'moviesTitleList',
        source: substringMatcher(list)
      });
    })
}

moviesTitleList();

/*
var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // url points to a json file that contains an array of country names, see
  // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
  prefetch: '../data/countries.json'
});

// passing in `null` for the `options` arguments will result in the default
// options being used
$('#prefetch .typeahead').typeahead(null, {
  name: 'countries',
  source: countries
});
*/