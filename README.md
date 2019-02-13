# liriBot

LiriBot is a command line node app that takes in one of four search parameters and gives you back the relative data. 

### Technologies Used: 
* NodeJS
* JavaScript
* OMDB API
* BandsInTown API
* Spotify API
* NPM Packages: dotenv, require, axios, spotify, fs, moment

### Getting Started
1. Clone repo
`https://github.com/Emilykradke/liri-node-app.git`
2. Run `npm install`

### How to use LiriBot
Liri uses the following commands: 
1. `concert-this`
concert-this takes in an artist or band and returns event information about upcoming concerts (venue, location, and date of event)
![userEx](images/concert.PNG?raw=true "Example User Input")

![userEx](images/concertResults.PNG?raw=true "Example results")

2. `spotify-this-song`
spotify-this-song takes in a song title and returns information about that song and artist (the artist, song name, preview link of the song, and album)
![userEx](images/spotify.PNG?raw=true "Example user Input")

![userEx](images/spotifyResults.PNG?raw=true "Example user Input")

3. `movie-this`
movie-this takes in a movie title and returns information about that movie (movie title, year, IMDB rating, Rotten Tomatoes rating, country, language, plot, and actors)
![userEx](images/movie.PNG?raw=true "Example user input")

![userEx](images/movieResults.PNG?raw=true "Example user input")

* `do-what-it-says`
do-what-it-says takes in information from the random.txt file and returns spotify information about that text
![userEx](images/doIt.PNG?raw=true "Example user input")

![userEx](images/doItResults.PNG?raw=true "Example user input")

### Author
* Emily Radke 