require("dotenv").config();

var request = require("request");

var Spotify = require("node-spotify-api");

var Twitter = require("twitter");

var keys = require("./keys.js");

// started with omdb as there are examples from class

// Got movieName - third node argument and used michael's solution for movie titles with spaces
var movieName = "";

for(var i = 2; i < process.argv.length; i++){
    movieName = movieName + process.argv[i] + " ";
}

// runs request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover json info
    // figuring out how to get multiple select listings without writing a console log for each
    var bodyParsed = JSON.parse(body);
    console.log("Released: " + bodyParsed.Year);
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});


// left to do: next to make liri.js take in the "movie-this" command. thinking of using comparison of "if" and equals "==="

// hope to use request success as model for next apis

// var spotify = new Spotify(keys.spotify);

// var client = new Twitter(keys.twitter);

// need to take in multiple commands for node - was thinking the to try the "switch/case" 

// probably wrong but think the log.txt should be relatively simple using appendFile
