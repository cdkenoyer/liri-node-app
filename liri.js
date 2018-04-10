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
    // figuring out how to get multiple select listings without writing a console log for each inline
    var bodyParsed = JSON.parse(body);
    console.log("Title: " + bodyParsed.Title);
    console.log("Released: " + bodyParsed.Year);
    //adding console.logs just to get movie values we want
    console.log("IMDB Rating: " + bodyParsed.imdbRating);
    console.log("Rotten Tomatoes Rating: " + bodyParsed.source);//need to scope correctly
    console.log("Country: " + bodyParsed.Country);
    console.log("Language: " + bodyParsed.Language);
    console.log("Plot: " + bodyParsed.Plot);
    console.log("Actors: " + bodyParsed.Actors);

    
    //space between \n and label indents on output as usual in a string but can use a single "console.log"
    console.log("\n Title: " + bodyParsed.Title + "\nreleased " + bodyParsed.Year);

    //this is kinda of my proof - to work against something I know works
    console.log("\nRelease Year: " + JSON.parse(body).Year);
  }
});


// left to do: next to make liri.js take in the "movie-this" command. thinking of using comparison of "if" and equals "==="

// then will use request success as model for next apis

// var spotify = new Spotify(keys.spotify);

// var client = new Twitter(keys.twitter);

// need to take in multiple commands for node - was thinking the to try the "switch/case" 

// probably wrong but think the log.txt should be relatively simple using appendFile
