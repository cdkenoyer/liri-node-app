require("dotenv").config();

var request = require("request");

var Spotify = require("node-spotify-api");

var Twitter = require("twitter");

var keys = require("./keys.js");

// put in omdb

// Grab the movieName which will always be the third node argument.
var movieName = "";

for(var i = 2; i < process.argv.length; i++){
    movieName = movieName + process.argv[i] + " ";
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    var bodyParsed = JSON.parse(body);
    console.log(bodyParsed.Year);
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});