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
var command = process.argv[2];

spotify.search({ type: 'track', query: songTitle, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } 

  console.log(data.tracks.items[0].artists[0].name)
  console.log(data.tracks.items[0].name)
  console.log(data.tracks.items[0].preview_url)
  console.log(data.tracks.items[0].album.name)
  });

// use axios to search omdb api
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log(response.data.Ratings[1].Value)
    console.log("The movie's rating is: " + response.data.Ratings[0]);
  }
);

// use axios to search bandsintown api
axios.get("https://rest.bandsintown.com/artists/cardi%20b/events?app_id=codingbootcamp").then(
  function(response) { 
    console.log(response.data[0].datetime)
  }
);

// switch case to take in a command
switch (command) {
    case "concert-this":
        break;
    case "spotify-this-song":
        break;
    case "movie-this":
        break;
    case "do-what-it-says":
        break;
}