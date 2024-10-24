//an array of movies not watched yet
let watchlist = ["The Good Place: The Movie", "Captain America", "Kingdom of the Planet of the Apes", "The Silicon Valley"]

//a second arrays of movies already watched
let watchedMovies = ["Matrix", "Speed", "John Wick", "Band of Brothers"]

//a function to add movies to the watchlist
function addMovie() {
    let newMovie = prompt("What movie do you want to watch?")
    console.log(newMovie)
    watchlist.push(newMovie)
    console.log(watchlist)
}

//a function to mark a movie as watched
function markWatched() {
    let movie = prompt("What movie did you watch?");

    let index = watchlist.indexOf(movie);

    if (index !== -1) {
        let watchedMovie = watchlist.splice(index, 1)[0];
        console.log(typeof watchedMovie)
        watchedMovies.push(watchedMovie);
        console.log(`${movie} has been added to your watched movies list`);
    } else {
        console.log(`${movie} is not in your watchlist`);
    }
}

// function to view movies on watchlist
function viewWatchList() {
    if (watchlist.length === 0) {
        console.log("your watch list is empty")
    } else {
        console.log("Your watch list;")
        for (let i = 0; i < watchlist.length; i++) {
            console.log(`${i + 1}. ${watchlist[i]} is in your watchlist.`)
        }
    }
}

// a function to view movies on watched list
function viewWatchedMovies() {
    if (watchedMovies.length === 0) {
        console.log("Your watched list is empty.")
    } else {
        console.log("Movies you have watched: ");
        watchedMovies.forEach((movie, i) => {
            console.log(`${i + 1}. ${movie} is in your watchlist.`);
        })
    }
}

//main menu function =)