// include dotenv NPM package
require("dotenv").config();

// import keys.js file and store it in a variable
var keys = require("./keys.js");

// include fs NPM package
var fs = require("fs")

// include spotify NPM package
var Spotify = require("node-spotify-api")

var spotify = new Spotify(keys.spotify);

// include axios NPM package
var axios = require("axios");

// include moment NPM package
var moment = require("moment")

// create variables
var songTitle = process.argv.slice(3).join(" ");
var movieTitle = process.argv.slice(3).join(" ");
var artistName = process.argv.slice(3).join(" ");
var command = process.argv[2];

function spotifyIt() {
    spotify.search({ type: 'track', query: songTitle, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        } 
    
        console.log(data.tracks.items[0].artists[0].name)
        console.log(data.tracks.items[0].name)
        console.log(data.tracks.items[0].preview_url)
        console.log(data.tracks.items[0].album.name)
    });
}

function omdbIt() {
    // use axios to search omdb api
    axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log(`Title: ${response.data.Title}`);
        console.log(`Year: ${response.data.Year}`);
        console.log(`IMDB Rating: ${response.data.imdbRating}`);
        console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
        console.log(`Country: ${response.data.Country}`);
        console.log(`Language: ${response.data.Language}`);
        console.log(`Plot: ${response.data.Plot}`);
        console.log(`Actors: ${response.data.Actors}`);
    }
);
}

function eventIt() {
    // use axios to search bandsintown api
    axios.get("https://rest.bandsintown.com/artists/"+ artistName + "/events?app_id=codingbootcamp").then(
    function(response) { 
        console.log(response.data[0].venue.name);
        console.log(`${response.data[0].venue.city}, ${response.data[0].venue.region}`)
        console.log(response.data[0].datetime)
    }
);
}


// switch case to take in a command
switch (command) {
    case "concert-this":
        eventIt();
        break;
    case "spotify-this-song":
        spotifyIt();
        break;
    case "movie-this":
        omdbIt();
        break;
    case "do-what-it-says":
        break;
}